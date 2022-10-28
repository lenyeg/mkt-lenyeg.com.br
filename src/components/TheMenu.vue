<template>
  <div class="relative overflow-hidden bg-[#0D806E]">
    <section class="container mx-auto">
      <div class="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div class="mx-auto px-4 sm:px-6">
            <nav class="relative flex items-center justify-between sm:h-10" aria-label="Global">
              <div class="flex flex-1 items-center md:inset-y-0">
                <div class="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span class="sr-only">Lenyeg</span>
                    <img draggable="false" class="h-8 w-auto sm:h-10" src="/images/logo-white.svg" alt="" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md bg-[#0D806E] p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span class="sr-only">Open main menu</span>
                      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="relative font-medium text-white before:content-[''] before:absolute before:bottom-0 before:w-full before:origin-center before:scale-x-0 before:hover:scale-x-100 before:h-[2px] before:bg-white hover:before: before:duration-300">{{
                      item.name
                  }}</a>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus
              class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img draggable="false" class="h-8 w-auto" src="/images/logo-colorful.svg" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{
    item.name
                    }}</a>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <section class="container mx-auto">
          <section class="mx-auto mt-16 px-4 sm:mt-24">
            <div class="flex flex-col lg:flex-row">
              <div class="text-center lg:text-left flex-1">
                <div class="text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
                  <span class="block">Desenvolvemos</span>
                  <span class="block font-bold">produtos digitais,</span>
                  <span class="block">enquanto capacitamos</span>
                  <span class="block font-bold">novos profissionais.</span>
                </div>
                <div class="block lg:hidden">
                  <img draggable="false" src="/images/hero.svg" alt="" />
                </div>
                <div class="mt-5 flex flex-col justify-center items-center lg:justify-start gap-3 md:flex-row md:mt-8">
                  <a href="/#how"
                    class="relative flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-gray-700 md:py-4 md:text-lg shadow before:absolute before:bg-white before:left-[-4px] before:top-[-4px] before:right-[-4px] before:bottom-[-4px] before:rounded-full  before:opacity-0 hover:before:opacity-60 before:duration-300">
                    <span class="z-10">
                      Comece agora
                    </span>
                  </a>
                  <a href="/#about"
                    class="m-1 flex items-center justify-center rounded-full border border-solid border-white text-white px-8 py-3 text-base font-medium md:py-4 md:text-lg shadow hover:bg-white hover:text-gray-700 duration-300">Saiba
                    mais</a>
                </div>
              </div>
              <div class="hidden lg:block flex-1">
                <img draggable="false" src="/images/hero.svg" alt="" />
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline/index.js";

const navigation = [
  { name: "Quem somos?", href: "/#about" },
  { name: "Como funciona?", href: "/#how" },
];
</script>
