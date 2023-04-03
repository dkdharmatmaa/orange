<template>
  <div class="">
    <div class="w-md-50 fw-700">
      <h3 class="fw-700">Form</h3>
      <div class="bg-white p-10 mt-5 rounded">
        <b-form-group>
        <label for="input-1">Name</label>
          <b-form-input
            id="input-1"
            type="text"
            v-model="entry_form.name"
            required
            placeholder="Enter name"
            class="ml-1 input-box"
            :class="{ 'is-invalid': entry_form.errors.has('name') }"
          >
          </b-form-input>
          <has-error :form="entry_form" field="name"></has-error>
        </b-form-group>
         <div class="d-flex">
         <div class="mr-3 w-50">
          <div>
            <label for="input-2">Date</label>
            <Datepicker v-model="entry_form.date" format="yyyy-MM-dd" :class="{ 'is-invalid': entry_form.errors.has('date') }"></Datepicker>
            <has-error :form="entry_form" field="date"></has-error>
          </div>
         </div>
          <div class="ml-3 w-50">
            <b-form-group>
          <label for="input-3">MBO ID</label>
          <b-form-input
            id="input-3"
            type="text"
            v-model="entry_form.mbo_id"
            required
            placeholder="Enter mbo id"
            class="ml-1 input-box"
            :class="{ 'is-invalid': entry_form.errors.has('mbo_id') }"
          >
          </b-form-input>
          <has-error :form="entry_form" field="mbo_id"></has-error>
          </b-form-group>
          </div>
        </div>
        <div class="d-flex mt-2">
         <div class="mr-3 w-50">
           <b-form-group>
         <label for="input-4">Phone number</label>
          <b-form-input
            id="input-4"
            v-model="entry_form.phone_number"
            type="text"
            required
            placeholder="Enter phone number"
            class="mx-1 input-box"
            :class="{ 'is-invalid': entry_form.errors.has('phone_number') }"
          >
          </b-form-input>
          <has-error :form="entry_form" field="phone_number"></has-error>
          </b-form-group>
         </div>
          <div class="ml-3 w-50">
            <b-form-group>
          <label for="input-5">Email</label>
          <b-form-input
            id="input-5"
            type="text"
            v-model="entry_form.email"
            required
            placeholder="Enter email id"
            class="ml-1 input-box"
            :class="{ 'is-invalid': entry_form.errors.has('email') }"
          >
          </b-form-input>
          <has-error :form="entry_form" field="email"></has-error>
          </b-form-group>
          </div>
        </div>
        <b-form-group>
        <label for="input-6">Product</label>
          <b-form-select
            id="input-6"
            v-model="entry_form.product_id"
            :options="options_product"
            class="ml-1 input-box text-seconday"
            @change="getFrequency()"
            required
            :class="{ 'is-invalid': entry_form.errors.has('product_id') }"
          >
          </b-form-select>
          <has-error :form="entry_form" field="product_id"></has-error>
        </b-form-group>
        <b-form-group>
        <label for="input-7">Payment type</label>
          <b-form-select
            id="input-7"
            v-model="entry_form.payment_type"
            :options="options_payment"
            class="ml-1 input-box text-seconday"
            required
            :class="{ 'is-invalid': entry_form.errors.has('payment_type') }"
          >
          </b-form-select>
          <has-error :form="entry_form" field="payment_type"></has-error>
        </b-form-group>
        <b-form-group>
        <label for="input-8">Frequency</label>
          <b-form-select
            id="input-8"
            v-model="entry_form.frequency"
            :options="options_frequency"
            class="ml-1 input-box text-seconday"
            required
            :class="{ 'is-invalid': entry_form.errors.has('frequency') }"
          >
          </b-form-select>
          <has-error :form="entry_form" field="frequency"></has-error>
        </b-form-group>
        <div class="d-flex mt-2">
         <div class="mr-3">
           <b-form-group>
         <label for="input-9">Membership pricing</label>
          <b-form-input
            id="input-9"
            v-model="entry_form.membership_price"
            type="number"
            step="0.01"
            required
            placeholder="Membership price"
            class="mx-1 input-box"
            :class="{ 'is-invalid': entry_form.errors.has('membership_price') }"
          >
          </b-form-input>
          <has-error :form="entry_form" field="membership_price"></has-error>
          </b-form-group>
         </div>
          <div class="ml-3 mr-3">
            <b-form-group>
          <label for="input-10">Advance payment</label>
          <b-form-input
            id="input-10"
            type="number"
            step="0.01"
            v-model="entry_form.advance_payment"
            required
            placeholder="Enter advance payment"
            class="ml-1 input-box"
            :class="{ 'is-invalid': entry_form.errors.has('advance_payment') }"
          >
          </b-form-input>
          <has-error :form="entry_form" field="advance_payment"></has-error>
          </b-form-group>
          </div>
          <div class="ml-3">
            <b-form-group>
          <label for="input-11">Recurring amount</label>
          <b-form-input
            id="input-11"
            type="number"
            step="0.01"
            v-model="entry_form.recurring_amount"
            required
            placeholder="Enter recurring amount"
            class="ml-1 input-box"
            :class="{ 'is-invalid': entry_form.errors.has('recurring_amount') }"
          >
          </b-form-input>
          <has-error :form="entry_form" field="recurring_amount"></has-error>
          </b-form-group>
          </div>
        </div>
        <div class="mb-4" v-if="entry_form.payment_type=='Online'">
         <label>Billing terms</label>
          <div class="installment-class p-3">
          <div class="d-flex mt-2">
          <div class="mr-3 w-50">
          <div>
            <label for="input-12">From</label>
            <Datepicker v-model="entry_form.installment_from" format="yyyy-MM-dd" :class="{ 'is-invalid': entry_form.errors.has('installment_from') }"></Datepicker>
            <has-error :form="entry_form" field="installment_from"></has-error>
          </div>
          </div>
          <div class="ml-3 w-50">
          <div>
            <label for="input-13">To</label>
            <Datepicker v-model="entry_form.installment_to" format="yyyy-MM-dd" :class="{ 'is-invalid': entry_form.errors.has('installment_to') }"></Datepicker>
            <has-error :form="entry_form" field="installment_to"></has-error>
          </div>
          </div>
        </div>
        <div class="d-flex mt-2">
          <div class="mr-3 w-50">
            <b-form-group>
          <label for="input-14">Amount per month</label>
            <b-form-input
              id="input-14"
              v-model="entry_form.installment_amount"
              type="text"
              required
              placeholder="Enter installment amount"
              class="mx-1 input-box"
              :class="{ 'is-invalid': entry_form.errors.has('installment_amount') }"
            >
            </b-form-input>
            <has-error :form="entry_form" field="installment_amount"></has-error>
            </b-form-group>
          </div>
          <div class="ml-3 w-50">
            <b-form-group>
          <label for="input-15">No. of installment</label>
          <b-form-input
            id="input-15"
            type="text"
            v-model="entry_form.no_of_installment"
            required
            placeholder="Enter number of installment"
            class="ml-1 input-box"
            :class="{ 'is-invalid': entry_form.errors.has('no_of_installment') }"
          >
          </b-form-input>
          <has-error :form="entry_form" field="no_of_installment"></has-error>
          </b-form-group>
          </div>
        </div>
        </div>
        </div>
        <b-form-group class="mb-7">
        <label for="input-17">Branch</label>
          <b-form-select
            id="input-17"
            v-model="entry_form.branch_id"
            :options="options_branch"
            class="ml-1 input-box text-seconday"
            required
            :class="{ 'is-invalid': entry_form.errors.has('branch_id') }"
          >
          </b-form-select>
          <has-error :form="entry_form" field="branch_id"></has-error>
        </b-form-group>
        <b-form-group>
        <label for="input-18">Comment</label>
           <b-form-textarea
            id="input-18"
            v-model="entry_form.comment"
            placeholder="Comment here..."
            rows="3"
            max-rows="6"
            :class="{ 'is-invalid': entry_form.errors.has('comment') }"
          ></b-form-textarea>
          <has-error :form="entry_form" field="comment"></has-error>
        </b-form-group>
        <b-form-group>
          <input type="checkbox" id="scales" name="scales" value="1" v-model="entry_form.is_email" class="w-0"> Send Email Receipt
        </b-form-group>
        <div class="alert alert-success mt-3" role="alert" id="fade">
          <span class="font-weight-bolder font-size-h6">Saved Successfully</span>
        </div>
        <div class="w-lg-25 w-md-50">
          <button class="btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white" v-on:click="onSubmit">
            <div class="spinner-border text-white" v-if="submit_spinner"></div>
            <div class="text-nowrap" v-else><span v-if="entry_form.payment_type=='Online'">Proceed</span><span v-else>Save details</span></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ApiService from "@/core/services/api.service";
