<template>
  <div class="mt-5">
    <div class="d-flex ml-2 justify-content-between">
          <div class="d-flex">
              <h2 class="font-weight-bolder">Installments</h2>
              <div class="date-time">
              <Datepicker v-model="from_date" format="yyyy-MM-dd" @closed="get_report()" class="select-date"></Datepicker>
              <Datepicker v-model="till_date" format="yyyy-MM-dd" @closed="get_report()" class="select-date"></Datepicker>
              </div>
          </div>
          <div class="d-flex">
             <div class="ml-3 excel-export">
              <vue-excel-xlsx
                  :data="items"
                  :columns="columns"
                  :file-name="'installment'"
                  :file-type="'xlsx'"
                  :sheet-name="'installment'"
                  >
                  <button class="btn create_btn font-weight-bold py-2 text-white text-nowrap">Export Data</button>
              </vue-excel-xlsx>
             </div>
          </div>
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
              <template #cell(subscription_refid)="data">
               <router-link :to="'/installment/'+data.item.subscription_refid" class="h5">{{data.item.subscription_refid}}</router-link>
              </template>
              <template #cell(name)="data">
                {{ data.item.transaction.entry.name}}
              </template>
              <template #cell(phone)="data">
                {{ data.item.transaction.entry.phone_number}}
              </template>
              <template #cell(email)="data">
                {{ data.item.transaction.entry.email}}
              </template>
              <template #cell(created_at)="data">
                {{ moment(data.item.created_at).format('MM-DD-YYYY HH:mm:ss') }}
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
export default {
  name: "adminReport",
  data() {
    return {
      condition_arr:{
          from_date_custome:'',
          till_date_custome:'',
      }, 
      from_date:"",
      till_date:new Date(), 
      fields: [
        {label:'Sl',key:'index'},
        {label:'Subscription Refid',key:'subscription_refid'},
        {label:'Name',key:'name'},
        {label:'Phone',key:'phone'},
        {label:'Email',key:'email'},
        {label:'Invoice Number',key:"invoice_number"},
        {label:'Transaction Id',key:"transaction_id"},
        {label:'Amount',key:'debit_amount'},
        {label:'Debit Date',key:'actual_debit_date'},
        {label:'Payment Status',key:'payment_status'},
    ],
    columns: [
        {label:'Sl',field:'index'},
        {label:'Subscription Refid',field:'subscription_refid'},
        {label:'Name',field:'name'},
        {label:'Phone',field:'phone'},
        {label:'Email',field:'email'},
        {label:'Invoice Number',field:"invoice_number"},
        {label:'Transaction Id',field:"transaction_id"},
        {label:'Amount',field:'debit_amount'},
        {label:'Debit Date',field:'actual_debit_date'},
        {label:'Payment Status',field:'payment_status'},
    ],
      items: [],
      filter: null,
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20,100],
      };
  },
  methods: {
    set_from_date(){
      const date = new Date();
      this.from_date= new Date(date.getTime());
      this.from_date.setDate(date.getDate() - 3);
    },
    get_report(){
      let from_date=this.from_date.toISOString().split('T')[0];
      let till_date=this.till_date.toISOString().split('T')[0];
      this.condition_arr.from_date_custome=from_date+" 00:00:01";
      this.condition_arr.till_date_custome=till_date+" 23:59:59";
      this.items=[];
      this.totalRows=0
      ApiService.post("/user/all-installment",this.condition_arr)
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
    this.get_report();
  },
  created(){
    this.set_from_date();
  },
  components: {
      Datepicker
  },
};
</script>

<style>
.select-date input:read-only {
  border: 0 !important;
  width: 100% !important;
}
div.excel-export button:first-child{
 border: 0;
}
.create_btn{
    background: #ED700F;
    padding: 9px 25px !important;
    border-radius: 20px;
}
.select-date input{
  background: white !important;
}
.select-date{
    background: white !important;
    border-radius: 20px !important;
    border: 1px solid darkgray;
    width: 30% !important;
    height: 90%;
    padding: 6px 2px 1px 3%;
    margin-left: 4%;
}
.date-time{
  display: flex;
  font-size: 14px;
}
.filter-select{
    border: 1px solid silver;
    font-weight: 600;
    border-radius: 20px !important;
}
</style>