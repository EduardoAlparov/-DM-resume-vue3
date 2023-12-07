<template lang="pug">
.w-slider__control
    .w-slider__button.w-slider__button-left-arrow
        button._reset-button.buttons__button.buttons__left-arrow-wrapper(@click='emit("setPrevSlide")')
            svg.expand-button__svg(viewBox="0 0 32 32")
                use(xlink:href="@/assets/img/icons/slide-arrow-r.svg#sar")

    .w-slider__button.w-slider__button-right-arrow(:class="{ 'w-slider__button--not-active': false }")
        button._reset-button.buttons__button.buttons__right-arrow-wrapper(@click='emit("setNextSlide")')
            svg.expand-button__svg(viewBox="0 0 32 32")
                use(xlink:href="@/assets/img/icons/slide-arrow-r.svg#sar")
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["setNextSlide", "setPrevSlide"]);
</script>

<style lang="scss">
.buttons {
  &__left-arrow-wrapper,
  &__right-arrow-wrapper {
    border: none;
    background-color: unset;
    outline: none;
    cursor: pointer;

    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    border-style: solid;
    border-width: 1px;
    border-color: var(--orange);

    transition: padding 0.3s ease-out, border-color 0.3s ease-out;

    @include breakpoint(small-tablet) {
      width: 3rem;
      height: 3rem;
    }
  }

  &__left-arrow-wrapper {
    transform: rotate(180deg);
  }

  &__button {
    svg {
      display: block;
      width: 50%;
      fill: var(--accent);
      transition: color 0.3s ease-out;
    }
  }

  &__left-arrow-wrapper:disabled,
  &__right-arrow-wrapper:disabled {
    border-color: rgba(139, 69, 19, 0.15);
    pointer-events: none;
  }
}

@media (any-hover: hover) {
  /* on hover */
  .buttons__left-arrow-wrapper:hover {
    padding-left: 10%;
  }

  .buttons__left-arrow-wrapper:hover .buttons__left-icon svg {
    fill: var(--text);
  }

  .buttons__right-arrow-wrapper:hover {
    padding-right: 10%;
  }

  .buttons__right-arrow-wrapper:hover .buttons__right-icon svg {
    fill: var(--text);
  }

  /* pressed */
  .buttons__left-arrow-wrapper:active {
    padding-right: 5px;
  }

  .buttons__left-arrow-wrapper:active .buttons__left-icon svg {
    fill: var(--accent);
  }

  .buttons__right-arrow-wrapper:active {
    padding-left: 5px;
  }

  .buttons__right-arrow-wrapper:active .buttons__right-icon svg {
    fill: var(--accent);
  }
}
</style>
