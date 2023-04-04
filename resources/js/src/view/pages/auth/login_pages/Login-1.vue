<template>
   <div class="login login-1 row login-banner" :class="{'login-signin-on': this.state == 'signin','login-signup-on': this.state == 'signup','login-forgot-on': this.state == 'forgot',}" id="kt_login">
   <div class="login-trans w-25">
   <!--begin::Signin-->
          <div class="login-form login-signin">
            <form class="form" novalidate="novalidate" id="kt_login_signin_form">
              <div class="pb-10">
                 <h2 class="fw-700 text-white">Login</h2>
              </div>
              <div class="p-3 text-center" v-if="errors=='Unauthorized'"><span class="text-danger h6">Invalid email or password</span></div>
              <div class="form-group">
                  <input
                    class="login-input"
                    type="text"
                    name="email"
                    ref="email"
                    v-model="form.email"
                    placeholder="Email address"
                  />
              </div>
              <div class="form-group">
                <input
                    class="login-input"
                    type="password"
                    name="password"
                    ref="password"
                    v-model="form.password"
                    autocomplete="off"
                    placeholder="Password"
                  />
              </div>
              <div class="">
                  <div class="float-left d-flex" style="margin-top: -3px;"><input type="checkbox" style="margin-top: 4px; width: 15px !important;" />&nbsp; <span class="text-muted font-weight-bolder mt-1">Remember me</span></div>
                  <a class="text-muted font-weight-bolder float-right cursor-pointer" id="kt_login_forgot" @click="showForm('forgot')">Forgot Password ?</a>
              </div><br><br>
              <div><hr class="bg-primary-color"></div>
              <div>
                <button ref="kt_login_signin_submit" class="mt-7 login-btn" type="submit"> Login </button>
              </div>
            </form>
          </div>
          <!--end::Signin-->
          <!--begin::Forgot-->
          <div class="login-form login-forgot">
            <!--begin::Form-->
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_forgot_form"
              ref="kt_login_forgot_form"
              @submit.prevent="requestResetPassword"
            >
              <div class="pb-5 pt-lg-0 pt-5">
                <h4 class="font-weight-bolder text-white font-size-h4 font-size-h1-lg">Forgotten Password ?</h4>
                <p class="text-muted font-weight-bold font-size-h5">Enter your email to reset your password</p>
              </div>
              <div class="text-success mt-2 ml-2 h5" v-if="email_send">Password reset link has been sent to your email.</div>
              <div class="text-danger mt-2 ml-2" v-if="check_email">Invalid email.</div>
              <div class="form-group">
                <input
                  class="login-input"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  autocomplete="off"
                  v-model="email"
                />
              </div>
              <div class="form-group d-flex">
                <button type="submit" id="kt_login_forgot_submit" class="login-btn text-nowrap">Send Link</button>
                <button type="button" id="kt_login_forgot_cancel" class="login-btn ml-3" @click="showForm('signin')">Cancel</button>
              </div>
            </form>
          </div>
          <!--end::Forgot-->
   </div>  
          <!--end::Content-->
      <img src="/media/custome/orange-logo.png" alt="orange logo" class="logo-pos" />
   </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import axios from "axios";
// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
import { LOGIN, LOGOUT } from "@/core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  name: "login-1",
  data() {
    return {
      state: "signin",
      email_send: false,
      check_email: false,
      email: "",
      // Remove this dummy login info
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return (
        process.env.BASE_URL + "media/svg/illustrations/login-visual-1.svg"
      );
    },
  },
  mounted() {
    const signin_form = KTUtil.getById("kt_login_signin_form");
    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Username is required",
            },
          },
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required",
            },
          },
        },
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap(),
      },
    });
    this.fv.on("core.form.valid", () => {
      var email = this.form.email;
      var password = this.form.password;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // send login request
      this.$store.dispatch(LOGIN, { email, password });
    });

    this.fv.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false,
      });
    });
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    },
    requestResetPassword() {
      axios
        .post("/Forgotpassword", { email: this.email })
        .then((result) => {
          this.email_send = true;
          this.check_email = false;
        })
        .catch((err) => {
          this.check_email = true;
          this.email_send = false;
        });
    },
  },
};
</script>
<style scoped>
.login-banner {
  /* The image used */
  background-image: url("/media/custome/login-banner.png");
  /* Full height */
  height: 70%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.logo-pos{
    width: 25%;
    height: fit-content;
    position: absolute;
    bottom: 15%;
    left: 20%;
}
.login-trans{
  background: rgba(0, 0, 0, 0.8);
  padding: 3%;
  height: fit-content;
  position: absolute;
  bottom: 15%;
  right: 4.5%;
}
.login-input{
    padding: 10px;
    width: 100%;
    border: 0;
}
.login-btn{
    background: #ED700F;
    border: 0;
    padding: 2% 8%;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-weight: 700;
}
</style>
