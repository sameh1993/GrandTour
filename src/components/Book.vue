<template>
  <div class="book">
    <div class="container">
      <div class="head text-center pt-3 pm-3">
        <h2>How To Plan Your Trip</h2>
      </div>
      <div class="row text-center text-capitalize">
        <div class="col-md-4 col-sm-6 mt-3" v-for="(item, index) in book" :key="index + 1">
          <i :class="item.myIcone"></i>
          <h4 class="pt-2 pm-1">{{item.title}}</h4>
          <p>{{item.para}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules";

.book {
  background-color: var(--blue);
  padding: 3em 0;
  color: #fff;
    .container {
      margin: auto;
    }
  .row {
    i {
      font-size: 30px;
      height: 80px;
      width: 80px;
      line-height: 80px;
      border-radius: 100%;
      background-color: #fff;
      color: var(--blue);
      margin: 12px 0;
      font-weight: 600;
    }
    h4 {
      letter-spacing: 4px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 20px;
    }
    p {
      line-height: 2;
      text-transform: capitalize;
    }
  }
}
</style>


<script>
export default {
  data() {
    return {
      book: [
        {
          myIcone: "fa fa-map-signs",
          title: "pick destisation",
          para:
            "Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor."
        },
        {
          myIcone: "fa fa-calendar",
          title: "select data",
          para:
            "Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor."
        },
        {
          myIcone: "fa fa-gift",
          title: "neojy the trip",
          para:
            "Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor."
        }
      ]
    };
  }
};
</script>
