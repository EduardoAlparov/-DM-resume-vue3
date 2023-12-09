<template lang="pug">
.w-slider
    .mask.w-slider__mask
        .slide.w-slider__slide
            .slide__flex
                .slide__main-heading-wrapper
                    h1.slide__main-heading
                        | эдуард&nbsp;
                        br
                        | aлпаров
                .slide__slice-wrapper
                    .img-container-1
                        .s1-img-slice-1.abt-s1-img-slice-1
                    .img-container-2
                        .s1-img-slice-2.abt-s1-img-slice-2
                    .img-container-3
                        .s1-img-slice-3.abt-s1-img-slice-3
                .slide__text-wrapper.slide__text-wrapper_block
                    .slide__details-wrapper
                        h2.slide__about-text-heading
                            | Обо мне
                        h3.details-bold.slide__details-bold
                            | Эдуард Алпаров, 34 года, г.Казань
                        p.details.slide__details
                            | Верстаю с 2019г. На счету множество проектов: корпоративные
                            | сайты, веб-сервисы, лендинги, сайты-визитки. Примеры
                            | выполненных проектов находятся в разделе "Работы".
                            | Предпочитаю удаленную работу, фриланс
                            | или проектную работу. От работодателя или заказчика жду
                            | интересных проектов с четким техзаданием. От себя же
                            | гарантирую ответственный подход к работе.

                    .slide__services-flex
                        .slide__servies-block-one
                            span._accent-color #
                                | CLEARE&nbsp;CSS&nbsp;
                            span._accent-color and
                                |  scss
                            br
                            span._accent-color #
                                | semantic&nbsp;HTML
                            br
                            span._accent-color #
                                | git
                            br
                        .slide__servies-block-two
                            span._accent-color #
                                | JavaScript&nbsp;ES6
                            br
                            span._accent-color #
                                | jQuery
                            br
                            span._accent-color #
                                | Vue.js
                            br
                        .slide__servies-block-three
                            span._accent-color #
                                | figma
                            br
                            span._accent-color #
                                | photoshop

decaration-back
</template>

<script setup>
import DecarationBack from "@/components/commons/DecarationBack.vue";
import { defineEmits, defineProps } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

defineProps({
  autoplayIsEnabled: {
    type: Boolean,
    required: false,
  },
  speed: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["componentUpdate"]);

onBeforeRouteUpdate(emit("componentUpdate"));
</script>

<style scoped></style>
