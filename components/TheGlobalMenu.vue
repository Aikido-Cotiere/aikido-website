<template>
  <v-list :lines="false" nav dense density="compact">
    <template v-for="group in groups" :key="group.group">
      <v-list-subheader v-if="group.group" class="align-center">{{ group.group }}</v-list-subheader>
      <v-list-item v-for="item in group.items" :key="item.path" :prepend-icon="item.icon?.toString() ?? 'mdi-help'" :title="item.menu?.toString()" :to="{ path: item.path }" exact />
      <v-divider v-if="group.items.length > 0" />
    </template>
  </v-list>
  <!-- <v-list :lines="false" nav dense density="compact">
    <v-list-item prepend-icon="mdi-home" title="Accueil" to="/" />

    <v-divider />

    <v-list-subheader title="Le Dojo" class="align-center" />
    <v-list-item prepend-icon="mdi-karate" title="Entrainement" to="/entrainements" />
    <v-list-item prepend-icon="mdi-clock" title="Horaires" to="/horaires" />
    <v-list-item prepend-icon="mdi-cash" title="Tarifs" to="/tarifs" />
    <v-list-item prepend-icon="mdi-map" title="Plan d'accès" to="/plan" />
    <v-list-item prepend-icon="mdi-image-album" title="Galerie photo" to="/dojo" />

    <v-divider />

    <v-list-item prepend-icon="mdi-newspaper" title="Brêves" to="/breves" />

    <v-divider />

    <v-list-subheader title="Aïkido" class="ml-4" />
    <v-list-item prepend-icon="mdi:learn-outline" title="L'Aïkido" to="/aikido" exact />
    <v-list-item prepend-icon="emojione:martial-arts-uniform" title="L'équipement" to="/aikido/equipement" exact />
    <v-list-item prepend-icon="icon-park-outline:trousers-bell-bottoms" title="Le hakama" to="/aikido/equipement/hakama" exact />
    <v-list-item prepend-icon="mdi-help" title="Comment mettre le hakama" to="/aikido/equipement/hakama/mettre" exact />
    <v-list-item prepend-icon="game-icons:folded-paper" title="Comment plier le hakama" to="/aikido/equipement/hakama/plier" exact />

    <v-divider />

    <v-list-item prepend-icon="material-symbols:massage" title="Shiatsu et Do in" to="/doin" />

    <v-divider />

    <v-list-item prepend-icon="mdi-email" title="Contactez-nous" to="/contact" />

    <v-divider />

    <v-list-subheader title="Inscriptions" class="ml-4" />
    <v-list-item prepend-icon="octicon:law-16" title="Formalités d'inscriptions" to="/inscriptions/formalites" />
    <v-list-item prepend-icon="mdi-account-plus" title="Premières inscriptions" to="/inscriptions/premiere" />
    <v-list-item prepend-icon="mdi-account-check" title="Réinscriptions" to="/inscriptions/reinscription" />

    <v-divider />

    <v-list-item prepend-icon="mdi-link-variant" title="Liens" to="/liens" />
  </v-list> -->
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('navigation', () => {
  return (
    queryCollectionNavigation('pages', ['title', 'icon', 'group', 'menu'])
      //.where('draft', '=', false)
      //.where('partial', '=', false)
      .order('group', 'ASC')
  );
});

const groups = computed(() => {
  const grouped = data.value?.reduce(
    (acc, item) => {
      // Helper function to process an item and its children recursively
      function processItem(it: any, group: string) {
        if (it.menu) {
          if (!acc[group]) {
            acc[group] = [];
          }
          acc[group].push(it);
        }
        if (Array.isArray(it.children) && it.children.length > 0) {
          it.children.forEach((child) => processItem(child, child.group || group));
        }
      }
      processItem(item, item.group || '');
      return acc;
    },
    {} as Record<string, typeof data.value>
  );
  return Object.entries(grouped ?? []).map(([group, items]) => ({
    group,
    items,
  }));
  // .sort((a, b) => {
  //   if (a.group === b.group) {
  //     return 0; // Keep the order of items in the same group
  //   }
  //   return a.group.localeCompare(b.group); // Sort groups alphabetically
  // });
});
</script>

<style></style>
