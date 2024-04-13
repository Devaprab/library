<template>
    <div class="sidebar bg-dark mt-5">
     <!-- <h3 class="title text-center my-4">Alleppey Aroma</h3> -->
     <div class="d-flex flex-column text-center mt-5">
      <router-link to='/books' class="text-decoration-none">
       <div class="d-flex flex-column align-items-center py-3">
        <a href=# class="text-white text-decoration-none">View Books</a>
       </div>
      </router-link>
      <router-link to='/managebook' class="text-decoration-none">
       <div class="d-flex flex-column align-items-center py-3">
        <a href=# class="text-white text-decoration-none">Manage Books</a>
       </div>
      </router-link>
      <router-link to='/addbook' class="text-decoration-none">
       <div class="d-flex flex-column align-items-center py-3">
        <a href=# class="text-white text-decoration-none">Add Books</a>
       </div>
      </router-link>
      <router-link to='/bookissue' class="text-decoration-none">
       <div class="d-flex flex-column align-items-center py-3">
        <a href=# class="text-white text-decoration-none">Issue Books</a>
       </div>
     </router-link>
     <router-link to='/teachers' class="text-decoration-none">
       <div class="d-flex flex-column align-items-center py-3">
        <a href=# class="text-white text-decoration-none">View Teachers</a>
       </div>
     </router-link>
     <router-link to='/returnedBooks' class="text-decoration-none">
       <div class="d-flex flex-column align-items-center py-3">
        <a href=# class="text-white text-decoration-none">Returned Books</a>
       </div>
     </router-link>
     </div>
    </div>
    <!-- <div style="margin-left:150px">
</div> -->
   </template>
   
   <style scoped>
   .sidebar{
       height: 100vh;
       position: fixed;
       width: 230px;
       z-index: 1;
   }

   a.router-link {
    color: white;
   }

   a.router-link-active {
    /* padding-bottom:10px; */
    background-color: #66BB6A;
    color: black;
   }
   </style>
   