<template>
  <div class="row">
            <div class="col-sm-12">
                <h5>Submission details</h5>
                <div class="mb-5">
                    <div class="bg-white p-3 rounded" style="width:40%;float:left;">
                        <span>Branch name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date</span><br>
                        <span class="fw">Branch Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visited Date</span>
                    </div>
                </div>
                <br>
                <h5 class="mb-1 mt-3">Personal details</h5>
                <div class="bg-white p-3 rounded" style="margin-right: 2%">
                    <div class="" style="width:48%; float: right;">
                        <span>Last name</span><br>
                        <h6>Last Name</h6>
                        <hr>
                    </div>
                    <div class="" style="width:48%;">
                        <span>First name</span><br>
                        <h6>First  Name</h6>
                        <hr>
                    </div>
                    <div style="width:48%;float: right;">
                        <span>Number of people in household</span><br>
                        <h6>4</h6>
                        <hr>
                    </div>
                    <div style="width:48%;">
                        <span>Email id</span><br>
                        <h6>jhvhhgvh</h6>
                        <hr>
                    </div>
                    <div style="width:48%;float: right;">
                        <span>Birthday</span><br>
                        <h6>jhvhgch</h6>
                        <hr>
                    </div>
                    <div style="width:48%;">
                        <span>Phone number</span><br>
                        <h6>356114654</h6>
                        <hr>
                    </div>
                    <div>
                        <span>Address</span><br>
                        <h6>jhvhvgvdcvjv1535</h6>
                        <hr>
                    </div>
                    <div style="width:31%;float: right;">
                        <span>Zip code</span><br>
                        <h6>nvhgvsdc</h6>
                        <hr>
                    </div>
                    <div style="width:31%;float: right;padding-right: 4%;">
                        <span>State</span><br>
                        <h6>jhvjhvjd</h6>
                        <hr>
                    </div>
                    <div style="width:31%;">
                        <span>City</span><br>
                        <h6>jhvhjhdv</h6>
                        <hr>
                    </div>
                </div>
                <div class="bg-white px-3 pb-1 mt-2 rounded" style="margin-right: 2%">
                    <span>Comments</span><br>
                    <h6>hello i am dhiraj</h6>
                    <hr>
                </div>
                <p class="fw mt-1" style="font-size: 18px;"></p>
                <div class="table-responsive text-center bg-white" style="width: 50%">
                    <table class="table table-striped p-2">
                        <tbody>
                            <tr class='m-2'>
                            <td>hello i am here</td>
                            <td>what will you do</td>
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
    };
  },
  methods: {
    getUserSumissionDetail(){
        ApiService.get(`/user/user-sumission-detail/${this.user_id}`)
          .then(({ data }) => {
              console.log(data);
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
