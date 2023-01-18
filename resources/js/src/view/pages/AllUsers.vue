<template>
  <div class="mt-5">
    <div class="d-flex ml-2">
          <h2>Users</h2>&nbsp;&nbsp;&nbsp;
          <button class="btn create_btn font-weight-bold"><router-link class="text-white" to="/new-users">Add Users</router-link></button>
      </div>
       <div class="mt-2" id="table_data">
           <!-- for number of pages -->
        <div class="float-left">
            <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions"></b-form-select>
        </div>
        <!-- end for number of pages -->
        <!-- for filter table -->
          <div class="float-right">
           <div class="w-100">
              <b-form-group label-for="filter-input">
                 <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
              </b-form-group>
           </div>
          </div>
      <!-- for filter table end -->
          <div class="text-center bg-white px-5 py-10 mt-5 rounded">
            <b-table :bordered="true" responsive :items="items" :fields="fields" style="white-space:nowrap" primary-key="id" :filter="filter" :current-page="currentPage" :per-page="perPage"  @filtered="onFiltered">
              <template #cell(index)="data">
                {{ data.index + 1 }}
              </template>
              <template #cell(get_assos_name)="data">
               {{data.item['get_assos_name']['name']}}
              </template>
              <template #cell(action)="data">
              <b-button variant="success"><router-link :to="'/new-users/'+data.item['id']" class="text-white">Edit</router-link></b-button>
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
import { mapGetters } from 'vuex';
import { LOGOUT} from "@/core/services/store/auth.module";
export default {
  name: "userallassociation",
  data() {
    return {
      fields: [
        {label:'Sl',key:'index'},
        {label:'Name',key:"name"},
        {label:'Email',key:"email"},
        {label:'Association Name',key:'get_assos_name'},
        {label:'Branch Name',key:'branch_name'},
        {label:"Action",key:"action"}
        ],
      items: [],
      filter: null,
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20,{ value: 100, text: "Show a lot" }],
      association_id:'',
    };
  },
  methods: {
    get_users(){
      ApiService.get(`/user/all-user/0/${this.association_id}`)
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
     this.association_id=this.currentUser.association_id;
     this.get_users();
     if(!this.currentUser.is_admin){
       this.$store.dispatch(LOGOUT);
       this.$router.push('/')
     }
  },
  computed:{
    ...mapGetters({currentUser:'currentUser'}),
  }
};
</script>

<style>
.create_btn{
    background: #00A1E4;
    padding: 2px 25px;
}
</style>