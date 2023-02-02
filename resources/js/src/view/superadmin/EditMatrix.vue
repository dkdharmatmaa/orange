<template>
  <div class="mt-5" v-if="data_loading">
    <div>
      <h2 class="font-weight-bolder">Edit plans</h2>
    </div>
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
          <input type="text" v-model="single_arr.plan_name" style="border: 2px solid silver;" class="rounded p-1" @blur="add_plan()">
          <b-table responsive :items="single_arr.items" :fields="single_arr.fields" style="white-space:nowrap">  
          <template v-for="(field,field_index) in single_arr.fields" v-slot:[`head(${field})`]="data">
            <span v-if="data.field.key!='index'" v-html="data.field.label" />
            <span class="text-danger" v-if="data.field.key!='action' && data.field.key!='index' && data.field.key!='no_of_peoples'" v-on:click="delete_plan(field_index,data.field.key)"> | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
            </span>
          </template>
              <template v-for="field in single_arr.fields" v-slot:[`cell(${field})`]="data">
                 <template v-if="data.field.key=='action'">
                      <span class="text-danger" v-on:click="delete_row(data.index)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></span>
                 </template>
                 <template v-else-if="data.field.key!='index'">
                   <input v-model="data.item[data.field.key]" type="text" style="border: 2px solid silver;" class="rounded p-1">
                 </template>
              </template>
          </b-table>
          <div>
            <button class="create_btn font-weight-bolder text-white rounded p-1" v-on:click="add_no_of_people()">+Add peoples</button>
          </div>
      </div>

    <div class="alert alert-success mt-3" role="alert" id="fade">
        <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
    </div>
    <!-- submit button -->
    <div class="my-10 text-center">
      <button class="btn create_btn font-weight-bolder text-white w-50 h3" v-on:click="onSubmit">Submit details</button>
    </div>
  </div>
</template>
<script>
import Form from 'vform';
import ApiService from "@/core/services/api.service";
export default {
  data() {
    return {
     single_arr:{
       minmum_range:'',
       maximum_range:'',
       plan_name:'',
       fields:[],
       items:[],
     },
     edit_incomebind:false,
     data_loading:false,
    //  for branch association work
     association_id:'',
     branch_id:'',
     search_minmum:'',
     search_maximum:'',
    };
  },
  methods: {
    add_plan(){
      let main_access=this.single_arr;
      let main_plan=main_access.plan_name;
      main_access.fields.push(main_plan);
      for(let i=0;i<main_access.items;i++){
        main_access.items[i].push({main_plan: ""});
      }
      this.single_arr.plan_name="";
    },
    add_no_of_people(){
      const arr = this.single_arr.fields;
      const obj = arr.reduce((accumulator, value) => {
        return {...accumulator, [value]: ''};
      }, {});
      this.single_arr.items.push(obj); 
    },
    delete_plan(field_index,delete_value){
      this.single_arr.fields.splice(field_index, 1);
      for(let i=0; i<this.single_arr.items.length;i++){
        delete this.single_arr.items[i][delete_value];
      }
    },
    delete_row(delete_index){
      this.single_arr.items.splice(delete_index,1)
    },
    onSubmit(evt) {
      evt.preventDefault();
      ApiService.put(`/superadmin/edit-matrix/${this.association_id}/${this.branch_id}/${this.search_minmum}/${this.search_maximum}`, this.single_arr)
        .then(({ data }) => {
          $('#fade').fadeToggle(1000);
          $('#fade').fadeToggle(1000);
        })
        .catch(err => {
        });
    },
    getData(){
      ApiService.get(`/superadmin/single-matrix/${this.association_id}/${this.branch_id}/${this.search_minmum}/${this.search_maximum}`)
        .then(({ data }) => {
            this.single_arr.maximum_range=data[0]['maximum_range'];
            this.single_arr.minmum_range=data[0]['minmum_range'];
            this.single_arr.fields=JSON.parse(data[0]['fields']);
            for(let i=0;i<data.length;i++){
              let item_data=JSON.parse(data[i]['plans']);
              this.single_arr.items.push(item_data);
            }
            this.data_loading=true;
        })
    },
  },
  mounted(){
  },
  created(){
      this.association_id=this.$route.params.association_id;
      this.branch_id=this.$route.params.branch_id;
      this.search_minmum=this.$route.params.minmum_range;
      this.search_maximum=this.$route.params.maximum_range;
      this.getData();
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
