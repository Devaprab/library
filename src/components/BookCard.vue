<template>
    <div class="d-flex flex-wrap">
  <v-hover v-slot="{ isHovering, props }" v-for="bookList in bookLists" :key="bookList.id">
    <v-card
      class="mx-4 mb-3"
      color="grey-lighten-4"
      width="200"
      v-bind="props"
    >
      <v-img
        :aspect-ratio="1/1.5"
        :src="'data:image/jpeg;base64,' + bookList.image"
        cover
    
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="transition-fast-in-fast-out bg-green-lighten-3 v-card--reveal px-2"
            style="height: 100%;"
          >
            <h5 class="pt-2">{{ bookList.bookName }}</h5>
            <p>Author : <span>{{ bookList.authorName }}</span></p>
            <p>Category : <span>{{ bookList.category }}</span></p>
            <p>Rack : <span>{{ bookList.rack }}</span></p>
            <p>Quantity : <span>{{ bookList.quantity }}</span></p>
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</div>
</template>

<script>
import axios from 'axios';
// v-for="bookList in bookLists" :key="bookList.id" 
import { mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters(['displayBooks']),
      bookLists() {
        return this.displayBooks;
      },
    },
    mounted() {
      this.getBooks();
    },
    methods : {
      async getBooks() {
        try{
       const response = await axios.get('http://192.168.1.20:8080/library/getAllBooks');
           if(response.status === 200){
            console.log(response.data);
            this.$store.commit('setBooks',response.data);
           }
          }catch(error) {
            console.log(error.message);
            console.error(error);
          }
      }
    }
};
</script>