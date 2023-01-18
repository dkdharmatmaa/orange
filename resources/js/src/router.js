import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //-----------users route-------------------
    {
      path: "/",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "all-branches",
          name: "user-allbranches",
          component: () => import("@/view/pages/AllBranches.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "all-users",
          name: "user-allusers",
          component: () => import("@/view/pages/AllUsers.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "new-users/:id?",
          name: "user-newusers",
          component: () => import("@/view/pages/NewUsers.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "all-matrix",
          name: "user-allmatrix",
          component: () => import("@/view/pages/AllMatrix.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "check-eligibilty",
          name: "user-checkeligibilty",
          component: () => import("@/view/pages/CheckEligibilty.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "eligibilty-status",
          name: "user-eligibiltystatus",
          component: () => import("@/view/pages/EligibiltyStatus.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "eligibilty-report",
          name: "user-eligibiltyreport",
          component: () => import("@/view/pages/EligibiltyReport.vue"),
          meta: { userType: 'user' }
        },
        {
          path: "account",
          name: "user-account",
          component: () => import("@/view/pages/Account.vue"),
          meta: { userType: 'user' }
        },
      ]
    },
    //-----------admin route-------------------
    {
      path: "/admin/",
      component: () => import("@/view/layout-admin/Layout"),
      children: [
        {
          path: "dashboard",
          name: "admindashboard",
          component: () => import("@/view/admin/Dashboard.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "all-branches",
          name: "admin-allbranches",
          component: () => import("@/view/admin/AllBranches.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "new-branches/:id?",
          name: "admin-newbranches",
          component: () => import("@/view/admin/NewBranches.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "all-users",
          name: "admin-allusers",
          component: () => import("@/view/admin/AllUsers.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "new-users/:id?",
          name: "admin-newusers",
          component: () => import("@/view/admin/NewUsers.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "all-matrix",
          name: "admin-allmatrix",
          component: () => import("@/view/admin/AllMatrix.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "new-matrix",
          name: "admin-newmatrix",
          component: () => import("@/view/admin/NewMatrix.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "edit-matrix/:branch_id/:minmum_range/:maximum_range",
          name: "admin-editmatrix",
          component: () => import("@/view/admin/EditMatrix.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "check-eligibilty",
          name: "admin-checkeligibilty",
          component: () => import("@/view/admin/CheckEligibilty.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "eligibilty-status",
          name: "admin-eligibiltystatus",
          component: () => import("@/view/admin/EligibiltyStatus.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "eligibilty-report",
          name: "admin-eligibiltyreport",
          component: () => import("@/view/admin/EligibiltyReport.vue"),
          meta: { userType: 'admin' }
        },
        {
          path: "account",
          name: "admin-account",
          component: () => import("@/view/admin/Account.vue"),
          meta: { userType: 'admin' }
        },
      ]
    },
    //-----------superadmin route-------------------
    {
      path: "/superadmin/",
      component: () => import("@/view/layout-superadmin/Layout"),
      children: [
        {
          path: "dashboard",
          name: "superadmindashboard",
          component: () => import("@/view/superadmin/Dashboard.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "allassociation",
          name: "superadminallassociation",
          component: () => import("@/view/superadmin/AllAssociation.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "newassociation/:id?",
          name: "superadminnewassociation",
          component: () => import("@/view/superadmin/NewAssociation.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "all-branches",
          name: "superadmin-allbranches",
          component: () => import("@/view/superadmin/AllBranches.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "new-branches/:id?",
          name: "superadmin-newbranches",
          component: () => import("@/view/superadmin/NewBranches.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "all-users",
          name: "superadmin-allusers",
          component: () => import("@/view/superadmin/AllUsers.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "new-users/:id?",
          name: "superadmin-newusers",
          component: () => import("@/view/superadmin/NewUsers.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "all-matrix",
          name: "superadmin-allmatrix",
          component: () => import("@/view/superadmin/AllMatrix.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "new-matrix",
          name: "superadmin-newmatrix",
          component: () => import("@/view/superadmin/NewMatrix.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "edit-matrix/:association_id/:branch_id/:minmum_range/:maximum_range",
          name: "superadmin-editmatrix",
          component: () => import("@/view/superadmin/EditMatrix.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "check-eligibilty",
          name: "superadmin-checkeligibilty",
          component: () => import("@/view/superadmin/CheckEligibilty.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "eligibilty-status",
          name: "superadmin-eligibiltystatus",
          component: () => import("@/view/superadmin/EligibiltyStatus.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "eligibilty-report",
          name: "superadmin-eligibiltyreport",
          component: () => import("@/view/superadmin/EligibiltyReport.vue"),
          meta: { userType: 'superadmin' }
        },
        {
          path: "account",
          name: "superadmin-account",
          component: () => import("@/view/superadmin/Account.vue"),
          meta: { userType: 'superadmin' }
        },
      ]
    },
    //-----------for user login-------------------
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "userlogin",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1"),
        },
      ]
    },
    //-----------for admin login-------------------
    {
      path: "/admin/",
      component: () => import("@/view/admin/auth/login_pages/Login-1"),
      children: [
        {
          name: "adminlogin",
          path: "login",
          component: () => import("@/view/admin/auth/login_pages/Login-1"),
        },
      ]
    },
    //-----------for super admin login-------------------
    {
      path: "/superadmin/",
      component: () => import("@/view/superadmin/auth/login_pages/Login-1"),
      children: [
        {
          name: "superadminlogin",
          path: "login",
          component: () => import("@/view/superadmin/auth/login_pages/Login-1"),
        },
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
