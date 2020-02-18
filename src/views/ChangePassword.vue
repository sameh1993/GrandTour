<template>
    <div class="register">
        <div class="">
             <h3 class="mt-3 mb-3 text-center">Reset Password</h3>
          <form class="form" @submit.prevent="changePass">
            <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
            <div class="f_row last mt-1">
              <label>new password</label>
              <input
                type="password"
                v-model="newpassword"
                placeholder="New Password"
                class="input-field mb-0"
                @blur="$v.newpassword.$touch()"
                :click="{ 'valid' : !$v.newpassword.$invalid, 'error': $v.newpassword.$error }"
              />
              <p v-if="!$v.newpassword.required"> this field dont must be empty </p>
              <p v-if="!$v.newpassword.minLen"> this field must be at least 10 chareture </p>
            </div>
            <div class="f_row last mt-1">
              <label>confirm password</label>
              <input
                type="password"
                v-model="confirmpass"
                placeholder="Confirm Password"
                class="input-field mb-0"
                @blur="$v.confirmpass.$touch()"
                :click="{ 'valid' : !$v.confirmpass.$invalid, 'error': $v.confirmpass.$error }"
              />
              <p v-if="!$v.confirmpass.required"> this field dont must be empty </p>
              <p v-if="!$v.confirmpass.sameAs"> this field must be Eqaul password value </p>
            </div>
            <button class="btn button submit-w3 pb-2">
              <span>Reset</span>
            </button>
          </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/style.css";

h3 {
    padding: 25px 0;
    letter-spacing: 2px;
    text-transform: capitalize;
}

.form {
    width: 38%;
    margin: 60px auto;
    padding: 66px;
    box-shadow: 5px 5px 15px rgba(0,0,0,.2);
  p {
    font-size: 11px !important;
    text-transform: capitalize;
    color: #777 !important;
    line-height: 1.2px !important;
    margin: 13px 0px;
    margin-bottom: 15px;
    color: #777 !important;
  }

  label{
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: capitalize;
  }

  input.error,
  textarea.error {
    background: #c3133b69;
  }

  input.valid,
  textarea.valid {  
    background-color: rgba( #080, .5);
    color: #fff;
    font-weight: 600;
  }

  p.error {
    color: #c3133b69;
  }

  p.valid {  
    color: #E8F0FE; 
  }
  button {
      background-color: var(--primary);
  }
}

</style>

<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";

import axios from "axios";


export default {
    data(){
        return {
            newpassword:null,
            confirmpass: null,
            idtoken: this.$store.state.idToken
        }
    },
    validations:{
        newpassword: {
            required,
            minLen: minLength(10)
        },
        confirmpass: {
            required,
            sameAs : sameAs("newpassword")
        }
    },
    methods:{
      changePass(){
        return axios("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBGlqvOdYNe6eupAFFtMzgpnZv8QTcVqOc", {
          idToken: this.idToken,
          password: this.newpassword,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
}
</script>