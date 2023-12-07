<template lang="pug">
.w-slider
    .w-slider__mask.mask
        swiper(
            :parallax="true"
            :slides-per-view="1"
            :space-between="0"
            :mousewheel="true"
            :keyboard="keyboardEnabled"
            :modules="modules"
            :speed="1000"
            :autoplay="(autoplayIsEnabled) ? autoplayOptions : autoplayOptionsDisabled"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        )
            swiper-slide(
                v-for="work in works"
                :key="work.id"
            )
                slide-item(
                    :work="work"
                )

Transition(appear)
    slider-control(
        @setNextSlide="setNextSlide"
        @setPrevSlide="setPrevSlide"
    )

decaration-back

Transition(appear)
    mouse-wheel-animation

</template>

<script setup>
import worksJson from "../static/works.json";

import "swiper/css";

import {
  Mousewheel,
  Keyboard,
  Navigation,
  Parallax,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import DecarationBack from "@/components/commons/DecarationBack.vue";
import MouseWheelAnimation from "@/components/commons/MouseWheelAnimation.vue";
import SlideItem from "@/components/slider/SlideItem.vue";
import SliderControl from "@/components/slider/SliderControl.vue";
import { ref, defineEmits, defineProps } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { inject } from "vue";

defineProps({
  autoplayIsEnabled: {
    type: Boolean,
    required: true,
  },
});

const emitter = inject("emitter");
const emit = defineEmits(["componentUpdate"]);
const modules = [Mousewheel, Keyboard, Navigation, Parallax, Autoplay];
const workSwiper = ref(null);
const works = ref();
const keyboardEnabled = {
  enabled: true,
};
const autoplayOptions = {
  delay: 0,
  stopOnLastSlide: true,
  disableOnInteraction: true,
};
const autoplayOptionsDisabled = {
  enabled: false,
};
const parsingJsonWorks = () => {
  works.value = JSON.parse(JSON.stringify(worksJson));
};

onBeforeRouteUpdate(emit("componentUpdate"));
parsingJsonWorks();

const onSwiper = (swiper) => {
  workSwiper.value = swiper;
};

const onSlideChange = () => {
  if (workSwiper.value.isEnd) {
    emitter.emit("swiperAutoplayHandler");
    workSwiper.value.autoplay.stop();
  }
};

const setNextSlide = () => {
  workSwiper.value.slideNext();
};

const setPrevSlide = () => {
  workSwiper.value.slidePrev();
};
</script>

<style lang="scss">
.swiper {
  height: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
