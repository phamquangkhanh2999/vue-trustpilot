<template>
  <div class="quote">
    <div class="quote__header wrapper">
      <h2>See how others are asking for reviews</h2>
    </div>
    <div class="quote__inner wrapper">
      <div class="quote__inner__contentText">
        <div class="quote__inner__contentText__logo">
          <img
            src="https://images.ctfassets.net/b7g9mrbfayuu/4wwJ1Q6vbtjedfG2HkNW9Z/47c05d0179b88ef8458afd84325125ff/Case-logo.png"
            alt="logo"
          />
          <hr />
        </div>
        <div class="quote__inner__contentText__text">
          <p>
            Dashlane uses Trustpilot to get seen, get sold, and get better. See
            how they achieved a 93% lift in click-through-rates, and 14.5%
            increase in conversions.
          </p>
        </div>
        <div class="quote__inner__contentText__btn">
          <button>Read case study</button>
        </div>
      </div>
      <div class="quote__inner__ContentMedia">
        <img
          src="https://images.ctfassets.net/b7g9mrbfayuu/7p3afTS0CJQtDRDjqiIBOe/d2916d93af10f7d61695fe96ad38e72d/Case-image.png?q=80&fm=webp&w=660"
          alt="https://images.ctfassets.net"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Quote",
};
</script>
<style lang="scss" scoped>
.quote {
  background-color: $txt-white;
  width: 100%;
  max-width: 100%;

  &__header {
    margin: 0px auto;
    max-width: 730px;
    text-align: center;
    margin-bottom: 40px;
    h2 {
      font-size: 2.9rem;
      line-height: 1.3;

      @include media_tablet {
        font-size: 3.2rem;
      }
    }
  }

  &__inner {
    background-color: #f9f9fa;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin-bottom: 150px;

    @include media_tablet {
      font-size: 3.2rem;
      flex-direction: column-reverse;
    }

    &__contentText {
      flex: 1 1 50%;
      margin-top: 0px;
      padding: 92px 90px 92px 70px;
      &__logo {
        img {
          max-height: 80px;
          max-width: 190px;
          margin-bottom: 28px;
        }

        hr {
          border: 0px;
          width: 50px;
          height: 2px;
          margin: 0px 0px 28px;
          background-color: rgb(197, 197, 214);
        }
      }

      &__text {
        color: $main-color;
        max-width: 550px;
        font-weight: 500;
        margin-bottom: 28px;
        font-size: 1.7rem;
        line-height: 2.8rem;
      }

      &__btn {
        margin-top: 5px;
        button {
          color: $main-color;
          background-color: $main-white;
          border: 2px solid $main-color;
          border-radius: 3px;
          transition: all 0.15s ease-in-out 0s;
          cursor: pointer;
          padding: 18px 25px;
          font-weight: 600;
          font-size: 1.3rem;

          &:hover {
            color: $main-white;
            background-color: $main-color;
          }
        }
      }
    }
    &__ContentMedia {
      flex: 1 1 50%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
