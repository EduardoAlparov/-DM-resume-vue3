<template lang="pug">
footer.footer(:class="{'footer_close': !hiddenFooterClass}")
    p.footer__details
        | &copy; 2023.
        span(style='color: saddlebrown') &#x2764;
        |  WebDev

        span.footer__simple-text
            | Inspired by&nbsp;

        a.footer__link(href='#')
            | Dexter Morgan

        button.footer__banner-close(@click='emit("changeHiddenFooterClass")')
            svg.footer__banner-close-svg(viewbox='0 0 24 24')
                use(xlink:href="@/assets/img/icons/close.svg#close-svg")
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  hiddenFooterClass: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["changeHiddenFooterClass"]);
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0;
  z-index: 9;

  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;

  background-color: var(--grey);
  opacity: 1;
  transition: 0.5s ease-out;
}

.footer_close {
  transform: translateY(100%);
  opacity: 0;
}

.footer__details {
  display: flex;
  align-items: center;
  font-family: Lato, sans-serif;
  color: #666;
  font-size: 12px;
  text-align: left;
}

.footer__simple-text {
  margin-left: 1.5rem;
}

.footer__link {
  margin-right: 1.5rem;

  color: #333;
  font-weight: 700;
  text-decoration: none;
}
.footer__banner-close {
  width: 2rem;
  height: 2rem;

  border: none;
  background-color: unset;
  outline: none;
  cursor: pointer;
}

@media (max-width: 576px) {
  .footer__details {
    position: relative;
  }

  .footer__simple-text {
    margin-left: 10px;
  }

  .footer__link {
    margin-right: 10px;
  }

  .footer__banner-close {
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
  }
}
</style>
