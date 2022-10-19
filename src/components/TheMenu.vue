<template>
  <div class="relative overflow-hidden bg-[#0D806E]">

    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
              <div class="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto sm:h-10" src="/images/logo-white.svg" alt="" />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="inline-flex items-center justify-center rounded-md bg-[#0D806E] p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
            </div>
            <div class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
              <span class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50">Log in</a>
              </span>
            </div>
          </nav>
        </div>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
            <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img class="h-8 w-auto" src="/images/logo-colorful.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
              </div>
              <a href="#" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">Log in</a>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <BaseContainer>
        <section class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div class="flex flex-col md:flex-row">
            <div class="text-center md:text-left flex-1">
              <div class="text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
                <span class="block">Desenvolvemos</span>
                <span class="block font-bold">produtos digitais,</span>
                <span class="block">enquanto capacitamos</span>
                <span class="block font-bold">novos profissionais.</span>
              </div>
              <div class="block md:hidden">
                <img src="/images/hero.svg" alt="">
              </div>
              <div class="mt-5 max-w-md sm:flex justify-center md:justify-start md:mt-8">
                <div class="rounded-md shadow">
                  <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get started</a>
                </div>
                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium hover:bg-gray-50 md:py-4 md:px-10 md:text-lg">Live demo</a>
                </div>
              </div>
            </div>
            <div class="hidden md:block flex-1">
              <img src="/images/hero.svg" alt="">
            </div>
          </div>
        </section>
      </BaseContainer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Quem somos?', href: '#' },
  { name: 'Como funciona?', href: '#' },
]
</script>