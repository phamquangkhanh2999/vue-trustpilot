<template>
  <div class="headLine">
    <div class="headLine__inner wrapper">
      <div class="headLine__inner__heading">
        <h4>Why Trustpilot</h4>
        <h1>Join one of the world's leading review platforms</h1>
      </div>
      <button class="headLine__inner__btn">Get a demo</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Headline",
};
</script>
<style lang="scss" scoped>
.headLine {
  background: $main-color;
  width: 100%;
  max-width: 100%;

  &__inner {
    width: 100%;
    max-width: 1300px;
    padding: 100px 20px 200px;
    text-align: center;

    &__heading {
      margin: 0px auto;
      max-width: 730px;
      text-align: center;
      margin-bottom: 30px;
      h4 {
        color: $main-white;
        font-size: 1.5rem;
      }
      h1 {
        color: $main-white;
        font-size: 3.6rem;
        line-height: 1.3;
      }
    }

    &__btn {
      margin: 30px 0 30px;
      padding: 16px 24px;
      border: 2px solid $txt-blue;
      background-color: $txt-blue;
      color: $main-white;
      font-weight: bold;
      border-radius: 3px;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
}
</style>
