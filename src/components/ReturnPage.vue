<template>
  <h1 class="text-center mt-5">Returned Book List</h1>
    <div class="search ms-3">
        <div class="search-bar">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search icon" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
  </svg>
  <input v-model="searchText" type="text" placeholder="Search" @input="search" />
</div>

<div style="margin-top: 30px;"></div>
    </div>
    <div style=" margin-left: 15px; margin-right: 20px;">
    <v-table class="table" height="300px" fixed-header> 
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>BookId</th>
                  <th>Book Name</th>
                  <th>Teacher Id</th>
                  <th>Teacher Name</th>
                  <th>Return Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(book, index) in filteredBooks" :key="index">
                    <td>{{ index+1 }}</td>
                  <td>
                    <input type="text" v-model="book.bookId" :disabled="!book.editable">
                    
                  </td>
                  <td>
                    <input type="text" v-model="book.bookName" :disabled="!book.editable">
                    
                  </td>
                  
                  <td>
                    <input type="text" v-model="book.teacherId" :disabled="!book.editable">
                  </td>
                  <td>
                    <input type="text" v-model="book.teacherName" :disabled="!book.editable">
                  </td>
                  <td>
                    <input type="text" v-model="book.returnDate" :disabled="!book.editable">
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {                                
        return {
            searchText: '',
            returnBooks: [] ,
        }
    },
    computed: {
    filteredBooks() {
      if(this.searchText !== '')
      {
      return this.returnBooks.filter(book => 
          book.bookName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          book.teacherName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else 
    return this.returnBooks;
    },
    // filteredTeachers() {
    //   if(this.searchText !== '')
    //   {
    //     return this.teachers.filter(teacher =>
    //     teacher.teacherName.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //     teacher.class.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //     teacher.subject.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //     teacher.bookName.toLowerCase().includes(this.searchText.toLowerCase()) 
    //   );
    //   } else
    //   return this.teachers; 
    // }
    },
    mounted(){
        this.getbooks();
    },
    methods: {
        // getbook function
        async getbooks(){
        try{
            const response = await axios.get('http://192.168.1.20:8080/return/all-return-books');
            if(response.status===200){
                console.log(response.data);
                this.returnBooks = response.data;
            }
        }
        catch(error){
            console.error(error)
        }
        },
    }
}
</script>

<style scoped>
   
 
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th,
.table td {
  border: 1px solid #ddd; /* Border style and color */
  padding: 8px;
  }

.table th {
  background-color: #f2f2f2;
  }

  table input[type="text"] {
  border: none; /* Remove the border */
  outline: none; /* Remove the outline box */
  width: 100%; /* Expand the input field to fill the available space */
  padding: 4px; /* Add some padding to the input field */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }

  .v-table.v-table--fixed-header > .v-table__wrapper > table > thead > tr > th {
    background: #646C4C;
    color: white;
  }

  .search-bar {
  width: 250px;
  border: none; /* Remove the border */
  border-bottom: 1px solid black; /* Add bottom border */
}

.search-bar input[type="text"] {
  border: none; /* Remove border */
  outline: none; /* Remove outline */
  width: 100%; /* Full width */
  padding: 4px; /* Add padding */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

  .search-bar {
  display: flex;
  align-items: center;
  width: 250px;
  border: none; /* Remove the border */
  border-bottom: 1px solid black; /* Add bottom border */
}

.search-bar input[type="text"] {
  border: none; /* Remove border */
  outline: none; /* Remove outline */
  width: calc(100% - 30px); /* Full width minus space for icon */
  padding: 4px; /* Add padding */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
  </style>