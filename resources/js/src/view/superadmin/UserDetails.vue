<template>
    <div class="row" v-if="data_loded">
        <h2 class="ml-5">{{branch_detail['association']['association_name']}}</h2>
            <div class="col-sm-12 mt-3">
                <h3>Submission details</h3>
                <div class="mb-5">
                    <div class="bg-white p-5 rounded" style="width:auto;float:left;">
                        <h4>{{branch_detail['association']['name']}}</h4>
                        <h4>{{ moment(branch_detail['created_at']).format('YYYY-MM-DD HH:mm:ss') }}</h4>
                    </div>
                </div>
                <br><br><br><br><br>
                <h3 class="mb-1 mt-3">Personal details</h3>
                <div class="bg-white p-3 rounded" style="margin-right: 2%">
                    <div class="" style="width:48%; float: right;">
                        <span>Last name</span><br>
                        <h5>{{branch_detail['last_name']}}</h5>
                        
                    </div>
                    <div class="" style="width:48%;">
                        <span>First name</span><br>
                        <h5>{{branch_detail['first_name']}}</h5>
                        
                    </div>
                    <div style="width:48%;float: right;">
                        <span>Number of people in household</span><br>
                        <h5>{{branch_detail['no_of_people']}}</h5>
                        
                    </div>
                    <div style="width:48%;">
                        <span>Email id</span><br>
                        <h5>{{branch_detail['email_id']}}</h5>
                        
                    </div>
                    <div style="width:48%;float: right;">
                        <span>Birthday</span><br>
                        <h5>{{branch_detail['birthday']}}</h5>
                        
                    </div>
                    <div style="width:48%;">
                        <span>Phone number</span><br>
                        <h5>{{branch_detail['phone']}}</h5>
                        
                    </div>
                    <div>
                        <span>Address</span><br>
                        <h5>{{branch_detail['street_address']}} {{branch_detail['address']}}</h5>
                        
                    </div>
                    <div style="width:31%;float: right;">
                        <span>Zip code</span><br>
                        <h5>{{branch_detail['zip_code']}}</h5>
                        
                    </div>
                    <div style="width:31%;float: right;padding-right: 4%;">
                        <span>State</span><br>
                        <h5>{{branch_detail['state']}}</h5>
                        
                    </div>
                    <div style="width:31%;">
                        <span>City</span><br>
                        <h5>{{branch_detail['city']}}</h5>
                        
                    </div>
                </div>
                <div class="bg-white px-3 pb-1 mt-2 rounded" style="margin-right: 2%" v-if="branch_detail['comment']">
                    <span>Comments</span><br>
                    <h5>{{branch_detail['comment']}}</h5>
                    
                </div>
                <p class="fw mt-1" style="font-size: 18px;">{{branch_detail['first_name']}} is qualified for following membership rates</p>
                <div class="table-responsive text-center bg-white" style="width: 50%">
                    <table class="table table-striped p-2">
                        <tbody>
                        <tr v-for="(key,value) in plans">
                            <td>{{value}}</td>
                            <td>{{key}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
export default {
  data() {        
    return {
      user_id:'',  
      branch_detail:[],
      plans:null,
      data_loded:false,
    };
  },
  methods: {
    getUserSumissionDetail(){
        ApiService.get(`/superadmin/user-sumission-detail/${this.user_id}`)
          .then(({ data }) => {
              this.branch_detail=data;
              let plan_data=JSON.parse(data['plans']['plans']);
              delete plan_data.index;
              delete plan_data.action;
              delete plan_data.no_of_peoples;
              this.plans=plan_data;
              this.data_loded=true;
          })
    },
  },
  mounted(){
      this.user_id=this.$route.params.id;
      this.getUserSumissionDetail();
  },
};
</script>
<style scoped>
.col-sm-12{
    margin-left: 7px;
    background: #F0F2F5;
    color: black;
}
.table-striped>tbody>tr:nth-child(even)>td {
   background-color: #00A1E4; 
   opacity: 60%;
   color: black;
   font-weight: 900;
 }
.table-striped>tbody>tr:nth-child(odd)>td {
    background-color: whitesmoke; 
   opacity: 60%;
   color: black;
   font-weight: 900;
 }
 .display-flex{
    display: flex !important;
 }
.fw{
    font-weight: bolder;
}
</style>
