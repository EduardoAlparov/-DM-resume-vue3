<script setup>
import AppLayoutHeader from "./components/layout/AppLayoutHeader.vue";
import AppLayoutModalMenu from "./components/layout/AppLayoutModalMenu.vue";
import AppLoader from "./components/layout/AppLoader.vue";

import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { inject } from "vue";

const emitter = inject("emitter");
const autoplayIsEnabled = ref(true);
const autoPlayStopped = ref(false);
const router = useRouter();
const isLoaderIsVisible = ref(true);
const isMobileMenuIsVisible = ref(false);

const componentUpdate = () => {};

const toggleModal = () => {
  isMobileMenuIsVisible.value = !isMobileMenuIsVisible.value;
};

const closeMenu = () => {
  isMobileMenuIsVisible.value = false;
};

emitter.on("swiperAutoplayHandler", () => {
  autoPlayStopped.value = true;
  autoplayIsEnabled.value = false;
});

onMounted(() => {
  router.push("/contacts");
  router.push("/works");
});

watch(autoPlayStopped, (newVal) => {
  if (newVal) {
    router.push("/");
    isLoaderIsVisible.value = false;
  }
});
</script>

<template lang="pug">
.wrapper
    app-layout-header(
        @toggleModal="toggleModal"
        :isMobileMenuIsVisible="isMobileMenuIsVisible"
    )

    app-layout-modal-menu(
        v-show="isMobileMenuIsVisible"
        @closeMenu="closeMenu"
    )

    app-loader(
        v-show="isLoaderIsVisible"
    )

    router-view(
        @componentUpdate="componentUpdate"
        :autoplayIsEnabled="autoplayIsEnabled"
    )
</template>

<style lang="scss">
@import url("./assets/styles/main.scss");
@import url("./assets/styles/bem-blocks/slider.scss");

html,
body {
  height: 100%;
}

html {
  font-size: 8px;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  box-sizing: border-box;

  @include breakpointMF(small-mobile) {
    font-size: 10px;
    font-size: clamp(12px, 0.52vw, 25px);
  }

  @include breakpointMF(tablet) {
    font-size: 10px;
    font-size: clamp(10px, 0.52vw, 25px);
  }

  @include breakpointMF(full-hd) {
    font-size: 15px;
    font-size: clamp(14px, 0.52vw, 25px);
  }
}

body {
  min-width: 319px;
  position: relative;
  overflow-x: hidden;
  color: var(--text);
  font: var(--font-body);
  background-color: var(--bg-color);
}

#app {
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;
}

.slide {
  &__flex {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;

    display: flex;
    width: 90%;
    height: 100vh;
    margin-right: auto;
    margin-left: auto;

    @include breakpoint(tablet) {
      //   position: relative;
      width: 100%;
      flex-direction: column;
    }

    &_works {
      @include breakpoint(tablet) {
        flex-direction: column;
        height: 100%;
      }
    }
  }

  &__main-heading-wrapper {
    position: absolute;
    top: 50%;
    left: -1rem;
    z-index: 3;

    transform: translateY(-50%);

    @include breakpoint(tablet) {
      position: static;
      margin-top: var(--header-height, 13%);
      margin-left: 2.5rem;
      display: block;
      max-width: 90%;
      transform: unset;
    }

    @include breakpoint(mobile) {
      margin-left: 2rem;
    }
  }

  &__main-heading {
    display: flex;
    width: min-content;
    color: var(--text);
    font-size: 6rem;
    font-weight: 600;
    line-height: 1;
    text-align: left;
    text-shadow: 0.2rem 0.2rem 1rem var(--accent);
    text-transform: uppercase;

    @include breakpoint(tablet) {
      width: 100%;
    }

    @include breakpoint(small-mobile) {
      font-size: 4rem;
    }
  }

  &__text-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    flex: 0 1 63.73%;
    height: 100vh;

    font-family: "Ubuntu Condensed", sans-serif;
    text-align: left;

    @include breakpoint(tablet) {
      position: static;
      z-index: 3;

      flex: unset;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: auto;
      height: auto;
      //   margin-top: 2rem;
    }

    &_works {
      @include breakpoint(tablet) {
        flex: unset;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: auto;
        height: auto;
        // margin-top: 2rem;
      }
    }

    &_block {
      @include breakpoint(tablet) {
        display: block;
      }
    }
  }

  &__slice-wrapper {
    position: relative;
    z-index: 2;

    display: flex;
    overflow: hidden;
    margin: 8rem 0 4rem;
    flex-shrink: 0;
    flex-basis: 41.67%;

    @include breakpoint(small-desktop) {
      flex-basis: 60%;
    }

    @include breakpoint(tablet) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      margin: 0;
      flex-basis: 100%;
    }
  }

  &__services-flex {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    padding-left: 13.1%;

    @include breakpoint(small-desktop) {
      flex-flow: row wrap;
      padding-left: 5%;
    }

    @include breakpoint(tablet) {
      position: relative;
      z-index: 4;
      flex-shrink: 0;
      gap: 1rem;
      height: unset;
      padding-left: 2.5rem;
    }

    @include breakpoint(mobile) {
      padding-left: 2rem;
    }

    @include breakpoint(small-mobile) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-shrink: 0;
    }
  }

  &__details-wrapper {
    max-width: 100%;
    height: auto;
    padding-left: 13.1%;

    @include breakpoint(small-desktop) {
      padding-left: 5%;
    }

    @include breakpoint(tablet) {
      position: relative;
      z-index: 9;

      display: block;
      flex-shrink: 0;
      margin-top: 0;
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }

    @include breakpoint(mobile) {
      padding-left: 2rem;
    }
  }

  &__about-text-heading {
    display: block;
    width: max-content;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    color: #fefefe;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: left;

    border-bottom: 1px solid rgba(246, 139, 157, 0.5);
  }

  &__details-bold {
    width: 100%;
    color: #bdbdd5;
    font-size: 1.4rem;
    font-weight: 700;
  }

  &__servies-block-one,
  &__servies-block-two,
  &__servies-block-three {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: calc(100% / 3);

    color: #bdbdd5;
    font-size: 1.2rem;
    line-height: 2.08;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}

@keyframes coloring {
  0% {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }

  100% {
    transform: translate3d(0px, 0, 0);
    opacity: 1;
  }
}
</style>
