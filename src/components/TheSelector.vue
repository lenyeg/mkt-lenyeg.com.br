<template>
  <section class="hidden md:flex flex-col gap-4 flex-1 p-2">
    <img draggable="false" :src="heroImg" width="620" class="rounded" />
    <div class="flex justify-around items-center gap-2">
      <img
        v-for="image of images"
        :key="image.src"
        draggable="false"
        :src="image.src"
        :alt="image.alt"
        class="rounded flex-1 w-36"
        @click="changeImage(image)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    let heroImg = computed((): string => "/images/pvai-app-portfolio.png");
    const images = ref({
      imgOne: { src: "/images/pvai-app-portfolio.png", alt: "Paranavai.app" },
      imgTwo: { src: "/images/osmarjr-portfolio.png", alt: "Osmar Junior LP" },
      imgThree: { src: "/images/ieasy-portfolio.png", alt: "Ieasy LP" },
    });

    const changeImage = (image: any) => {
      console.log("cliquei", image.src);
      heroImg = image.src;
      console.log("agora sou", heroImg);
    };

    return { heroImg, images, changeImage };
  },
});
</script>
