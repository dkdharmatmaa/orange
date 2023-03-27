<template>
    <div class="home-banner">
     <div class="p-2-3">
       <img src="/media/custome/white-logo.png" alt="white logo" style="width: 12%;">
     </div>
     <div class="p-2-3" style="margin-top: 5%;">
       <div class="home-block" style="width:40%">
        <h1 class="text-white fs-35 fw-700">Get in Shape</h1>
        <h1 class="mt-2 fw-700 fs-29 text-primary-color">Start Today</h1>
        <p class="text-white mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div class="mt-10"><router-link to="/login"><button class="login-btn">Login</button></router-link></div>
       </div>
     </div>
    </div>
</template>
<script>
export default {
   data() {

   }  
}
</script>
<style>
.home-banner { 
  /* The image used */
  background-image: url("/media/custome/home-banner.jpg");
  /* Full height */
  height: 100%;
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
    padding: 2% 8%;
    border-radius: 40px;
    color: white;
    font-size: 16px;
    font-weight: 700;
}
</style>