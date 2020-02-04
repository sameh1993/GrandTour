<template>
  <div class="about text-capitalize">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 col-xs-12 text-capitalize mb-3">
          <h2>
            We Will Take You To The Top Destination In The World,
            <strong>Explore With Us!</strong>
          </h2>
          <p>Duis nisi sapien, elementum finibus fermentum eget, aliquet leo et. Mauris hendrerit vel ex. Quisque vitae luctus massa. Phasellus sed aliquam leo. Vestibulum ullamcorper a massa eu fringilla. Integer ultrices finibus sed nisi. in convallis felis dapibus sit amet.</p>
          <p>Donec a arcu et sapien hendrerit accumsan. Pellentesque sit amet eros iac, elementum urna ipsum accumsan, iaculis ligula. Aenean quam eget maximus in convallis felis dapibus sit amet.</p>
        </div>
        <div class="col-lg-6 col0-sm-12 col-xs-12 mb-3">
          <div class="img">
            <img src="../assets/images/about.jpg" class="img-fliud" />
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-lg-3 col-sm-6 col-xs-12 mt-3">
          <i class="fa fa-smile-o mt-4"></i>
          <h2 class="mt-2 mb-2">1000+</h2>
          <p class="text-uppercase mb-3">happy customer</p>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12 mt-3">
          <i class="fa fa-ship mt-4"></i>
          <h2 class="mt-2 mb-2">2271</h2>
          <p class="text-uppercase mb-3">TOURS & TRAVELS</p>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12 mt-3">
          <i class="fa fa-users mt-4"></i>
          <h2 class="mt-2 mb-2">200</h2>
          <p class="text-uppercase mb-3">DESTINATIONS</p>
        </div>

        <div class="col-lg-3 col-sm-6 col-xs-12 mt-3">
          <i class="fa fa-gift mt-4"></i>
          <h2 class="mt-2 mb-2">
            20+
            <span>years</span>
          </h2>
          <p class="text-uppercase mb-3">EXPERIENCE</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules";

.about {
  padding: 5em 0;
  .container {
    margin: auto;
  }
  h2 {
    font-weight: 400;
    font-size: 26px;
    letter-spacing: 1px;
    line-height: 1.5;
    strong {
      font-weight: 600;
    }
  }
  p {
    line-height: 1.8;
    margin-top: 18px;
  }
  img {
    width: 100%;
  }
  .text-center {
    i {
      color: var(--blue);
      font-size: 33px;
      font-weight: bold;
    }
    h2 {
      font-size: 37px;
      font-weight: 600;
      letter-spacing: 2px;
      span {
        font-size: 15px;
        position: relative;
        left: -10px;
      }
    }
    p {
      font-weight: 600;
      letter-spacing: 2px;
      color: #444;
    }
  }
}
</style>

<script>
export default {
  name: "about"
};
</script>