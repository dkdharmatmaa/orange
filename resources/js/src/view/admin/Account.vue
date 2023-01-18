<template>
  <div class="mt-10 p-5 d-flex" style="justify-content: space-between;">
    <div class="w-md-50">
      <b-form @submit="onSubmit" class="fw-700">
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
        <b-form-group>
          <b-form-input
            id="input-3"
            type="text"
            v-model="user_form.number"
            required
            placeholder="Number"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-3"
            v-model="user_form.address1"
            type="email"
            required
            placeholder="Address 1"
            class="ml-1 input-box"
            readonly
          ></b-form-input>
          <!-- <has-error :form="form" field="email"></has-error> -->
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-3"
            v-model="user_form.address2"
            type="email"
            required
            placeholder="Address 2"
            class="ml-1 input-box"
            readonly
          ></b-form-input>
          <!-- <has-error :form="form" field="email"></has-error> -->
        </b-form-group>
        <div class="d-flex mb-5">
          <b-form-input
            id="input-6"
            v-model="user_form.city"
            type="text"
            required
            placeholder="City"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="city"></has-error> -->
          <b-form-input
            id="input-7"
            v-model="user_form.state"
            type="text"
            required
            placeholder="State"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="state"></has-error> -->
          <b-form-input
            id="input-8"
            v-model="user_form.zip_code"
            type="number"
            required
            placeholder="Zip code"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="zip_code"></has-error> -->
        </div>
        <div class="alert alert-success" role="alert" id="fade1">
          <span class="font-weight-bolder font-size-h6">Submit successfull...</span>
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
          <span class="font-weight-bolder font-size-h6">Submit successfull...</span>
        </div>
         <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white">Save password</button>
      </div>
    </b-form>
    </div>
    <div class="mt-5" style="width:30%">
       <div class="bg-white p-3 rounded">
         <img src="/media/custome/office.svg" alt="office" width="50" height="50">&nbsp;&nbsp;
           <span class="h2">{{branch_count}}</span>&nbsp;
           <span class="h4">Branches</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <span><router-link to="/admin/all-branches"><img src="/media/custome/resize.svg" alt="resize" width="20" height="20"></router-link></span>
       </div>
       <div class="bg-white p-3 rounded mt-5">
         <img src="/media/custome/businessman.svg" alt="office" width="50" height="50">&nbsp;&nbsp;
           <span class="h2">{{user_count}}</span>&nbsp;
           <span class="h4">Branch User</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <span><router-link to="/admin/all-user"><img src="/media/custome/resize.svg" alt="resize" width="20" height="20"></router-link></span>
       </div>
    </div>
  </div>
</template>
<script>
import Form from 'vform';
import ApiService from "@/core/services/api.service";
import { mapGetters } from "vuex";
import { LOGOUT} from "@/core/services/store/auth.module";
export default {
  data() {        
    return {
      user_form:new Form({  
        name:"",
        email:"",
        number:"",
        address1:"",
        address2:"",
        city:"",
        state:"",
        zip_code:"",
      }),
      id:"",
      password_form:new Form({  
        password: "",
        password_confirmation: "",
      }),
      user_count:'',
      branch_count:'',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      ApiService.put(`/admin/upadte-detail/${this.id}`, this.user_form)
        .then(({ data }) => {
           $('#fade1').fadeToggle(1000);
           $('#fade1').fadeToggle(1000);
        })
    },
    submitPassword(evt){
        evt.preventDefault();
        ApiService.put(`/admin/update-password`, this.password_form)
            .then(({ data }) => {
                this.$store.dispatch(LOGOUT)
                .then(() => this.$router.push('/admin/login'));
            })
    },
     get_report(){
        ApiService.get(`/admin/admin-report`)
          .then(({ data }) => {
            this.user_count=data.user_count;
            this.branch_count=data.branch_count;
          })
    },
  },
  mounted(){
      this.id=this.current_user.id;
      this.user_form.name=this.current_user.name;
      this.user_form.email=this.current_user.email;
      this.user_form.number=this.current_user.number;
      this.user_form.address1=this.current_user.address1;
      this.user_form.address2=this.current_user.address2;
      this.user_form.city=this.current_user.city;
      this.user_form.state=this.current_user.state;
      this.user_form.zip_code=this.current_user.zip_code;
      this.get_report();
  },
computed: {
    ...mapGetters({ current_user: 'currentUser' })
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
