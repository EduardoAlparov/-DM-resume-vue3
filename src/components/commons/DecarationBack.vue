<template lang="pug">
.back-container
    .back-container__column.back-container__column_first
    .back-container__column
    .back-container__column
    .back-container__column
    .back-container__column
    .back-container__column
    .back-container__column
    .back-container__column.back-container__column_last
.back-container-2
    .back-container-2__column.back-container-2__column_first
        .back-container-2__socials
            socials-list
    .back-container-2__column
    .back-container-2__column
.back-dark
</template>

<script setup>
import SocialsList from "@/components/commons/SocialsList.vue";
</script>

<style>
.back-container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: stretch;

  height: 100%;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;

  background-color: transparent;
  pointer-events: none;
}

.back-container__column {
  position: relative;
  z-index: 0;

  flex: 0 0 15%;
  width: 15%;

  transform: translateY(-100%);

  border-right: 1px solid hsla(0, 0%, 100%, 0.07);
  background-color: #22222a;

  animation: heightRise 0.7s ease-out forwards 0s 1;
}

.back-container__column_first {
  flex-basis: 5%;
  border-right-color: hsla(0, 0%, 100%, 0.07);
  animation-delay: 0ms;
}

.back-container__column:nth-child(2) {
  animation-delay: 200ms;
}
.back-container__column:nth-child(3) {
  animation-delay: 400ms;
}
.back-container__column:nth-child(4) {
  animation-delay: 600ms;
}
.back-container__column:nth-child(5) {
  animation-delay: 800ms;
}
.back-container__column:nth-child(6) {
  animation-delay: 1000ms;
}
.back-container__column:nth-child(7) {
  animation-delay: 1200ms;
}

.back-container__column_last {
  flex-basis: 5%;
  border-right: 0 none transparent;
  animation-delay: 1400ms;
}

@keyframes heightRise {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

@media (max-width: 1025px) {
  .back-container {
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    overflow: visible;

    height: auto;
    margin-right: 0px;
    margin-left: 0px;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: stretch;
  }
  .back-container__column {
    border-width: 0;
  }
}

.back-container-2 {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 3;
  display: flex;
  width: 35%;
  height: 100%;
  background-color: transparent;
  /* pointer-events: none; */
}

.back-container-2__column {
  flex-shrink: 0;
  flex-basis: 42.86%;
  border-right: 1px solid hsla(0, 0%, 100%, 0.07);
  background-color: transparent;
}

.back-container-2__column_first {
  position: relative;
  flex-basis: 14.29%;
  border-right-color: hsla(0, 0%, 100%, 0.07);
}

.back-container-2__socials {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 4rem;
}

@media (max-width: 1025px) {
  .back-container-2__socials {
    display: none;
  }
}

@media (max-width: 1025px) {
  .back-container-2 {
    display: none;
  }
}

.back-dark {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;

  width: 35%;
  height: 100vh;

  background-color: #101015;
  transform: translateX(-100%);

  animation: 1s in-out ease-out forwards 2s;
}

@media (max-width: 1025px) {
  .back-dark {
    display: none;
  }
}

@keyframes in-out {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
