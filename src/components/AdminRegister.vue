<template>
    <div class="mb-4 pb-2 mt-5">
      <form class="form-signin  pb-4" @submit.prevent=" register">
        <h1 class="h3 mb-3 font-weight-normal mt-5">Please Sign Up</h1>
        <label for="inputuser" class="sr-only">User Name</label>
        <input type="text" id="inputuser" class="form-control" placeholder="User Name" v-model="adminname">
        <p v-if="nameError" class="error-message">{{ nameError }}</p>
        <label for="inputuser" class="sr-only">Email</label>
        <input type="email" id="inputemail" class="form-control" placeholder="Email" v-model="email">
        <p v-if="emailError" class="error-message">{{ emailError }}</p>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="pswd">
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
        <div class="checkbox mb-3">
        </div>
        <button class="btn btn-lg buttonstyle btn-block text-white" type="submit">Sign Up</button>
        <p class="mt-3 ms-5 ps-3">Already a user?<router-link to="/login">Login</router-link></p>
        <v-dialog v-model="dialog" width="400px">
<v-card class="mx-auto rounded-5" elevation="2" max-width="400" width="100%" height="250">
    <v-card-title class="green-header mx-auto"><v-icon
      class="mb-2 mt-4"
      color="success"
      icon="mdi-check-circle"
      size="100"
    ></v-icon></v-card-title>
    <v-card-text class="text-success text-center"><h2>Successfully Added</h2>
    <p>Please Login</p></v-card-text>
</v-card>
    
</v-dialog>
      </form>
    </div>
  </template>
  <script>
import axios from 'axios';
  export default {
    data() {
      return {
        adminname: '',
        pswd: '',
        email: '',
        dialog: false,
        emailError: '',
        passwordError: '',
        nameError: '',
      }
    },
    methods: {
      async register() {
        // Validation
        this.nameError = '';
        this.emailError = '';
      this.passwordError = '';
      if (!this.email || !this.pswd || !this.nameError) {
        if (!this.adminname) this.nameError = 'Name is required';
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
        const response = await axios.post('http://192.168.1.20:8080/admin/AdminReg',{
          "adminName": this.adminname,
          "password": this.pswd,
          "email": this.email,
          "role": 'admin'
        });
        if(response.status === 200) {
          console.log(response.data)
          this.dialog =true; 
        // alert('Successfully registered')
        // this.$router.push('/adminpage');
        }
      }
      catch(error){
        console.error(error)
      }
  }
    }
}
</script>



<style scoped>
.buttonstyle {
  background-color: #303b1b;
}

form.form-signin {
    border-radius: 10px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: white;
    padding-top: 10px;
}
.error-message {
  color: red;
  font-size: 14px;
}
</style>