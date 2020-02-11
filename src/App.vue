<template>
  <div id="app">
    <!--- start header --->

    <header :class=" $route.name === 'home' ? '': 'h-50'">
      <div class="overlay" v-show="$route.name!= 'home' "></div>
      <!-- start navigation bar -->

      <nav class="navbar navbar-expand-lg navbar-gray bg-dark">
        <div class="container">
          <a class="navbar-brand text-capitalize" href="#">
            <i class="fa fa-map-signs"></i>
            grand tour
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <p class="icon-bar"></p>
            <p class="icon-bar"></p>
            <p class="icon-bar"></p>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto text-capitalize">
              <router-link to="/" class="nav-link" active-class="active" exact>
                <button>Home</button>
              </router-link>
              <router-link to="/about" class="nav-link" active-class="active">
                <button @click="state='About' ">About Us</button>
              </router-link>
              <router-link to="/services" class="nav-link" active-class="active">
                <button @click="state='serivce' ">Serivces</button>
              </router-link>
              <router-link to="/packages" class="nav-link" active-class="active">
                <button @click="state='package' ">packages</button>
              </router-link>
              <router-link to="/contacts" class="nav-link" active-class="active">
                <button @click="state='contact' ">Contacts</button>
              </router-link>
              <button v-if="myIdtoken" class="btn btn-primary">
                <router-link to="/dashboard">Dashboard</router-link>
              </button>
              <button v-if="myIdtoken" @click="clearLogin" class="btn btn-primary">
                <router-link to="/">log out</router-link>
              </button>

              <button v-if="!myIdtoken" class="btn btn-primary">
                <router-link to="/register">Sign Up</router-link>
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <!--- end navigation br -->

      <!----  start slider  ---->
      <transition name="fade">
        <div
          id="carouselExampleControls"
          v-show="$route.name == 'home' "
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(item, index) in slides" :key="index + 1">
              <div class="parent">
                <div class="container">
                  <div class="content">
                    <h2 class="h1">{{item.head}}</h2>
                    <p class="lead">{{item.para}}</p>
                    <button class="btn btn-primary">About Us</button>
                    <button class="btn">Book A Tour</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </transition>

      <!---- end slider ---->
    </header>

    <!-- end header --->

    <!--- start content page -->

    <transition name="fade">
      <router-view :state="state"></router-view>
    </transition>

    <!--- end Content page --->

    <!--- start footer -->

    <footer>
      <div class="container">
        <div class="row text-capitalize">
          <div class="address col-lg-3 col-sm-6 col-xs-12">
            <h4>address</h4>
            <ul class="list-unstyled">
              <li>Location : 1234 lock, Charlotte, North Carolina, United States</li>
              <li>phone : +12 53489364</li>
              <li>Email : info@example.com</li>
              <li>fax : +12 53489582</li>
            </ul>
          </div>

          <div class="second col-lg-3 col-sm-6 col-xs-12">
            <h4>About us</h4>
            <p>Vivamus magna justo, laci niats eget consectetur sed, conval lis at tellus. Nulla quis lorem ipnt libero. Lorem ipsum dolor.</p>
            <div class="social">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-google-plus"></i>
              <i class="fa fa-instagram"></i>
            </div>
          </div>

          <div class="address col-lg-3 col-sm-6 col-xs-12">
            <h4>travel places</h4>
            <ul class="row list-unstyled">
              <li class="col-6">new zealand</li>
              <li class="col-6">paris,france</li>
              <li class="col-6">los angles</li>
              <li class="col-6">darlington</li>
              <li class="col-6">canada</li>
              <li class="col-6">spain</li>
              <li class="col-6">turkey</li>
              <li class="col-6">Italy</li>
              <li class="col-6">sweden</li>
            </ul>
          </div>

          <div class="four col-lg-3 col-sm-6 col-xs-12">
            <h4>address</h4>
            <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
            <form action="#" class="form-group">
              <input type="search" class="form-control" placeholder=" Enter Your Email" />
              <i class="fa fa-paper-plan"></i>
            </form>
            <div v-for="(item, index) in packages" :key="index + 1">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="content text-center pt-2 pb-4 bg-gray">
          © 2019 Grand Tour. All Rights Reserved | Design by
          <a href="#">Sameh Sayed</a>
        </div>
      </div>
    </footer>

    <!--- end footer ----->
  </div>
</template>

<style lang="scss">
@import "./GlobalRules/scss/mainRules";

