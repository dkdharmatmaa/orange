<template>
  <div class="mt-10 p-5">
    <b-form
      @submit="onSubmit"
      class="w-md-50 fw-700"
    >
      <h3 class="fw-700">{{action_name}} users</h3>
      <div class="bg-white p-10 mt-5 rounded">
      <b-form-group>
          <b-form-input
            id="input-1"
            v-model="user_form.name"
            type="text"
            required
            placeholder="Name"
            class="mx-1 input-box"
            :class="{ 'is-invalid': user_form.errors.has('name') }"
          ></b-form-input>
          <has-error :form="user_form" field="name"></has-error>
          </b-form-group>
          <b-form-group>
           <b-form-input
            id="input-1"
            v-model="user_form.phone"
            type="text"
            required
            placeholder="Phone Number"
            class="mx-1 input-box"
            :class="{ 'is-invalid': user_form.errors.has('phone') }"
          ></b-form-input>
          <has-error :form="user_form" field="phone"></has-error>
          </b-form-group>
          <b-form-group>
          <b-form-input
            id="input-2"
            v-model="user_form.email"
            type="email"
            required
            placeholder="Email address"
            class="mx-1 input-box"
            :readonly="action=='Edit'"
            :class="{ 'is-invalid': user_form.errors.has('email') }"
          ></b-form-input>
          <has-error :form="user_form" field="email"></has-error>
          </b-form-group>
          <b-form-group v-if="action=='Create'">
          <b-form-input
            id="input-5"
            v-model="user_form.password"
            type="password"
            required
            placeholder="Password"
            class="ml-1 input-box"
            :class="{ 'is-invalid': user_form.errors.has('password') }"
          ></b-form-input>
          <has-error :form="user_form" field="password"></has-error>
        </b-form-group>
        <b-form-group>
          <b-form-select id="input-4" v-model="user_form.branch_id" :options="options_branch" class="ml-1 input-box text-seconday" :class="{ 'is-invalid': user_form.errors.has('branch_id') }" required></b-form-select>
          <has-error :form="user_form" field="branch_id"></has-error>
        </b-form-group>
        <div class="alert alert-success mt-3" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
         <div class="w-25">
           <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 bg-primary-color text-white mt-3" style="border-radius: 20px;">{{action}} user</button>
         </div>
      </div>
    </b-form>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      user_form:new Form({  
        id:"",
        name: "",
        phone:"",
        email: "",
        password: "",
        branch_id: "",
      }),
      options_branch:null,
      action: 'Create',
      action_name: 'Create',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(this.action=='Create'){
        this.user_form.post("/admin/create-user")
        .then(({ data }) => {
          this.$router.push('/admin/all-users');
        })
        .catch(err => {
          //   this.openNotification(err);
        });
      }
      else{
        this.user_form.put(`/admin/edit-user/${this.user_form.id}`)
        .then(({ data }) => {
           $('#fade').fadeToggle(1000);
           $('#fade').fadeToggle(1000);
        })
      }
    },
    getData(id){
      ApiService.get(`/admin/all-user/${id}`)
        .then(({ data }) => {
          this.user_form.fill(data[0])
          this.getBranches();
        })
    },
    getBranches(){
            ApiService.get(`/admin/all-branch-option`)
            .then(({ data }) => {
                let branch_option=[];
                branch_option.push({value:"",text:"Assign branch"})
                for(let i=0;i<data.length;i++){
                    branch_option.push({value:data[i]['id'],text:data[i]['branch_name']});  
                }
                this.options_branch=branch_option;
            })
    }
  },
  mounted(){
   if(this.get_item){
      this.getData(this.get_item);
      this.action='Save';
      this.action_name='Edit'
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
#fade{
  display: none;
}
</style>
