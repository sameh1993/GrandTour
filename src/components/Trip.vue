<template>
  <div class="trip">
    <div class="overlay">
      <div class="container">
        <div class="head">
          <h2>Enjoy The Trip</h2>
          <p>Duis nisi sapien, elementum finibus fermentum eget, aliquet leo et. Mauris hendrerit vel ex. Quisque vitae luctus massa. Phasellus sed aliquam leo a massa eu fringilla. Integer ultrices finibus sed nisi. in convallis felis dapibus sit amet.</p>
          <button class="btn">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trip {
  background-image: url("../assets/images/banner4.jpg");
  background-size: cover;
  color: #fff;
  .overlay {
      background-color: rgba(0,0,0,.6);
      padding: 5em 0;
      .head {
          h2 {
              text-transform: capitalize;
              letter-spacing: 1px;
              font-size: 45px;
          }
          p{
              margin: 0;
              line-height: 2.4;
              font-size: 16px;
          }
          .btn {
              border: 1px solid #fff;
              padding: 10px 30px;
              background-color: transparent;
              color: #fff;
              margin-top: 23px;
              border-radius: 0;
          }
      }
  }

}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>