<template>
    <div class="row mt-10">
      <div class="col-md-6">
        <h3 class="fw-700">{{main_message}}</h3>
        <div class="bg-white rounded mt-5 p-5">
          <b-table v-if="items" striped :items="items" class="text-center" thead-class="hidden_header">
             
          </b-table>
        </div>
      </div>
      <div class="col-md-6 p-10">
        <div class="bg-white p-5 rounded" style="height:75px" v-if="success_box">
          <div class="float-left">
             <img src="/media/custome/check.svg" alt="success icon" class="img-fluid mt-2" width="20" height="20">&nbsp;
             <span class="text-success h5 font-weight-bolder">Success</span><br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details saved successfully.</span>
          </div>
          <div class="float-right" v-on:click="success_box=!success_box">
              <img src="/media/custome/x.svg" alt="success icon" class="img-fluid mt-2" width="20" height="20">
          </div>
        </div>
        <div class="mt-5">
            <h4 class="font-weight-bolder">Comment</h4>
            <textarea name="comment" id="comment" v-model="status_arr.comment" cols="85" rows="3" class="bg-white rounded p-2" placeholder="Add comments here"></textarea><br>
            <div class="mt-3">
              <input type="radio" name="convert" v-model="status_arr.status" class="bg-white p-2 font-weight-bolder opacity-75" value="Accepted" required> Accepted &nbsp;&nbsp;&nbsp;
              <input type="radio" name="convert" v-model="status_arr.status" class="bg-white p-2 font-weight-bolder opacity-75" value="Deferred" required> Deferred
            </div>
             <div class="alert alert-success mt-3" role="alert" id="fade">
              <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
             </div>
            <div class="my-5">
              <b-button variant="primary" class="px-5 h5" v-on:click="save_comment()">Save details</b-button>&nbsp;&nbsp;&nbsp;&nbsp;
              <b-button variant="white" class="print_btn border border-secondary"><a :href="'/generate-pdf/'+main_message+'/'+JSON.stringify(items)+'/'+JSON.stringify(user_details)+'/'+status_arr.comment" target="_blank" class="h5">Print details</a></b-button>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
export default {
    name:"admin-eligibiltystatus",
    data() {
      return {
        items: [],
        status_arr:{
          comment:'',
          status:''
        },
        success_box:true,
        user_details:[],
        plans:[],
        main_message:'',
      }
    },
    methods:{
      save_comment(){
        ApiService.post(`/admin/add-eligibilty-comment/${this.user_details.id}`,this.status_arr)
        .then(({ data }) => {
           $('#fade').fadeToggle(1000);
           $('#fade').fadeToggle(1000);
        })
      }
    },
    mounted(){
      if(this.$route.params.main_data){
        this.user_details=this.$route.params.main_data.data.details;
      if(this.$route.params.main_data.status){  
      this.plans=this.$route.params.main_data.data.plans;
      // for income band $${this.plans.minmum_range} - $${this.plans.maximum_range}
      this.main_message=`${this.user_details.first_name} is qualified for following membership rates`;
      let all_plans=Object.entries(JSON.parse(this.plans.plans));
      all_plans.splice(0, 3);
      this.items=all_plans;
      }
      else{
        this.main_message=`${this.user_details.first_name} is not qualified `;
      }
      }
      else{
        this.$router.push('/admin/check-eligibilty');
      }
    },
}
</script>
<style scoped>
.fw-700 {
  font-weight: 700;
}
</style>
<style>
.hidden_header {
  display: none !important;
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
 .print_btn{
      padding: 12px 20px;
      margin-top: -6px;
 }
 #fade{
  display: none;
}
</style>
