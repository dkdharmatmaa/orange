<template>
  <div class="mt-5" v-if="data_loaded">
    <div class="ml-2">
        <h3 class="font-weight-bolder">Customer information</h3>
        <div class="customer-div">
          <div class="d-flex justify-content-between">
            <div class="inner-box-45">
              <div class="b-3 px-2 py-1">
                <label for="">Full name</label>
                <h5>{{all_data['name']}}</h5>
              </div>
            </div>
            <div class="inner-box-45">
              <div class="b-3 px-2 py-1">
                <label for="">MBO ID</label>
                <h5>{{all_data['mbo_id']}}</h5>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-5">
            <div class="inner-box-45">
              <div class="b-3 px-2 py-1">
                <label for="">Phone Number</label>
                <h5>{{all_data['phone_number']}}</h5>
              </div>
            </div>
            <div class="inner-box-45">
              <div class="b-3 px-2 py-1">
                <label for="">Email</label>
                <h5>{{all_data['email']}}</h5>
              </div>
            </div>
          </div>
        </div>
        <h3 class="font-weight-bolder mt-10">Transaction Information</h3>
        <div class="customer-div">
          <div class="inner-box-100">
              <div class="b-3 px-2 py-1">
                <label for="">Date</label>
                <h5>{{all_data['date']}}</h5>
              </div>
            </div>
            <div class="inner-box-100">
              <div class="b-3 px-2 py-1">
                <label for="">Membership type</label>
                <h5>{{all_data['product']['name']}}</h5>
              </div>
            </div>
            <div class="inner-box-100">
              <div class="b-3 px-2 py-1">
                <label for="">Transaction Type</label>
                <h5>{{all_data['payment_type']}}</h5>
              </div>
            </div>
            <div class="inner-box-100">
              <div class="b-3 px-2 py-1">
                <label for="">Amount Received</label>
                <h5>{{all_data['advance_payment']}}</h5>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-5">
            <div class="inner-box-45">
              <div class="b-3 px-2 py-1">
                <label for="">Pricing</label>
                <h5>{{all_data['membership_price']}}</h5>
              </div>
            </div>
            <div class="inner-box-45">
              <div class="b-3 px-2 py-1">
                <label for="">Advance Payment</label>
                <h5>{{all_data['advance_payment']}}</h5>
              </div>
            </div>
          </div>
          <div class="inner-box-100">
              <div class="b-3 px-2 py-1">
                <label for="">Recurring Amount</label>
                <h5>{{all_data['recurring_amount']}}</h5>
              </div>
          </div>
          <div class="mt-5" v-if="all_data['transaction']">
           <label>Billing Terms</label>
           <div class="p-3" style="border:1px solid silver">
            <div class="d-flex justify-content-between mt-5">
                <div class="inner-box-45">
                <div class="b-3 px-2 py-1">
                    <label for="">From</label>
                    <h5>{{all_data['transaction']['installment_from']}}</h5>
                </div>
                </div>
                <div class="inner-box-45">
                <div class="b-3 px-2 py-1">
                    <label for="">To</label>
                    <h5>{{all_data['transaction']['installment_to']}}</h5>
                </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-5">
                <div class="inner-box-45">
                <div class="b-3 px-2 py-1">
                    <label for="">Number of Installments</label>
                    <h5>{{all_data['transaction']['no_of_installment']}}</h5>
                </div>
                </div>
                <div class="inner-box-45">
                <div class="b-3 px-2 py-1">
                    <label for="">Amount Per Month</label>
                    <h5>{{all_data['transaction']['installment_amount']}}</h5>
                </div>
                </div>
            </div>
           </div>
          </div>
          <div class="inner-box-100">
              <div class="b-3 px-2 py-1">
                <label for="">Transaction ID</label>
                <h5 v-if="all_data['transaction']">{{all_data['transaction']['transaction_id']}}</h5>
                <h5 v-else>{{all_data['transaction_id']}}</h5>
              </div>
          </div>
          <div class="inner-box-full p-3 mt-5">
            <label for="">Comments</label>
            <h5>{{all_data['comment']}}</h5>
          </div>
        </div>
        <div class="mt-7 w-50">
          <div class="d-flex justify-content-between">
           <div class="customer-div-45">
            <label for="">User Name</label>
            <h5>{{all_data['name']}}</h5>
           </div>
           <div class="customer-div-45">
            <label for="">Branch Name</label>
            <h5>{{all_data['branch']['branch_name']}}</h5>
           </div>
          </div>
        </div>   
        <div class="mt-5 w-50" v-if="all_data['transaction']">
          <div class="customer-div-45" style="width:100%">
            <router-link :to="'/admin/installment/'+all_data['transaction']['subscription_refid']" class="h5">Check received installment</router-link>
           </div>
        </div> 
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service";
export default {
  name: "adminReportDetail",
  data() {
    return {
        all_data:[],
        data_loaded:false,
      };
  },
  methods: {
    get_report(){
      ApiService.get(`/admin/report-single/${this.$route.params.id}`)
        .then(({ data }) => {
          this.all_data=data;
          this.data_loaded=true;
        })
    },
  },
  mounted(){
    this.get_report();
  },
};
</script>

<style>
.customer-div{
    margin-top: 5px;
    padding: 5px;
    background: white;
    width: 50%;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
}
.customer-div-45{
    margin-top: 5px;
    padding: 2%;
    background: white;
    width: 45%;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
}
.inner-box-45{
    background: #FBFAFA;
    border-bottom: 2px solid silver;
    width: 45%;
}
.inner-box-100{
    background: #FBFAFA;
    border-bottom: 2px solid silver;
    margin-top: 2.5%;
}
.inner-box-full{
    background: #FBFAFA;
    border: 2px solid silver;
}
</style>