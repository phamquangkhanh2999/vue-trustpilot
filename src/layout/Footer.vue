<template>
  <footer class="footer">
    <div class="footer__inner wrapper">
      <div class="footer__footerLogo">
        <img
          src="https://cdn.trustpilot.net/brand-assets/1.6.0/logo-white.svg"
          alt="Trustpilot Logo"
        />
      </div>
      <div class="footer__footerConnects">
        <div class="footer__footerConnects__Grids">
          <div
            v-for="item in footer"
            :key="item.id"
            class="footer__footerConnects__Grids__footerItems"
          >
            <h5>{{ item.name }}</h5>
            <div
              v-for="(i, index) in item.connect"
              :key="index"
              class="footer__footerConnects__Grids__footerItems__item"
            >
              <a href="/">{{ i }}</a>
            </div>
          </div>
        </div>
        <div class="footer__footerConnects__columns">
          <div class="footer__footerConnects__columns__items">
            <h5>Country</h5>
            <div class="footer__footerConnects__columns__items__item">
              <div
                class="footer__footerConnects__columns__items__item--icon"
              ></div>
              <span>United States</span>
              <fa :icon="['fas', 'caret-down']" />
            </div>
          </div>
          <div class="footer__footerConnects__columns__items">
            <h5>Follow us on</h5>
            <div class="footer__footerConnects__columns__items_icon">
              <span> <fa :icon="['fab', 'facebook-f']" /></span>
              <span> <fa :icon="['fab', 'twitter']" /></span>
              <span> <fa :icon="['fab', 'linkedin-in']" /></span>
              <span> <fa :icon="['fab', 'youtube']" /></span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__footerItems">
        <div class="footer__footerItems__listItem">
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
          <span>Company Guidelines</span>
          <span>Trademark Guidelines</span>
          <span>Cookie preferences</span>
          <span>Modern Slavery Statement</span>
        </div>
        <div class="footer__footerItems__item">
          <span>© 2021 Trustpilot, Inc. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import footer from "../assets/fakeApi/footer";
export default {
  data() {
    return {
      footer: [...footer],
    };
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background-color: $main-color;
  width: 100%;
  padding: 58px 0px;

  &__footerLogo {
    width: 150px;
    height: 40px;

    img {
      width: 100%;
    }
  }

  &__footerConnects {
    padding-top: 32px;
    padding-bottom: 32px;
    &__Grids {
      display: grid;
      grid-template-columns: repeat(5, 18%);
      grid-gap: 20px;
      padding: 10px;

      @include media_tablet {
        grid-template-columns: repeat(2, 50%);
      }

      @include media_mobile {
        grid-template-columns: repeat(1, 100%);
      }
      &__footerItems {
        h5 {
          font-weight: 500;
          color: $main-white;
          font-size: 1.5rem;
        }
        &__item {
          font-size: 1.1rem;
          padding-top: 7px;
          color: $txt-footer;
        }
      }
    }
    &__columns {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      grid-gap: 10px;
      padding: 10px;

      @include media_mobile {
        grid-template-columns: repeat(1, 100%);
      }

      &__items {
        h5 {
          font-weight: 500;
          color: $main-white;
          font-size: 1.4rem;
          margin-bottom: 25px;
        }
        &__item {
          /* @include flex(center, space-between); */
          display: flex;
          align-items: center;
          width: 280px;
          max-width: 100%;
          position: relative;
          height: 54px;
          padding-left: 20px;
          padding-top: 1px;
          background-color: rgb(255, 255, 255);
          border-radius: 3px;
          cursor: pointer;

          &--icon {
            display: inline-block;
            width: 28px;
            height: 20px;
            background: url("https://images.ctfassets.net/b7g9mrbfayuu/7IIvU7zY8n4L1qeJN2vmr9/8eb926ee884f6f2aae07f8ffcad1f5ed/sprite_flags.svg")
              calc(-300px) -2px no-repeat;
            margin-right: 12px;
            vertical-align: middle;
          }

          span {
            margin-right: 40%;
            color: $txt-footer;
          }
        }
        &_icon {
          span {
            font-size: 1.3rem;
            margin-right: 20px;
            color: $txt-footer;
          }
        }
      }
    }
  }

  &__footerItems {
    padding: 30px 10px 30px;
    &__listItem {
      margin-bottom: 21px;

      @include media_mobile {
        display: grid;
      }
      span {
        color: $txt-footer;
        margin-right: 20px;
        cursor: pointer;
      }
    }

    &__item {
      span {
        color: $txt-footer;
      }
    }
  }
}
</style>
