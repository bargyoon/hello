<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="6" class="left">
        <h1>login page</h1>
      </v-col>
      <v-col cols="6" class="right">
        <h2>LOGIN</h2>
          <v-form @submit.prevent="submit" v-model="valid">
            <v-text-field v-model="email" :rules="emailRules" :counter: ="20" label="Email" required outlined dark filled dense></v-text-field>
            <v-text-field v-model="password" type="password" :rules="passwordRules" label="Password" required outlined dense dark filled @keyup.enter="login"></v-text-field>
            <div class="text-center">
              <!-- 모달 같은 dialog - 회원가입form -->
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on" style="text-align: right; font-size:10px; margin-bottom:10px" class="text-caption">
                        아직 회원이 아니신가요?
                  </div>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">회원가입</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="이름" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="성"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Interests" multiple></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-btn class="signin-btn" @click="login" rounded color="white" dark>
                  Sign In
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </section>
  </template>


<script>
let pwReg = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Zㄱ-힣0-9])(?=.{8,})/;
export default {
  
    data() {
      return {
        dialog: false,
        valid: false,
        email:'',
        emailRules: [
          v => !!v || 'E-mail is required',
        ],
        password: null,
        passwordRules: [
          v => !!v || 'password is required',
          v => pwReg.test(v) || '비밀번호 양식이 안맞습니다.'
        ],
      }
    },
    methods: {
      login() {
        if(!this.valid){
          return;
        }else{
          localStorage.setItem('email', this.email);
          location.href = '/home'
        }
        
      },
    },
}
</script>

<style>


.section-container {
    padding: 20px;
    margin: 20px;
    background: #fff;
    width: 100%;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}
.signin {
    padding: 0;
    max-width: 1000px;
    margin: 0 auto;
    min-height: 600px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
}
.left {
    padding: 30px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    color: #30ac7c;
    background-color: #f9f9f9;
}
.right {
    padding: 30px;
    box-sizing: border-box;
    background: #30ac7c;
    color: #fff;
}
.h2 {
    text-align: center;
    margin: 30px 0;
}
.signin-btn {
    width: 100%;
    color: #30ac7c;
}
.v-dialog__container {
    display: block;
}

</style>