<template >
  <div class="places">
    <div class="container">
      <div class="head text-center">
        <h2>Tourism places</h2>
      </div>
      <div class="row parent ">
        <div class="col-lg-6 col-sm-12 col-xs-12 mt-4" v-for="(item, index) in tourism" :key="index+1">
          <div class="row">
            <div class="img col-6">
              <img :src="item.myImg" class="img-fluid w-100" />
            </div>
            <div class="col-6">
              <h4 class="text-capitalize pb-2">{{item.title}}</h4>
              <span class="stars">
                <i class="fa fa-star" v-for="(s1, index) in 5" :key="index + 1"></i>
              </span>
              <p
                class="mb-2 mt-2 text-capitalize"
              >Sed ut perspiciatis unde omnis istes natus error sit volup tatem accusani tium doloremque laudantium.</p>
              <div>Duration : {{item.duration}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.places {
  padding: 5em 0;
  .row {
    
    h4 {
      letter-spacing: 2px;
      font-weight: 600;
    }
    i {
      color: var(--blue);
    }
    p {
      line-height: 1.9;
      font-size: 15px;
      margin-top: 21px !important;
    }
    
  }
}
</style>


<script>
export default {
  name: "places",
  data() {
    return {
      tourism: [
        {
          myImg: require("../assets/images/japan.jpg"),
          title: "Jaban",
          star: 5,
          duration: "2 days, 3hrs"
        },
        {
          myImg:require("../assets/images/singapore.jpg"),
          title: "Singapore",
          star: 5,
          duration: "2 days, 3hrs"
        },
        {
          myImg: require("../assets/images/malaysia.jpg"),
          title: "Malaysia",
          star: 5,
          duration: "2 days, 3hrs"
        },
        {
          myImg: require("../assets/images/china.jpg"),
          title: "China",
          star: 5,
          duration: "2 days, 3hrs"
        }
      ]
    };
  }
};
</script>
