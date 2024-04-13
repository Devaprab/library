<template> 
<router-view name="navbar"></router-view>
  <div class="home mt-5 mb-3">
    <h1 class="heading text-center">Welcome to Prathibhatheeram</h1>
    <v-divider></v-divider>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
      style="display: inline !important;"
    ></v-carousel-item>
  </v-carousel>
  <h1 class="mt-5 mb-5">Explore Books</h1>
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
        :src="bookList.image"
        cover
    
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="transition-fast-in-fast-out bg-blue-grey-darken-2 v-card--reveal d-flex"
            style="height: 50%;"
          >
            <p>{{ bookList.bookName }}</p>
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</div>

</div>
  </template>
<script>
import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/green.jpg'),
          },
          {
            src: require('@/assets/sheee.jpg'),
          },
          {
            src: require('@/assets/sll.jpg'),
          },
          {
            src: require('@/assets/book.jpg'),
          },
        ],
      }
    },
    computed: {
      ...mapGetters(['displayBooks']),
      bookLists() {
        return this.displayBooks;
      },
    },
  }
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital@1&family=Charmonman:wght@400;700&family=Jim+Nightshade&display=swap');

.heading {
  font-family: "Charmonman", cursive;
  font-weight: 600;
  font-style: normal;
}

.home {
  height: auto;
  width: 1200px;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
</style>
