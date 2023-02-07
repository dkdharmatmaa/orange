<template>
  <div class="mt-10 p-5 row">
    <div class="col-md-6">
      <b-form class="fw-700">
      <h3 class="fw-700">Association details</h3>
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
          <b-form-input
            id="input-2"
            type="text"
            v-model="association_form.number"
            required
            placeholder="Association number*"
            class="ml-1 input-box"
          ></b-form-input>
        </div>
        <b-form-group>
          <b-form-input
            id="input-3"
            type="text"
            v-model="association_form.pre_text"
            placeholder="Text"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-3"
            type="text"
            v-model="association_form.address1"
            required
            placeholder="Address 1*"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-4"
            v-model="association_form.address2"
            type="text"
            placeholder="Address 2"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <div class="d-flex mb-5">
          <b-form-input
            id="input-5"
            v-model="association_form.city"
            type="text"
            required
            placeholder="City*"
            class="mx-1 input-box"
          ></b-form-input>
          <b-form-input
            id="input-6"
            v-model="association_form.state"
            type="text"
            required
            placeholder="State*"
            class="mx-1 input-box"
          ></b-form-input>
          <b-form-input
            id="input-7"
            v-model="association_form.zip_code"
            type="number"
            required
            placeholder="Zip code*"
            class="ml-1 input-box"
          ></b-form-input>
         </div>
          <div class="alert alert-success" role="alert" id="fade_assoc">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
         <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white" v-on:click="onSubmit">Update association</button>
      </div>

      <h3 class="font-weight-bolder mt-10">Assign admin</h3>
      <div class="bg-white p-10 rounded">
      <b-form-group >
        <b-form-input
          id="input-4"
          v-model="admin_form.name"
          type="text"
          required
          placeholder="Name*"
          class="ml-1 input-box"
        ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-3"
            v-model="admin_form.email"
            type="email"
            required
            placeholder="Email*"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <b-form-group >
          <b-form-input
            id="input-4"
            v-model="admin_form.password"
            type="password"
            required
            placeholder="Password*"
            class="ml-1 input-box"
          ></b-form-input>
        </b-form-group>
        <div class="alert alert-success" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
         <button  class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white" v-on:click="add_admin">Add association</button>
      </div>
    </b-form>
    </div>
    <div class="col-md-6">
       <h3 class="fw-700">Admins</h3>
       <b-table :bordered="true" responsive :items="admins" :fields="fields" style="white-space:nowrap" class="bg-white">
            <template #cell(index)="data">
                    {{ data.index + 1 }}
            </template>
         <template #cell(action)="data">
            <!-- <b-button variant="success">Edit</b-button> -->
            <b-button variant="danger" v-on:click="delete_admin(data.item.id)">Delete</b-button>
        </template>
       </b-table>
    </div>
  </div>
</template>
<script>
import Form from 'vform';
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
        pre_text: "",
      }),
      admin_form:new Form({
        name:'',
        email:'',
        password:''
      }),
      admins:null,
      fields:[
          {label:'Sl',key:'index'},
          {label:'Name',key:"name"},
          {label:'Email',key:"email"},
          {label:'Action',key:"action"},
      ],
      association_id:null,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
        ApiService.put(`/superadmin/update-association/${this.association_id}`, this.association_form)
        .then(({ data }) => {
             $('#fade_assoc').fadeToggle(1000);
             $('#fade_assoc').fadeToggle(1000);
        })
        .catch(err => {
        });
    },
    add_admin(evt){
        evt.preventDefault();
        ApiService.post(`/superadmin/indivedual-admin/${this.association_id}`, this.admin_form)
        .then(({ data }) => {
            this.admin_form.reset();
            this.get_association_with_admin();
            $('#fade').fadeToggle(1000);
            $('#fade').fadeToggle(1000);
        })
        .catch(err => {
        });
    },
    get_association_with_admin(){
        ApiService.get(`/superadmin/association-with-admin/${this.association_id}`)
        .then(({ data }) => {
            this.association_form.fill(data[0]);
            this.admins=data[0]['admins'];
        })
        .catch(err => {
        });
    },
    delete_admin(id){
        var proceed = confirm("Are you sure you want to proceed?");
        if (proceed) {
           ApiService.delete(`/superadmin/delete-admin/${id}`, this.admin_form)
            .then(({ data }) => {
                this.get_association_with_admin();
            })
            .catch(err => {
            });
        }
    }
  },
  mounted(){
      this.association_id=this.$route.params.id;
      this.get_association_with_admin();
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
#fade_assoc{
    display: none;
}
</style>