import Datepicker from 'vuejs-datepicker';
export default {
  components:{
    Datepicker
  },
  data() {
    return {
      entry_form: new Form({
        id: "",
        name: "",
        date: new Date(),
        mbo_id: "",
        email: "",
        phone_number: "",
        product_id: "",
        payment_type: "",
        frequency: "",
        membership_price: "",
        advance_payment: "",
        recurring_amount: "",
        installment_from: new Date(),
        installment_to: new Date(),
        installment_amount: "",
        no_of_installment: "",
        branch_id: "",
        comment: "",
        is_email: "",
      }),
      options_branch: [],
      options_product: [],
      options_frequency:[
        { value: "", text: "Select frequency" }
      ],
      all_product:[],
      options_payment:[
        { value: "", text: 'Select payment type' },
        { value: 'Debit/Credit card', text: 'Debit/Credit card' },
        { value: 'Upi', text: 'Upi' },
        { value: 'QR code scan', text: 'QR code scan' },
        { value: 'Cash', text: 'Cash' },
        { value: 'Online', text: 'Online' }
      ],
      submit_spinner: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.entry_form.post("/admin/entry")
        .then(({ data }) => {
          this.entry_form.reset();
          this.entry_form.clear();
          this.entry_form.date=new Date();
          this.entry_form.installment_from=new Date();
          this.entry_form.installment_to=new Date();
          this.submit_spinner = false;
          if(data.payment_type=='Online')
          location.href = `/api-view/${data.order_id}`;
          $('#fade').fadeToggle(1000);
           $('#fade').fadeToggle(1000);
        })
        .catch((err) => {
          this.submit_spinner = false;
        });
    },
    getFrequency(){
      let option=JSON.parse(this.all_product[this.entry_form.product_id][0]['frequency']);
      option.forEach((item, index)=>{
       this.options_frequency.push({value:item,text:item});
       })
       this.entry_form.membership_price=this.all_product[this.entry_form.product_id][0]['price'];
    },
    getBranches() {
      ApiService.get(`/admin/all-branch-option`).then(({ data }) => {
        let branch_option = [];
        branch_option.push({ value: "", text: "Select branch" });
        for (let i = 0; i < data.length; i++) {
          branch_option.push({value: data[i]["id"],text: data[i]["branch_name"]});
        }
        this.options_branch = branch_option;
      });
    },
    getProduct() {
      ApiService.get(`/admin/product-option`).then(({ data }) => {
        let product_option = [];
        this.all_product=data;
        product_option.push({ value: "", text: "Select product" });
        for (var obj in data) {
          product_option.push({value: data[obj][0]["id"],text: data[obj][0]["name"]});
        }
        this.options_product = product_option;
      });
    },
  },
  mounted() {
    this.getBranches();
    this.getProduct();
  },
};
</script>
<style scoped>
.fw-700 {
  font-weight: 700;
}
.input-box {
  border: 1px silver solid;
}
.create_btn {
  background: #ED700F;
  border-radius: 20px;
}
#fade {
  display: none;
}
.installment-class{
  border: 1px silver solid !important;
}
</style>
<style>
.vdp-datepicker{
  border: 1px solid silver;
  padding: 7px;
  background: #F1EFEF !important;
  width: 100% !important;
  border-radius: 0 !important;
}
.vdp-datepicker input{
  border: none;
  background: #F1EFEF !important;
}
.vdp-datepicker input:focus{
  border: none !important;
}
</style>