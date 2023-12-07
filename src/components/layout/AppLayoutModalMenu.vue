<template lang="pug">
.mobile-menu
    ul.nav.nav_mobile-menu._name-parent
        li.nav__item
            a.nav__link(@click="clickHandler('/')")
                span.nav__link-text
                    | &Ocy;&bcy;&ocy; &mcy;&ncy;&iecy;
        li.nav__item
            a.nav__link(@click="clickHandler('/works')")
                span.nav__link-text
                    | &Rcy;&acy;&bcy;&ocy;&tcy;&ycy;
        li.nav__item
            a.nav__link(@click="clickHandler('/contacts')")
                span.nav__link-text
                    | &Kcy;&ocy;&ncy;&tcy;&acy;&kcy;&tcy;&ycy;
    .mobile-social
        socials-list(
            isSocialsRow=true
        )
</template>

<script setup>
import SocialsList from "@/components/commons/SocialsList.vue";
import { defineEmits } from "vue";
import { useRouter, useRoute } from "vue-router";

const emit = defineEmits(["closeMenu"]);
const router = useRouter();
const route = useRoute();

const clickHandler = function (link) {
  let currentPathValue = router.currentRoute.value.path;

  if (currentPathValue !== link) {
    router.push(link);
    console.log(currentPathValue);
  }

  emit("closeMenu");
};
</script>

<style scoped>
.mobile-menu {
  position: absolute;
  left: 0;
  top: 0px;
  bottom: 0px;
  z-index: 12;

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  padding: 0 30px;

  background-color: #1c1d1d;
}

.mobile-menu_close {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.mobile-social {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;

  display: flex;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
}

.nav {
  display: flex;
}

.nav_mobile-menu {
  flex-direction: column;
}

.nav__item {
  position: relative;

  flex-shrink: 0;
  flex-basis: calc(100% / 3);
}

.nav__link {
  position: relative;
  z-index: 1;
  overflow: hidden;

  max-width: 100%;
  width: 100%;
  display: inline-block;
  height: 20px;

  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  cursor: pointer;
}

.nav_mobile-menu .nav__link {
  padding-top: 30px;
  padding-bottom: 30px;

  color: #fdfdff;
  font-size: 3.5rem;
  line-height: 30px;
  font-weight: 400;
  text-transform: none;
}

.nav__link-text {
  display: block;
  width: auto;
  height: 40px;

  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;

  pointer-events: none;
  transition: 0.2s;
  line-height: 20px;
}

@media (any-hover: hover) {
  .nav__link:hover .nav__link-text {
    transform: translate3d(0px, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}

/* md <= Large (lg) */
@media (max-width: 991px) {
}

/* sm <= Medium (md) */
@media (max-width: 768px) {
  .nav_mobile-menu .nav__link {
    font-size: 2rem;
  }
}
.socials_mobile {
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  gap: unset;
}

.socials__link {
  display: block;
  width: 100%;
  height: 45px;

  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.socials__link > svg {
  width: 100%;
  height: 100%;

  fill: var(--text);
  transition: 0.3s;
}

@media (any-hover: hover) {
  .socials__link:hover svg {
    fill: var(--accent);
  }
}
</style>
