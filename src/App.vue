<!-- src/App.vue -->
<!-- <template>
  <v-app>
    <v-main>
      <XmlDataGrid />
    </v-main>
  </v-app>
</template>
<script setup>
import XmlDataGrid from "./components/XmlDataGrid_o.vue";
</script> -->
<!-- 
<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>My Vue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-nav-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = !rail"
      >
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            :to="{ name: 'Home' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="About"
            :to="{ name: 'About' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-phone"
            title="Contact"
            :to="{ name: 'Contact' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-file-document"
            title="Document"
            :to="{ name: 'Document' }"
          ></v-list-item>
        </v-list>
      </v-nav-drawer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template> -->
<!-- 
<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>My Vue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text :to="{ name: 'Home' }">Home</v-btn>
        <v-btn text :to="{ name: 'About' }">About</v-btn>
        <v-btn text :to="{ name: 'Contact' }">Contact</v-btn>
        <v-btn text :to="{ name: 'Document' }">Document</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="pa-4"> <router-view></router-view> </v-main>
  </v-app>
</template> -->
<!-- 
<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>My Vue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/document" class="nav-link">Document</router-link>
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="pa-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template> -->

<!-- 
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Vue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          :to="{ name: 'Home' }"
          :class="$route.name === 'Home' ? 'active' : ''"
          >Home</v-btn
        >
        <v-btn
          text
          :to="{ name: 'About' }"
          :class="$route.name === 'About' ? 'active' : ''"
          >About</v-btn
        >
        <v-btn
          text
          :to="{ name: 'Contact' }"
          :class="$route.name === 'Contact' ? 'active' : ''"
          >Contact</v-btn
        >
        <v-btn
          text
          :to="{ name: 'Document' }"
          :class="$route.name === 'Document' ? 'active' : ''"
          >Document</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="pa-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template> -->
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Vue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          :to="{ name: 'Home' }"
          :class="{ active: $route.name === 'Home' }"
          >Home</v-btn
        >
        <v-btn
          text
          :to="{ name: 'About' }"
          :class="{ active: $route.name === 'About' }"
          >About</v-btn
        >
        <v-btn
          text
          :to="{ name: 'Contact' }"
          :class="{ active: $route.name === 'Contact' }"
          >Contact</v-btn
        >
        <v-btn
          text
          :to="{ name: 'Document' }"
          :class="{ active: $route.name === 'Document' }"
          >Document</v-btn
        >
        <v-btn
          text
          :to="{ name: 'XML Data' }"
          :class="{ active: $route.name === 'XML Data' }"
          >XML Data</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="pa-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute(); // Correct: Use route, not $route
    return {
      $route: route, // Now correctly assign to $route
    };
  },
};
</script>

<style scoped>
.active {
  color: yellow !important;
  font-weight: bold;
}

.v-btn--text:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
<!-- 
<script>
export default {};
</script>


<script>
export default {
  data: () => ({ drawer: true, rail: false }),
};
</script> -->

<style scoped>
.active {
  color: yellow !important; /* Highlight the active route */
  font-weight: bold;
}

/* Optional: Add some hover effect */
.v-btn--text:hover {
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); /* Subtle white background on hover */
}
</style>

<style scoped>
.active {
  color: yellow !important;
  font-weight: bold;
}

.v-btn--text:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

<style scoped>
.nav-link {
  display: inline-block; /* Make the links behave like inline elements */
  padding: 0 16px; /* Add some padding around the link text */
  text-decoration: none; /* Remove underlines from links */
  color: inherit; /* Inherit the color from the parent (usually black or dark gray) */
  font-size: 1rem; /* Set a reasonable font size */
  font-weight: 500; /* Slightly bolder font weight */
  transition: color 0.2s ease; /* Smooth color transition on hover */
}

.nav-link:hover {
  color: #007bff; /* Example hover color (you can customize this) */
}

/* Optional: Add active class styling */
.nav-link.router-link-active {
  color: #0056b3; /* Example active color */
  font-weight: bold;
}
</style>
