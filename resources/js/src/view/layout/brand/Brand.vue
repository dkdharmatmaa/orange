<template>
  <!-- begin:: Aside -->
  <div>
  <div class="brand flex-column-auto" id="kt_brand" ref="kt_brand">
    <div class="text-white mt-15 mb-2 ml-5">
        <div><h3 class="text-nowrap">{{currentUser.name}}</h3></div>
        <div><h6 class="text-nowrap">Branch user</h6></div>
    </div>
  </div>
    <div><hr></div>
  </div>
  <!-- end:: Aside -->
</template>

<style lang="scss" scoped>
.aside-toggle {
  outline: none;
}
.brand{
  height: auto !important;
}
.brand {
    background-color: #1B2134 !important;
}
@media (max-width: 991.98px){
.brand {
    display: -webkit-box !important;
}
}
</style>
<style>
.branch-option{
  background: #FBB034;
  color: white;
  border: #FBB034;
  height: 50%;
  font-size: 16px;
}
.opt{
  margin-left: -10%;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTBrand",
  computed: {
    ...mapGetters(["layoutConfig","currentUser"]),
    allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    },
  }
};
</script>
