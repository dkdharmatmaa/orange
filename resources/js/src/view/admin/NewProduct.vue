<template>
  <div class="mt-10 p-5">
    <b-form @submit="onSubmit" class="w-md-50 fw-700">
      <h3 class="fw-700">{{action_name}} product</h3>
      <div class="bg-white p-10 mt-5 rounded">
        <b-form-group>
            <b-form-input
                id="input-1"
                v-model="product_form.name"
                type="text"
                required
                placeholder="Name"
                class="mx-1 input-box"
                :class="{ 'is-invalid': product_form.errors.has('name') }"
            ></b-form-input>
            <has-error :form="product_form" field="name"></has-error>
        </b-form-group>
        <b-form-group>
        <b-form-input
        id="input-1"
        v-model="product_form.duration"
        type="text"
        required
        placeholder="Duration"
        class="mx-1 input-box"
        :class="{ 'is-invalid': product_form.errors.has('duration') }"
        ></b-form-input>
        <has-error :form="product_form" field="duration"></has-error>
        </b-form-group>
        <b-form-group>
         <treeselect
            :options="options_frequency"
            v-model="product_form.frequency"
            :multiple="true"
            :searchable="true"
            placeholder="Frequency"
          >
          </treeselect>
        </b-form-group>
        <b-form-group>
        <b-form-input
        id="input-2"
        v-model="product_form.price"
        type="number" 
        step="0.01"
        required
        placeholder="Product Pricing"
        class="mx-1 input-box"
        :class="{ 'is-invalid': product_form.errors.has('price') }"
        ></b-form-input>
        <has-error :form="product_form" field="price"></has-error>
        </b-form-group>
        <div class="alert alert-success mt-3" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
         <div class="w-25"><button  class="btn font-weight-bolder font-size-h6 py-3 w-100 bg-primary-color text-white mt-3" style="border-radius: 20px;">{{action}} product</button></div>
      </div>
    </b-form>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  data() {
    return {
      product_form:new Form({  
        id:"",
        name: "",
        duration:"",
        frequency: [],
        price: "",
      }),
      options_frequency:[
          {
              id:'One time',
              label:'One time',
          },
          {
              id:'Weekly',
              label:'Weekly',
          },
          {
              id:'Monthly',
              label:'Monthly',
          },
          {
              id:'Bi monthly',
              label:'Bi monthly',
          },
          {
              id:'Quarterly',
              label:'Quarterly',
          },
          {
              id:'Half yearly',
              label:'Half yearly',
          },
          {
              id:'Yearly',
              label:'Yearly',
          },
      ],
      action: 'Create',
      action_name: 'Create',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(this.action=='Create'){
        this.product_form.post("/admin/create-product")
        .then(({ data }) => {
          this.$router.push('/admin/product');
        })
        .catch(err => {
        });
      }
      else{
        this.product_form.put(`/admin/edit-product/${this.product_form.id}`)
        .then(({ data }) => {
           $('#fade').fadeToggle(1000);
           $('#fade').fadeToggle(1000);
        })
      }
    },
    getData(id){
      ApiService.get(`/admin/all-product/${id}`)
        .then(({ data }) => {
          this.product_form.fill(data)
          this.product_form.frequency=JSON.parse(data['frequency'])
        })
    },
  },
  mounted(){
   if(this.get_item){
      this.getData(this.get_item);
      this.action='Save';
      this.action_name='Edit'
   }
  },
  computed: {
    get_item: function(){
      if(this.$route.params.id)
      return this.$route.params.id;
      else
      return 0;
    },
  },
};
</script>
<style scoped>
.fw-700{
    font-weight: 700;
}
.input-box{
    border: 1px silver solid;
}
#fade{
  display: none;
}
</style>
