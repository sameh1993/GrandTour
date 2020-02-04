<template>
  <div class="subserivces">
    <div class="container">
      <div class="head text-center">
        <h2 class>Our Services</h2>
      </div>
    </div>
    <div class="container text-center">
      <div class="row">
        <h4
          class="col-lg-3 col-md-6 col-xs-12 text-center custom mt-3"
        >The Journey Of A Thousand Miles Begins With A Single Step.</h4>
        <div
          class="col-lg-3 col-md-6 col-xs-12 mt-3"
          v-for="(item, index) in firstItems()"
          :key="index+1"
        >
          <i :class="item.myIcon" class="pt-3 pb-3"></i>
          <h4 class="mb-2">{{ item.heading }}</h4>
          <p>{{ item.para }}</p>
        </div>
        <div class="img col-lg-3 col-sm-6 col-xs-12 mt-3">
          <img src="../assets/images/p1.jpg" class="img-fluid w-100" />
        </div>

        <div
          class="col-lg-3 col-md-6 col-xs-12 mt-3"
          v-for="(item, index) in lastItems()"
          :key="index + 1"
        >
          <i :class="item.myIcon" class="pt-3 pb-3"></i>
          <h4 class="mb-2">{{ item.heading }}</h4>
          <p>{{ item.para }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules";

.subserivces {
  padding: 4em 0;
  .container {
    margin: auto;
  }
  .custom {
    padding: 20px;
    font-size: 18px;
    color: #b6b6b6;
    background-color: #ddd;
    background-clip: padding-box;
    transform: scaleX(0.9);
    display: flex;
    align-items: center;
    line-height: 1.7;
    @include minScreen(xs) {
      padding: 15%;
    }
    @include screen(sm) {
      padding: 15%;
    }
  }
  .row {
    i {
      font-size: 28px;
      color: var(--blue);
    }
    h4 {
      font-size: 21px;
      text-transform: capitalize;
      font-weight: 600;
      color: #323648;
    }
    @include minScreen(xs) {
      & > div {
        padding: 20px 40px;
      }
    }
    @include screen(sm) {
      & > div {
        padding: 20px 23%;
      }
    }
  }
}
</style>

<script>
export default {
  methods: {
    firstItems: function() {
      return this.serivces.slice(0, 3);
    },
    lastItems: function() {
      return this.serivces.slice(3, this.serivces.length);
    }
  },
  data() {
    return {
      serivces: [
        {
          myIcon: "fa fa-building fa-2x",
          heading: "Accomodation",
          para:
            "Duis nisi sapien, elementum et finibus et fermen eget, aliquet etleo. Mauris vel ex."
        },
        {
          myIcon: "fa fa-free-code-camp fa-2x",
          heading: "Winter Tours",
          para:
            "Duis nisi sapien, elementum et finibus et fermen eget, aliquet etleo. Mauris vel ex."
        },
        {
          myIcon: "fa fa-user fa-2x",
          heading: "Exp Agents",
          para:
            "Duis nisi sapien, elementum et finibus et fermen eget, aliquet etleo. Mauris vel ex."
        },
        {
          myIcon: "fa fa-money fa-2x",
          heading: "Accomodation",
          para:
            "Duis nisi sapien, elementum et finibus et fermen eget, aliquet etleo. Mauris vel ex."
        },
        {
          myIcon: "fa fa-binoculars fa-2x",
          heading: "Winter Tours",
          para:
            "Duis nisi sapien, elementum et finibus et fermen eget, aliquet etleo. Mauris vel ex."
        },
        {
          myIcon: "fa fa-camera fa-2x",
          heading: "Exp Agents",
          para:
            "Duis nisi sapien, elementum et finibus et fermen eget, aliquet etleo. Mauris vel ex."
        }
      ]
    };
  }
};
</script>
    