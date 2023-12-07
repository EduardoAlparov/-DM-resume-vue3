<template lang="pug">
header.header(ref="headerH")
    .header__logo
        a.header__logo.logo._name-parent(href='/')
            span.logo__name-span
                | Эдуард Алпаров.
            span.logo__text-span
                | &nbsp;front-end&nbsp;разработка
    .header__nav
        ul.nav._name-parent
            li.nav__item
                router-link.nav__link(to='/' tag='a' href='#')
                    span.nav__link-text
                        | обо мне
                        br
                        | обо мне
            li.nav__item
                router-link.nav__link(to='/works' tag='a' href='#')
                    span.nav__link-text
                        | работы
                        br
                        | работы
            li.nav__item
                router-link.nav__link(to='/contacts' tag='a' href='#')
                    span.nav__link-text
                        | контакты
                        br
                        | контакты

    button.header__mobile-nav.mobile-nav(type="button")
        .mobile-nav__menu-heading-wrapper(
            :class="{'mobile-nav__menu-heading-wrapper--active': isMobileMenuIsVisible}"
            @click="emit('toggleModal')"
        )
            .mobile-nav__menu-text
                | МЕНЮ
                br
                | ЗАКРЫТЬ
        .mobile-nav__icon-bar-wrapper(
            :class="{'mobile-nav__icon-bar-wrapper--active': isMobileMenuIsVisible}"
        )
            .mobile-nav__icon-bar._1
            .mobile-nav__icon-bar._2
            .mobile-nav__icon-bar._3

</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, onUnmounted } from "vue";
const headerH = ref(null);
const emit = defineEmits(["toggleModal"]);

defineProps({
  isMobileMenuIsVisible: {
    type: Boolean,
    default: false,
  },
});

const setHeadersHeightVar = function () {
  document.documentElement.style.setProperty(
    "--header-height",
    headerH.value.offsetHeight + 20 + "px"
  );
};

onMounted(() => {
  setHeadersHeightVar();
  window.addEventListener("resize", setHeadersHeightVar);
});

onUnmounted(() => {
  window.removeEventListener("resize", setHeadersHeightVar);
});
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 13;

  width: 90%;
  height: auto;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @include breakpoint(tablet) {
    width: 100%;
    padding: 2rem 2.5rem;
    justify-content: space-between;
  }

  @include breakpoint(mobile) {
    padding: 1.5rem 2rem;
  }

  &__logo,
  &__nav {
    flex-shrink: 0;
    flex-basis: 50%;
  }

  &__nav {
    @include breakpoint(tablet) {
      display: none;
    }
  }

  &__mobile-nav {
    display: none;
    flex-shrink: 0;
    flex-basis: auto;

    @include breakpoint(tablet) {
      display: block;
    }
  }
}

.logo {
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  font-size: 1.2rem;

  &__text-span {
    margin-left: 0.2rem;
    color: var(--accent);
    white-space: nowrap;

    @include breakpoint(portrait-tablet) {
      margin-left: 0;
    }
  }

  &__name-span {
    @include breakpoint(portrait-tablet) {
      display: none;
    }
  }
}

.nav {
  display: flex;

  &_mobile-menu {
    flex-direction: column;

    .nav__link {
      padding-top: 3rem;
      padding-bottom: 3rem;

      color: #fdfdff;
      font-size: 3.5rem;
      line-height: 1;
      font-weight: 400;
      text-transform: none;

      @include breakpoint(small-tablet) {
        font-size: 2rem;
      }
    }
  }

  &__item {
    position: relative;

    flex-shrink: 0;
    flex-basis: calc(100% / 3);
  }

  &__link {
    position: relative;
    z-index: 1;
    overflow-x: visible;
    overflow-y: clip;

    display: inline-block;
    height: 2rem;

    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    color: inherit;
    cursor: pointer;

    &::after {
      position: absolute;
      top: 50%;
      right: auto;
      left: calc(100% + 1rem);
      z-index: 14;

      display: block;
      width: 0.5rem;
      height: 0.5rem;
      flex-shrink: 0;

      background-color: var(--orange);
      border-radius: 100%;
      transform: translateY(-50%);
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease-out;
      content: "";
    }

    &.router-link-exact-active:after {
      opacity: 1;
      visibility: visible;
    }
  }

  &__link-text {
    display: block;
    width: auto;
    height: 4rem;

    line-height: 2rem;
    pointer-events: none;
    transition: 0.2s;

    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }
}

@media (any-hover: hover) {
  .nav__link:hover .nav__link-text {
    transform: translate3d(0px, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}

.mobile-nav {
  position: relative;
  padding-right: 3rem;
  border: none;
  background-color: unset;
  outline: none;
  cursor: pointer;

  &__menu-heading-wrapper {
    position: relative;
    overflow: hidden;
    min-width: max-content;
    height: 1.7rem;

    &--active {
      .mobile-nav__menu-text {
        transform: translate3d(0px, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      }
    }
  }

  &__menu-text {
    position: relative;
    z-index: 1;

    display: inline-block;

    color: #fff;
    font-size: 1.2rem;
    text-align: center;

    background-color: transparent;
    transition: transform 0.2s ease;
  }

  &__icon-bar-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    width: 2.3rem;
    height: 1.7rem;
    pointer-events: none;

    &--active {
      .mobile-nav__icon-bar._2 {
        width: 2.2rem;
        background-color: var(--orange);
      }
    }
  }

  &__icon-bar {
    width: 100%;
    height: 0.1rem;
    min-height: 1px;
    margin-top: 0.5rem;

    background-color: #fff;
  }

  &__icon-bar._1,
  &__icon-bar._2,
  &__icon-bar._3 {
    width: 2rem;

    transition: width 0.2s ease;
  }

  &__icon-bar._1 {
    margin-top: 0;
  }
}
</style>
