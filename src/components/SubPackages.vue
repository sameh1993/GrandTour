<template>
  <div class="subpackage">
    <div class="container">
      <div class="head text-center">
        <h2>Discover Our Tour Packages</h2>
        <p>Vestibulum tellus neque, sodales vel mauris at, rhoncus finibus augue. Vestibulum urna ligula, molestie at ante ut, finibus vulputate felis.</p>
      </div>
      <div class="row">
        <div
          class="parent mt-4 col-lg-3 col-sm-6 col-xs-12 text-capitalize"
          v-for="(item, index) in images"
          v-show=" $route.name === 'home'? index >= 4 : true "
          :key="index + 1"
        >
          <div class="control">
            <i @click="dataItem(item)" class="fa fa-close"></i>
            <i @click="clickme(item, index)" class="fa fa-edit"></i>
          </div>
          <div class="img">
            <img :src="item.myImg" class="img-fluid w-100" />
            <span>
              <i class="fa fa-tags"></i>
              {{ item.price }}
            </span>
          </div>
          <div class="content">
            <p class="mt-0">{{item.location}}</p>
            <h4>{{item.title}}</h4>
            <p class="second">{{item.para}}</p>
            <span>
              Duration :
              <span class="dura">{{item.duration}}</span>
            </span>
          </div>
        </div>


        <form>
          <input type="file" @change="uploadFile($event)" />
        </form>

        

        <button v-show="$route.name === 'home' " class="mt-5 mr-auto ml-auto btn btn-primary">
          <router-link to="/packages">view all packages</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subpackage {
  padding: 4em 0;
  .parent {
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.4),
      -2px -3px -10px rgba(0, 0, 0, 0.4);
    padding: 0;
    transform: scaleX(0.92);
    overflow: hidden;
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
        line-height: 1.8;
      }
      .dura {
        color: #444;
        font-weight: 600;
      }
    }
    .control {
      left: 0;
      top: 0;
      padding: 10px;
      width: 30px;
      position: absolute;
      z-index: 10;
      & > i {
        background-color: #ffffff;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        color: #333;
        &:last-child {
          margin-top: 4px;
        }
      }
    }
  }
  button {
    padding: 10px 28px;
    border-radius: 0;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 1px;
    display: block;
    margin: auto;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>

<script>
import db from "firebase";

export default {
  props: ["state"],
  data() {
    return {
      images: [
        {
          myImg: require("../assets/images/p1.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg: require("../assets/images/p2.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg: require("../assets/images/p3.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg: require("../assets/images/p4.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg: require("../assets/images/p2.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg: require("../assets/images/p3.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg: require("../assets/images/p2.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        },
        {
          myImg: require("../assets/images/p3.jpg"),
          price: "20$",
          location: "paris, france",
          title: "Sodales Vel Mauris",
          para: "Vestibulum tellus neque, et velit mauris at, augue.",
          duration: "10 days"
        }
      ],
      file: null
    };
  },
  methods: {
    uploadFile(e) {
      let file = e.target.files[0];
      // Create a root reference
      // let storageRef =
        db.storage().ref(file.name).put(file)

     db.storage().ref()
        .child(file.name)
        .getDownloadURL()
        .then(url => {
          // document.getElementById("image").src = url
          this.file = url;
          console.log(this.file)
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>
