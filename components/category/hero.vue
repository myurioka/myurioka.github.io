<script setup lang="ts">
import { categoryPage } from '~/data'
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 items-center">
      <div class="px-6">
        <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-4xl my-4">
          {{ categoryPage.title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ categoryPage.description }}
        </p>
      </div>
        <!--
      <div class="px-6 justify-self-center">
        <LogoDogs />
      </div>
        -->
    </div>
  </div>
</template>
