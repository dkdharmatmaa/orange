<template>
  <!-- begin:: Aside -->
  <div>
  <div class="brand flex-column-auto" id="kt_brand" ref="kt_brand">
    <div class="text-white mt-15 mb-2 ml-5">
        <div><h1 class="text-nowrap text-secondary-color">{{currentUser.name}}</h1></div>
        <div><h3 class="text-nowrap text-secondary-color">Admin</h3></div>
    </div>
    <div class="brand-tools" v-if="allowMinimize">
      <button
        class="brand-toggle btn btn-sm px-0"
        id="kt_aside_toggle"
        ref="kt_aside_toggle"
      >
        <span class="svg-icon svg-icon svg-icon-xl">
          <inline-svg
            class="svg-icon"
            src="media/svg/icons/Navigation/Angle-double-left.svg"
          />
        </span>
      </button>
    </div>
  </div>
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
    background-color: #2E2E2E  !important;
}
@media (max-width: 991.98px){
.brand {
    display: -webkit-box !important;
}
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTBrand",
  mounted() {
  },
  methods: {
  },
  computed: {
    ...mapGetters(["layoutConfig","currentUser"]),

    allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    },
  }
};
</script>
