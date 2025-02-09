<template>
  <v-card>
    <v-card-title class="text-h5">
      Task Documents
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="ml-3"
      />
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-1 mx-4 mb-4"
      :loading="loading"
    >
      <template #item="{ item }">
        <tr>
          <td>
            <v-chip color="primary">
              {{ item.TaskId }}
            </v-chip>
          </td>
          <td>{{ item.BdmsId }}</td>
          <td>{{ item.DocumentId }}</td>
        </tr>
      </template>
    </v-data-table>

    <v-alert v-if="error" type="error" class="ma-4">
      Error loading data: {{ error }}
    </v-alert>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { convertXml } from "xml-js";
import convert from "xml-js";

const loading = ref(false);
const error = ref(null);
const items = ref([]);

const headers = [
  { title: "Task ID", key: "TaskId" },
  { title: "BDMS ID", key: "BdmsId" },
  { title: "Document ID", key: "DocumentId" },
];

async function loadData() {
  try {
    loading.value = true;
    error.value = null;

    const response = await fetch("/sample-data.xml");
    const xmlText = await response.text();

    // Convert XML to JavaScript object
    const result = convert.xml2js(xmlText, {
      compact: true,
      ignoreComment: true,
      alwaysChildren: true,
    });

    // Handle XML structure
    const records = result?.Tasks?.Record;
    if (!records) throw new Error("Invalid XML structure");

    items.value = (Array.isArray(records) ? records : [records]).map(
      (item) => ({
        TaskId: item.TaskId._text,
        BdmsId: item.BdmsId._text,
        DocumentId: item.DocumentId._text,
      })
    );
  } catch (err) {
    error.value = `XML Parsing Error: ${err.message}`;
    console.error("XML Error:", err);
  } finally {
    loading.value = false;
  }
}
// async function loadData() {
//   try {
//     loading.value = true;
//     error.value = null;

//     const response = await fetch("/sample-data.xml");
//     const xmlText = await response.text();
//     const result = convertXml.xml2js(xmlText, { compact: true });

//     items.value = result.Tasks.Record.map((record) => ({
//       TaskId: record.TaskId._text,
//       BdmsId: record.BdmsId._text,
//       DocumentId: record.DocumentId._text,
//     }));
//   } catch (err) {
//     error.value = err.message;
//     console.error("XML Error:", err);
//   } finally {
//     loading.value = false;
//   }
// }

onMounted(loadData);
</script>

<style scoped>
.v-card {
  margin: 20px;
}
</style>
