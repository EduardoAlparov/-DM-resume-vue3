<template lang="pug">
.w-slider__slide
    .slide__flex.slide__flex_works
        .slide__main-heading-wrapper
            h1.slide__main-heading(data-swiper-parallax="-300")
                | {{ work.name }}

        .slide__slice-wrapper(data-swiper-parallax-opacity="0")
            .img-container-1.img-container-1_width.img-container-1_work
                .abt-s1-img-slice-1_work.s1-img-slice-1.abt-s1-img-slice-1(:style="{ backgroundImage: 'url(' + require('@/assets/img/works-images/' + work.imageSmall) + ')' }")
            .img-container-2.img-container-1_width.img-container-2_work
                .s1-img-slice-2.abt-s1-img-slice-2.abt-s1-img-slice-2_work(:style="{ backgroundImage: 'url(' + require('@/assets/img/works-images/' + work.imageSmall) + ')' }")
            .img-container-3.img-container-1_width.img-container-3_work
                .s1-img-slice-3.abt-s1-img-slice-3.abt-s1-img-slice-3_work(:style="{ backgroundImage: 'url(' + require('@/assets/img/works-images/' + work.imageSmall) + ')' }")

        .slide__text-wrapper.slide__text-wrapper_works(data-swiper-parallax="-300")
            .slide__details-wrapper
                h2.slide__about-text-heading
                    | {{ work.desc }}

                contact-link(
                    label="Ссылка"
                    :value="work.link"
                    :link="work.href"
                )

                slider-fancybox-link(
                    class="slide__expand"
                    :link='work.imageBig'
                )
</template>

<script setup>
import SliderFancyboxLink from "@/components/slider/SliderFancyboxLink.vue";
import ContactLink from "@/components/commons/ContactLink.vue";
import { ref, defineProps } from "vue";

defineProps({
  work: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.abt-s1-img-slice-1_work {
  left: 0;
  background-position: center 0;
}

.abt-s1-img-slice-2_work {
  left: 50%;
  background-position: center 0;
  transform: translateX(-50%);
}
.abt-s1-img-slice-3_work {
  left: unset;
  right: 0;
  background-position: center 0;
}

.img-container-1_work {
  filter: unset;
}

.img-container-1_width {
  flex-basis: calc(100% / 3);
}
.img-container-1_width > div {
  width: 300%;
  height: 100%;
}

.slide__expand {
  margin-top: 2.5rem;
}

@media (max-width: 1025px) {
  .abt-s1-img-slice-1_work,
  .abt-s1-img-slice-2_work,
  .abt-s1-img-slice-3_work {
    filter: grayscale(10%) brightness(60%) hue-rotate(-20deg) contrast(0.9);
  }
}
</style>
