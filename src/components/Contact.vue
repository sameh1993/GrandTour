<template>
  <div class="contact">
    <div class="container">
      <div class="head">
        <h2 class="text-center text-capitalize">Get In Touch With Us</h2>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12 text-center" :key="index" v-for="(item, index) in SocialItem">
          <i :class="item.myIcon"></i>
          <h4>{{item.heading}}</h4>
          <p class="mt-2 mb-4" v-if="index < 2" v-html="item.para"></p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 mt-4">
          <form>
            <div class="form-group">
              <label for="FullName">Full Name</label>
              <input type="text" class="form-control" id="FullName" placeholder="Enter Full Name" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Your Number</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="yoor Number"
              />
            </div>
            <div class="form-group">
              <label>Your Message</label>
              <textarea class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
        <div class="right col-md-6 col-sm-12 col-xs-12 mt-4">
          <h3>
            Do You Have Any Questions
            <br />About Us? Write To Us.
          </h3>
          <p>Duis nisi sapien, elementum finibus fermentum eget, aliquet et leo. Mauris hendrerit vel ex. Quisque vitae luctus massa. Phas ellus sed aliquam leo. Vestibulum ullamcorper massa eut sed fringilla. Integer ultrices finibus sed nisi. in convallis felis da bus sit amet aliquet et leo dolor sit amet aliquet.</p>
          <h4>Office Hours</h4>
          <p>
            Monday to Friday : 09 am to 06 pm
            <br />Saturday and Sunay : 10 am to 04 pm
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  i {
    font-size: 30px;
    margin: 25px 0;
  }
  h4 {
    text-transform: capitalize;
    font-size: 21px;
    letter-spacing: 2px;
    font-weight: 600;
  }
  padding: 4em 0;
  form {
    padding: 40px 40px;
    box-shadow: 5px 5px 10px rgba(#ccc, 0.3), -5px -5px 10px rgba(#ccc, 0.1);
    margin-top: 0;
    label {
      margin-top: 13px;
      text-transform: capitalize;
    }
    input:not([type="submit"]),
    textarea {
      background-color: #fbfbfb;
      &:focus {
        background-color: transparent;
      }
    }
    button[type="submit"] {
      padding: 8px 30px;
      font-weight: 600;
    }
  }
  .right {
    padding-left: 15px;
    padding-top: 20px;
    h3 {
      text-transform: capitalize;
      font-size: 25px;
      font-weight: 600;
      letter-spacing: 2px;
      margin-top: 10px;
    }
    p {
      line-height: 2.4;
      text-transform: capitalize;
      font-size: 15px;
      margin-top: 18px;
    }
    h4 {
      margin-top: 20px;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }
}
</style>

<script>
export default {
  name: "contact",
  data() {
    return {
      SocialItem: [
        {
          myIcon: "fa fa-map-marker fa-2x",
          heading: "location",
          para: "The company name <br> Addison Township"
        },
        {
          myIcon: "fa fa-envelope fa-2x",
          heading: "Phone & Email",
          para: "+(122) 123 456 7890 <br>info@examplemail.comp"
        },
        {
          myIcon: "fa fa-comments fa-2x",
          heading: "Stay In Touch",
          para: [
            { Icon: "fa fa-facebook" },
            { Icon: "fa fa-instagram" },
            { Icon: "fa fa-google-plus" },
            { Icon: "fa fa-twitter" }
          ]
        }
      ]
    };
  }
};
</script>
