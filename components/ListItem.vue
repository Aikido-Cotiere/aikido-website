<!-- eslint-disable vue/no-v-html -->
<template>
  <v-list-item :prepend-icon="props.displayBullet ? 'mdi-circle-small' : ''">
    <v-list-item-title><span v-html="title" /></v-list-item-title>
    <v-list-item-subtitle><span v-html="subtitle" /></v-list-item-subtitle>
    <slot />
  </v-list-item>
</template>

<script lang="ts" setup>
const props = defineProps<{
  displayBullet?: boolean;
  title?: string;
  subtitle?: string;
}>();
</script>

<style></style>
