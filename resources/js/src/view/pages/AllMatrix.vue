<template>
  <div class="mt-5">
    <div class="d-flex ml-2 justify-content-between">
          <div>
              <h2 class="font-weight-bolder">Financial aid matrix</h2>
          </div>
          <div class="d-flex">
             <div>
               <!-- <button class="btn create_btn font-weight-bold py-2 ml-2"><router-link class="text-white" to="/new-matrix">Add plans</router-link></button> -->
             </div>
          </div>
    </div>

       <div class="mt-2" id="table_data">
      <div v-for="single_arr in main_arr">
          <h5 class="font-weight-bolder my-5">INCOME BAND - ${{single_arr['minmum_range']}}-${{single_arr['maximum_range']}}</h5>
          <div class="text-center bg-white px-5 py-10 mt-5 rounded">
            <b-table :bordered="true" responsive :items="single_arr['items']" :fields="single_arr['fields']" style="white-space:nowrap">

           </b-table>
          </div>
      </div>    
        </div>
  </div>
</template>

<script>
import ApiService from "@/core/services/api.service";
import { mapGetters } from 'vuex';
export default {
  name: "adminallassociation",
  data() {
    return {
     main_arr:[],
     branch_id:'',
    };
  },
  methods: {
    get_plans(){
      ApiService.get(`/user/all-matrix/${this.branch_id}`)
        .then((data) => {
          for(var short_data in data.data) {
            let temp_array={
              minmum_range:'',
              maximum_range:'',
              fields:[],
              items:[],
            }
            let arr_data=data.data[short_data];
            temp_array.minmum_range=arr_data[0].minmum_range;
            temp_array.maximum_range=arr_data[0].maximum_range;
            temp_array.fields=JSON.parse(arr_data[0]['fields'])
            temp_array.fields.splice(0,2)
            for(let i=0;i<arr_data.length;i++){
              let item_data=JSON.parse(arr_data[i]['plans']);
              delete item_data.index;
              delete item_data.action;
              temp_array.items.push(item_data);
            }
            this.main_arr.push(temp_array);
          }
        })

    },
  },
  mounted(){
      this.branch_id=this.selected_branch_id;
      this.get_plans();
  },
  computed:{
    ...mapGetters({selected_branch_id:'SelectedBranch'})
  }
};
</script>

<style>
.create_btn{
    background: #00A1E4;
    padding: 2px 25px;
}
</style>