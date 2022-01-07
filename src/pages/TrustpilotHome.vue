<template>
  <div>
    <hero-container />
    <categories-carouse />
  </div>
</template>
<script>
import HeroContainer from "@/components/trustpilot-home/HeroContainer.vue";
import CategoriesCarouse from "@/components/trustpilot-home/CategoriesCarouse.vue";
export default {
  components: {
    HeroContainer,
    CategoriesCarouse,
  },
};
</script>
<style lang="scss" scoped></style>
