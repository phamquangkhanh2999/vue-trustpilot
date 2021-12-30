<template>
  <div class="pageHero">
    <div class="pageHero__inner">
      <h1>
        Turn reviews into <br />
        traffic, sales, and <br />customer loyalty.
      </h1>

      <p>
        Discover what the people who matter most are saying about your brand.
      </p>
      <form class="pageHero__inner__form">
        <input type="text" placeholder="Enter your website (example.com)" />
        <button type="submit">See your star rating</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageHero",
};
</script>
<style lang="scss" scoped>
.pageHero {
  width: 100%;
  max-width: 100%;
  background-position: right bottom;
  background-color: $page-green2;
  &__inner {
    text-align: center;
    padding: 95px 30px;
    background: url("https://images.ctfassets.net/b7g9mrbfayuu/65taFOqtpcJMxPfeSZdguX/4d0b0b1eb619647211f8404e3c34552d/Rita-Dark_2.png")
        calc(50% + 525px) bottom / 565px no-repeat,
      radial-gradient(
        375px at calc(50% + 375px) center,
        rgba(255, 255, 255, 0.65),
        rgba(255, 255, 255, 0)
      );

    @include media_mobile {
      height: 655px;
      max-height: 655px;
      background: url("https://images.ctfassets.net/b7g9mrbfayuu/65taFOqtpcJMxPfeSZdguX/4d0b0b1eb619647211f8404e3c34552d/Rita-Dark_2.png")
          calc(50% + 10px) bottom / 500px no-repeat,
        radial-gradient(
          375px at calc(50% + 375px) center,
          rgba(255, 255, 255, 0.65),
          rgba(255, 255, 255, 0)
        );
    }
    h1 {
      word-wrap: normal;
      font-size: 3rem;
      color: $main-color;
      font-weight: 600;
      margin-bottom: 50px;
      line-height: 1.3;
    }
    p {
      font-size: 1.3rem;
      color: $main-color;
      font-weight: 500;
      margin-bottom: 50px;
    }
    &__form {
      width: 100%;
      background: white;
      max-width: 600px;
      border-radius: 3px;
      align-items: stretch;
      display: inline-flex;
      transition: all 0.3s ease 0s;
      padding: 6px 6px 6px 24px;
      border: 1px solid $txt-white;
      margin-bottom: 50px;

      input {
        width: 65%;
        outline: none;
        padding: 15px;
        appearance: none;
        transition: border 0.2s ease 0s;
        border-radius: 3px;
        color: $txt-footer;
        border: none;
      }
      button {
        color: rgb(255, 255, 255);
        background-color: $txt-blue;
        border: 2px solid $txt-blue;
        border-radius: 3px;
        padding: 20px 15px 20px;
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
