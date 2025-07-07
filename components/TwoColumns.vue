<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <slot name="left" />
      </v-col>
      <v-col cols="12" md="6">
        <slot name="right" />
      </v-col>
    </v-row>
  </v-container>
</template>
