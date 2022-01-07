<template>
  <div>
    <header-category />
    <category-body />
  </div>
</template>
<script>
import HeaderCategory from "@/components/categories/HeaderCategory.vue";
import CategoryBody from "@/components/categories/CategoryBody.vue";
export default {
  components: { HeaderCategory, CategoryBody },
  name: "Category",
};
</script>
<style lang=""></style>
