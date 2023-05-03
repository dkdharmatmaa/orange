<template>
  <ul class="menu-nav">
        <router-link
      to="/admin/entry"
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
          <img src="/media/custome/menu-icons/form.svg" alt="form icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Form</span>
        </a>
      </li>
    </router-link>
      <router-link
      to="/admin/product"
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
          <img src="/media/custome/menu-icons/Vector.svg" alt="vector icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Product</span>
        </a>
      </li>
    </router-link>
      <router-link
      to="/admin/report"
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
          <img src="/media/custome/menu-icons/contact.svg" alt="contact icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Transaction Details</span>
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
          <img src="/media/custome/menu-icons/users.svg" alt="users icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Users</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/admin/branches"
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
          <img src="/media/custome/menu-icons/branch.svg" alt="branch icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Branches</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/admin/all-installment"
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
          <img src="/media/custome/menu-icons/transfer-grey.svg" alt="contact icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Installment</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/admin/error-log"
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
          <img src="/media/custome/menu-icons/warning-grey.svg" alt="contact icon" class="img-fluid" width="18" height="18">
          &nbsp;&nbsp;&nbsp;
          <span class="menu-text">Error Log</span>
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
          <img src="/media/custome/menu-icons/Logout.svg" alt="logout icon" class="img-fluid" width="18" height="18">
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
