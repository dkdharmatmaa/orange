"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_pages_auth_Rules_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Rules",
  data: function data() {
    return {};
  },
  methods: {
    active_menu: function active_menu(section_id) {
      //for manu
      $('.nav-menu').removeClass('active-class');
      $("#".concat(section_id)).addClass('active-class');
      //for data
      $('.data-section').hide();
      $("#".concat(section_id, "-data")).show();
    }
  },
  mounted: function mounted() {
    this.active_menu(this.$route.params.role);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=template&id=093b178c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=template&id=093b178c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row mt-20 mb-10"
  }, [_c("div", {
    staticClass: "col-3 pr-2p"
  }, [_c("div", {
    staticClass: "main-menu"
  }, [_c("ul", [_c("li", {
    staticClass: "nav-menu",
    attrs: {
      id: "about"
    },
    on: {
      click: function click($event) {
        return _vm.active_menu("about");
      }
    }
  }, [_vm._v("About Us")]), _vm._v(" "), _c("li", {
    staticClass: "nav-menu",
    attrs: {
      id: "terms"
    },
    on: {
      click: function click($event) {
        return _vm.active_menu("terms");
      }
    }
  }, [_vm._v("Terms & Conditions")]), _vm._v(" "), _c("li", {
    staticClass: "nav-menu",
    attrs: {
      id: "product"
    },
    on: {
      click: function click($event) {
        return _vm.active_menu("product");
      }
    }
  }, [_vm._v("Subscription Payment Plan")]), _vm._v(" "), _c("li", {
    staticClass: "nav-menu",
    attrs: {
      id: "privacy"
    },
    on: {
      click: function click($event) {
        return _vm.active_menu("privacy");
      }
    }
  }, [_vm._v("Privacy Policy")]), _vm._v(" "), _c("li", {
    staticClass: "nav-menu",
    attrs: {
      id: "refund"
    },
    on: {
      click: function click($event) {
        return _vm.active_menu("refund");
      }
    }
  }, [_vm._v("Refund Policy")]), _vm._v(" "), _c("li", {
    staticClass: "nav-menu",
    attrs: {
      id: "cancellation"
    },
    on: {
      click: function click($event) {
        return _vm.active_menu("cancellation");
      }
    }
  }, [_vm._v("Cancellation Policy")]), _vm._v(" "), _c("li", {
    staticClass: "nav-menu",
    attrs: {
      id: "contact"
    },
    on: {
      click: function click($event) {
        return _vm.active_menu("contact");
      }
    }
  }, [_vm._v("Contact Us")]), _vm._v(" "), _c("li", {
    staticClass: "nav-menu",
    attrs: {
      id: "pricing"
    },
    on: {
      click: function click($event) {
        return _vm.active_menu("pricing");
      }
    }
  }, [_vm._v("Pricing")])])])]), _vm._v(" "), _vm._m(0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-7 pl-3p fs-16"
  }, [_c("div", {
    staticClass: "data-section",
    attrs: {
      id: "about-data"
    }
  }, [_c("div", [_c("p", [_c("strong", [_vm._v("About Us: ")]), _vm._v(" Orangetheory is a 1-hour, full body workout, focused on training Endurance, Strength, and Power. We use Heart Rate Based Interval Training, which burns more calories post workout than traditional exercise. When wearing our Heart Rate monitors, your real time results are displayed on large screens throughout the studio. Intensity is based on your individual Heart Rate zones, making the workout effective for all fitness levels. To top it off, our fitness coaches lead the workout to prevent you from over or under training.")])])]), _vm._v(" "), _c("div", {
    staticClass: "data-section",
    attrs: {
      id: "terms-data"
    }
  }, [_c("div", [_c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_c("u", [_vm._v("BUSINESS RULES & POLICIES:")])])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("p", [_vm._v("These Rules & Policies, as modified and amended from time-to-time (the “"), _c("u", [_vm._v("Rules & Policies")]), _vm._v("”), are incorporated into and a part of the Client Intake Form, Membership Agreement and/or Package Holder Agreement with us (collectively referred to as the “"), _c("u", [_vm._v("Studio User Documents")]), _vm._v("”), as applicable. Neither OTF Franchisor, LLC (the “Franchisor”), Ultimate Fitness Group, LLC, Envisage Fitness Private Limited, Envisage Studio Private Limited nor any of their past, present, or future parents, subsidiaries, predecessors, successors, entities under common ownership, assigns, or affiliates, or their respective officers, directors, incorporators, members, partners, owners, agents, management, controlling parties, entities under common control, vendors, suppliers, service providers, investors, attorneys, employees, or representatives (collectively, the “Franchisor Parties”), is a party to the Studio User Documents or the Rules & Policies.  Capitalized terms used but not defined in the Rules & Policies have the meanings given to them in the applicable Studio User Document. Unless otherwise noted, the term “Class” as used herein refers to any in studio, outdoor, online, or other fitness class or physical activity provided by us or any other Orangetheory Fitness Studio.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Diversity, Equity, and Inclusion")]), _vm._v(": Orangetheory is MORE than a studio. We are an embracing commUNITY committed to a culture that celebrates diversity and is driven by each person's unique contributions. Our environment is an inclusive space of belonging for ALL people. We appreciate, respect, and welcome ALL races, skin colors, genders, nationalities, religions, sexual orientations, gender identities, ages, and sizes. Each individual is esteemed for their differences and our members are expected to embody these same values of championing diversity, inclusion, and belonging by respecting everyone at all times while present at the studio. Only then can we deliver MORE LIFE. FOR ALL.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Advance Notice of Changes")]), _vm._v(": We may change the charges and/or amounts for late cancellation, no shows, or other fees, similar to the recurring monthly membership payment or the price for additional sessions per month as reflected in the Membership Agreement, after providing you written notice at least thirty (30) days in advance of such a change, to be mailed or emailed to you at the address(es) you provide to us or to any updated mailing address or email address of which you notify us in writing.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Daily Booking Limit: ")]), _vm._v("To ensure all members can book classes, your daily class booking limit is 2 In-Studio classes per day.")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("8 Hour Class Cancellation Policy")]), _vm._v(": We enforce a strict 8-hour class cancellation policy. If you reserve a place in a class but fail to cancel 8 hours in advance and fail to show up for the class, you may forfeit a membership or package session "), _c("strong", [_c("em", [_vm._v("or")])]), _vm._v(", if you have  used your monthly membership or package sessions, you are not a member or package holder (i.e., you are a drop-in user at the studio) or you are a Premier member, as applicable, your credit card on file may be charged the amount for an additional session consistent with the terms of the applicable Studio User Document.  You may also be subject to an additional surcharge if such a surcharge is in place at the studio where you registered for a class.")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Late Arrival Policy")]), _vm._v(": We enforce a strict late arrival policy. If you are more than 6 minutes late for your class, you will not be permitted to enter the class and may forfeit a membership or package session or be charged for the class session as set forth above. This is to ensure time for a proper warmup prior to your workout.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Early Entry into Studio: ")]), _vm._v("For the safety of all members and guests, you will not be permitted in the workout area unless a coach is present.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Station Assignments:")]), _vm._v(" Studio staff will use a Station Assignment Worksheet to assign you to a workout station on a first-come, first-served basis. Depending on the class type (i.e., 2G or 3G) you may be able to request a station on either the treadmill, rower, or floor. You should follow your assigned station number throughout the class to help ensure a smooth and consistent experience for all members and guests. Stations will not be assigned more than 30 minutes prior to the start of class and can only be reserved for individuals who are present in the studio.")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Waitlist Procedure")]), _vm._v(": If you are a member or class package holder, you may add yourself, or request that a sales associate add you, to the waitlist of any normally scheduled class session. Being added to a waitlist, however, does not guarantee your entrance into a class. If you are on a waitlist for a class and a spot opens at least 8 hours in advance of the class, you will be automatically added into the class. If you fail to show up for the class, you may forfeit a membership or package session or be charged for the session as set forth above. Please see a studio sales associate for more details regarding the waitlist sign-up process.")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Dress Code Policy")]), _vm._v(": We want you to come to class fully prepared for strenuous activity: enclosed running shoes, athletic shorts/pants, athletic top, towel, and water bottle. Franchisees reserve the right to refuse entrance to any client who is not properly attired or is wearing clothing that may be considered offensive to other members such as a t-shirt with vulgar, sexually suggestive, or racially offensive language or graphics. Client cannot wear outdoor shoes to the studio. If you are refused entrance, you may forfeit a membership or package session or be charged for the session as set forth above.")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Children in the Studio")]), _vm._v(": Children under the age of 14 are not allowed in the studio at any time. Children ages 14-15 are permitted in the studio only if they are accompanied by a parent or legal guardian at all times, and the parent or legal guardian has first signed any required studio paperwork pertaining to such use. Children ages 16-17 are permitted in the studio and may work out without parental or legal guardian supervision or accompaniment, provided the parent or legal guardian has first signed any required studio paperwork pertaining to such use.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Participation in Online Classes")]), _vm._v(". We kindly ask that registration and participation in online classes be limited to your individual participation only.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Rules")]), _vm._v(": All rules and modifications to rules as provided and as posted in the studio or at www.orangetheoryfitness.com are part of your Studio User Documents, and you agree to comply with the same. If you fail to comply, your Studio User Documents may be terminated.")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Freeze Policy: ")]), _vm._v("Every membership comes with an option where the member can freeze their membership. Freezes can only be done for a minimum and maximum period of 15 days at once. ")]), _vm._v(" "), _c("p", [_vm._v("3 month Premier- Can freeze a total number of 1 time for 15 days. ")]), _vm._v(" "), _c("p", [_vm._v("6 months Premier- Can freeze a total number of 2 times for 30 days. ")]), _vm._v(" "), _c("p", [_vm._v("12 months Premier- Can freeze for a total number of 4 times for 60 days. ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v("In case of the Pregnancy or any other serious medical condition, members can apply to freeze their membership. A medical certificate from an authorized medical practitioner will be required, after which it will be reviewed, and it will be under our discretion to award the extra freeze days. ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Suspend Fee: ")]), _vm._v("You will be charged an additional fee, if you want to freeze your membership for an additional period of time apart from the time already given as part of your membership option. The fee can change overtime, please contact the studio for latest applicable fee.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Credit Card On File:")]), _vm._v(" All individual studio locations require that a credit card be placed on your profile for any purchases occurring at the studio. The credit card may be charged for in-studio purchases including, but not limited to, retail merchandise, beverages, late cancel fees, additional sessions or drop-in sessions for any classes taken beyond the membership level, and/or class package allotment and any applicable surcharges.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Session Capacity")]), _vm._v(": Orangetheory Fitness class sessions are limited in size and may reach capacity. Nothing in your Studio User Document guarantees your ability to attend class sessions that have reached capacity and for which you did not register in advance.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("OTbeat Heart Rate Monitor")]), _vm._v(": Orangetheory Fitness offers heart rate based, interval training fitness programs. We strongly encourage you to purchase and use an OTbeat Heart Rate Monitor. Otherwise, we rent loaner monitors for a fee, which are available on a first come, first- served basis, with first-time guests of a studio having priority. If you borrow an OTbeat Heart Rate Monitor from a studio and you do not return it, your credit card on file may be charged  or you will be asked to pay  the then-current retail price of such monitor. Please see a studio sales associate for more details regarding OTbeat Heart Rate Monitors for sale and rent.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Studio Timings:")]), _vm._v(" Monday- Thursday : 6:30 AM to 10:00 PM, Friday : 6:30 AM to 8:30 PM, Saturday : 8:00 AM to 6:00 PM, Sunday : 8:00 to 4: 00 PM. Studio Timings are subject to change. ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Cross club Usage: ")]), _vm._v("Active members will be allowed to access any Orangetheory Fitness Studio in India as long as the usage at any other studio apart from their home studio (The Studio they purchase the membership at) does not cross 20% of their total usage. If the utilization crosses more than 20% of the total usage, member will be denied access to the other studios. ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Cancellation Policy: ")]), _vm._v("Please review your Membership Agreement or contact your Home Studio for applicable membership cancellation options. Membership may be cancelled after the membership is over, by completing a membership cancellation form at your Home Studio or sending a cancellation notice to your Home Studio as provided in your Membership Agreement. To process membership cancellation, your membership status must be active. In the event your membership status is frozen, you must reactivate your membership in order for membership cancellation to be processed.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Heart Rate Monitors:")]), _vm._v(" All heart Rate monitors come with a warranty of 1 year. ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Refund Policy: ")]), _vm._v("This membership is not transferable and Non-Refundable at any conditions.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Upgrade Policy:")]), _c("strong", [_vm._v(" ")]), _vm._v("Membership or Class Packages cannot be upgraded at any point during membership, or the Class Packages are active. ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Contact Us")]), _c("strong", [_vm._v(": ")]), _vm._v("Your feedback is crucial to us in deciding our future services and where we can improve them. To help us do our best, please share your feedback with us. You can write it us at "), _c("a", {
    attrs: {
      href: "mailto:support@orangetheoryindia.com"
    }
  }, [_vm._v("support@orangetheoryindia.com")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Privacy policy:")]), _vm._v(" please click here to refer to our "), _c("a", {
    attrs: {
      href: "http://www.privacypolicy.com/"
    }
  }, [_vm._v("privacy policy")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Pricing:")])]), _vm._v(" "), _c("p", [_vm._v("Our rates and fees vary based on studio, but your first workout is FREE. Contact your local studio to discuss pricing when you redeem your free workout.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_c("strong", [_c("em", [_vm._v("Medical Disclaimer:")])]), _vm._v(" "), _c("em", [_vm._v("The information and materials posted on or accessible through the website are for informational purposes only and are not intended to be a substitute for professional medical advice, diagnosis, or treatment. The Company does not recommend or endorse any specific products, procedure, opinions, or other information that may be mentioned on the Site. Reliance on any information provided by the Company, its affiliated companies, contributors to, or other users of the Site is solely at your own risk. ")])]), _vm._v(" "), _c("p", [_c("em", [_vm._v("You should consult your physician or other health care practitioner before starting any exercise program. This is particularly true if you or your family have a history of high blood pressure or heart disease, or if you have ever experienced discomfort while exercising. Never disregard professional medical advice or delay in seeking it because of something you have read on the Site.")])]), _vm._v(" "), _c("p", [_vm._v(" ")])])]), _vm._v(" "), _c("div", {
    staticClass: "data-section",
    attrs: {
      id: "privacy-data"
    }
  }, [_c("div", [_c("p", [_c("strong", [_c("em", [_vm._v("Privacy Policy")])])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("EFFECTIVE DATE: January 27, 2021")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v("Ultimate Fitness Group, LLC d/b/a Orangetheory® Fitness (“Ultimate,” “we,” “us,” or “our”) values your privacy. In this Privacy Policy (“Policy”), we describe how we collect, use, and disclose information we obtain about visitors to our website, www.orangetheoryfitness.com  (the “Site”), users of our mobile applications (the “App” or “Apps”), visitors to Orangetheory® Fitness studios (whether owned by Ultimate or one of our franchisees), and the services available through our Site and App, and how we use and disclose that information.")]), _vm._v(" "), _c("p", [_vm._v("This Policy does not apply to a franchisee’s collection, use, and disclosure of your information, except as described in this policy with regard to data sharing and change of a franchisee.")]), _vm._v(" "), _c("p", [_vm._v("By visiting the Site, using, or downloading the App, or using any of our services, you acknowledge that your personal information will be handled as described in this Policy. Where required under applicable law, we will obtain your consent to collect, use, transfer, or disclose your personal information. Your use of our Site, App, or services, and any dispute over privacy, is subject to this Policy and our Terms of Use, including its applicable limitations on damages and the resolution of disputes. The Terms of Use are incorporated by reference into this Policy.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ol", [_c("li", [_vm._v("THE INFORMATION WE COLLECT ABOUT YOU")])]), _vm._v(" "), _c("p", [_vm._v("We collect information (including sensitive personal information, as defined under applicable law) about you directly from you and from other parties, as well as automatically through your use of our Site and App, and where required by applicable law, with your consent. This information is collected, used, and disclosed by us for the purposes described in further detail in Sections 2 and 3 of this Privacy Policy.")]), _vm._v(" "), _c("p", [_c("strong", [_c("em", [_vm._v("Information We Collect Directly from You. ")])]), _vm._v("The information we collect from you depends on how you use our Site, App, and Services.")]), _vm._v(" "), _c("ul", [_c("li", [_c("strong", [_c("em", [_vm._v("To Sign Up for a Trial Workout Online.")])]), _vm._v("To sign up for a trial workout at an Orangetheory® Fitness studio through our Site or App, you must provide us with your name, email address, phone number, date of birth, your payment information"), _c("u", [_vm._v(" ")]), _vm._v("(in order to hold your trial workout reservation), and the studio you would like to attend for your workout. We also will collect information that you provide about any health conditions that could affect your ability to participate in a workout. If you do not provide this information, you will not be able to sign up for or participate in a trial workout."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("To Schedule or Purchase Sessions Online")])]), _c("strong", [_vm._v(".")]), _vm._v("To create an account to sign up for workout sessions or to purchase sessions online through our Site or our App, you must provide us with your name, physical address, email address, date of birth, phone number, height and weight, payment and billing information, and  username and password. If you complete a membership agreement or sign up for a fitness event, we also collect information that you provide about any health conditions that could affect your ability to participate in a workout. If you do not provide this information, you will not be able to create an online account, complete a membership agreement, or make a purchase."), _c("br"), _vm._v(" "), _c("br"), _vm._v(" We will also collect information about the workouts you schedule and information about your purchases, such as the class packages you purchase. You may also provide information about your preferences, such as your favorite studios and coaches."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("When You Visit an Orangetheory Fitness Studio.")])]), _vm._v("If you sign up for a trial workout or become an Orangetheory member by registering at an Orangetheory® Fitness studio (whether owned by Ultimate or one of our franchisees), you must provide us or our franchisee (as applicable) with your name, physical address, email address, date of birth, phone number, height and weight, marital status, emergency contact information, and payment and billing information. We or our franchisee (as applicable) also will collect information that you provide about any health conditions"), _c("u", [_vm._v(" ")]), _vm._v("that could affect your ability to participate in a workout. If you do not provide this information, we or our franchisee (as applicable) may not be able to offer our services to you."), _c("br"), _vm._v(" "), _c("br"), _vm._v(" We or our franchisee (as applicable) also will collect information about the workout sessions you schedule, details about your exercise frequency and goals (as provided by you), and information about your in-studio purchases, such as the class packages you purchase. We or our franchisee (as applicable) will also collect information when you check in for a workout, such as your name, address, email address, member number, and studio location. If you provide your information to a studio owned by one of our franchisees, the franchisee will share the information you provide to us — please see the Information We Collect from Franchisees section below."), _c("br"), _vm._v(" "), _c("br"), _vm._v(" As part of your workout session, you may choose to use our OTbeat heart rate monitors. If you do so, we will collect your workout session heart rate, and other workout statistics, such as the number of miles run or rowed."), _c("br"), _vm._v(" "), _c("br"), _vm._v(" At certain locations you have the option of voluntarily participating in a body scanning program. This scan will measure your body’s muscle mass, fat percentage, and total body water, and will report your overall body composition and body mass index (based on your height, weight, gender, and age). These scans help you understand the effects of your workouts."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("When You Express Interest in Purchasing an Orangetheory Franchise.")])]), _vm._v("If you express interest in owning an Orangetheory franchise, we will collect your name, physical address, email address, phone number, information about your finances, information about the location in which you are interested in starting your franchise, and any other information you provide to us with your submission."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("Information We Collect from Franchisees.")])]), _vm._v("As described above, if you visit an Orangetheory Fitness studio owned by one of our franchisees, you will be providing your information directly to the franchisee. When you provide your information to a franchisee (including your in-studio sign up information, purchases you make at a franchise, and your workout information), the franchisee will make this information available to Ultimate. The franchisee, however, handles all billing and account administration, including determining how your information is used for the franchisee’s own marketing purposes in accordance with applicable laws. If you register for a workout at a different location from your home studio, then the owners of both studios — the one at which you completed your workout and your home studio — will have access to information about your workout registration and participation. Information from your OTbeat heart rate monitor, however, is not shared among franchisees. For further information on how our franchisees process your information for their own purposes, please contact your studio."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("Information We Collect from Social Networking Sites.")])]), _vm._v("You may log into your online account or our Apps through Facebook. If you log in to your account or link your account to your Facebook profile, you must enter your Facebook email address and password. We will ask that you grant us permission to: (i) access your Facebook basic profile information (this includes your name, profile picture, gender, networks, user IDs, list of friends, date of birth, email address, and any other information you have set to public on your Facebook account); (ii) post to your wall; and (iii) access posts in your newsfeed. If you allow us to have access to this information, then we will have access to this information even if you have chosen not to make that information public through Facebook."), _c("br"), _vm._v(" "), _c("br"), _vm._v(" We store the information we receive from Facebook with other information that we collect from you or receive about you in accordance with this Policy. Any social networking site, such as Facebook, controls the information it collects from you pursuant to its own terms. For information about how a social networking site may use and disclose the information it collects about you, including any information you make public through the social networking site, please consult the social network’s privacy policy. We have no control over how any social networking sites use or disclose the personal information they collect about you."), _c("br"), _vm._v(" "), _c("br"), _vm._v(" We also collect information about you when you interact with us on social networking platforms. If you message us or tag us in a social network post, we will collect information about your message or the post we are tagged in.")])]), _vm._v(" "), _c("p", [_c("strong", [_c("em", [_vm._v("Information We Collect Automatically. ")])]), _vm._v("We automatically collect information about your use of our Site and Apps through cookies, web beacons, and other technologies, including technologies designed for mobile apps. To the extent permitted by applicable law, we combine this information with other information we collect about you, including your personal information. Please see the section “Cookies and Other Tracking Mechanisms” below for more information.")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Site:  ")])]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("domain name;")]), _vm._v(" "), _c("li", [_vm._v("your browser type and operating system;")]), _vm._v(" "), _c("li", [_vm._v("web pages you view on the Site; links you click on the Site; your IP address;")]), _vm._v(" "), _c("li", [_vm._v("the length of time you visit our Site and or use our Services;")]), _vm._v(" "), _c("li", [_vm._v("the referring URL, or the webpage that led you to our Site; and")]), _vm._v(" "), _c("li", [_vm._v("your device’s location information, with your permission, to help identify Orangetheory Fitness studios located in your area and to help us market the Orangetheory® Fitness services.")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("App:")])]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("mobile device ID; device name and model; operating system type, name, and version;")]), _vm._v(" "), _c("li", [_vm._v("language information;")]), _vm._v(" "), _c("li", [_vm._v("activities within the App; and the length of time that you are logged into our App;")]), _vm._v(" "), _c("li", [_vm._v("location information. With your permission, we will collect location information from your mobile device to: (1) track and map your out-of-studio run/walk workouts that you initiate in the App; (2) help you identify Orangetheory Fitness studios located in your area; and (3) to help us market the Orangetheory® Fitness services. You may turn off this feature through the location settings on your mobile device.")]), _vm._v(" "), _c("li", [_vm._v("Out-of-Studio Workouts: You may use the App to help you track your out-of-studio run/walk workouts. In addition to mapping your workout as described above, the we will collect the date and time of your workouts, the elevation of your workout, your speed and workout pace, your workout’s total distance, your step count and cadence, estimated calories burned, and, if you use a heart rate monitor during your workout, your heart rate data.")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "2"
    }
  }, [_c("li", [_vm._v("HOW WE USE YOUR INFORMATION")])]), _vm._v(" "), _c("p", [_vm._v("We use your information, including your personal information, for the following purposes:")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("To provide our services to you, to communicate with you about your use of our services, to respond to your inquiries, to fulfill your orders, and for other customer service purposes."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("To tailor the content and information we may send or display to you, to offer location customization, to offer personalized help and instructions, and to otherwise personalize your experiences while using the Site and App. For example, we will display upcoming workouts at your preferred studios, or we may use your location information to show you Orangetheory Fitness studios in your area. We also use information collected through OTbeat, body scans and your App out-of-studio workouts to customize workout programs and classes and to conduct workout challenges."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("For marketing and promotional purposes in accordance with applicable laws. For example, we use your information, such as your email address, to send you news and newsletters, special offers and promotions, or to otherwise contact you about products, services, workout sessions, or other information we think may interest you."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("We use your information (typically in the aggregate) to assist us in advertising the Orangetheory Fitness brand on unaffiliated websites and in evaluating the success of our adverting campaigns (including our online targeted advertising and offline promotional campaigns)."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("To better understand how users’ access and use our Site and Apps, both on an aggregated and individualized basis, in order to improve our Site and Apps and respond to user desires and preferences, and for other research and analytical purposes."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("To administer our membership reward program."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("To administer surveys and questionnaires, such as for market research or member satisfaction purposes."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("To develop our franchise program. For example, if you inquire about operating an Orangetheory franchise, we will use your information to assess your suitability for owning one of our franchises."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("To enable our franchisees to provide services to you in their independently owned and operated studios. In addition, if a franchisee leaves our franchise system, we will assist with facilitating the franchise’s transition to a new owner, including ensuring that the respective studio’s members’ personal information is transitioned to the new owner to ensure the members continue to receive services."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("To comply with legal and regulatory obligations, as part of our general business operations, and for other business administration purposes, including authenticating your identity, maintaining customer records, to monitor your compliance with any of your agreements with us, to collect debts owed to us, to safeguard our business interests, and to manage or transfer our assets or liabilities, for example in the case of an acquisition, disposition or ‎‎merger, as described below."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("Where we believe necessary to investigate, prevent or take action regarding illegal activities, suspected fraud or error, situations involving potential threats to the safety of any person, or violations of our Terms of Use or this Privacy Policy.")]), _vm._v(" "), _c("li", [_vm._v("For other purposes we may inform you about from time to time. Where required by applicable laws and regulations, we will obtain your consent if we wish to use your personal information for purposes other than those stated in this Policy.")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "3"
    }
  }, [_c("li", [_vm._v("HOW WE SHARE YOUR INFORMATION")])]), _vm._v(" "), _c("p", [_vm._v("We may share your information, including personal information, as follows:")]), _vm._v(" "), _c("ul", [_c("li", [_c("strong", [_c("em", [_vm._v("Workout Sessions and Challenges. ")])]), _vm._v("During a workout session, participants may share their name and OTbeat heart rate information with other session participants on our in-studio display screens. If you participate in a workout challenge, you may share your name and workout information with other challenge participants. You may also share information about your workouts and challenges you participate in with your social media accounts."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("Orangetheory Franchisees. ")])]), _vm._v("If we collect information from you requesting a trial workout in your area, we will provide that information to the local franchisee. When you sign up for a workout or schedule or purchase sessions through our Site or App or in-person at a studio, such information is hosted by Mindbody Inc. (“Mindbody”), a service provider under contract with Ultimate and our franchisees. All data hosted by Mindbody is made available to Ultimate and the franchise owner of your home studio (if applicable). If you complete a workout at a studio different from your home studio, then your data will be available to the owners of both studios. If a franchisee sells or otherwise transfers its franchise, we will transfer member information controlled by the outgoing franchisee to the successor franchisee. If you utilize a body scanner at a franchisee-owned studio, we will share your scan results with that franchisee."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("Health-focused Apps and Websites.")])]), _vm._v("With your consent, we may share your personal information, including workout and health data, with unaffiliated health-focused mobile applications and websites to help you track your health and wellness information. If you choose to share your information with these apps, your personal information, including your health information, will be used in accordance with those apps’ and websites’ own privacy policies, not this one. Before consenting to sharing your personal information with any third party apps or websites, you should make sure that you have read, understood, and agree to their own privacy policy and terms of use."), _c("br")]), _vm._v(" "), _c("li", [_vm._v("We may disclose the information we collect from you to our affiliates or subsidiaries; however, if we do so, their use and disclosure of your personally identifiable information will be subject to this Policy."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("Service Providers.")])]), _vm._v("We disclose the information we collect from you to our vendors, service providers, contractors, and agents who perform functions on our behalf. In particular, the workout sign-up portal is hosted by Mindbody; in addition, as noted above, when you register for a workout with a particular studio, your information is made available to the owner of that particular location and to Ultimate.")])]), _vm._v(" "), _c("p", [_vm._v("Where required by applicable laws, we will put in place appropriate security measures and/or request these third parties have in place security measures to protect your personal information.")]), _vm._v(" "), _c("p", [_vm._v("We also disclose information in the following circumstances:")]), _vm._v(" "), _c("ul", [_c("li", [_c("strong", [_c("em", [_vm._v("Business Transfers.")])]), _vm._v("If (i) we or our affiliates are or may be acquired by, merged with, or invested in by another company, or (ii) if any of our assets are or may be transferred to another company, whether as part of a bankruptcy or insolvency proceeding or otherwise, we may transfer the information we have collected from you to the other company. As part of the business transfer process, we will share certain of your personal information with lenders, auditors, and advisors, including attorneys and consultants."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("In Response to Legal Process.")])]), _vm._v("We also may disclose the information we collect from you in order to comply with the law, a judicial proceeding, or other legal process, such as in response to a court order or a subpoena."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("To Protect Us and Others. ")])]), _vm._v("We also may disclose the information we collect from you where we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, violations of our Terms of Use or this Policy, or where it is reasonably necessary as evidence in litigation in which Ultimate is involved."), _c("br")]), _vm._v(" "), _c("li", [_c("strong", [_c("em", [_vm._v("Aggregate and De-Identified Information.")])]), _vm._v("We may share aggregate, de-identified, or anonymized information about users and members with others for marketing, advertising, research, or similar purposes.")])]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("4. OUR USE OF COOKIES AND OTHER TRACKING MECHANISMS")])]), _vm._v(" "), _c("p", [_vm._v("We and our service providers use cookies and other tracking mechanisms to track information about your use of our Site and App. Where permitted under applicable law, we may combine this information with other personal information we collect from you (and our service providers may do so on our behalf).")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Cookies. ")]), _vm._v("Cookies are alphanumeric identifiers that we transfer to your computer’s hard drive through your web browser for record-keeping purposes. Some cookies allow us to make it easier for you to navigate our Site and App, while others are used to enable a faster log-in process or to allow us to track your activities at our Site and App.")]), _vm._v(" "), _c("p", [_c("strong", [_c("em", [_vm._v("Disabling Cookies.")])]), _vm._v(" Most web browsers automatically accept cookies, but if you prefer, you can edit your browser options to block them in the future. The Help portion of the toolbar on most browsers will tell you how to prevent your computer from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. Visitors to our Site who disable cookies will be able to browse certain areas of the Site, but some features may not function.")]), _vm._v(" "), _c("p", [_c("strong", [_c("em", [_vm._v("Clear GIFs, pixel tags and other technologies.")])]), _vm._v(" Clear GIFs are tiny graphics with a unique identifier, similar in function to cookies. In contrast to cookies, which are stored on your computer’s hard drive, clear GIFs are embedded invisibly on web or mobile application pages. We may use clear GIFs (aka web beacons, web bugs or pixel tags), in connection with our Site and App to, among other things, track the activities of Site visitors and App users, help us manage content, and compile statistics about usage of our Site and Apps. We and our service providers also use clear GIFs in HTML emails to our customers to help us track email response rates, identify when our emails are viewed, and track whether our emails are forwarded.")]), _vm._v(" "), _c("p", [_c("strong", [_c("em", [_vm._v("Analytics. ")])]), _vm._v("We use automated devices and applications, such as Adobe Analytics and Google Analytics, to evaluate usage of our Site, and to the extent permitted, our Apps. We also may use other analytic means to evaluate our Site and Apps. We use these tools to help us improve our Site’s and Apps’ performance and user experiences. These entities may use cookies and other tracking technologies, such as web beacons or local storage objects (LSOs), to perform their services. To opt-out of Adobe Analytics, please visit "), _c("a", {
    attrs: {
      href: "https://www.adobe.com/privacy/opt-out.html"
    }
  }, [_vm._v("https://www.adobe.com/privacy/opt-out.html")]), _vm._v(". To learn more about Google’s privacy practices, please review the Google Privacy Policy at "), _c("a", {
    attrs: {
      href: "https://www.google.com/policies/privacy/"
    }
  }, [_vm._v("https://www.google.com/policies/privacy/.")]), _vm._v(" You can also download the Google Analytics Opt-out Browser Add-on to prevent your data from being used by Google Analytics at "), _c("a", {
    attrs: {
      href: "https://tools.google.com/dlpage/gaoptout"
    }
  }, [_vm._v("https://tools.google.com/dlpage/gaoptout.")])]), _vm._v(" "), _c("p", [_c("strong", [_c("em", [_vm._v("Do Not Track. ")])]), _vm._v("Currently, our systems do not recognize browser “do-not-track” requests. You may, however, disable certain tracking as discussed in this section (e.g., by disabling cookies); you also may opt out of targeted advertising by following the instructions in the Ad Networks section.")]), _vm._v(" "), _c("p", [_c("strong", [_c("em", [_vm._v("Ad Networks.")])]), _vm._v(" We use network advertisers to serve advertisements on unaffiliated websites or other media (e.g., social networking platforms). This enables us and network advertisers to target advertisements to you for products and services in which you might be interested. Ad network providers, advertisers, sponsors, and/or traffic measurement services may use cookies, JavaScript, web beacons (including clear GIFs), Flash LSOs, and other tracking technologies to measure the effectiveness of their ads and to personalize advertising content to you. These cookies and other technologies are governed by each entity’s specific privacy policy, not this one. We may provide these advertisers with information, including personal information, about you.")]), _vm._v(" "), _c("p", [_vm._v("We may disclose certain information (such as your email address) to Facebook Custom Audiences (for more information on Facebook Custom Audience go "), _c("a", {
    attrs: {
      href: "https://www.facebook.com/privacy/explanation"
    }
  }, [_vm._v("here")]), _vm._v(" or to opt-out, go to the Facebook "), _c("a", {
    attrs: {
      href: "http://www.facebook.com/settings?tab=ads"
    }
  }, [_vm._v("ad preferences page")]), _vm._v(")—so that we can better target ads and content to you and others with similar interests on other websites or media (“Custom Audiences”). We may also work with other ad networks and marketing platforms that enable us and other participants to target ads to Custom Audiences submitted by us and others. You may also control how Facebook and other ad networks display certain ads to you, as explained further in their respective privacy policies or by using the opt-outs described below.")]), _vm._v(" "), _c("p", [_vm._v("Users in the United States may opt out of many ad networks. For example, you may go to the Digital Advertising Alliance (“DAA”) "), _c("a", {
    attrs: {
      href: "http://optout.aboutads.info/?c=2&lang=EN"
    }
  }, [_vm._v("Consumer Choice Page")]), _vm._v(" for information about opting out of interest-based advertising and their choices regarding having information used by "), _c("a", {
    attrs: {
      href: "https://digitaladvertisingalliance.org/participating"
    }
  }, [_vm._v("DAA companies")]), _vm._v(". You may also go to the Network Advertising Initiative (“NAI”) Consumer Opt-Out Page for information about opting out of interest-based advertising and their choices regarding having information used by "), _c("a", {
    attrs: {
      href: "http://www.networkadvertising.org/participating-networks"
    }
  }, [_vm._v("NAI members")]), _vm._v(". If you are in the EU, you may opt out of certain ad network cookies that we and other websites may use for targeted advertising through the European Interactive Digital Advertising Alliance (EDAA)   "), _c("a", {
    attrs: {
      href: "https://www.youronlinechoices.com/"
    }
  }, [_vm._v("Your Online Choices Page ")]), _vm._v("or "), _c("a", {
    attrs: {
      href: "http://www.youronlinechoices.eu/"
    }
  }, [_vm._v("www.aboutads.info")]), _vm._v(". Users in Australia may opt out of certain ad networks by going to the "), _c("a", {
    attrs: {
      href: "http://www.youronlinechoices.com.au/"
    }
  }, [_vm._v("Your Online Choices")]), _vm._v(" Page for information about opting-out of interest-based advertising and choices available from participating organizations. Users in Canada should go to the Digital Advertising Alliance Canada (“DAAC”) "), _c("a", {
    attrs: {
      href: "https://youradchoices.ca/en/tools"
    }
  }, [_vm._v("AdChoices Page")]), _vm._v(" for information about opting out of interest-based advertising and the choices available from DAAC members.")]), _vm._v(" "), _c("p", [_vm._v("Opting out from one or more companies listed on the DAA "), _c("a", {
    attrs: {
      href: "http://www.youronlinechoices.eu/"
    }
  }, [_vm._v("Consumer Choice Page")]), _c("u", [_vm._v(",")]), _vm._v("  the NAI "), _c("a", {
    attrs: {
      href: "http://optout.networkadvertising.org/?c=1"
    }
  }, [_vm._v("Consumer Opt-Out Page")]), _c("u", [_vm._v(", or a country- or region-specific consumer choice website")]), _vm._v(" will opt you out from those companies’ delivery of interest-based content or ads to you, but it does not mean you will no longer receive any advertising through our Site or on other websites. You may continue to receive advertisements, for example, based on the particular website that you are viewing (i.e., contextually based ads). Also, if your browsers are configured to reject cookies when you opt out on a consumer choice website, your opt out may not be effective.")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "5"
    }
  }, [_c("li", [_vm._v("LINKS")])]), _vm._v(" "), _c("p", [_vm._v("Our Site and Apps may contain links to unaffiliated entities’ websites. Any access to and use of such linked websites is not governed by this Policy, but instead is governed by the privacy policies of those websites. We are not responsible for the information practices of such websites.")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "6"
    }
  }, [_c("li", [_vm._v("SECURITY OF YOUR PERSONAL INFORMATION")])]), _vm._v(" "), _c("p", [_vm._v("We have implemented reasonable precautions to protect the information we collect from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. Please be aware that despite our efforts, no data security measures can guarantee security.")]), _vm._v(" "), _c("p", [_vm._v("You should take steps to protect against unauthorized access to your password, phone, and computer by, among other things, signing off after using a shared computer, choosing a robust password that nobody else knows or can easily guess, and keeping your log-in and password private. We are not responsible for any lost, stolen, or compromised passwords or for any activity on your account via unauthorized password activity.")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "7"
    }
  }, [_c("li", [_vm._v("ACCESS TO YOUR PERSONAL INFORMATION")])]), _vm._v(" "), _c("p", [_vm._v("You may review and modify personal information that you have submitted by logging into your account and updating your profile information. You may also update your information by visiting your Orangetheory Fitness studio. Please note that copies of information that you have updated, modified, or deleted may remain viewable in cached and archived pages of the Site or App for a period of time.")]), _vm._v(" "), _c("p", [_vm._v("If you are a resident of the European Union, please see the Additional Information for EU Individuals section below for additional information on accessing your information and other legal rights available to you under European Union law. Residents of countries outside of the United States or European Union should see the Additional Information for Individuals Outside the United States section below.")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "8"
    }
  }, [_c("li", [_vm._v("WHAT CHOICES DO I HAVE REGARDING PROMOTIONAL COMMUNICATIONS?")])]), _vm._v(" "), _c("p", [_vm._v("In accordance with applicable law, we will send periodic promotional communications to you. You may opt-out of such communications by following the opt-out instructions contained in the communication, or if you have opted-in to our promotional text messages, replying STOP. We will process opt-out requests in accordance with applicable law. If you opt-out of receiving promotional communications about recommendations or other information we think may interest you, we may still send you communications about your account or any services you have requested or received from us. App users may enable or disable push notifications by adjusting their App or device settings.")]), _vm._v(" "), _c("p", [_vm._v("Our franchisees also send their own marketing communications in accordance with applicable law. If you no longer wish to receive marketing communications from our franchisees, you will need to separately opt-out of the respective franchisee’s marketing communications. We do not control, and are not responsible for, the promotional communications sent by our franchisees.")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "9"
    }
  }, [_c("li", [_vm._v("CHILDREN UNDER 13")])]), _vm._v(" "), _c("p", [_vm._v("Our Site, Apps, and services are not designed for children under the age of 13. If we discover that a child under the age of 13 has provided us with personal information, we will delete such information from our systems.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "10"
    }
  }, [_c("li", [_vm._v("CONTACT US")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v("If you have questions about the privacy aspects of our Services or would like to make a complaint, please contact us at privacy@orangetheoryfitness.com or by contacting your local studio.")]), _vm._v(" "), _c("p", [_vm._v("You may also have rights under applicable laws to lodge a complaint with your country’s supervisory authority in relation to how we collect, use, or disclose your personal information.")]), _vm._v(" "), _c("ol", {
    attrs: {
      start: "11"
    }
  }, [_c("li", [_vm._v("CHANGES TO THIS POLICY")])]), _vm._v(" "), _c("p", [_vm._v("This Policy is current as of the Effective Date set forth above. We may change this Policy from time to time, so please be sure to check back periodically. We will post any changes to this Policy on our Site and App. If we make any changes to this Policy that materially affect our practices with regard to the personal information we have previously collected from you, we will endeavor to provide you with notice in advance of such change by highlighting the change on our Site and App and, where required to do so under applicable law, we will obtain your consent to such change.")]), _vm._v(" "), _c("p", [_vm._v(" ")])])]), _vm._v(" "), _c("div", {
    staticClass: "data-section",
    attrs: {
      id: "refund-data"
    }
  }, [_c("div", [_c("p", [_c("strong", [_vm._v("Refund Policy: ")]), _vm._v("This membership is not transferable and Non-Refundable at any conditions.")])])]), _vm._v(" "), _c("div", {
    staticClass: "data-section",
    attrs: {
      id: "cancellation-data"
    }
  }, [_c("div", [_c("p", [_c("strong", [_vm._v("Cancellation Policy: ")]), _vm._v("Please review your Membership Agreement or contact your Home Studio for applicable membership cancellation options. Membership may be cancelled after the membership is over, by completing a membership cancellation form at your Home Studio or sending a cancellation notice to your Home Studio as provided in your Membership Agreement. To process membership cancellation, your membership status must be active. In the event your membership status is frozen, you must reactivate your membership in order for membership cancellation to be processed.")])])]), _vm._v(" "), _c("div", {
    staticClass: "data-section",
    attrs: {
      id: "contact-data"
    }
  }, [_c("div", [_c("p", [_c("strong", [_vm._v("Contact Us")]), _c("strong", [_vm._v(": ")]), _vm._v("Your feedback is crucial to us in deciding our future services and where we can improve them. To help us do our best, please share your feedback with us. You can write it us at "), _c("a", {
    attrs: {
      href: "mailto:support@orangetheoryindia.com"
    }
  }, [_vm._v("support@orangetheoryindia.com")])])])]), _vm._v(" "), _c("div", {
    staticClass: "data-section",
    attrs: {
      id: "product-data"
    }
  }, [_c("div", [_c("p", [_c("strong", [_c("u", [_vm._v("Subscription Payment Plan (SPP) Policy")])])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ul", [_c("li", [_c("strong", [_vm._v("Eligibility")])])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v("In order to subscribe to SPP you must be at least 18 years of age. If you are a minor, you may only use the SPP under adult guardian supervision.")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ul", [_c("li", [_c("strong", [_vm._v("Subscription")])])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("You have the option to utilize the SPP . Your SPP will continue or be valid for the duration as mentioned at the point of purchase and as per the agreement signed by you.")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("You may choose your SPP after you have chosen the periodicity of the membership Once you have chosen the agreement , you will have to add your basic minimum personal details and make the initial down payment.")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("While creating an account you will be required to share your personal information with us which will be used by us for the purpose of this SPP and the membership Agreement and shall strictly be in terms with the  company’s Privacy Policy.")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("We may change our SPP and the pricing of our service from time to time. However, any changes to the pricing or the SPP may be intimated to you, unless necessary, such changes shall apply at the time of renewal of the SPP and  after the expiry of the initial membership agreement.")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("Further, Envisage Studio Private Limited (ESPL) reserves the right to modify or discontinue the SPP at its sole discretion with or without notice to YOU. ESPL shall not be liable to YOU or any third party in any manner, should ESPL exercise its right to modify or discontinue the SPP.")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("ul", [_c("li", [_c("strong", [_vm._v("Payment and Termination")])])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("The SPP for our services and any other charges you may incur in connection with your use of the service, such as taxes and other processing charges, will be charged basis the periodicity of your membership agreement.")]), _vm._v(" "), _c("li", [_vm._v("You remain responsible for any uncollected amounts pertaining to your SPP. If a payment is not successfully settled, due to expiration, insufficient funds, or otherwise , we may suspend your access to the fitness studio until we have successfully charged a valid Payment Method.")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(" ")])]), _vm._v(" "), _c("ul", [_c("li", [_c("strong", [_vm._v("Billing & Cancellation")])])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("The SPP, as well as any other charges incurred in connection with the usage of the services, such as taxes and potential transaction fees, will be charged to your Payment Method on the payment date cited on the membership agreement. This SPP will be charged to your account on the same date each month.")]), _vm._v(" "), _c("li", [_vm._v("Unless you have cancelled your SPP, you authorize us to charge SPP for the subsequent period’s membership fee to your Payment method, on an auto renewal basis unless otherwise opted out.")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("To the extent permitted by the applicable law, payments are non-refundable, and we do not provide refunds or credits for any partial-month subscription period. If you cancel your SPP, it will end automatically at the end of the membership agreement period.")])]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")]), _vm._v(" "), _c("p", [_vm._v(" ")])])]), _vm._v(" "), _c("div", {
    staticClass: "data-section",
    attrs: {
      id: "pricing-data"
    }
  }, [_c("div", [_c("p", [_c("strong", [_vm._v("Pricing:")])]), _vm._v(" "), _c("p", [_vm._v("We offer various packages based on individual choice and commitment. For customers  who are seeking a short term experience we do offer class based packages as well")]), _vm._v(" "), _c("div", [_c("table", [_c("tr", [_c("td", [_vm._v("Membership packages")]), _vm._v(" "), _c("td", [_vm._v("Pricing (Rs.)")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("3 Months unlimited usage")]), _vm._v(" "), _c("td", [_vm._v("43000")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("6 Months unlimited usage")]), _vm._v(" "), _c("td", [_vm._v("68000")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("12 Months  unlimited usage")]), _vm._v(" "), _c("td", [_vm._v("110000")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("10 class pack limited usage")]), _vm._v(" "), _c("td", [_vm._v("20000")])]), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Price  includes GST")]), _vm._v(" "), _c("td")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.main-menu ul[data-v-093b178c]{\r\n    list-style-type: none;\r\n    border: 1.5px solid #CAD5E2;\r\n    padding-left: 0px;\r\n    border-radius: 15px;\n}\n.main-menu ul li[data-v-093b178c]{\r\n    padding: 10px;\r\n    font-size: 21px;\r\n    font-weight: 600;\r\n    border-bottom: 1.5px solid #CAD5E2;\r\n    padding-left: 17px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\n}\n.active-class[data-v-093b178c]{\r\n    color: white;\r\n    background: #ED700F;\n}\n.pr-2p[data-v-093b178c]{\r\n    padding-right: 2%;\n}\n.pl-3p[data-v-093b178c]{\r\n    padding-left: 3%;\n}\n.fs-16[data-v-093b178c]{\r\n  font-size: 22px;\n}\ntd[data-v-093b178c] {\r\n  padding: 15px;\r\n  border: 1px solid gray;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_style_index_0_id_093b178c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_style_index_0_id_093b178c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_style_index_0_id_093b178c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/pages/auth/Rules.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/view/pages/auth/Rules.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rules_vue_vue_type_template_id_093b178c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rules.vue?vue&type=template&id=093b178c&scoped=true& */ "./resources/js/src/view/pages/auth/Rules.vue?vue&type=template&id=093b178c&scoped=true&");
/* harmony import */ var _Rules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rules.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/auth/Rules.vue?vue&type=script&lang=js&");
/* harmony import */ var _Rules_vue_vue_type_style_index_0_id_093b178c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css& */ "./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Rules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Rules_vue_vue_type_template_id_093b178c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Rules_vue_vue_type_template_id_093b178c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "093b178c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/auth/Rules.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/auth/Rules.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/Rules.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rules.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/auth/Rules.vue?vue&type=template&id=093b178c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/Rules.vue?vue&type=template&id=093b178c&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_template_id_093b178c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_template_id_093b178c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_template_id_093b178c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rules.vue?vue&type=template&id=093b178c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=template&id=093b178c&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Rules_vue_vue_type_style_index_0_id_093b178c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/auth/Rules.vue?vue&type=style&index=0&id=093b178c&scoped=true&lang=css&");


/***/ })

}]);