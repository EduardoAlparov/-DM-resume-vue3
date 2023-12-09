<template lang="pug">
.w-slider
    .mask.w-slider__mask
        .slide.w-slider__slide
            .slide__flex
                .slide__main-heading-wrapper
                    h1.slide__main-heading
                        | контакты
                .slide__slice-wrapper
                    .img-container-1.img-container-1_contacts
                        .s1-img-slice-1.s1-img-slice-1_contacts.abt-s1-img-slice-1
                    .img-container-2.img-container-2_contacts
                        .s1-img-slice-2.s1-img-slice-2_contacts.abt-s1-img-slice-2
                    .img-container-3.img-container-3_contacts
                        .s1-img-slice-3.s1-img-slice-3_contacts.abt-s1-img-slice-3
                .slide__text-wrapper
                    .slide__details-wrapper
                        h2.slide__about-text-heading
                            | свяжитесь со мной

                        contact-link(
                            label="Telegram",
                            value="@EdFrontDev",
                            link="https://t.me/EdFrontDev"
                            isSpecial='tg'
                        )

                        contact-link(
                            label="Email",
                            value="workman133@yandex.ru",
                            link="mailto:workman133@yandex.ru"
                            isSpecial='email'
                        )



decaration-back
</template>

<script setup>
import DecarationBack from "@/components/commons/DecarationBack.vue";
import ContactLink from "@/components/commons/ContactLink.vue";
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

<style lang="scss" scoped>
.slide__details-wrapper {
  .contact-link {
    &:last-child {
      margin-top: 1.5rem;
    }
  }
}
</style>
