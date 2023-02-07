<template>
  <div class="mt-5">
    <div class="d-flex ml-2 justify-content-between">
          <div>
              <h2 class="font-weight-bolder">Financial aid matrix</h2>
          </div>
          <div class="d-flex">
              <b-form-group class="ml-3">
                <b-form-select id="input-3" v-model="association_id" :options="options_association" @change="getBranches()" class="input-box text-seconday" required></b-form-select>
              </b-form-group>
              <b-form-group class="ml-3">
                <b-form-select id="input-4" v-model="branch_id" :options="options_branch" @change="get_plans()" class="input-box text-seconday" required></b-form-select>
              </b-form-group>
             <div>
               <button class="btn create_btn font-weight-bold py-2 ml-2"><router-link class="text-white" to="/superadmin/new-matrix">Add plans</router-link></button>
             </div>
          </div>
    </div>

       <div class="mt-2" id="table_data">
      <div v-for="single_arr in main_arr">
          <h5 class="font-weight-bolder my-5">INCOME BAND - ${{single_arr['minmum_range']}}-${{single_arr['maximum_range']}} <router-link :to="'/superadmin/edit-matrix/'+association_id+'/'+branch_id+'/'+single_arr['minmum_range']+'/'+single_arr['maximum_range']"><span><i class="fas fa-edit"></i></span></router-link></h5>
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
  name: "superadminallassociation",
  data() {
    return {
     main_arr:[],
     association_id:'',
     branch_id:'',
     options_association:[],
     options_branch:[],
    };
  },
  methods: {
    get_plans(){
      if(this.association_id && this.branch_id){
      ApiService.get(`/superadmin/all-matrix/${this.association_id}/${this.branch_id}`)
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
      }
      else{
        alert("Select correct Association and Baranch");
      }
    },
     getAssociation(){
        this.options_branch.push({value:"",text:"Select branch"})
        ApiService.get(`/superadmin/all-admin`)
        .then(({ data }) => {
            let association_option=[];
            association_option.push({value:"",text:"Select association"})
            for(let i=0;i<data.length;i++){
                association_option.push({value:data[i]['id'],text:data[i]['name']});  
            }
            this.options_association=association_option;
        })
    },
    getBranches(){
        if(this.association_id){
            ApiService.get(`/superadmin/all-branch/0/${this.association_id}`)
            .then(({ data }) => {
                let branch_option=[];
                branch_option.push({value:"",text:"Select branch"})
                for(let i=0;i<data.length;i++){
                    branch_option.push({value:data[i]['id'],text:data[i]['name']});  
                }
                this.options_branch=branch_option;
            })
        }
    },
    delete_matrix(id){
      var proceed = confirm("Are you sure you want to delete this matrix?");
      if(proceed){
       ApiService.delete(`/superadmin/delete-matrix/${id}`)
        .then(({ data }) => {
          this.get_plans();
        })
      }
    }
  },
  mounted(){
    this.getAssociation();
  },
};
</script>

<style>
.create_btn{
    background: #00A1E4;
    padding: 2px 25px;
}
</style>