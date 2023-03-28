<template>
  <div class="mt-5">
    <div class="d-flex ml-2 justify-content-between">
          <h2>Branches</h2>&nbsp;&nbsp;&nbsp;
          <button class="btn create_btn font-weight-bold"><router-link class="text-white" to="/admin/new-branches">Create branches</router-link></button>
      </div>
       <div class="mt-2" id="table_data">
           <!-- for number of pages -->
        <div class="float-left" style="padding:1% 0 0 1.2%">
            <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions" style="background: white !important;"></b-form-select>
        </div>
        <!-- end for number of pages -->
        <!-- for filter table -->
          <div class="float-right" style="padding:1% 1.2% 0 0">
           <div class="w-100">
              <b-form-group label-for="filter-input">
                 <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search" style="background: white !important;"></b-form-input>
              </b-form-group>
           </div>
          </div>
      <!-- for filter table end -->
          <div class="text-center bg-white px-5 py-10 mt-5 rounded">
            <b-table :bordered="true" responsive :items="items" :fields="fields" style="white-space:nowrap" primary-key="id" :filter="filter" :current-page="currentPage" :per-page="perPage"  @filtered="onFiltered">
              <template #cell(index)="data">
                {{ data.index + 1 }}
              </template>
              <template #cell(edit)="data">
              <button class="btn-trans-b-0"><router-link :to="'/admin/new-branches/'+data.item['id']" class="text-white"><i class="fas fa-edit text-success"></i></router-link></button>
              </template>
              <template #cell(delete)="data">
              <button class="text-white btn-trans-b-0" @click="delete_branch(data.item['id'])"><i class="far fa-trash-alt text-danger"></i></button>
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
  name: "adminallassociation",
  data() {
    return {
      fields: [
        {label:'Sl',key:'index'},
        {label:'Name',key:"branch_name"},
        {label:'Branch_id',key:"branch_id"},
        {label:'Location',key:'branch_location'},
        {label:'Edit',key:'edit'},
        {label:'Delete',key:'delete'},
        ],
      items: [],
      filter: null,
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20,{ value: 100, text: "Show a lot" }],
    };
  },
  methods: {
    delete_branch(id){ 
      if (confirm("Do you want to proceed") == true) {
        ApiService.delete(`/admin/all-branch/${id}`)
        .then(({ data }) => {
          if(data.status)
          this.get_branches();
          else
          alert("Branch user is associated with this branch");
        })
      }
    },
    get_branches(){
      ApiService.get("/admin/all-branch")
        .then(({ data }) => {
          this.items=data;
          this.totalRows=data.length;
        })
    },
     onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  mounted(){
     this.get_branches();
  },
};
</script>

<style>
.create_btn{
    background: #ED700F;
    padding: 2px 25px;
    border-radius: 20px;
}
</style>