<template>
  <div class="mt-10 p-5">
    <b-form
      @submit="onSubmit"
      class="w-md-50 fw-700"
    >
      <h3 class="fw-700">{{action}} users</h3>
      <div class="bg-white p-10 rounded">
        <div class="d-flex mb-7">
          <b-form-input
            id="input-1"
            v-model="user_form.name"
            type="text"
            required
            placeholder="Name"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="name"></has-error> -->
          <b-form-input
            id="input-2"
            v-model="user_form.email"
            type="email"
            required
            placeholder="Email address"
            class="mx-1 input-box"
            :readonly="action=='Edit'"
          ></b-form-input>
          <!-- <has-error :form="form" field="name"></has-error> -->
        </div>
        <b-form-group>
          <b-form-select id="input-4" v-model="user_form.branch_id" :options="options_branch" class="ml-1 input-box text-seconday" required></b-form-select>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <b-form-group v-if="action=='Add'">
          <b-form-input
            id="input-5"
            v-model="user_form.password"
            type="password"
            required
            placeholder="Password"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <div>
          <div class="d-flex">
                <div class="flex-fill border-top border-2 border-secondary h1"></div>
                <div class="h6 text-center font-weight-bolder">Permission</div>
                <div class="flex-fill border-bottom border-2 border-secondary h1"></div>
          </div>
          <p class="h6">Branch admin</p>
          <input type="checkbox" value="true" v-model="user_form.is_admin"> <span class="text-muted">Can create / edit more branch users</span>
        </div>
        <!-- <has-error :form="form" field="password"></has-error> -->
        <div class="alert alert-success mt-3" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
         <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white mt-3">{{action}} user</button>
      </div>
    </b-form>
  </div>
</template>
<script>
import Form from 'vform';
import ApiService from "@/core/services/api.service";
import { mapGetters } from 'vuex';
import { LOGOUT} from "@/core/services/store/auth.module";
export default {
  data() {
    return {
      user_form:new Form({  
        id:"",
        name: "",
        email: "",
        password: "",
        branch_id: "",
        association_id: "",
        is_admin: false,
      }),
      options_branch:null,
      action: 'Add',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(this.action=='Add'){
        ApiService.post("/user/create-user", this.user_form)
        .then(({ data }) => {
          this.$router.push('/all-users');
        })
        .catch(err => {
          //   this.openNotification(err);
        });
      }
      else{
        ApiService.put(`/user/edit-user/${this.user_form.id}`, this.user_form)
        .then(({ data }) => {
           $('#fade').fadeToggle(1000);
           $('#fade').fadeToggle(1000);
        })
      }
    },
    getData(id){
      ApiService.get(`/user/all-user/${id}`)
        .then(({ data }) => {
          this.user_form.fill(data[0])
          this.getBranches();
          this.user_form.branch_id=data[0]['branch_id']+"/////"+data[0]['branch_name'];
        })
    },
    getBranches(){
            ApiService.get(`/user/all-branch`)
            .then(({ data }) => {
                let branch_option=[];
                branch_option.push({value:"",text:"Assign branch"})
                for(let i=0;i<data.length;i++){
                    branch_option.push({value:data[i]['id']+"/////"+data[i]['name'],text:data[i]['name']});  
                }
                this.options_branch=branch_option;
            })
    }
  },
  mounted(){
     if(!this.currentUser.is_admin){
       this.$store.dispatch(LOGOUT);
       this.$router.push('/')
     }

   this.user_form.association_id=this.currentUser.association_id;
   if(this.get_item){
      this.getData(this.get_item);
      this.action='Edit';
   }
   this.getBranches();

  },
  computed: {
    get_item: function(){
      if(this.$route.params.id)
      return this.$route.params.id;
      else
      return 0;
    },
    ...mapGetters({currentUser:'currentUser'}),
  },
};
</script>
<style scoped>
.fw-700{
    font-weight: 700;
}
.input-box{
    border: 1px silver solid;
}
.create_btn{
    background: #00A1E4;
}
#fade{
  display: none;
}
</style>
