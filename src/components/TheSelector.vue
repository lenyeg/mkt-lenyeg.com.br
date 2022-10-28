<template>
  <section class="hidden md:flex flex-col gap-4 flex-1 p-2 mx-auto">
    <img draggable="false" :src="heroImg.src" width="620" class="rounded" />
    <div class="flex justify-around items-center gap-2">
      <img v-for="(image, index) of images" :key="image.src" draggable="false" :src="image.src" :alt="image.alt"
        class="rounded flex-1 w-36 cursor-pointer" @click="changeImage(index)" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";

export default defineComponent({
  setup() {
    let selectedImage = ref(0)

    const images = [
      { src: "/images/pvai-app-portfolio.png", alt: "Paranavai.app" },
      { src: "/images/osmarjr-portfolio.png", alt: "Osmar Junior LP" },
      { src: "/images/ieasy-portfolio.png", alt: "Ieasy LP" },
    ];


    const changeImage = (index:number) => {
      selectedImage.value = index
    };

    const heroImg = computed(() => {
      return images[selectedImage.value]
    })

    return { heroImg, images, changeImage };
  },
});
</script>
