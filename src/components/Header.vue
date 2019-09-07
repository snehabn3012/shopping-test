<template>
  <div class="header-container">
    <div class="top-header">
      <p class="text">Free us shipping & return</p>
      <div class="left-icon" @click="showMobileMenu = !showMobileMenu">
        <i class="material-icons menu"></i>
      </div>
    </div>
    <ul class="mobileMenu" v-if="showMobileMenu">
      <li @click="selectGender('men');showMobileMenu = false">Men</li>
      <li @click="selectGender('women');showMobileMenu = false">WOMEN</li>
    </ul>
    <div class="header-content">
      <div class="left">
        <span @click="selectGender('men')">Men</span>
        <span @click="selectGender('women')">Women</span>
      </div>
      <div class="right">
        <span>Account</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
    selectGender(type) {
      this.$store.dispatch("updateTheSelectedCategory", type);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-container {
  width: 100%;
  background: white;
  .top-header {
    background: black;
    padding: 10px;
    color: white;
    .text {
      text-align: center;
    }
    .left-icon {
      display: none;
      float: left;
    }
    .mobileMenu {
      display: none;
    }
  }
  .header-content {
    display: block;
    padding: 20px;
    .left {
      span {
        padding-right: 10px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
      }
    }
    .right {
      float: right;
    }
  }
}

@media only screen and (max-width: 600px) {
  .header-container {
    .top-header {
      position: relative;
      .left-icon {
        display: block;
        top: 25px;
        position: absolute;
      }
    }
    .mobileMenu {
      position: absolute;
      left: 0;
      top: -16px;
      color: balck;
      z-index: 1000;
      background: white;
      padding: 10px;
      list-style: none;
      width: 100px;
      height: 100vh;
      li {
        padding: 5px;
      }
    }
    .header-content {
      display: none;
    }
  }
  .menu {
    // @include material-icon("face");
  }
}
</style>
