<template lang="pug">
a.contact-link(
    :href="link"
    target='_blank'
)
    span.contact-link__label(
        :class="{'contact-link__label_tg': (isSpecial === 'tg'), 'contact-link__label_email': (isSpecial === 'email')}"
    )
        | {{ label }}

    .contact-link__icon
        i.contact-link__svg-wrapper
            svg.contact-link__arrow-svg(viewbox='0 0 24 24')
                use(xlink:href="@/assets/img/icons/arrow-long.svg#arrow-long")
            svg.contact-link__arrow-svg(viewbox='0 0 24 24')
                use(xlink:href="@/assets/img/icons/arrow-long.svg#arrow-long")

    span.contact-link__value
        | {{ value }}
</template>

<script setup>
import { ref, defineProps } from "vue";

defineProps({
  label: {
    type: String,
    default: "Contact label",
  },
  value: {
    type: String,
    default: "Contact value",
  },
  isSpecial: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.contact-link {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  text-decoration: none;
  cursor: pointer;

  span {
    flex-shrink: 0;
  }

  &__label {
    position: relative;
    display: block;
    padding-right: 2.4rem;
    color: var(--text);
    font-size: 1.3rem;
    line-height: 2.07;
    text-decoration: none;

    &::before {
      position: absolute;
      top: 50%;
      right: 0;
      z-index: 1;

      display: block;
      width: 1.5rem;
      height: 1.5rem;
      aspect-ratio: 1;

      background-image: url("data:image/svg+xml, %3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M14%2012C14%2014.7614%2011.7614%2017%209%2017H7C4.23858%2017%202%2014.7614%202%2012C2%209.23858%204.23858%207%207%207H7.5M10%2012C10%209.23858%2012.2386%207%2015%207H17C19.7614%207%2022%209.23858%2022%2012C22%2014.7614%2019.7614%2017%2017%2017H16.5%22%20stroke%3D%22%23fefefe%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      transform: translateY(-50%);
      content: "";
    }

    &_tg {
      &::before {
        background-image: url("data:image/svg+xml, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%2064%2064%22%3E%0A%3Cpath%20d%3D%22M%2032%2010%20C%2019.85%2010%2010%2019.85%2010%2032%20C%2010%2044.15%2019.85%2054%2032%2054%20C%2044.15%2054%2054%2044.15%2054%2032%20C%2054%2019.85%2044.15%2010%2032%2010%20z%20M%2032%2014%20C%2041.941%2014%2050%2022.059%2050%2032%20C%2050%2041.941%2041.941%2050%2032%2050%20C%2022.059%2050%2014%2041.941%2014%2032%20C%2014%2022.059%2022.059%2014%2032%2014%20z%20M%2041.041016%2023.337891%20C%2040.533078%2023.279297%2039.894891%2023.418531%2039.181641%2023.675781%20C%2037.878641%2024.145781%2021.223719%2031.217953%2020.261719%2031.626953%20C%2019.350719%2032.014953%2018.487328%2032.437828%2018.486328%2033.048828%20C%2018.486328%2033.478828%2018.741312%2033.721656%2019.445312%2033.972656%20C%2020.177313%2034.234656%2022.023281%2034.79275%2023.113281%2035.09375%20C%2024.163281%2035.38275%2025.357344%2035.130844%2026.027344%2034.714844%20C%2026.736344%2034.273844%2034.928625%2028.7925%2035.515625%2028.3125%20C%2036.102625%2027.8325%2036.571797%2028.448688%2036.091797%2028.929688%20C%2035.611797%2029.410688%2029.988094%2034.865094%2029.246094%2035.621094%20C%2028.346094%2036.539094%2028.985844%2037.490094%2029.589844%2037.871094%20C%2030.278844%2038.306094%2035.239328%2041.632016%2035.986328%2042.166016%20C%2036.733328%2042.700016%2037.489594%2042.941406%2038.183594%2042.941406%20C%2038.877594%2042.941406%2039.242891%2042.026797%2039.587891%2040.966797%20C%2039.992891%2039.725797%2041.890047%2027.352062%2042.123047%2024.914062%20C%2042.194047%2024.175062%2041.960906%2023.683844%2041.503906%2023.464844%20C%2041.365656%2023.398594%2041.210328%2023.357422%2041.041016%2023.337891%20z%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A");
      }
    }

    &_email {
      &::before {
        background-image: url("data:image/svg+xml, %3Csvg%20viewBox%3D%220%200%2048%2048%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%3E%0A%09%3Cpath%20d%3D%22M24%2C44c5.343%2C0%2C10.365-2.08%2C14.143-5.858l-2.829-2.828C32.292%2C38.336%2C28.274%2C40%2C24%2C40c-8.822%2C0-16-7.178-16-16%0A%09%09S15.178%2C8%2C24%2C8s16%2C7.178%2C16%2C16c0%2C2.206-1.794%2C4-4%2C4s-4-1.794-4-4v-8h-4v1.079C26.822%2C16.397%2C25.459%2C16%2C24%2C16c-4.418%2C0-8%2C3.582-8%2C8%0A%09%09s3.582%2C8%2C8%2C8c2.394%2C0%2C4.536-1.057%2C6.003-2.723C31.47%2C30.942%2C33.611%2C32%2C36%2C32c4.411%2C0%2C8-3.589%2C8-8c0-11.028-8.972-20-20-20%0A%09%09S4%2C12.972%2C4%2C24S12.972%2C44%2C24%2C44z%20M24%2C28c-2.206%2C0-4-1.794-4-4s1.794-4%2C4-4s4%2C1.794%2C4%2C4S26.206%2C28%2C24%2C28z%22%20fill%3D%22%23FFFFFF%22%2F%3E%0A%3C%2Fsvg%3E");
      }
    }
  }

  &__icon {
    display: block;
    width: 6rem;
    height: 3rem;
    overflow: hidden;
  }

  &__svg-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    will-change: transform;
    transform: translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }

  &__arrow-svg {
    flex-shrink: 0;
  }

  &__value {
    display: inline-block;
    font-family: var(--secondfont);
    color: var(--white);
    font-size: 1.6rem;
    text-decoration: underline;
    text-decoration-style: dashed;
    text-decoration-skip-ink: none;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
  }

  &:hover {
    .contact-link__svg-wrapper {
      transition: transform 0.4s ease-out;
      transform: translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }
}
</style>
