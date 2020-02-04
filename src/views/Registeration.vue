<template>
  <div class="register">
    <!-- title -->
    <h1>Validate Login & Register Forms</h1>
    <!-- //title -->

    <!-- content -->
    <div class="container-agille">
      <div class="formBox level-login">
        <div class="box boxShaddow"></div>
        <div class="box loginBox">
          <!--- start Sign In part -->
          <h3>Login Here</h3>
          <form class="form" action="#" method="post">
            <div class="f_row-2">
              <input
                type="email"
                v-model="SignIn.email"
                @blur="$v.SignIn.email.$touch()"
                placeholder="Enter Email "
                class="input-field"
                :class=" {'valid': !$v.SignIn.email.$invalid, 'error': $v.SignIn.email.$error }"
              />
              <p class="" v-if="!$v.SignIn.email.required">this field dont must be empty</p>
              
            </div>
            <div class="f_row-2 last">
              <input
                type="password"
                v-model="SignIn.password"
                @blur="$v.SignIn.password.$touch()"
                placeholder="Enter Email "
                class="input-field"
                value=""
                :class=" {'valid': !$v.SignIn.password.$invalid, 'error': $v.SignIn.password.$error }"
              />
              <p v-if="!$v.SignIn.password.required">this field dont must be empty</p>
            </div>
            <input class="submit-w3" :disabled="$v.$invalid" type="submit" value="Login" />
            <div class="f_link">
              <a href class="resetTag">Forgot your password?</a>
            </div>
          </form>
        </div>
        <div class="box forgetbox agile">
          <a href="#" class="back icon-back">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 199.404 199.404"
              style="enable-background:new 0 0 199.404 199.404;"
              xml:space="preserve"
            >
              <polygon
                points="199.404,81.529 74.742,81.529 127.987,28.285 99.701,0 0,99.702 99.701,199.404 127.987,171.119 74.742,117.876 
			  199.404,117.876 "
              />
            </svg>
          </a>
          <h3>Reset Password</h3>
          <form class="form" action="#" method="post">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <div class="f_row last">
              <label>Email Id</label>
              <input type="email" name="email" placeholder="Email" class="input-field" required />
              <u></u>
            </div>
            <button class="btn button submit-w3">
              <span>Reset</span>
            </button>
          </form>
        </div>
        <div class="box registerBox wthree">
          <span class="reg_bg"></span>

          <!-- start reigterayion -->
          <h3>Register</h3>
          <form class="form">
            <div class="f_row-2">
              <input
                type="text"
                v-model="SignUp.userName"
                @blur="$v.SignUp.userName.$touch()"
                placeholder="User Name "
                class="input-field"
                :class=" {'valid': !$v.SignUp.userName.$invalid, 'error': $v.SignUp.userName.$error }"
              />
              <p
                class=""
                v-if="!$v.SignUp.userName.required"
              >this field dont must be empty</p>
              <p
                class="text-danger"
                v-if="!$v.SignUp.userName.minLen"
              >this field dont must be at least 10 char</p>
            </div>
            <div class="f_row-2">
              <input
                type="email"
                v-model="SignUp.email"
                @blur="$v.SignUp.email.$touch()"
                placeholder="Enter Email "
                class="input-field"
                :class=" {'valid': !$v.SignUp.email.$invalid, 'error': $v.SignUp.email.$error }"
              />
              <p v-if="!$v.SignUp.email.required">this field dont must be empty</p>
              <p class="text-danger" v-if="!$v.SignUp.email.email">please Enter a valid email address</p>
            </div>
            <div class="f_row-2">
              <input
                type="password"
                v-model="SignUp.password"
                @blur="$v.SignUp.password.$touch()"
                placeholder="Enter password "
                class="input-field"
                :class=" {'valid': !$v.SignUp.password.$invalid, 'error': $v.SignUp.password.$error }"
              />
              <p v-if="!$v.SignUp.password.required">this field dont must be empty</p>
              <p
                class="error"
                v-if="!$v.SignUp.password.minLen"
              >the field dont must be al least 10 charecture</p>
            </div>
            <div class="f_row-2 last">
              <input
                type="password"
                name="password"
                placeholder="Confirm Password"
                v-model="SignUp.confirmPass"
                @blur="$v.SignUp.confirmPass.$touch()"
                class="input-field"
                :class=" {'valid': !$v.SignUp.confirmPass.$invalid, 'error': $v.SignUp.confirmPass.$error }"
              />
              <p v-if="!$v.SignUp.confirmPass.required">this field dont must be empty</p>
              <p
                class="text-danger"
                v-if="!$v.SignUp.confirmPass.sameAs"
              >the field must be Equal password field</p>
            </div>
            <input class="submit-w3" :disabled="$v.$invalid" type="submit" value="Register" />
          </form>
        </div>
        <a href="#" class="regTag icon-add">
          <i class="fa fa-repeat" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <!-- //content -->
  </div>
</template>

<style  lang="scss" coped>
@import "../assets/css/style.css";
@import "../GlobalRules/scss/mainRules.scss";

input {
  margin: 0 !important;
}

.register {
  padding: 4em 0;
  overflow:hidden;
}

 form{
  padding: 5em 0;
  font-family: "Magra";
  h1 {
    margin-bottom: 50px;
  }
  .container-agille {
    margin-top: 20px;
  }

  .valid {
    margin-bottom: 15px !important;
  }
  .text-danger {
    color: var(--danger) !important;
  }
}
</style>

<script>
import { required, sameAs, minLength, email } from "vuelidate/lib/validators";

// add jquery
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name: "registeration",
  data() {
    return {
      SignUp: {
        userName: null,
        email: null,
        password: null,
        conformPass: null
      },
      SignIn: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    SignUp: {
      userName: {
        required,
        minLen: minLength(10)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLen: minLength(10)
      },
      confirmPass: {
        required,
        sameAs: sameAs("password")
      }
    },
    SignIn: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  mounted() {
    $(".resetTag").click(function(e) {
      e.preventDefault();
      $(".formBox")
        .addClass("level-forget")
        .removeClass("level-reg");
    });

    $(".back").click(function(e) {
      e.preventDefault();
      $(".formBox")
        .removeClass("level-forget")
        .addClass("level-login");
    });

    $(".regTag").click(function(e) {
      e.preventDefault();
      $(".formBox").removeClass("level-reg-revers");
      $(".formBox")
        .toggleClass("level-login")
        .toggleClass("level-reg");
      if (!$(".formBox").hasClass("level-reg")) {
        $(".formBox").addClass("level-reg-revers");
      }
    });
  }
};
</script>