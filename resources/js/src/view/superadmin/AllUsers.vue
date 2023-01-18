<template>
  <div class="mt-5">
    <div class="d-flex ml-2">
          <h2>Users</h2>&nbsp;&nbsp;&nbsp;
          <b-form-group class="ml-3">
            <b-form-select id="input-3" v-model="association_id" :options="options_association" @change="get_users()" class="input-box text-seconday" required></b-form-select>
          </b-form-group>&nbsp;&nbsp;&nbsp;
          <div><button class="btn create_btn font-weight-bold"><router-link class="text-white" to="/superadmin/new-users">Add Users</router-link></button></div>
      </div>
       <div class="mt-2" id="table_data">
           <!-- for number of pages -->
        <div class="float-left">
            <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions"></b-form-select>
        </div>
        <!-- end for number of pages -->
        <!-- for filter table -->
          <div class="float-right">
           <div class="w-100">
              <b-form-group label-for="filter-input">
                 <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
              </b-form-group>
           </div>
          </div>
      <!-- for filter table end -->
          <div class="text-center bg-white px-5 py-10 mt-5 rounded">
            <b-table :bordered="true" responsive :items="items" :fields="fields" style="white-space:nowrap" primary-key="id" :filter="filter" :current-page="currentPage" :per-page="perPage"  @filtered="onFiltered">
              <template #cell(index)="data">
                {{ data.index + 1 }}
              </template>
              <template #cell(get_assos_name)="data">
               {{data.item['get_assos_name']['name']}}
              </template>
              <template #cell(action)="data">
              <b-button variant="success"><router-link :to="'/superadmin/new-users/'+data.item['id']" class="text-white">Edit</router-link></b-button>
              </template>
           </b-table>
          <!-- for pagination -->
          <div class="float-right">
               <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm" class="my-0"></b-pagination>
          </div>
          <!-- for pagination end -->
          </div>
        </div>
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service";
export default {
  name: "superadminallassociation",
  data() {
    return {
      fields: [
        {label:'Sl',key:'index'},
        {label:'Name',key:"name"},
        {label:'Email',key:"email"},
        {label:'Association Name',key:'get_assos_name'},
        {label:'Branch Name',key:'branch_name'},
        {label:"Action",key:"action"}
        ],
      items: [],
      filter: null,
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20,{ value: 100, text: "Show a lot" }],
      association_id:'',
      options_association:[],
    };
  },
  methods: {
    get_users(){
      ApiService.get(`/superadmin/all-user/0/${this.association_id}`)
        .then(({ data }) => {
          this.items=data;
          this.totalRows=data.length;
        })
    },
     getAssociation(){
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
     onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  mounted(){
     this.getAssociation();
  },
};
</script>

<style>
.create_btn{
    background: #00A1E4;
    padding: 9px 25px !important;
}
</style>