header {
  position: relative;
  background-image: url("./assets/images/banner1.jpg");
  background-size: cover;
  transition: all 0.4s ease-in-out;
  & > div.overlay {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px 0;
    background-color: transparent !important;
    color: #222;
    z-index: 15;
    border-bottom: 1px solid #a7a7a7;
    .navbar-toggler {
      border: 1px solid #444;
      transform: scale(0.95);
      outline: none;
      background: #222;
      .icon-bar {
        height: 2px;
        width: 35px;
        background-color: #b2b2b2;
      }
    }
    @include minScreen(xs) {
      & {
        border: 0;
      }
      .navbar-nav {
        z-index: 10;
        .nav-link {
          text-align: center;
          background-color: #333;
          color: #b6b6b6;
          font-size: 15px;
          margin: 0 10px;
          border-radius: 20px;
          padding: 14px 0;
          margin-top: 3px;
          font-weight: 600;
          &:hover {
            background-color: $mainColor;
          }
        }
      }
    }
    .active button {
      color: var(--blue) !important;
      font-weight: 600;
    }
    .nav-link {
      color: rgba(#fff, 0.9);
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 2px;
      text-transform: capitalize;
      button {
        background: transparent;
        border: 0;
        outline: 0;
        color: #fff;
      }
    }
    .navbar-brand {
      font-size: 25px;
    }
    .btn {
      padding: 7px 22px;
      border-radius: 2px;
      text-transform: capitalize;
      border-radius: 25px;
      margin-left:8px;
      a {
        color: #fff;
        font-weight: 600;
        letter-spacing: 2px;
        margin-left: 8px;
      }
    }
    
  }

  .carousel {
    height: 100vh;

    .parent {
      background-color: rgba(#000, 0.5);
      padding: 0;
      margin: 0;
      height: 100vh;
      color: #fff;
      display: flex;
      align-items: center;
      padding-left: 35px;

      .h1 {
        width: 66%;
        letter-spacing: 3px;
        font-weight: 600;
        line-height: 1.3;
        font-size: 47px;
        @include screen(downSm) {
          font-size: 25px;
          width: 100%;
        }
        @include screen(md) {
          font-size: 32px;
          width: 80%;
        }
      }

      .lead {
        text-transform: capitalize;
        letter-spacing: 5px;
        margin-top: 18px;
      }

      button {
        border: 1px solid #fff;
        background-color: transparent;
        padding: 10px 25px;
        margin-right: 10px;
        color: #fff;
        margin-top: 20px;
        background-color: rgba(#fff, 0.2);
        transition: all 0.3s linear;

        &:hover {
          background-color: var(--blue);
        }
      }
    }
  }

  .carousel-inner {
    & > div {
      background-size: cover;
      @include minScreen(xs) {
        p {
          font-size: 12px;
        }
      }
    }
    & > div:first-of-type {
      background-image: url("./assets/images/banner1.jpg");
    }
    & > div:nth-of-type(2) {
      background-image: url("./assets/images/banner2.jpg");
    }
    & > div:nth-of-type(3) {
      background-image: url("./assets/images/banner3.jpg");
    }
    & > div:last-of-type {
      background-image: url("./assets/images/banner4.jpg");
    }
  }
}

footer {
  padding: 3.3em 0 0;
  background-color: #151515;
  color: #b6b6b6;
  .row {
    & > div {
      margin-top: 20px;
    }
    h4 {
      letter-spacing: 2px;
      font-size: 21px;
      margin-bottom: 19px;
      font-weight: 600;
    }
    li {
      margin-bottom: 16px;
      color: #8c8989;
    }
    p {
      line-height: 2;
      color: #8c8989;
      font-size: 15px;
    }
    .second {
      i {
        border: 1px solid #8c8989;
        margin-right: 6px;
        height: 35px;
        width: 34px;
        line-height: 35px;
        text-align: center;
        color: #8c8989;
        margin-top: 22px;
        transition: all 0.4s linear;
        cursor: pointer;
        &:hover {
          background-color: var(--blue);
        }
      }
    }
    .four {
      input {
        background-color: transparent;
        border-radius: 0;
        padding: 13px;
        border: 1px solid #b6b6b6;
        margin-top: 18px;
        color: #fff;
      }
    }
  }
  .content {
    margin-top: 25px;
  }
}
</style>

<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  mounted: function() {
    // add class active on first child of carousel
    $(".carousel-inner > div:first-child").addClass("active");

    // for toggle menu for xs screen
    $(".nav-item").click(function() {
      $(".navbar-nav").slideUp(3000);
      $(this).css("background", "#080");
    });

    // add class active for nav link
    // $(".nav-link").click(function () {
    //   $(this).parent().addClass("active").siblings().removeClass("active");
    // })

    // auto login 
    this.$store.dispatch("tryAutoLogin");
  },
  props: ["name", "packages"],
  data: function() {
    return {
      state: "home",
      slides: [
        {
          myImg: "./assets/images/banner1.jpg",
          head: "Never Let Your Memories Be Greater Than Your Dreams.",
          para: "Tristique Senectus Et Netus Et Malesuada"
        },
        {
          myImg: "./assets/images/banner2.jpg",
          head: "It Is Better To Travel Than To Arrive. Let's Be Adventurers.",
          para: "Tristique Senectus Et Netus Et Malesuada"
        },
        {
          myImg: "./assets/images/banner3.jpg",
          head: "Never Let Your Memories Be Greater Than Your Dreams.",
          para: "Tristique Senectus Et Netus Et Malesuada"
        }
      ]
    };
  },
  computed: {
    myIdtoken() {
      return this.$store.getters.itTokken;
    }
  },
  methods:{
    clearLogin(){
      return this.$store.dispatch("tryAutoLogin");
    }
  }
};
</script>
