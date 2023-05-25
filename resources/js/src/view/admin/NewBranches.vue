<template>
  <div class="mt-10 p-5">
    <b-form
      @submit="onSubmit"
      class="w-md-50 fw-700"
    >
      <h3 class="fw-700">{{action_name}} branch</h3>
      <div class="bg-white p-10 mt-5 rounded">
      <b-form-group>
          <b-form-input
            id="input-1"
            v-model="branch_form.branch_name"
            type="text"
            required
            placeholder="Enter branch name"
            class="mx-1 input-box"
          ></b-form-input>
      </b-form-group>
          <!-- <has-error :form="form" field="name"></has-error> -->
          <b-form-group>
            <b-form-input
              id="input-2"
              type="text"
              v-model="branch_form.branch_id"
              required
              placeholder="Enter branch id"
              class="ml-1 input-box"
            ></b-form-input>
          </b-form-group>
          <!-- <has-error :form="form" field="number"></has-error> -->
        <b-form-group>
          <b-form-input
            id="input-4"
            v-model="branch_form.branch_location"
            type="text"
            required
            placeholder="Location"
            class="ml-1 input-box"
          ></b-form-input>
          <!-- <has-error :form="form" field="address2"></has-error> -->
        </b-form-group>
        <div class="alert alert-success my-3" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
        <div class="w-lg-25 w-md-50"><button  class="btn font-weight-bolder font-size-h6 py-3 mt-5 w-100 create_btn text-white text-nowrap">{{action}} branch</button></div>
      </div>
    </b-form>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
      branch_form:new Form({  
        id:"",
        branch_name: "",
        branch_id: "",
        branch_location: "",
      }),
      action: 'Create',
      action_name: 'Create',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(this.action=='Create'){
        ApiService.post("/admin/create-branch", this.branch_form)
        .then(({ data }) => {
          this.$router.push('/admin/branches');
        })
        .catch(err => {
          //   this.openNotification(err);
        });
      }
      else{
        ApiService.put(`/admin/edit-branch/${this.branch_form.id}`, this.branch_form)
        .then(({ data }) => {
           $('#fade').fadeToggle(1000);
           $('#fade').fadeToggle(1000);
        })
      }
    },
    getData(id){
      ApiService.get(`/admin/all-branch/${id}`)
        .then(({ data }) => {
          this.branch_form.fill(data)
        })
    },
  },
  mounted(){
   if(this.get_item){
      this.getData(this.get_item);
      this.action='Save';
      this.action_name='Edit';
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
    border: 1px silver solid;
}
.create_btn{
    background: #ED700F;
    border-radius: 20px;
}
#fade{
  display: none;
}
</style>
