<template>
  <div class="mt-5">
    <div class="d-flex ml-2">
          <h2>Branches</h2>&nbsp;&nbsp;&nbsp;
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
              <template #cell(address)="data">
                {{data.item['address1']}}, <span v-if="data.item['address2']">{{data.item['address2']}},</span> {{data.item['city']}}, {{data.item['state']}}
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
  name: "userallassociation",
  data() {
    return {
      fields: [
        {label:'Sl',key:'index'},
        {label:'Name',key:"name"},
        {label:'Branch_id',key:"branch_id"},
        {label:'Association Name',key:'association_name'},
        {label:"Address",key:"address"},
        {label:"Zip Code",key:"zip_code"},
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
    get_branches(){
      ApiService.get("/user/all-branch/0/all")
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
    background: #00A1E4;
    padding: 2px 25px;
}
</style>