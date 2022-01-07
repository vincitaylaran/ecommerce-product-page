<template>
  <div id="nav-bar">
    <div class="left-container">
      <img
        v-on:click="toggleLinks"
        class="menu"
        src="../../assets/icon-menu.svg"
        alt="menu"
      />
      <img class="logo" src="../../assets/logo.svg" alt="logo" />
    </div>

    <div class="right-container">
      <img src="../../assets/icon-cart.svg" alt="cart" />
      <img class="avatar" src="../../assets/image-avatar.png" alt="avatar" />
    </div>

    <div class="links" v-bind:class="{ hidden: isHidden }">
      <img
        v-on:click="toggleLinks"
        src="../../assets/icon-close.svg"
        alt="close"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      isHidden: false,
    }
  },
  methods: {
    toggleLinks: function () {
      if (this.isHidden) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }
    },
  },
}
</script>

<style scoped lang="scss">
#nav-bar {
  $nav-padding: 19px 24px 25px;

  padding: $nav-padding;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  .avatar {
    width: 24px;
  }

  .logo {
    padding-bottom: 3px;
  }

  .left-container,
  .right-container {
    display: flex;
    align-items: center;
  }

  .left-container {
    img:first-child {
      margin-right: 16px;
    }
  }

  .right-container {
    img:first-child {
      margin-right: 22px;
    }
  }

  .hidden {
    display: none;
  }

  .links {
    background: red;

    position: absolute;
    left: 0;
    top: 0;
    min-height: 100vh;
    padding: $nav-padding;
    width: 250px;
  }
}
</style>
