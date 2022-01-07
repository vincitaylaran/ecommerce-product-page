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

    <div class="side-links" v-bind:class="{ hidden: isHidden }">
      <img
        v-on:click="toggleLinks"
        src="../../assets/icon-close.svg"
        alt="close"
      />

      <ul class="side-links__list">
        <li v-for="link in links" v-bind:key="link">
          {{ link }}
        </li>
      </ul>
    </div>

    <ShadedBackground v-bind:is-hidden="isHidden" />
  </div>
</template>

<script>
import ShadedBackground from './ShadedBackground.vue'

export default {
  name: 'NavBar',
  data: function () {
    return {
      isHidden: false,
      links: ['collections', 'men', 'women', 'about', 'contact'],
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
  components: {
    ShadedBackground,
  },
}
</script>

<style scoped lang="scss">
@import '../scss/colors.scss';

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

  .side-links {
    background: $white;

    position: absolute;
    left: 0;
    top: 0;
    min-height: 100vh;
    padding: 25px;
    width: 250px;
    color: $black;
    z-index: 2;

    &__list {
      padding-top: 54px;
      li {
        font-weight: 700;
        text-transform: capitalize;
        padding-bottom: 20px;
        font-size: 1.125rem;
      }
    }
  }
}
</style>
