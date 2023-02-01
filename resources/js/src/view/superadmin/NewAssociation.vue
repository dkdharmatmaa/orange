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
            v-model="form.name"
            type="text"
            required
            placeholder="Association name*"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="name"></has-error> -->
          <b-form-input
            id="input-2"
            type="text"
            v-model="form.number"
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
            v-model="form.address1"
            required
            placeholder="Address 1*"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-4"
            v-model="form.address2"
            type="text"
            required
            placeholder="Address 2"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <div class="d-flex">
          <b-form-input
            id="input-5"
            v-model="form.city"
            type="text"
            required
            placeholder="City*"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="city"></has-error> -->
          <b-form-input
            id="input-6"
            v-model="form.state"
            type="text"
            required
            placeholder="State*"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="state"></has-error> -->
          <b-form-input
            id="input-7"
            v-model="form.zip_code"
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
        <b-form-group>
          <b-form-input
            id="input-3"
            v-model="form.email"
            type="email"
            required
            placeholder="Email*"
            class="ml-1 input-box"
            :readonly="action=='Edit'"
          ></b-form-input>
          <!-- <has-error :form="form" field="email"></has-error> -->
        </b-form-group>
        <b-form-group v-if="action=='Add'">
          <b-form-input
            id="input-4"
            v-model="form.password"
            type="password"
            required
            placeholder="Password*"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <!-- <has-error :form="form" field="password"></has-error> -->
        <div class="alert alert-success" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Submit successfull...</span>
        </div>
         <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white" v-if="action=='Add'">{{action}} admin</button>
      </div>
    </b-form>
  </div>
</template>
<script>
import Form from 'vform';
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
      form:new Form({  
        id:"",
        name: "",
        number: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip_code: "",
        email: "",
        password: "",
      }),
      action: 'Add',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(this.action=='Add'){
        ApiService.post("/superadmin/create-admin", this.form)
        .then(({ data }) => {
          this.$router.push('/superadmin/allassociation');
        })
        .catch(err => {
          //   this.openNotification(err);
        });
      }
      else{
        ApiService.put(`/superadmin/edit-admin/${this.form.id}`, this.form)
        .then(({ data }) => {
           $('#fade').fadeToggle(1000);
           $('#fade').fadeToggle(1000);
        })
      }
    },
    getData(id){
      ApiService.get(`/superadmin/all-admin/${id}`)
        .then(({ data }) => {
          this.form.fill(data[0])
        })
    },
    onReset(evt) {
      // alert("hello here");
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.number = "";
      this.form.address1 = "";
      this.form.address2 = "";
      this.form.city = "";
      this.form.state = "";
      this.form.zip_code = "";
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted(){
   if(this.get_item){
      this.getData(this.get_item);
      this.action='Edit';
   }
  },
  computed: {
    get_item: function(){
      if(this.$route.params.id)
      return this.$route.params.id;
      else
      return 0;
    }
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
