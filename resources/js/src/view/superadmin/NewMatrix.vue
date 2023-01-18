<template>
  <div class="mt-5">
    <div class="d-flex">
      <h2 class="font-weight-bolder">Membership plans</h2>
       <b-form-group class="ml-3">
          <b-form-select id="input-3" v-model="association_id" :options="options_association" @change="getBranches()" class="input-box text-seconday" required></b-form-select>
        </b-form-group>
        <b-form-group class="ml-3">
          <b-form-select id="input-4" v-model="branch_id" :options="options_branch" class="input-box text-seconday" required></b-form-select>
        </b-form-group>
        <div class="ml-3">
          <button class="btn create_btn font-weight-bolder text-white" v-on:click="add_incomebind_active=!add_incomebind_active">Add income band</button>
        </div>
    </div>
    <div class="d-flex mt-8" v-if="add_incomebind_active">
       <h5 class="mt-3 font-weight-bolder">Income band</h5>
       <input type="number" v-model="incomebind_min" class="border rounded border-secondary bg-white ml-2 p-1" placeholder="Minimum income in $">
       <input type="number" v-model="incomebind_max" class="border rounded border-secondary bg-white ml-2 p-1" placeholder="Maximum income in $">
       <button class="btn create_btn font-weight-bolder py-2 ml-2 text-white" v-on:click="add_incomebind()">Save details</button>
    </div>
    <div v-for="(single_arr, index_main) in main_arr" :key="single_arr.name">
      <div class="bg-white px-5 py-10 mt-5 rounded">
      <!-- edit_incomebind(index_main) -->
          <div class="d-flex my-8" v-if="edit_incomebind">
            <input type="number" v-model="single_arr.minmum_range" class="border rounded border-secondary bg-white ml-2 p-1" placeholder="Minimum income in $">
            <input type="number" v-model="single_arr.maximum_range" class="border rounded border-secondary bg-white ml-2 p-1" placeholder="Maximum income in $">
            <button class="btn create_btn font-weight-bolder py-2 ml-2 text-white" v-on:click="edit_incomebind=!edit_incomebind">Save</button>
          </div>
          <div v-else class="d-flex">
            <h3 class="font-weight-bolder mb-4">Income band - ${{single_arr.minmum_range}}-${{single_arr.maximum_range}}</h3>
            &nbsp;<span v-on:click="edit_incomebind=!edit_incomebind"><i class="fas fa-edit"></i></span>
          </div>
           <button class="create_btn font-weight-bolder text-white rounded p-1">+Add plan</button>
          <input type="text" v-model="single_arr.plan_name" style="border: 2px solid silver;" class="rounded p-1" @blur="add_plan(index_main)">
          <b-table responsive :items="single_arr.items" :fields="single_arr.fields" style="white-space:nowrap">  
          <template v-for="(field,field_index) in single_arr.fields" v-slot:[`head(${field})`]="data">
            <span v-if="data.field.key!='index'" v-html="data.field.label" />
            <span class="text-danger" v-if="data.field.key!='action' && data.field.key!='index' && data.field.key!='no_of_peoples'" v-on:click="delete_plan(index_main,field_index,data.field.key)"> | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
            </span>
          </template>
              <template v-for="field in single_arr.fields" v-slot:[`cell(${field})`]="data">
                 <template v-if="data.field.key=='action'">
                      <span class="text-danger" v-on:click="delete_row(index_main,data.index)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></span>
                 </template>
                 <template v-else-if="data.field.key!='index'">
                   <input v-model="data.item[data.field.key]" type="text" style="border: 2px solid silver;" class="rounded p-1">
                 </template>
              </template>
          </b-table>
          <div>
            <button class="create_btn font-weight-bolder text-white rounded p-1" v-on:click="add_no_of_people(index_main)">+Add peoples</button>
            <span class="glyphicon glyphicon-folder-open bg-success float-right py-1 px-3 text-white rounded" v-on:click="copy_plan(index_main)"><i class="fas fa-copy text-white"></i> Copy</span>
          </div>
      </div>
    </div>
    <!-- submit button -->
    <div class="my-10 text-center">
    <button class="btn create_btn font-weight-bolder text-white w-50 h3" v-if="main_arr.length" v-on:click="onSubmit">Submit all details</button>
    </div>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
     main_arr:[],
     add_incomebind_active:false,
     incomebind_min:'',
     incomebind_max:'',
     edit_incomebind:false,
    //  for branch association work
     association_id:'',
     branch_id:'',
     options_association:[],
     options_branch:[],
    };
  },
  methods: {
    add_plan(index){
      let main_access=this.main_arr[index];
      let main_plan=main_access.plan_name;
      main_access.fields.push(main_plan);
      for(let i=0;i<main_access.items;i++){
        main_access.items[i].push({main_plan: ""});
      }
      this.main_arr[index].plan_name="";
    },
    add_no_of_people(index){
      const arr = this.main_arr[index].fields;
      const obj = arr.reduce((accumulator, value) => {
        return {...accumulator, [value]: ''};
      }, {});
      this.main_arr[index].items.push(obj); 
    },
    add_incomebind(){
      this.main_arr.push({"minmum_range":this.incomebind_min,'maximum_range':this.incomebind_max,'plan_name':'','fields':['index','action','no_of_peoples'],'items':[{'index':"",'action':"","no_of_peoples":1}]});
      this.add_incomebind_active=false;
      this.incomebind_min='';
      this.incomebind_max='';
    },
    copy_plan(index){
      let main_array=this.main_arr[index];
      let copy_array= $.extend(true,{},main_array)
      this.main_arr.push(copy_array);
    },
    delete_plan(index,field_index,delete_value){
      this.main_arr[index].fields.splice(field_index, 1);
      for(let i=0; i<this.main_arr[index].items.length;i++){
        delete this.main_arr[index].items[i][delete_value];
      }
    },
    delete_row(index,delete_index){
      this.main_arr[index].items.splice(delete_index,1)
    },
    onSubmit(evt) {
      evt.preventDefault();
      if(this.association_id && this.branch_id){
       ApiService.post(`/superadmin/create-matrix/${this.association_id}/${this.branch_id}`, this.main_arr)
        .then(({ data }) => {
          this.$router.push('/superadmin/all-matrix');
        })
        .catch(err => {
        });
      }
      else{
        alert("Select correct Association and Branch");
      }
    },
    getAssociation(){
        this.options_branch.push({value:"",text:"Assign branch"})
        ApiService.get(`/superadmin/all-admin`)
        .then(({ data }) => {
            let association_option=[];
            association_option.push({value:"",text:"Assign association"})
            for(let i=0;i<data.length;i++){
                association_option.push({value:data[i]['id'],text:data[i]['name']});  
            }
            this.options_association=association_option;
        })
    },
    getBranches(){
        if(this.association_id){
            ApiService.get(`/superadmin/all-branch/0/${this.association_id}`)
            .then(({ data }) => {
                let branch_option=[];
                branch_option.push({value:"",text:"Assign branch"})
                for(let i=0;i<data.length;i++){
                    branch_option.push({value:data[i]['id'],text:data[i]['name']});  
                }
                this.options_branch=branch_option;
            })
        }
    }
  },
  mounted(){
   this.getAssociation();
  },
};
</script>
<style scoped>
.create_btn{
    background: #00A1E4;
}
#fade{
  display: none;
}
</style>
