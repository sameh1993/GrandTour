<template>
  <div class="destination pt-5 pb-5">
    <div class="container">
      <div class="head text-center">
        <h2 class="mb-3">popular destination</h2>
        <p>Vestibulum tellus neque, sodales vel mauris at, rhoncus finibus augue. Vestibulum urna ligula, molestie at ante ut, finibus vulputate felis.</p>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-sm-6 col-xs-12 mt-4"
          v-for="(item, index) in items"
          :key="index + 1"
        >
          <h2 class="text-center text-uppercase pt-3 pb-3">{{item.countory}}</h2>
          <div class="img">
            <img :src="item.myImg" class="img-fluid w-100" />
            <div class="overlay">
              <h4 class="pt-1">{{item.countory}}</h4>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules";

.destination {
  .container {
    margin: auto;
  }
  .head {
    @include minScreen(xs) {
      p {
        max-width: 100%;
        padding: 10px;
        line-height: 2.2;
      }
    }
  }
  .row {
    & > div {
      padding: 0;
      transform: scalex(0.97);
    }
    h2 {
      font-size: 18px;
      font-weight: 600;
      padding: 15px 0;
      letter-spacing: 3px;
    }
    .img {
      position: relative !important;
      overflow: hidden;
      transform: scalex(0.97);
      &:hover {
        .overlay {
          transform: translate(0);
        }
      }
      .social {
        position: absolute;
        top: 4px;
        right: 4px;
        padding: 3px 4px;
        background-color: var(--blue);
        i {
          display: inline-block;
          color: #fff;
          font-size: 14px;
          margin-right: 2px;
        }
      }
      .overlay {
        position: absolute;
        top: 50%;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 15px;
        text-align: center;
        transition: all 0.4s ease-in-out;
        transform: translatey(160px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include minScreen(sm) {
          top: 60%;
        }
        @include screen(xs) {
          top: 75%;
        }
        h4 {
          text-transform: capitalize;
          letter-spacing: 3px;
          font-weight: 600;
          padding-top: 4px;
        }
        button {
          padding: 13px 20px;
          border: 1px solid rgba(#fff, 0.8);
          background-color: transparent;
          margin-top: 18px;
          color: rgba(#fff, 0.8);
          font-weight: 600;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        { countory: "china", myImg: require("../assets/images/china.jpg") },
        {
          countory: "malaysia",
          myImg: require("../assets/images/malaysia.jpg")
        },
        { countory: "japan", myImg: require("../assets/images/japan.jpg") },
        {
          countory: "singapore",
          myImg: require("../assets/images/malaysia.jpg")
        }
      ]
    };
  }
};
</script>