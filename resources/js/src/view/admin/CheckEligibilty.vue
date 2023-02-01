<template>
  <div class="mt-10 p-5">
    <div class="w-md-50 fw-700">
      <h3 class="fw-700">Check eligibilty</h3>
      <div class="bg-white p-10 rounded">
        <b-form-group>
          <b-form-input
            id="input-1"
            type="text"
            v-model="eligiblity_form.first_name"
            required
            placeholder="First name"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('first_name') }"
          >
          <has-error :form="eligiblity_form" field="first_name"></has-error>
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-2"
            type="text"
            v-model="eligiblity_form.last_name"
            required
            placeholder="Last name"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('last_name') }"
          >
          <has-error :form="eligiblity_form" field="last_name"></has-error>
          </b-form-input>
        </b-form-group>
        <b-form-group>
           <b-form-select id="input-9" v-model="eligiblity_form.total_people" :options="options_people" class="ml-1 input-box text-seconday"
            required
            :class="{ 'is-invalid': eligiblity_form.errors.has('total_people') }"
          >
          <has-error :form="eligiblity_form" field="total_people"></has-error>
        </b-form-select>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-4"
            type="email"
            v-model="eligiblity_form.email"
            required
            placeholder="Email Id"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('email') }"
          >
          <has-error :form="eligiblity_form" field="email"></has-error>
          </b-form-input>
        </b-form-group>
        <div class="d-flex mb-7">
          <b-form-input
            id="input-5"
            v-model="eligiblity_form.phone"
            type="text"
            required
            placeholder="Phone"
            class="mx-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('phone') }"
          >
          <has-error :form="eligiblity_form" field="phone"></has-error>
          </b-form-input>
          <b-form-input
            id="input-6"
            type="text"
            v-model="eligiblity_form.birthday"
            required
            placeholder="Birthday - MM/DD/YYYY"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('birthday') }"
          >
          <has-error :form="eligiblity_form" field="birthday"></has-error>
          </b-form-input>
        </div>
        <b-form-group>
          <b-form-input
            id="input-7"
            type="text"
            v-model="eligiblity_form.street_address"
            required
            placeholder="Street address"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('street_address') }"
          >
          <has-error :form="eligiblity_form" field="street_address"></has-error>
          </b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-8"
            type="text"
            v-model="eligiblity_form.address"
            placeholder="Address (optional)"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('address') }"
          >
          <has-error :form="eligiblity_form" field="address"></has-error>
          </b-form-input>
        </b-form-group>
        <b-form-group class="mb-7">
          <b-form-select id="input-10" v-model="eligiblity_form.branch_id" :options="options_branch" class="ml-1 input-box text-seconday"
           required
           :class="{ 'is-invalid': eligiblity_form.errors.has('branch_id') }"
          >
          <has-error :form="eligiblity_form" field="branch_id"></has-error>
           </b-form-select>
        </b-form-group>
        <div class="d-flex mb-7">
          <b-form-input
            id="input-11"
            v-model="eligiblity_form.city"
            type="text"
            placeholder="City"
            class="mx-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('city') }"
          >
          <has-error :form="eligiblity_form" field="city"></has-error>
          </b-form-input>
          <b-form-input
            id="input-12"
            type="text"
            v-model="eligiblity_form.state"
            placeholder="State"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('state') }"
          >
          <has-error :form="eligiblity_form" field="state"></has-error>
          </b-form-input>
          <b-form-input
            id="input-13"
            type="number"
            v-model="eligiblity_form.zip_code"
            required
            placeholder="Zip"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('zip_code') }"
          >
          <has-error :form="eligiblity_form" field="zip_code"></has-error>
          </b-form-input>
        </div>
        <b-form-group>
          <b-form-input
            id="input-14"
            type="text"
            v-model="eligiblity_form.lead_id"
            required
            placeholder="Contact/Lead Id"
            class="ml-1 input-box"
            :class="{ 'is-invalid': eligiblity_form.errors.has('lead_id') }"
          >
          <has-error :form="eligiblity_form" field="lead_id"></has-error>
          </b-form-input>
        </b-form-group>
        <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white" v-on:click="onSubmit">Submit details</button>
      </div>
    </div>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
      eligiblity_form: new Form({
        id: "",
        first_name: "",
        last_name: "",
        total_people: "Number of people in household",
        email: "",
        phone: "",
        birthday: "",
        street_address: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        lead_id: "",
        branch_id:'',
      }),
     options_branch:[],
     options_people:["Number of people in household","1","2","3","4","5","6","7","8","9","10+"],
    };
  },
  methods: {
    onSubmit() {
      if(this.eligiblity_form.total_people=='Number of people in household'){
        alert("Select number of peoples in household ")
    }
    else{
      this.eligiblity_form.post("/admin/check-eligibilty")
              .then(({ data }) => {
                this.$router.push({ name: 'admin-eligibiltystatus', params: { main_data: data } })
              })
              .catch((err) => {
              });
    }
    },
    onReset(evt) {
      // alert("hello here");
      evt.preventDefault();
      // Reset our form values
      this.eligiblity_form.first_name = "";
      this.eligiblity_form.last_name = "";
      this.eligiblity_form.total_people = "";
      this.eligiblity_form.email = "";
      this.eligiblity_form.phone = "";
      this.eligiblity_form.birthday = "";
      this.eligiblity_form.address1 = "";
      this.eligiblity_form.address2 = "";
      this.eligiblity_form.association = "";
      this.eligiblity_form.branch = "";
      this.eligiblity_form.city = "";
      this.eligiblity_form.state = "";
      this.eligiblity_form.zip_code = "";
      this.eligiblity_form.lead_id = "";
    },
    getBranches(){
            ApiService.get(`/admin/all-branch/`)
            .then(({ data }) => {
                let branch_option=[];
                branch_option.push({value:'',text:"Assign branch"})
                for(let i=0;i<data.length;i++){
                    branch_option.push({value:data[i]['id']+"/////"+data[i]['name'],text:data[i]['name']});  
                }
                this.options_branch=branch_option;
            })
    }
  },
  mounted() {
    this.getBranches();
  },
};
</script>
<style scoped>
.fw-700 {
  font-weight: 700;
}
.input-box {
  border: 1px silver solid;
}
.create_btn {
  background: #00a1e4;
}
#fade {
  display: none;
}
</style>
