<template>
  <div>
    <div class="home-banner">
      <div class="p-2-3">
        <img src="/media/custome/orange-logo.png" alt="white logo" style="width: 25%;">
      </div>
      <div class="p-2-3" style="margin-top: 3%;">
        <div class="home-block" style="width:40%">
          <h1><i class="text-white fs-46 fw-700">Get in Shape</i></h1>
          <h1><i class="mt-2 fw-700 fs-36 text-primary-color">Start Today</i></h1>
          <p class="text-white mt-5"><i class="text-white">Orangetheory is a science-backed, technology-tracked, coach-inspired group workout designed to produce results from the inside out. The hardest part of our workouts is showing up - we make it simple for you to push yourself, be your personal best and give you more. MORE results. MORE confidence. MORE Life. More than a gym. Because you shouldn’t live to exercise. You should exercise to live.</i></p>
          <div class="mt-10"><router-link to="/login"><button class="login-btn">Login</button></router-link></div>
        </div>
      </div>
    </div>
    <div class="row back-b text-white p-8">
      <div class="col-12 col-md-4">
        <img src="/media/custome/orange-logo.png" alt="orange logo" style="width: 50%;">
      </div>
      <div class="col-12 col-md-4">
        <h2>QUICK LINKS</h2>
        <ul>
          <li><router-link to="/rules/about">About us</router-link></li>
          <li><router-link to="/rules/terms">Terms & Conditions</router-link></li>
          <li><router-link to="/rules/product">Subscription Payment Plan</router-link></li>
          <li><router-link to="/rules/privacy">Privacy Policy</router-link></li>
          <li><router-link to="/rules/refund">Refund Policy</router-link></li>
          <li><router-link to="/rules/cancellation">Cancellation Policy</router-link></li>
          <li><router-link to="/rules/pricing">Pricing</router-link></li>
        </ul>
      </div>
      <div class="col-12 col-md-4">
        <h2>CONTACT US</h2>
        <div>
          <i class="far fa-building"></i>&nbsp;<span>Company Name</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Envisage Studios Private Limited</span>
        </div>
        <div class="mt-6">
          <i class="fas fa-phone-alt"></i>&nbsp;<span>Phone Number</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>+91 98926 61800</span>
        </div>
        <div class="mt-6">
          <i class="fa fa-envelope-open-text"></i>&nbsp;<span>Email</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>support@orangetheoryindia.com</span>
        </div>
        <div class="mt-6">
          <i class="fa fa-map-marker-alt"></i>&nbsp;<span>Address</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>D - 211, Ghatkopar Industrial Premises, Behind R - City Mall, Off L.B.S. Marg, Ghatkopar ( West ), Mumbai, Maharashtra 400086</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Home",
   data() {
     return{

     }
   },
   mounted(){
   }  
}
</script>
<style>
.home-banner { 
  /* The image used */
  background-image: url("/media/custome/home-banner.jpg");
  /* Full height */
  height: 100vh;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.home-block{
    background: rgba(0, 0, 0, 0.8);
    padding: 2.5% 3% 2.5% 1.8%;
}
.p-2-3{
    padding: 2% 3%;
}
.login-btn{
    background: #ED700F;
    border: 0;
    padding: 1.5% 6%;
    border-radius: 40px;
    color: white;
    font-size: 18px;
    font-weight: 700;
}
.back-b{
  background-color: black;
}
ul li{
  font-size: 18px;
  cursor: pointer;
  padding-left: 4px;
}
ul{
  list-style-type: none;
  padding-left: 0px;
}
ul li a{
    color: white !important;
}
</style>