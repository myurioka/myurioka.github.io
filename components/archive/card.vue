<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  image?: string
  alt?: string
  ogImage?: string
  tags?: Array<string>
  published?: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article class="group border dark:border-gray-800  m-2 overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300  ">
    <NuxtLink :to="path" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-3">
        <NuxtImg
          class="h-full w-full object-cover object-center sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-300"
          width="300"
          :src="image"
          :alt="alt"
          :modifiers="{border: '20_FF0000'}"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2 class="text-xl font-semibold text-black dark:text-zinc-300   pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div class="text-black dark:text-zinc-300   text-sm mt-2 mb-1 md:flex md:space-x-6">
          <div class="flex items-center">
            <LogoDate />
            <p> {{ date }}</p>
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <p v-for="tag in tags" :key="tag">
              {{ tag }}
            </p>
          </div>
        </div>
        <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2">
          <p>Read More</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
