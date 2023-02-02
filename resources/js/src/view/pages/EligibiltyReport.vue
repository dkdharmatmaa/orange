<template>
  <div class="mt-5">
    <div class="d-flex ml-2 justify-content-between">
          <div class="d-flex">
              <h2 class="font-weight-bolder">Report</h2>
              <div class="date-time">
              <Datepicker v-model="from_date" format="yyyy-MM-dd" @closed="get_report()"></Datepicker>
              <Datepicker v-model="till_date" format="yyyy-MM-dd" @closed="get_report()"></Datepicker>
              </div>
          </div>
          <div class="d-flex">
          <b-form-group class="ml-3">
            <b-form-select id="input-4" v-model="condition_arr.api_status" :options="options_api_status" @change="get_report()" class="input-box text-seconday" required></b-form-select>
          </b-form-group>
             <div class="ml-3">
              <vue-excel-xlsx
                  :data="items"
                  :columns="columns"
                  :file-name="'report'"
                  :file-type="'xlsx'"
                  :sheet-name="'report'"
                  >
                  <button class="btn create_btn font-weight-bold py-2 text-white">Export report</button>
              </vue-excel-xlsx>
             </div>
          </div>
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
              <template #cell(first_name)="data">
              <router-link :to="'/user-details/'+data.item.id">{{data.item.first_name}} {{data.item.last_name}}</router-link>
              </template>
              <template #cell(created_at)="data">
                {{data.item.created_at}}
                <!-- {{date('d/M/y', strtotime(data.item.created_at))}} -->
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
import Datepicker from 'vuejs-datepicker';
import { mapGetters } from 'vuex';
export default {
  name: "adminallassociation",
  data() {
    return {
      condition_arr:{
          from_date_custome:'',
          till_date_custome:'',
          api_status:'',
          branch_id:'',
          per_page:'',
      }, 
      from_date:new Date(),
      till_date:new Date(), 
      fields: [
        {label:'Sl',key:'index'},
        {label:'Name',key:"first_name"},
        {label:'Executive',key:"executive_name"},
        {label:'Phone',key:'phone'},
        {label:'Birthday',key:'birthday'},
        {label:'Members',key:'no_of_people'},
        {label:"Date created",key:"created_at"},
        {label:"Status",key:"api_status"},
        ],
      columns: [
        {label:'Name',field:"first_name"},
        {label:'Executive',field:"executive_name"},
        {label:'Phone',field:'phone'},
        {label:'Birthday',field:'birthday'},
        {label:'Members',field:'no_of_people'},
        {label:"Date created",field:"created_at"},
        {label:"Status",field:"api_status"},
        ],
      items: [],
      filter: null,
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20,{ value: 100, text: "Show a lot" }],
      options_api_status:[{value:'',text:'Select status'},{value:'Qualified',text:'Qualified'},{value:'Not Qualified',text:'Not Qualified'}],
    };
  },
  methods: {
    get_report(){
      let from_date=this.from_date.toISOString().split('T')[0];
      let till_date=this.till_date.toISOString().split('T')[0];
      this.condition_arr.from_date_custome=from_date+" 00:00:01";
      this.condition_arr.till_date_custome=till_date+" 23:59:59";
      ApiService.post("/user/eligibilty-report",this.condition_arr)
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
    this.condition_arr.branch_id=this.selected_branch_id;
    this.get_report();
  },
  components: {
      Datepicker
  },
  computed:{
    ...mapGetters({selected_branch_id:'SelectedBranch'}),
  }
};
</script>

<style>
.create_btn{
    background: #00A1E4;
    padding: 2px 25px;
}
.vdp-datepicker{
    background: white;
    border-radius: 5px;
    border: 1px solid darkgray;
    width: 30%;
    height: 55%;
    padding: 6px 2px 1px 3%;
    margin-left: 4%;
}
.date-time{
  display: flex;
  font-size: 14px;
}
</style>