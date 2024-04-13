<template>
    <admin-nav></admin-nav>
    <div class="row">
        <div class="col-2">
            <side-bar></side-bar>
        </div>
        <div class="col-10 mt-5 pt-5">
             <!-- <v-sheet style="background-image: linear-gradient(0deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(135deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(90deg, rgba(192, 241, 66,0.2) 0%, rgba(192, 241, 66,0.2) 16.667%,rgba(73, 212, 31,0.2) 16.667%, rgba(73, 212, 31,0.2) 33.334%,rgba(113, 222, 43,0.2) 33.334%, rgba(113, 222, 43,0.2) 50.001%,rgba(232, 251, 78,0.2) 50.001%, rgba(232, 251, 78,0.2) 66.668%,rgba(152, 231, 54,0.2) 66.668%, rgba(152, 231, 54,0.2) 83.335%,rgba(33, 202, 19,0.2) 83.335%, rgba(33, 202, 19,0.2) 100.002%),linear-gradient(90deg, rgb(238, 207, 232),rgb(127, 195, 255));" :elevation="24" :height="auto" :width="1400" class="blur d-flex justify-content-center align-items-center mx-auto mt-5 mb-5" rounded>  -->
        <router-view></router-view>
            <!-- </v-sheet>   -->
        </div>
    </div>
</template>

<script>
import AdminNav from './AdminNav.vue';
import SideBar from './SideBar.vue';
// import BaseCard from './BaseCard.vue';
export default {
    components: {
        AdminNav,
        SideBar,
        // BaseCard
    }
}
</script>