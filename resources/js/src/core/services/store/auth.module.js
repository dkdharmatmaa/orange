import router from "@/router";
import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const AdminLOGIN = "adminlogin";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("/login", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          JwtService.saveToken(data.token); 
          if(data.role=='user')
          router.push(`/check-eligibilty`);
          else if(data.role=='admin')
          router.push(`/admin/check-eligibilty`);
          resolve(data);
        })
        .catch(({ response }) => {
          console.log(response);
          context.commit(SET_ERROR, 'Unauthorized');
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [VERIFY_AUTH](context,userType) {
    let token=JwtService.getToken();
    if (token && token!='undefined') {
      ApiService.setHeader();
      ApiService.post(`/${userType.userType}/verify`)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch(({ response }) => {
          if (response.status == 401) {
              context.dispatch(LOGOUT)
                  .then(() => router.push({ name: `home` }));
          } else {
              context.commit(SET_ERROR, response.data.errors);
          }
      });
    } else {
      context.commit(PURGE_AUTH);
      router.push({ name: `home` });
    }
  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
