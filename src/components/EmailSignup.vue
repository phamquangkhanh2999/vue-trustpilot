<template>
  <div class="emailSignup" :style="{ backgroundColor: color }">
    <div class="emailSignup__inner">
      <h2>Let's talk</h2>
      <h4>Request a personal live demo</h4>
      <form>
        <input type="text" placeholder="Work email" />
        <button type="submit">Send</button>
      </form>
    </div>
    <div class="emailSignup__logos">
      <div class="emailSignup__logos__item">
        <img
          src="https://images.ctfassets.net/b7g9mrbfayuu/2VXEuFf1nFxjCsmhOcmP7o/375db3c0be6ce91a5762a0a2e3a350be/Sage-logo.png"
          alt=""
        />
      </div>
      <div class="emailSignup__logos__item">
        <img
          src="https://images.ctfassets.net/b7g9mrbfayuu/6128woxpecHDVGEhnMnHJ5/843365fee4e422101e34dcd8c8291fcf/Staples-logo.png"
          alt=""
        />
      </div>
      <div class="emailSignup__logos__item">
        <img
          src="https://images.ctfassets.net/b7g9mrbfayuu/6Hij6sY6n5ue1tT45yxmFt/e4982788d0322776a780b9a60adc490a/Western-Union-logo.png"
          alt=""
        />
      </div>
      <div class="emailSignup__logos__item">
        <img
          src="https://images.ctfassets.net/b7g9mrbfayuu/4pULz651F4XNv40StNXKa8/6da42833ddf5a3e207ef443f319a8703/WordPress-logo.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmailSignup",
  props: ["color"],
};
</script>
<style lang="scss" scoped>
.emailSignup {
  padding: 120px 30px 140px;

  &__inner {
    text-align: center;

    h2 {
      font-weight: 600;
      max-width: 600px;
      margin: 0px auto 24px;
      font-size: 3.3rem;
      line-height: 4rem;
      color: $main-white;
    }
    h4 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2.8rem;
      color: $main-white;
      padding: 10px;
    }

    form {
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
        width: 86%;
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

  &__logos {
    @include flex(center, center);
    width: 100%;
    height: 50px;
    margin: 0px auto;
    margin-top: 30px;
    /* max-width: 350px; */

    &__item {
      padding: 0 20px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
