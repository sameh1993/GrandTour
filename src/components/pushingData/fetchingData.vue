<template >
  <div class="">
    <div class="form-group">
      <i class="fa fa-close"></i>
      <input
        type="text"
        class="form-control"
        @blue="$v.pushingData.title.$touch()"
        v-model="pushingData.title"
        placeholder="enter your title"
        required
      />
    </div>

    <div class="form-group">
      <input
        type="text"
        class="form-control"
        @blue="$v.pushingData.location.$touch()"
        v-model="pushingData.location"
        placeholder="enter location"
        required
      />
    </div>

    <div class="form-group">
      <input class="pl-0 pt-0" type="file" required @change="uploadFile($event)" />
      <div class="form-group custom">
        <div class="img">
          Image
          <img :src="pushingData.image" />
          <i class="fa fa-close" @click="emptyField" v-if="pushingData.image"></i>
        </div>
      </div>
    </div>

    <div class="form-group">
      <input
        type="text"
        class="form-control"
        @blue="$v.pushingData.duration.$touch()"
        v-model="pushingData.duration"
        placeholder="enter duration"
        required
      />
    </div>

    <div class="form-group">
      <input
        type="text"
        class="form-control"
        @blue="$v.pushingData.price.$touch()"
        v-model="pushingData.price"
        placeholder="enter price"
        required
      />
    </div>

    <div class="form-group">
      <textarea
        type="text"
        class="form-control"
        @blue="$v.pushingData.para.$touch()"
        v-model="pushingData.para"
        placeholder="enter paragraph"
        required
      ></textarea>
    </div>
    <div class="form-group custom">
      <button type="submit" @click="pushData" class="btn btn-primary d-block">Send</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  
  .form-group {
    width: 80%;

    border-radius: 10px;
    margin: auto;
    margin-bottom: 20px;
    .form-control {
      background: #e0dfdf;
      background: #1b1b1bb3;
      padding: 22px 12px;
      border: 1px solid #b6b6b6;
      color: #a1a1a1;
      &::placeholder {
        text-transform: capitalize;
        letter-spacing: 1px;
      }
    }
    input[type="file"] {
      color: #ccc;
      padding: 10px;
    }
    .img {
      width: 100% !important;
      height: 250px !important;
      position: relative;
      line-height: 226px;
      font-size: 32px;
      letter-spacing: 3px;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
      }
      i {
        position: absolute;
        right: 20px;
        top: 20px;
        color: #ccc;
        font-size: 17px;
        z-index: 20;
        &:hover {
          color: #fff;
        }
      }
    }

    .btn {
      width: 30%;
      padding: 10px 0;
      font-weight: 600;
    }
    .custom {
      display: inline-block !important;
      width: 55% !important;
      margin: none;
    }
  }
}
</style>

<script>
import { required } from "vuelidate/lib/validators";

import fb from "firebase";
// import db from "../../firebase/firebase.js";


import jquery from "jquery";
const $ = jquery;
window.$ = $;

export default {
  name: "fetchingData",
  data() {
    return {
      pushingData: {
        location: null,
        title: null,
        image: null,
        duration: null,
        para: null,
        price: null
      }
    };
  },
  methods: {
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
    // addItem() {
    //   db.collection("yourpackage")
    //     .add(this.pushingData)
    //     .then(() => {
    //       alert("the addition is Done");
    //     })
    //     .catch(error => {
    //       console.log(error.response);
    //     })
    // },
    emptyField() {
      $(".img")
        .find("img")
        .remove();
      $("input.pl-0").attr("value", " ");
    }
  },
  validations: {
    pushingData: {
      location: {
        required
      },
      duration: {
        required
      },
      para: {
        required
      },
      price: {
        required
      }
    }
  },
 
};
</script>
