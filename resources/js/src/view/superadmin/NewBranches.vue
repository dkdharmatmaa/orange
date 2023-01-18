<template>
  <div class="mt-10 p-5">
    <b-form
      @submit="onSubmit"
      class="w-md-50 fw-700"
    >
      <h3 class="fw-700">{{action}} branch</h3>
      <div class="bg-white p-10 rounded">
        <div class="d-flex mb-7">
          <b-form-input
            id="input-1"
            v-model="branch_form.name"
            type="text"
            required
            placeholder="Enter branch name"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="name"></has-error> -->
          <b-form-input
            id="input-2"
            type="text"
            v-model="branch_form.branch_id"
            required
            placeholder="Enter branch id"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="number"></has-error> -->
        </div>
        <b-form-group>
          <b-form-select id="input-3" v-model="branch_form.association_id" :options="options" class="ml-1 input-box text-seconday" required></b-form-select>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-4"
            v-model="branch_form.address1"
            type="text"
            required
            placeholder="Address 1"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-5"
            v-model="branch_form.address2"
            type="text"
            required
            placeholder="Address 2"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <div class="d-flex">
          <b-form-input
            id="input-6"
            v-model="branch_form.city"
            type="text"
            required
            placeholder="City"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="city"></has-error> -->
          <b-form-input
            id="input-7"
            v-model="branch_form.state"
            type="text"
            required
            placeholder="State"
            class="mx-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="state"></has-error> -->
          <b-form-input
            id="input-8"
            v-model="branch_form.zip_code"
            type="number"
            required
            placeholder="Zip code"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="zip_code"></has-error> -->
        </div>
        <div class="alert alert-success my-3" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Submit successfull...</span>
        </div>
        <button  class="btn font-weight-bolder font-size-h6 py-3 mt-5 w-100 create_btn text-white">{{action}} branch</button>
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
      branch_form:new Form({  
        id:"",
        name: "",
        branch_id: "",
        association_id: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip_code: "",
      }),
      options: null,
      action: 'Add',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(this.action=='Add'){
        ApiService.post("/superadmin/create-branch", this.branch_form)
        .then(({ data }) => {
          this.$router.push('/superadmin/all-branches');
        })
        .catch(err => {
          //   this.openNotification(err);
        });
      }
      else{
        ApiService.put(`/superadmin/edit-branch/${this.branch_form.id}`, this.branch_form)
        .then(({ data }) => {
           $('#fade').fadeToggle(1000);
           $('#fade').fadeToggle(1000);
        })
      }
    },
    getData(id){
      ApiService.get(`/superadmin/all-branch/${id}`)
        .then(({ data }) => {
          this.branch_form.fill(data[0])
          this.branch_form.association_id=data[0]['association_id']+"/////"+data[0]['association_name'];
        })
    },
    getAssociation(){
        ApiService.get(`/superadmin/all-admin`)
        .then(({ data }) => {
            let association_option=[];
            association_option.push({value:"",text:"Assign association"})
            for(let i=0;i<data.length;i++){
                association_option.push({value:data[i]['id']+"/////"+data[i]['name'],text:data[i]['name']});  
            }
            this.options=association_option;
        })
    },
  },
  mounted(){
   if(this.get_item){
      this.getData(this.get_item);
      this.action='Edit';
   }
   this.getAssociation();
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
    border: 1px silver solid;
}
.create_btn{
    background: #00A1E4;
}
#fade{
  display: none;
}
</style>
