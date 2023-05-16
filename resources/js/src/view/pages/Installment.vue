<template>
  <div class="mt-5">
       <div class="d-flex ml-2 justify-content-between">
          <h2>Received Installment</h2>
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
        {label:'Invoice Number',key:"invoice_number"},
        {label:'Transaction Id',key:"transaction_id"},
        {label:'Subscription Refid',key:'subscription_refid'},
        {label:'Amount',key:'debit_amount'},
        {label:'Debit Date',key:'actual_debit_date'},
        {label:'Payment Status',key:'payment_status'},
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
    get_installment(){
      ApiService.get(`/user/installment/${this.$route.params.id}`)
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
     this.get_installment();
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