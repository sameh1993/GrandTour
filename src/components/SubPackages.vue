<template>
  <div class="subpackage">
    <div class="container">
      <div class="head text-center">
        <h2>Discover Our Tour Packages</h2>
        <p>Vestibulum tellus neque, sodales vel mauris at, rhoncus finibus augue. Vestibulum urna ligula, molestie at ante ut, finibus vulputate felis.</p>
      </div>
      <div class="row">


        <div
          class="parent mt-5 col-lg-3 col-sm-6 col-xs-12 text-capitalize"
          v-for="(item, index) in images"
          :key="index + 1"
        >
          <div class="img">
            <img :src="item.myImg" class="img-fluid w-100"/>
            <span>
              <i class="fa fa-tags"></i>
              {{item.price}}
            </span>
          </div>
          <div class="content">
            <p class="mt-2">{{item.location}}</p>
            <h4>{{item.title}}</h4>
            <p class="second">{{item.para}}</p>
            <span>
              Duration :
              <span class="dura">{{item.duration}}</span>
            </span>
          </div>
        </div>

      
        
        <button class="mt-5 mr-auto ml-auto btn btn-primary">view all packages</button>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subpackage {
  padding: 4em 0;
  .parent {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 0;
    transform: scaleX(0.93);
    .img {
      position: relative;

      span {
        position: absolute;
        right: 6px;
        bottom: 6px;
        background-color: var(--blue);
        padding: 8px 10px;
        color: #fff;
        color: #fff;
      }
    }
    .content {
      padding: 18px;
      background-color: #f5f5f5;
      h4 {
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 18px;
        text-transform: capitalize;
        margin: 10px 0;
      }
      .second {
        font-size: 15px;
        margin-top: 8px;
        margin-bottom: 10px;
        line-height:1.8;
      }
      .dura {
        color: #444;
        font-weight: 600;
      }
    }
  }
  button {
    padding: 10px 28px;
    border-radius: 0;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 1px;
    display:block;
    margin: auto;
  }
}
</style>

<script>
export default {
  props: ["state"],
  data() {
    return {
      images: [
        {
          myImg:require("../assets/images/p1.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg:require("../assets/images/p2.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg:require("../assets/images/p3.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg:require("../assets/images/p4.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        }
      ]
    };
  }
};
</script>
