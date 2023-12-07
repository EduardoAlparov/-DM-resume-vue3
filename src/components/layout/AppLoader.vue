<template lang="pug">
.loader-wrapper
    span.loader
</template>

<style>
.loader-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg-color);
}
.loader {
  background-color: var(--orange);
  width: 48px;
  height: 48px;
  position: relative;
  text-align: center;
  animation: 3s rotate linear infinite;
}
.loader:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--text);
  animation: 1.5s rotate reverse linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
