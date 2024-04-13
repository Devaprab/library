<template>
  <form @submit.prevent="register">
    <div class="my-3">
      <input type="text" class="form-control borderstyle" v-model="name" placeholder="Enter name">
      <span v-if="nameError" class="error">{{ nameError }}</span>
    </div>
    <div class="my-3">
      <input type="email" class="form-control borderstyle" v-model="email" placeholder="Enter email">
      <span v-if="emailError" class="error">{{ emailError }}</span>
    </div>
    <div class="my-3">
      <input type="text" class="form-control borderstyle" v-model="std" placeholder="Enter your class">
      <span v-if="stdError" class="error">{{ stdError }}</span>
    </div>
    <div class="my-3">
      <input type="text" class="form-control borderstyle" v-model="div" placeholder="Enter your division">
      <span v-if="divError" class="error">{{ divError }}</span>
    </div>
    <div class="my-3">
      <input type="text" class="form-control borderstyle" v-model="sub" placeholder="Enter your subject">
      <span v-if="subError" class="error">{{ subError }}</span>
    </div>
    <div class="my-3">
      <input type="password" v-model="password" class="form-control borderstyle" placeholder="Password">
      <span v-if="passwordError" class="error">{{ passwordError }}</span>
    </div>
    <v-dialog width="450">
        <template v-slot:activator="{ props }">
    <v-btn type="submit" class="btn buttonstyle text-white mt-3 mb-4" color="#303b1b" v-bind="props">Sign Up</v-btn>
  </template>
        <template v-slot:default="{ isActive }" >
          <v-card-actions>
           
            <v-icon
            class="mdi mdi-close text-white"
            @click="isActive.value = false">
          </v-icon>
            
            </v-card-actions>
          <v-card  class="text-center">
            <v-card-text>
              <p class="text-success">Successfully registered</p>
             
            </v-card-text>
           
            </v-card>
           
        </template>
      </v-dialog>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      std: '',
      div: '',
      sub: '',
      password: '',
      nameError: '',
      emailError: '',
      stdError: '',
      divError: '',
      subError: '',
      passwordError: ''
    };
  },
  methods: {
    validate() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  this.emailError = !emailRegex.test(this.email) ? 'Enter a valid email address' : '';

  // Example: validate name
  this.nameError = this.name.trim() === '' ? 'Name is required' : '';

  // Example: validate std
  const stdValue = parseInt(this.std);
  this.stdError = isNaN(stdValue) || stdValue < 0 || stdValue > 12 ? 'Class must be a number between 0 and 12' : '';

  // Example: validate div
  this.divError = this.div.trim() === '' ? 'Division is required' : '';

  // Example: validate sub
  this.subError = this.sub.trim() === '' ? 'Subject is required' : '';

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  this.passwordError = !passwordRegex.test(this.password) ?
    'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number' : '';

  // Check if all errors are empty
  return (
    this.nameError === '' &&
    this.emailError === '' &&
    this.stdError === '' &&
    this.divError === '' &&
    this.subError === '' &&
    this.passwordError === ''
  );
},
    register() {
      if (this.validate()) {
        // Proceed with registration
        // Example: this.$router.push('/register');
      }
    },
  }
};
</script>

<style scoped>
.log-in input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 10px; /* Reduced margin between input and error */
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.error {
  color: rgb(235, 40, 40);
}
.btn {
  background-color: rgb(117, 184, 211);
}
.btn:hover {
  background: rgb(16, 100, 133);
}
.buttonstyle {
  background-color: #303b1b;
}
</style>
