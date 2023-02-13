<template>
  <div class="mt-5">
    <div class="d-flex ml-2 justify-content-between">
          <div>
              <h2 class="font-weight-bolder">Financial aid matrix</h2>
          </div>
          <div class="d-flex">
              <b-form-group class="ml-3">
                <b-form-select id="input-4" v-model="branch_id" :options="options_branch" @change="get_plans()" class="input-box text-seconday" required></b-form-select>
              </b-form-group>
             <div>
               <button class="btn create_btn font-weight-bold py-2 ml-2"><router-link class="text-white" to="/admin/new-matrix">Add plans</router-link></button>
             </div>
          </div>
    </div>

       <div class="mt-2" id="table_data">
      <div v-for="single_arr in main_arr">
          <h5 class="font-weight-bolder my-5">INCOME BAND - ${{single_arr['minmum_range']}}-${{single_arr['maximum_range']}} <router-link :to="'/admin/edit-matrix/'+branch_id+'/'+single_arr['minmum_range']+'/'+single_arr['maximum_range']"><span><i class="fas fa-edit"></i></span></router-link> | <span class="text-danger" v-on:click="delete_matrix(single_arr['minmum_range'])"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></span></h5>
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
export default {
  name: "adminallassociation",
  data() {
    return {
     main_arr:[],
     branch_id:'',
     options_branch:[],
    };
  },
  methods: {
    get_plans(){
      this.main_arr=[];
      ApiService.get(`/admin/all-matrix/${this.branch_id}`)
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
    getBranches(){
            ApiService.get(`/admin/all-branch`)
            .then(({ data }) => {
                let branch_option=[];
                branch_option.push({value:"",text:"Select branch"})
                for(let i=0;i<data.length;i++){
                    branch_option.push({value:data[i]['id'],text:data[i]['name']});  
                }
                this.options_branch=branch_option;
            })
    },
    delete_matrix(minmum_range){
      var proceed = confirm("Are you sure you want to delete this matrix?");
      if(proceed){
       ApiService.delete(`/admin/delete-matrix/${minmum_range}/${this.branch_id}`)
        .then(({ data }) => {
          this.get_plans();
        })
      }
    }
  },
  mounted(){
    this.getBranches();
  },
};
</script>

<style>
.create_btn{
    background: #00A1E4;
    padding: 2px 25px;
}
</style>