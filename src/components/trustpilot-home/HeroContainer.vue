<template>
  <div class="heroContainer">
    <div class="heroContainer__inner wrapper">
      <div class="heroContainer__inner__content">
        <h1>Behind every review is an experience that matters</h1>
        <p>Read reviews. Write reviews. Find companies.</p>
      </div>
      <div class="heroContainer__inner__searchInput">
        <form>
          <input type="text" placeholder="Company or category" />
          <button>Search</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroContainer",
};
</script>
<style lang="scss" scoped>
.heroContainer {
  background-color: #e4a4b2;
  width: 100%;
  height: 500px;
  /* background-position-y: 80%;
    background-size: contain;
  */
  background-image: url(https://cdn.tp-staging.net/homepage-consumersite/public/hero-desktop-small.jpg);
  background-position: right center;
  background-repeat: no-repeat;

  &__inner {
    padding: 80px 0px 88px;
    &__content {
      max-width: 660px;

      h1 {
        line-height: 1.3;
        font-size: 3.3rem;
        color: $main-color;
        font-weight: 600;
      }
      p {
        font-size: 1.6rem;
        color: #454554;
      }
    }

    &__searchInput {
      max-width: 600px;
      background-color: $txt-white;
      form {
        @include flex(center, space-between);
        padding: 10px 15px 10px;
        input {
          border: none;
          outline: none;
          font-size: 1.5rem;
          color: $txt-footer;
        }

        button {
          background: $txt-blue;
          font-size: 1.6rem;
          color: $txt-white;
          border: none;
          border-radius: 3px;
          padding: 15px 24px 15px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
