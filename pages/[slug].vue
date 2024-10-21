<template>
  <main>
    <article class="prose max-w-full">
      <ContentRenderer v-if="data" :value="data" tag="article">
        <header>
          {{ data.title }}
          <address class="author">{{ data.author }}</address>
            <!--
          <time :datetime="$dayjs(data.date).format('YYYY-MM-DD')">{{ $dayjs(data.date).format('LL') }}</time> -->
        </header>
        <ContentRendererMarkdown :value="data" />
      </ContentRenderer>
    </article>
  </main>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { data } = await useAsyncData(`get-document-${route.path}`, () =>
    queryContent(route.path).findOne()
  )

  const { page } = useContent()
  useContentHead(page)
</script>
