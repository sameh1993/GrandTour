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
          <div class="control" v-if="$route.name == 'Dashboard' ">
            <i @click="dataItem(item, index)" class="fa fa-close"></i>
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
      </div>

      <button v-show="$route.name === 'home' " class="mt-5 mr-auto ml-auto btn btn-primary">
        <router-link to="/packages">view all packages</router-link>
      </button>

      <div v-if="$route.name == 'Dashboard' " class="edit">
        <!-- start add a new item -->
        <h3 class="text-center">add a new Item</h3>
        <div class="fixed">
          <form @submit.prevent="addItem" class="form">
            <fetchingData @passData="fetching" />
          </form>
          <i class="fa fa-close"></i>
        </div>
        <!--- end add a new item -->

        <!-- start add a new item -->
        <div class="fixed">
          <form @submit.prevent="editItem" class="form">
            <fetchingData @passData="fetching" />
          </form>
          <i class="fa fa-close"></i>
        </div>
        <!--- end add a new item -->
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
    display: block !important;
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
      & > img {
        height: 205px;
      }
    }
    .content {
      padding: 18px;
      background-color: #f5f5f5;
      height: 250px;

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
  .edit {
    h3 {
      width: 35%;
      padding: 12px;
      background: #333;
      color: #fff;
      font-size: 16px;
      letter-spacing: 2px;
      text-transform: capitalize;
      margin: auto;
      margin-top: 35px;
      border-radius: 10px;
      cursor: pointer;
    }
    .fixed {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      overflow: auto;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 25px;
      z-index: 20;
      .form {
        width: 60%;
        margin: auto;
        padding: 25px;
        background: rgba(#000, 0.8);
        padding: 35px;
        padding-top: 45px !important;
        border-radius: 13px;
        overflow: auto;
      }
      .fa-close {
        position: absolute;
        right: 40px;
        top: 40px;
        width: 30px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }
}
</style>

<script>
import db from "../firebase/firebase.js";

import fb from "firebase";

// import fb from "firebase";

import fetchingData from "./pushingData/fetchingData.vue";

import jquery from "jquery";
const $ = jquery;
window.$ = $;

export default {
  props: ["state"],
  data() {
    return {
      images: [
        // {
        //   myImg: require("../assets/images/p1.jpg"),
        //   price: "20$",
        //   location: "paris, france",
        //   title: "Sodales Vel Mauris",
        //   para: "Vestibulum tellus neque, et velit mauris at, augue.",
        //   duration: "10 days"
        // },
        // {
        //   myImg: require("../assets/images/p2.jpg"),
        //   price: "20$",
        //   location: "paris, france",
        //   title: "Sodales Vel Mauris",
        //   para: "Vestibulum tellus neque, et velit mauris at, augue.",
        //   duration: "10 days"
        // },
        // {
        //   myImg: require("../assets/images/p3.jpg"),
        //   price: "20$",
        //   location: "paris, france",
        //   title: "Sodales Vel Mauris",
        //   para: "Vestibulum tellus neque, et velit mauris at, augue.",
        //   duration: "10 days"
        // },
        // {
        //   myImg: require("../assets/images/p4.jpg"),
        //   price: "20$",
        //   location: "paris, france",
        //   title: "Sodales Vel Mauris",
        //   para: "Vestibulum tellus neque, et velit mauris at, augue.",
        //   duration: "10 days"
        // },
        // {
        //   myImg: require("../assets/images/p2.jpg"),
        //   price: "20$",
        //   location: "paris, france",
        //   title: "Sodales Vel Mauris",
        //   para: "Vestibulum tellus neque, et velit mauris at, augue.",
        //   duration: "10 days"
        // },
        // {
        //   myImg: require("../assets/images/p3.jpg"),
        //   price: "20$",
        //   location: "paris, france",
        //   title: "Sodales Vel Mauris",
        //   para: "Vestibulum tellus neque, et velit mauris at, augue.",
        //   duration: "10 days"
        // },
        // {
        //   myImg: require("../assets/images/p2.jpg"),
        //   price: "20$",
        //   location: "paris, france",
        //   title: "Sodales Vel Mauris",
        //   para: "Vestibulum tellus neque, et velit mauris at, augue.",
        //   duration: "10 days"
        // },
        // {
        //   myImg: require("../assets/images/p3.jpg"),
        //   price: "20$",
        //   location: "paris, france",
        //   title: "Sodales Vel Mauris",
        //   para: "Vestibulum tellus neque, et velit mauris at, augue.",
        //   duration: "10 days"
        // }
      ],
      file: null,
      fetchingData: null,
      toUpdate: {
        itemId: null,
        Mindex: null
      }
    };
  },
  methods: {
    dataItem(item, index) {
      db.collection("yourpackage")
        .doc(item.id)
        .delete()
        .then(response => {
          this.images.splice(index, 1);
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    fetching(val) {
      this.fetchData = val;
    },
    addItem() {
      let myData = {
        location: this.fetchData.location,
        para: this.fetchData.para,
        myImg: this.fetchData.image,
        duration: this.fetchData.duration,
        price: this.fetchData.price,
        title: this.fetchData.title
      };

      db.collection("yourpackage")
        .add(myData)
        .then(() => {
          alert("the addition is Done");
          this.images.push(myData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    clickme(item, index) {
      this.toUpdate.itemId = item.id;
      this.toUpdate.Mindex = index;
      $(".fixed").fadeIn(1200);
    },
    editItem() {
      let myData = {
        location: this.fetchData.location,
        para: this.fetchData.para,
        myImg: this.fetchData.image,
        duration: this.fetchData.duration,
        price: this.fetchData.price,
        title: this.fetchData.title
      };
      db.collection("yourpackage")
        .doc(this.toUpdate.itemId)
        .update(myData)
        .then(() => {
          this.images[this.toUpdate.Mindex] = myData;
          alert("the updation is Done");
        })
        .catch(error => {
          console.log(error);
        });
    },
    uploadFile(e) {
      let file = e.target.files[0];
      // Create a root reference
      // let storageRef =
      fb.storage()
        .ref(file.name)
        .put(file);

      fb.storage()
        .ref()
        .child(file.name)
        .getDownloadURL()
        .then(url => {
          // document.getElementById("image").src = url
          this.pushingData.image = url;
          console.log(this.pushingData.image);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    pushData(event){
      console.log(event);
      this.$emit("passData", this.pushingData)
      
    },
  },

  mounted() {
    db.collection("yourpackage")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let item = doc.data();
          console.log(item);
          item.id = doc.id;
          console.log(item.id);
          this.images.push(item);
        });
      });

    $(".edit h3").click(function() {
      $(this)
        .next()
        .fadeIn(1300);
    });

    $(".fixed").fadeOut();
    $(".fixed i").click(function() {
      $(".fixed").fadeOut(1000);
    });

  },
  components: {
    fetchingData
  }
};
</script>
