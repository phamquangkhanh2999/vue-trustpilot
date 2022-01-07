<template>
  <div class="header">
    <div class="header__inner wrapper">
      <div class="header__inner__icon">&lt; <span>Insurance </span></div>
      <h1>Best in Travel Insurance Company</h1>
      <h2>Compare companies in the Travel Insurance Company category</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderCategory",
};
</script>
<style lang="scss" scoped>
.header {
  &__inner {
    padding: 12px 16px 16px;
    &__icon {
      font-size: 1.2rem;
    }
    h1 {
      font-size: 3.2rem;
      line-height: 1.2;
    }
    h2 {
      font-weight: 400;
      font-size: 1.5rem;
      color: $main-icon;
    }
  }
}
</style>
