<script setup lang="ts">
const route = useRoute();
const { data, error, refresh, pending, status, execute, clear } = await useAsyncData(route.path, () => queryCollection('pages').path(route.path).first());

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});
</script>

<template>
  <v-container>
    <ContentRenderer v-if="data" :value="data" mdc-unwrap="p" />
    <div v-else>
      <p>Loading...</p>
      <v-btn @click="refresh">Refresh</v-btn>
      <v-btn @click="execute">Execute</v-btn>
      <v-btn @click="clear">Clear</v-btn>
      <pre>route: {{ route.path }}</pre>
      <pre>pending: {{ pending }}</pre>
      <pre>status: {{ status }}</pre>
      <pre>error: {{ error }}</pre>
    </div>
  </v-container>
</template>
