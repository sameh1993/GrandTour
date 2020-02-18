<template>
  <div class="choose">
    <div class="overlay pt-5 pb-5">
      <div class="container">
        <div class="head text-center">
          <h2 class="text-capitalize">why choose Us</h2>
        </div>
        <div class="control">
            <button class="active" @click="visiblilty='sec1' ">we offer</button>
            <button @click="visiblilty='sec2' ">we provide</button>
          </div>
        <div class="row">
          
            <div v-show="visiblilty == 'sec1' " class="content row text-center">
              <div
                v-for="(item, index) in weOffer"
                :key="index + 1"
                class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5"
                
              >
                <i :class="item.myIcon" class="mt-2 mb-2"></i>
                <h2 class="text-capitalize">{{ item.heading }}</h2>
                <p>{{ item.para }}</p>
              </div>
          </div>

            <div v-show="visiblilty == 'sec2' " class="content row text-center">
             <div
                class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5"
                v-for="(item, index) in weProvide"
                :key="index + 1"
                
              >
                <i :class="item.myIcon" class="mt-2 mb-2"></i>
                <h2>{{item.heading}}</h2>
                <p>{{item.para}}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules";

.choose {
  background-image: url("../assets/images/choose.jpg");
  background-size: cover;
  color: #fff;
 
  .container {
    margin: auto;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
     padding: 4em 0;
    h2 {
      color: #fff;
    }
    .container {
      margin: auto;
    }
    .control {
      button {
        background-color: rgba(#fff, 0.4);
        border: 1px solid #ccc;
        margin-top: 20px;
        color: #fff;
        text-transform: capitalize;
        padding: 10px 25px;
        margin-right: 8px;
        font-weight: 600;
      }
      .active {
        background-color: var(--blue);
        border: 1px solid var(--blue);
      }
    }
    .content {
      & > div {
        padding: 41px;
        border: 1px solid #b6b6b6;
        color: #999;
        transform: scalex(0.92);
        margin-top: 35px !important;
        i {
          color: var(--blue);
        }
        h2 {
          font-size: 22px;
          letter-spacing: 2px;
          font-weight: 600;
          margin: 10px 0;
        }
        p {
          line-height: 1.8;
          margin-top: 15px;
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
      visiblilty: "sec1",
      weOffer: [
        {
          myIcon: "fa fa-server fa-2x",
          heading: "winter tours",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur elit. Cras lobortis mollis arcu, vel vulputate justo."
        },
        {
          myIcon: "fa fa-edit fa-2x",
          heading: "Accomodation",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur elit. Cras lobortis mollis arcu, vel vulputate justo."
        },
        {
          myIcon: "fa fa-gift fa-2x",
          heading: "Low Prices",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur elit. Cras lobortis mollis arcu, vel vulputate justo."
        }
      ],
      weProvide: [
        {
          myIcon: "fa fa-gift fa-2x",
          heading: "Less Crowd",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur elit. Cras lobortis mollis arcu, vel vulputate justo."
        },
        {
          myIcon: "fa fa-gift fa-2x",
          heading: "Exp Agents",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur elit. Cras lobortis mollis arcu, vel vulputate justo."
        },
        {
          myIcon: "fa fa-server fa-2x",
          heading: "Easy Trip",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur elit. Cras lobortis mollis arcu, vel vulputate justo."
        }
      ]
    };
  }
};
</script>
