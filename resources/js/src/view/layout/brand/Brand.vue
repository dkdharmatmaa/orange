<template>
  <!-- begin:: Aside -->
  <div>
  <div class="brand flex-column-auto" id="kt_brand" ref="kt_brand">
    <div class="text-white mt-15 mb-2 ml-5">
        <div><h3 class="text-nowrap">{{currentUser.name}}</h3></div>
        <div><h6 class="text-nowrap">Branch user</h6></div>
        <div class="opt">
          <b-form-select v-model="branch_id" :options="options" class="branch-option" @change="set_global_variable()"></b-form-select>
        </div>
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
import { UPDATE_BRANCHID } from "@/core/services/store/auth.module";
import objectPath from "object-path";
import ApiService from "@/core/services/api.service";
import KTLayoutBrand from "@/assets/js/layout/base/brand.js";
import KTLayoutAsideToggle from "@/assets/js/layout/base/aside-toggle.js";

export default {
  name: "KTBrand",
  data(){
    return{
      branch_id:'',
      options: []
    }
  },
  mounted() {
    // Init Brand Panel For Logo
    KTLayoutBrand.init(this.$refs["kt_brand"]);
    // Init Aside Menu Toggle
    KTLayoutAsideToggle.init(this.$refs["kt_aside_toggle"]);
    this.getBranches();
    if(this.selected_branch_id)
    this.branch_id=this.selected_branch_id;
    else
    this.branch_id=null;
  },
  methods: {
    getBranches(){
        ApiService.get(`/user/all-branch`)
        .then(({ data }) => {
            let branch_option=[];
            branch_option.push({value:null,text:"Select Branch"})
            for(let i=0;i<data.length;i++){
                branch_option.push({value:data[i]['id'],text:data[i]['name']});  
            }
            this.options=branch_option;
        })
    },
    set_global_variable(){
      let branch_id=this.branch_id;
      this.$store.dispatch(UPDATE_BRANCHID, branch_id)
    },
  },
  computed: {
    ...mapGetters(["layoutConfig","currentUser"]),
    ...mapGetters({selected_branch_id:'SelectedBranch'}),
    allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    },
  }
};
</script>
