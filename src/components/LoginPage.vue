<template>
  <div class="mb-4 pb-2 mt-5">
    <form class="form-signin mb-5 pb-4" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal mt-5">Please Log In</h1>
      <label for="inputuser" class="sr-only">Email</label>
      <input type="email" id="inputuser" class="form-control" placeholder="Email" v-model="email">
      <p v-if="emailError" class="error-message">{{ emailError }}</p>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="pswd">
      <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg buttonstyle btn-block text-white" type="submit">Log In</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p class="mt-3">Are you a new admin?<router-link to="/adminregister">Register</router-link></p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        pswd: '',
        email: '',
        emailError: '',
        passwordError: ''
      }
    },
    methods: {
      async login() {
        this.emailError = '';
      this.passwordError = '';
      if (!this.email || !this.pswd) {
        if (!this.email) this.emailError = 'Email is required';
        if (!this.pswd) this.passwordError = 'Password is required';
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.emailError = 'Invalid email address';
        return;
      }

      // Password validation
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!passwordRegex.test(this.pswd)) {
        this.passwordError = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
        return;
      }
      try{
        this.emailError = '';
      this.passwordError = '';
        const response = await axios.post('http://192.168.1.20:8080/admin/AdminLogin',{
          "email": this.email,
          "password": this.pswd,
        });
        if(response.status === 200) {
          console.log('enter')
          // this.dialog =true; 
          this.$router.push('/adminpage');
        }
      }
      catch(error){
        console.error(error)
      }
  }
    }
}
</script>

<!-- <script>
export default {
  data() {
    return {
      username: '',
      pswd: '',
    }
  },
  methods: {
    loginAdmin() {
      console.log('clicked');
      if (this.username === 'Devan' && this.pswd === '12345') {
        this.$router.push('/adminpage');
      } else {
        alert('Check your login credentials');
      }
    }
  }
}
</script> -->

<style scoped>
.buttonstyle {
  background-color: #303b1b;
}
form.form-signin {
    border-radius: 10px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: white;
    padding-top: 20px;
}

.error-message {
  color: red;
  font-size: 14px;
}
</style>
