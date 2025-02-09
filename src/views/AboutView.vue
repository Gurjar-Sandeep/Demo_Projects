<template>
  <div>
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: this.$route.name, // Access route name for title
    };
  },
};
</script>
