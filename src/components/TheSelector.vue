<template>
  <section class="hidden md:flex flex-col gap-4 flex-1 p-2 mx-auto">
    <img draggable="false" :src="heroImg.src" width="620" class="rounded" />
    <div class="flex justify-around items-center gap-2">
      <img v-for="image of images" :key="image.src" draggable="false" :src="image.src" :alt="image.alt"
        class="rounded flex-1 w-36 cursor-pointer" @click="changeImage(image)" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    let heroImg = reactive({ src: "/images/pvai-app-portfolio.png" });

    const images = ref([
      { src: "/images/pvai-app-portfolio.png", alt: "Paranavai.app" },
      { src: "/images/osmarjr-portfolio.png", alt: "Osmar Junior LP" },
      { src: "/images/ieasy-portfolio.png", alt: "Ieasy LP" },
    ]);


    const changeImage = (image: any) => {
      return (heroImg.src = image.src);
    };

    return { heroImg, images, changeImage };
  },
});
</script>
