<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :location="mobile ? 'bottom' : undefined"
      :temporary="mobile"
      :expand-on-hover="!mobile"
      :rail="!mobile"
      :rail-width="mobile ? undefined : 70"
      class="bg-white"
    >
      <the-global-menu />
    </v-navigation-drawer>

    <v-app-bar density="default" color="red-darken-4" image="/main-banner.jpg" scroll-behavior="hide" class="bg-white">
      <template #title>
        <v-app-bar-title class="d-flex justify-center">
          <span class="text-wrap" :class="{ 'text-white': !mobile }">AÏKIDO TRADITIONNEL DE LA CÔTIERE</span>
        </v-app-bar-title>
      </template>
      <template #prepend>
        <v-img width="50" src="/main-logo.jpg" to="/" />
      </template>
      <template #append>
        <v-app-bar-nav-icon v-if="mobile" color="white" variant="text" @click.stop="drawer = !drawer" />
      </template>
    </v-app-bar>

    <v-main>
      <v-parallax src="/parallax.jpg">
        <NuxtPage />
      </v-parallax>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const drawer = ref(!mobile.value);
</script>
