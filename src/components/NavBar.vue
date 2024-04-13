<template>
  <!-- Navbar -->
  <div class="d-flex flex-column flex-md-row align-items-center pt-3 navbar fixed-top mb-5">
    <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none ms-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
      </svg>
      <span class="fs-4 ms-2">Prathibhatheeram</span>
    </a>
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto me-5">
      <router-link to="/" class="me-3 py-2 link-body-emphasis text-decoration-none fs-5">Home</router-link>
      <router-link to="/booklist" class="me-3 py-2 link-body-emphasis text-decoration-none fs-5">Books</router-link>
      <router-link to="/login" class="me-3 py-2 link-body-emphasis text-decoration-none fs-5" href="#">Admin</router-link>
      <!-- <a class="me-3 py-2 link-body-emphasis text-decoration-none fs-5" href="#">Contact Us</a> -->
      <SignupBtn/>
    </nav>
  </div>
  <v-sheet style="margin-top: 100px; background-image: linear-gradient(0deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(135deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(90deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(90deg, rgb(238, 207, 232),rgb(127, 195, 255));" elevation="24" height="auto" width="1400" class=" d-flex justify-content-center align-items-center mx-auto" rounded>
        <router-view></router-view>
        </v-sheet>
        <v-divider></v-divider>
        <footer class="d-flex flex-wrap justify-content-center align-items-center border-top" style="height: 100px;">
  <div class="col-md-4 d-flex align-items-center">
    <p class="mb-3 mb-md-0 text-muted text-center">© 2024 Prathibhatheeram</p>
  </div>
</footer>
</template>
<script>

import SignupBtn from './SignupBtn.vue'


export default {
   components: {
  SignupBtn
  }
}
</script>

<style scoped>
.navbar{
    background-color:#ffffff; 
    /* background-image: repeating-linear-gradient(148deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 12px,transparent 12px, transparent 13px,rgba(0,0,0,0.03) 13px, rgba(0,0,0,0.03) 18px,transparent 18px, transparent 26px),repeating-linear-gradient(83deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 6px,transparent 6px, transparent 14px,rgba(0,0,0,0.03) 14px, rgba(0,0,0,0.03) 26px,transparent 26px, transparent 38px),repeating-linear-gradient(325deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 12px,transparent 12px, transparent 15px,rgba(0,0,0,0.03) 15px, rgba(0,0,0,0.03) 20px,transparent 20px, transparent 30px),repeating-linear-gradient(148deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 5px,transparent 5px, transparent 7px,rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 12px,transparent 12px, transparent 23px),repeating-linear-gradient(330deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 6px,transparent 6px, transparent 17px,rgba(0,0,0,0.03) 17px, rgba(0,0,0,0.03) 28px,transparent 28px, transparent 29px),repeating-linear-gradient(142deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 6px,transparent 6px, transparent 7px,rgba(0,0,0,0.03) 7px, rgba(0,0,0,0.03) 12px,transparent 12px, transparent 21px),linear-gradient(90deg, rgb(0,128,128),rgb(0,128,128)); */
    /* background-image: linear-gradient(0deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(135deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(90deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(90deg, rgb(238, 207, 232),rgb(127, 195, 255)); */
}
.buttonstyle {
  background-color: #303b1b;
}

</style>