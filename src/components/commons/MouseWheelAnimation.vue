<template lang="html">
  <div class="mouse-wheel-animation">
    <svg
      width="40px"
      height="100%"
      viewBox="0 0 247 390"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 1.5;
      "
    >
      <path
        id="wheel"
        d="M123.359,79.775l0,72.843"
        style="fill: none; stroke: var(--orange, #e63327); stroke-width: 20px"
      />
      <path
        id="mouse"
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        style="fill: none; stroke: #fff; stroke-width: 20px"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.mouse-wheel-animation {
  position: fixed;
  left: 50%;
  bottom: 4rem;
  transform: translate(-50%, 0);
  z-index: 10;

  svg {
    width: 4rem;
  }

  svg #wheel {
    animation: scroll ease 1.5s infinite;
  }

  @include breakpoint(tablet) {
    display: none;
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(100px);
  }
}
</style>
