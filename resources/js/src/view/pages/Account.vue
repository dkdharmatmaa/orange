<template>
  <div class="mt-10 p-5 d-flex" style="justify-content: space-between;">
    <div class="w-md-50">
    <div>
      <h3 class="fw-700">Branch details</h3>
      <div class="bg-white p-10 rounded">
        <div class="d-flex justify-content-between">
            <div class="ml-1">
          <span>Association name</span>
          <h5>{{branch_detail.association_name}}</h5>
          </div>
          <div class="ml-1">
          <span>Branch name</span>
          <h5>{{branch_detail.name}}</h5>
          </div>
          <div class="ml-1">
          <span>Branch id</span>
          <h5>{{branch_detail.branch_id}}</h5>
          </div>
        </div>
         <div class="ml-1 mt-5">
          <span>Address 1</span>
          <h5>{{branch_detail.address1}}</h5>
          </div>
           <div class="ml-1 mt-5">
          <span>Address 2</span>
          <h5>{{branch_detail.address2}}</h5>
          </div>
          <div class="d-flex justify-content-between mt-5">
            <div class="ml-1">
          <span>City</span>
          <h5>{{branch_detail.city}}</h5>
          </div>
          <div class="ml-1">
          <span>State</span>
          <h5>{{branch_detail.state}}</h5>
          </div>
          <div class="ml-1">
          <span>Zip</span>
          <h5>{{branch_detail.zip_code}}</h5>
          </div>
        </div>
      </div>
      </div>

      <b-form @submit="onSubmit" class="fw-700 mt-5">
      <h3 class="fw-700">Personal details</h3>
      <div class="bg-white p-10 rounded">
        <b-form-group>
          <b-form-input
            id="input-3"
            type="text"
            v-model="user_form.name"
            required
            placeholder="Name"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-3"
            v-model="user_form.email"
            type="email"
            required
            placeholder="Email"
            class="ml-1 input-box"
            readonly
          ></b-form-input>
          <!-- <has-error :form="form" field="email"></has-error> -->
        </b-form-group>
        <div class="alert alert-success" role="alert" id="fade1">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
         <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white">Save details</button>
      </div>
      </b-form>
      <b-form
      @submit="submitPassword"
      class="fw-700"
    >
      <h3 class="font-weight-bolder mt-10">Reset password</h3>
      <div class="bg-white p-10 rounded">
        <b-form-group>
          <b-form-input
            id="input-4"
            v-model="password_form.password"
            type="password"
            required
            placeholder="Password"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-4"
            v-model="password_form.password_confirmation"
            type="password"
            required
            placeholder="Confirm password"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <!-- <has-error :form="form" field="password"></has-error> -->
        <div class="alert alert-success" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
         <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white">Save password</button>
      </div>
    </b-form>
    </div>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
import { mapGetters } from "vuex";
import { LOGOUT} from "@/core/services/store/auth.module";
export default {
  data() {        
    return {
      user_form:new Form({  
        name:"",
        email:"",
      }),
      password_form:new Form({  
        password: "",
        password_confirmation: "",
      }),
      branch_detail:[],
      branch_id:'',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      ApiService.put(`/user/upadte-detail`, this.user_form)
        .then(({ data }) => {
           $('#fade1').fadeToggle(1000);
           $('#fade1').fadeToggle(1000);
        })
    },
    submitPassword(evt){
        evt.preventDefault();
        ApiService.put(`/user/update-password`, this.password_form)
            .then(({ data }) => {
                this.$store.dispatch(LOGOUT)
                .then(() => this.$router.push('/login'));
            })
    },
    getBranch(){
        ApiService.get(`/user/all-branch/${this.branch_id}`)
          .then(({ data }) => {
              this.branch_detail=data[0];
          })
    },
  },
  mounted(){
      this.user_form.name=this.current_user.name;
      this.user_form.email=this.current_user.email;
      this.branch_id=this.selected_branch_id;
      this.getBranch();
  },
computed: {
    ...mapGetters({ current_user: 'currentUser' }),
    ...mapGetters({ selected_branch_id: 'SelectedBranch' })
},
};
</script>
<style scoped>
.fw-700{
    font-weight: 700;
}
.input-box{
    padding: 4%;
    border: 1px silver solid;
}
.create_btn{
    background: #00A1E4;
}
#fade{
  display: none;
}
#fade1{
  display: none;
}
</style>
