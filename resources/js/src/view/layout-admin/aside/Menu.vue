<template>
  <ul class="menu-nav">
    <!-- <router-link
      to="/admin/dashboard"
       v-slot="{ href, navigate, isActive, isExactActive }"
    >
    <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img src="/media/custome/menu-icons/dashboard.svg" alt="dashboard icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;<span class="menu-text">Dashboard</span>
        </a>
    </li>
    </router-link> -->
        <router-link
      to="/admin/eligibilty-report"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img src="/media/custome/menu-icons/graph.svg" alt="reports icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Reports</span>
        </a>
      </li>
    </router-link>
        <router-link
      to="/admin/check-eligibilty"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img src="/media/custome/menu-icons/task.svg" alt="check eligiblity icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Check eligiblity</span>
        </a>
      </li>
    </router-link>
        <router-link
      to="/admin/all-branches"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img src="/media/custome/menu-icons/office.svg" alt="branches icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Branches</span>
        </a>
      </li>
    </router-link>
        <router-link
      to="/admin/all-users"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img src="/media/custome/menu-icons/customer.svg" alt="branch users icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Branch users</span>
        </a>
      </li>
    </router-link>
        <router-link
      to="/admin/all-matrix"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img src="/media/custome/menu-icons/list.svg" alt="financial aid matrix icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Financial aid matrix</span>
        </a>
      </li>
    </router-link>
        <router-link
      to="/admin/account"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img src="/media/custome/menu-icons/user.svg" alt="account icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Account</span>
        </a>
      </li>
    </router-link>
        <router-link
        to=""
        @click.native="logout"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img src="/media/custome/menu-icons/logout.svg" alt="logout icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Logout</span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
import { LOGOUT} from "@/core/services/store/auth.module";
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
    logout(){
      this.$store.dispatch(LOGOUT)
          .then(() => this.$router.push('/login'));
    }
  }
};
</script>
<style scoped>
.menu-text {
  font-size: 14px !important;
}
a{
  color: #a2a3b7 !important;
}
</style>
