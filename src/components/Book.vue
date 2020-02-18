<template>
  <div class="book">
    <div class="container">
      <div class="head text-center pt-3 pm-3">
        <h2>How To Plan Your Trip</h2>
      </div>
      <div class="row text-capitalize">
        <div class="parent col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3" v-for="(item, index) in book" :key="index + 1">
          <div v-if="$route.name === 'Dashboard' " class="control">
            <i @click="dataItem(item)" class="fa fa-close"></i>
            <i @click="clickme(item, index)" class="fa fa-edit"></i>
          </div>
          <div class="content text-center">
            <i :class="item.myIcon"></i>
            <h4 class="pt-2 pm-1">{{item.title}}</h4>
            <p>{{item.para}}</p>
          </div>
        </div>
      </div>
      <div v-if="$route.name === 'Dashboard'" class="edit">
        <!-- start add a new items --->

        <h3 class="text-capitalize">Add a new item</h3>
        <form @submit.prevent="onAddItem" class="format formBox">
          <div class="form-group">
            <input
              v-model="addItem.myIcon"
              @blur="$v.addItem.myIcon.$touch()"
              type="text"
              class="form-control"
              placeholder="font-awesome Ex:fa fa-exp..."
              :class=" {'valid': !$v.addItem.myIcon.$invalid, 'error': $v.addItem.myIcon.$error }"
            />
            <p v-if="!$v.addItem.myIcon.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <input
              v-model="addItem.title"
              @blur="$v.addItem.title.$touch()"
              class="form-control"
              type="text"
              placeholder="Enter Title"
              :class=" {'valid': !$v.addItem.title.$invalid, 'error': $v.addItem.title.$error }"
            />
            <p v-if="!$v.addItem.title.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <textarea 
            v-model="addItem.para" 
            @blur="$v.addItem.para.$touch()" 
            class="form-control"
            :class=" {'valid': !$v.addItem.para.$invalid, 'error': $v.addItem.para.$error }"
            ></textarea>
            <p v-if="!$v.addItem.para.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <input type="submit" :disabled="$v.addItem.$invalid" value="Add Item" />
          </div>
        </form>

        <!-- start section for update item -->
        <form @submit.prevent="onUpdateItem" id="update" class="format formBox">
          <h3 class="text-capitalize"> update Item </h3>
          <div class="form-group">
            <input
              v-model="updateItem.myIcon"
              @blur="$v.updateItem.myIcon.$touch()"
              type="text"
              class="form-control"
              placeholder="font-awesome Ex:fa fa-exp..."
              :class=" {'valid': !$v.updateItem.myIcon.$invalid, 'error': $v.updateItem.myIcon.$error }"
            />
            <p v-if="!$v.updateItem.myIcon.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <input
              v-model="updateItem.title"
              @blur="$v.updateItem.title.$touch()"
              class="form-control"
              type="text"
              placeholder="Enter Title"
              :class=" {'valid': !$v.updateItem.title.$invalid, 'error': $v.updateItem.title.$error }"
            />
            <p v-if="!$v.updateItem.title.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <textarea v-model="updateItem.para" 
            @blur="$v.updateItem.para.$touch()"
            :class=" {'valid': !$v.updateItem.para.$invalid, 'error': $v.updateItem.para.$error }"
             class="form-control"></textarea>
            <p v-if="!$v.updateItem.para.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <input type="submit" :disabled="$v.updateItem.$invalid" value="Add Item" />
          </div>
        </form>
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
    .edit {
      width: 55%;
      margin: 20px auto;
      padding: 18px;
      h3 {
        padding: 15px;
        font-size: 21px;
        font-weight: 600;
        text-align: center;
        background-color: #222;
        border-radius: 15px;
        margin: 20px 0;
        cursor: pointer;
      }
      .format {
        margin: 0 25px;
        border: 2px solid #fff;
        padding: 40px 25px 25px;
        display: block;
        margin: 0 auto;
        height: auto;
        border-radius: 8px;
        display: none;
        .form-control {
          padding: 13px 12px;
        }
        
        input {
          padding: 12px 0;
        }
        input[type="submit"] {
          background-color: #222;
          color: #ffffff;
          padding: 9px 28px;
          outline: 0;
          border: 2px solid #fff;
          border-radius: 20px;
          margin-top: 15px;
        }
      }
    }
  }
  .row {
    & > div {
      .content i {
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
      .control {
        right: 0;
        top: 0;
        padding: 10px;
        width: 30px;
        position: absolute;
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
  }
}
</style>


<script>
import db from "../firebase/firebase.js";

import { required } from "vuelidate/lib/validators";

import jquery from "jquery";
const $ = jquery;
window.$ = $;

export default {
  data() {
    return {
      book: [
        // {
        //   myIcone: "fa fa-map-signs",
        //   title: "pick destisation",
        //   para:
        //     "Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor."
        // },
        // {
        //   myIcone: "fa fa-calendar",
        //   title: "select data",
        //   para:
        //     "Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor."
        // },
        // {
        //   myIcone: "fa fa-gift",
        //   title: "neojy the trip",
        //   para:
        //     "Vestibulum urna ligula, molestie at ante ut, finibus. Integer ultrices finibus sed nisi in convallis sed dolor."
        // }
      ],
      addItem: {
        myIcon: "",
        title: "",
        para: ""
      },
      updateItem: {
        myIcon: "",
        title: "",
        para: ""
      },
      toUpdate:{
        itemId : null,
        Mindex: null
      }
    };
  },
  mounted() {
    // to fetching data from firebase
    db.collection("yourtrip")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let items = doc.data();
          items.id = doc.id;
          // console.log(items.id)
          this.book.push(items);
        });
      });

    // toggle active for forms
    $(".edit h3").click(function() {
      $(this)
        .next()
        .slideToggle(1500);
    });
  },
  methods: {
    dataItem(item) {
      db.collection("yourtrip")
        .doc(item.id)
        .delete()
        .then(() => {
          this.book = this.book.filter(function(bo) {
            return bo.id != item.id;
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    onAddItem() {
      db.collection("yourtrip")
        .add(this.addItem)
        .then(() => {
          this.book.push(this.addItem);
          console.log("the addition is Done");
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    clickme(item, index) {
      console.log("welcome")
      $("#update").slideToggle()
      $("html, body").animate({
        scrollTop: $("#update").offset().top
      }, 1000);
      this.toUpdate.itemId = item.id;
      this.toUpdate.Mindex = index;
      console.log(this.toUpdate.Mindex)
      console.log(this.toUpdate.itemId)
    },
    onUpdateItem(){
      
      db.collection("yourtrip").doc(this.toUpdate.itemId).update(this.updateItem)
      .then(() => {
         this.book[this.toUpdate.Mindex] = this.updateItem
         console.log("the updation is Done")
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  validations: {
    addItem: {
      myIcon: {
        required
      },
      title: {
        required
      },
      para: {
        required
      }
    },
    updateItem: {
      myIcon: {
        required
      },
      title: {
        required
      },
      para: {
        required
      }
    }
  }
};
</script>
