<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="10"
    class="elevation-1"
  >
    <template #item.actions="{ item }">
      <v-btn @click="editItem(item)">Edit</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Age", value: "age" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  methods: {
    editItem(item) {
      this.$emit("edit", item);
    },
  },
};
</script>
