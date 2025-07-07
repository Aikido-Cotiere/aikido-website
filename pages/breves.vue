<script setup lang="ts">
const { data: news } = await useAsyncData(() => queryCollection('news').all());

useSeoMeta({
  title: 'Les brêves',
  description: "Les dernières nouvelles de l'Aïkido Traditionnel de la Cotière",
});

const ordererNews = computed(() => {
  const temp = [...(news.value || [])];
  return temp?.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
});
</script>

<template>
  <v-container>
    <h1>Les brêves de l'Aïkido Traditionnel de la Cotière</h1>

    <news-details v-for="item in ordererNews" :key="item.id" :news="item" />
  </v-container>
</template>
