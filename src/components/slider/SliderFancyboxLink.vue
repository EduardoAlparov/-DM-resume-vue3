<template lang="pug">
div(ref='container')
    a.expand-button(
        tab-index="0"
        data-fancybox='gallery'
        :href="require('@/assets/img/works-images/' + link)"
    )
        svg.expand-button__svg(viewbox='0 0 24 24')
            use(xlink:href="@/assets/img/icons/expand.svg#expand")
        span Рзвернуть макет
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { ref, defineProps, onMounted, onUpdated, onUnmounted } from "vue";

const container = ref(null);
const options = ref({});

defineProps({
  link: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  Fancybox.bind(container.value, "[data-fancybox]", {
    ...(options.value || {}),
  });
});

onUpdated(() => {
  Fancybox.unbind(container.value);
  Fancybox.close();

  Fancybox.bind(container.value, "[data-fancybox]", {
    ...(options.value || {}),
  });
});

onUnmounted(() => {
  Fancybox.destroy();
});
</script>

<style scoped>
.expand-button {
  display: flex;
  align-items: center;
  gap: 1rem;

  color: var(--text);
  font-size: 1.3rem;
  line-height: 1.57;
  text-decoration: none;

  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.expand-button svg {
  height: 2.5rem;
  width: 2.5rem;

  fill: var(--accent);
  will-change: transform;
  transition: transform 0.3s ease-out;
}

@media (any-hover: hover) {
  .expand-button:hover svg {
    transform: scale(1.15);
  }
}
</style>
