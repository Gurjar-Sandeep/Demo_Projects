<template>
  <div class="document-container">
    <h1>Documents</h1>

    <!-- Search and Filter -->
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="search"
          label="Search documents..."
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>

    <v-data-table
      v-if="!loading && documents.length > 0"
      :headers="computedHeaders"
      :items="filteredDocuments"
      v-model:sort-by="sortBy"
      :items-per-page="itemsPerPage"
      class="elevation-2 bordered"
    >
      <!-- Corrected Slots for Sorting -->
      <template #column="{ column }">
        <v-btn variant="text" @click="toggleSort(column.key)">
          {{ column.title }}
          <v-icon v-if="sortBy[0]?.key === column.key">
            {{ sortBy[0]?.order === "asc" ? "mdi-arrow-up" : "mdi-arrow-down" }}
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <div v-if="!loading && documents.length === 0">No documents found.</div>
  </div>
</template>

<script>
import { XMLParser } from "fast-xml-parser";

export default {
  data() {
    return {
      rawHeaders: [
        { title: "Title", key: "title", sortable: true },
        { title: "Author", key: "author", sortable: true },
      ],
      documents: [],
      loading: true,
      search: "",
      sortBy: [{ key: "title", order: "asc" }], // Default sorting
      itemsPerPage: 10,
    };
  },
  computed: {
    computedHeaders() {
      return this.rawHeaders;
    },
    filteredDocuments() {
      return this.documents
        .filter(
          (doc) =>
            doc.title.toLowerCase().includes(this.search.toLowerCase()) ||
            doc.author.toLowerCase().includes(this.search.toLowerCase())
        )
        .sort((a, b) => this.sortFunction(a, b));
    },
  },
  mounted() {
    this.fetchDocuments();
  },
  methods: {
    async fetchDocuments() {
      try {
        const response = await this.$axios.get("/data/documents.xml", {
          responseType: "text",
        });

        const parser = new XMLParser({ ignoreAttributes: false });
        const result = parser.parse(response.data);

        if (result.documents && result.documents.document) {
          const docs = Array.isArray(result.documents.document)
            ? result.documents.document
            : [result.documents.document];

          this.documents = docs.map((doc) => ({
            title: doc.title || "",
            author: doc.author || "",
          }));
        } else {
          console.error("Invalid XML structure or no elements found.");
        }
      } catch (error) {
        console.error("Error fetching XML:", error);
      } finally {
        this.loading = false;
      }
    },
    toggleSort(columnKey) {
      if (this.sortBy[0]?.key === columnKey) {
        this.sortBy[0].order = this.sortBy[0].order === "asc" ? "desc" : "asc";
      } else {
        this.sortBy = [{ key: columnKey, order: "asc" }];
      }
    },
    sortFunction(a, b) {
      if (!this.sortBy.length) return 0;

      const { key, order } = this.sortBy[0];
      const valueA = a[key]?.toLowerCase() || "";
      const valueB = b[key]?.toLowerCase() || "";

      return order === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    },
  },
};
</script>

<style scoped>
.document-container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.bordered {
  border: 1px solid #ccc;
  border-radius: 8px;
}

.v-data-table :deep(.v-data-table__wrapper > table > tbody > tr > td) {
  padding: 10px;
}

.v-text-field {
  max-width: 100%;
}
</style>
