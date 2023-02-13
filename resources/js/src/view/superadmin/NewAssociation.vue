<template>
  <div class="mt-10 p-5">
    <b-form
      @submit="onSubmit"
      class="w-md-50 fw-700"
    >
      <h3 class="fw-700">Add association</h3>
      <div class="bg-white p-10 rounded">
        <div class="d-flex mb-7">
          <b-form-input
            id="input-1"
            v-model="association_form.name"
            type="text"
            required
            placeholder="Association name*"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="name"></has-error> -->
          <b-form-input
            id="input-2"
            type="text"
            v-model="association_form.number"
            required
            placeholder="Association number*"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="number"></has-error> -->
        </div>
        <b-form-group>
          <b-form-input
            id="input-3"
            type="text"
            v-model="association_form.address1"
            required
            placeholder="Address 1*"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-4"
            v-model="association_form.address2"
            type="text"
            placeholder="Address 2"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <div class="d-flex">
          <b-form-input
            id="input-5"
            v-model="association_form.city"
            type="text"
            required
            placeholder="City*"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="city"></has-error> -->
          <b-form-input
            id="input-6"
            v-model="association_form.state"
            type="text"
            required
            placeholder="State*"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="state"></has-error> -->
          <b-form-input
            id="input-7"
            v-model="association_form.zip_code"
            type="number"
            required
            placeholder="Zip code*"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="zip_code"></has-error> -->
        </div>
      </div>

      <h3 class="font-weight-bolder mt-10">Assign admin</h3>
      <div class="bg-white p-10 rounded">
      <b-form-group >
        <b-form-input
          id="input-4"
          v-model="association_form.admin_name"
          type="text"
          required
          placeholder="Name*"
          class="ml-1 input-box"
        ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-3"
            v-model="association_form.email"
            type="email"
            required
            placeholder="Email address*"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <b-form-group >
          <b-form-input
            id="input-4"
            v-model="association_form.password"
            type="password"
            required
            placeholder="Password*"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <div class="alert alert-success" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
         <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white">Add association</button>
      </div>
    </b-form>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
      association_form:new Form({  
        id:"",
        name: "",
        number: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip_code: "",
        admin_name:'',
        email:'',
        password:''
      }),
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
        ApiService.post("/superadmin/create-admin", this.association_form)
        .then(({ data }) => {
          this.$router.push('/superadmin/allassociation');
        })
        .catch(err => {
          
        });
    },
  },
  mounted(){
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
</style>
