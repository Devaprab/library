<template>
  <h1 class="text-center mt-5">Manage Books</h1>
  <div class="search ms-3">
    <div class="search-bar">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search icon" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
      <input v-model="searchText" type="text" placeholder="Search" @input="search" />
    </div>
    <div style="margin-top: 30px;"></div>
  </div>
  <div style="margin-left: 15px; margin-right: 20px;">
    <v-table class="table" height="300px" fixed-header>
      <thead>
        <tr class="bg-dark">
          <th>BookId</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Language</th>
          <th>Category</th>
          <th>Rack</th>
          <th>Quantity</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in filteredBooks" :key="index" :class="{ 'highlighted-row': book.rowHighlighted }">
          <td><input type="text" v-model="book.id" :disabled="!book.editable" /></td>
          <td><input type="text" v-model="book.bookName" :disabled="!book.editable" /></td>
          <td><input type="text" v-model="book.authorName" :disabled="!book.editable" /></td>
          <td><input type="text" v-model="book.language" :disabled="!book.editable" /></td>
          <td><input type="text" v-model="book.category" :disabled="!book.editable" /></td>
          <td><input type="text" v-model="book.rack" :disabled="!book.editable" /></td>
          <td><input type="text" v-model="book.quantity" :disabled="!book.editable" /></td>
          <td>
            <button v-if="!book.editable" @click="editBook(index)"><v-icon>mdi-pencil</v-icon></button>
            <button v-else @click="submitEdit(index)">Submit</button>
          </td>
          <td><button @click="deleteB(book)"><v-icon style="color: red;">mdi-delete</v-icon></button>
            <v-dialog v-model="dialogDelete" width="400px">
                        <v-card class=" pb-4" style="border-top:25px solid #FFCDD2">
                            <v-icon color="red-accent-4" size="54"
                                class="align-self-center mt-2">mdi-alert-outline</v-icon>
                            <v-card-title class="mb-2 text-center fs-4">Delete
                                Book?</v-card-title>
                            <v-card-text class="text-center">Are you sure you want to delete 
                                {{ deleteItem.bookName }}?</v-card-text>
                            <v-card-actions class="d-flex justify-content-center ">

                                <v-btn color="#B71C1C" variant="tonal" @click="deleteBook()">Delete</v-btn>
                                <v-btn color="#424242" variant="tonal" @click="closeDelete">Cancel</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog> 
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
      addedBooks: [],
      dialogDelete: false,
      deleteIndex: -1,
      deleteItem: {},
    };
  },
  computed: {
    filteredBooks() {
      if (this.searchText !== '') {
        return this.addedBooks.filter(book =>
          book.bookName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          book.authorName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          book.language.toLowerCase().includes(this.searchText.toLowerCase()) ||
          book.category.toLowerCase().includes(this.searchText.toLowerCase()) ||
          book.rack.toLowerCase().includes(this.searchText.toLowerCase()) ||
          book.quantity.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } else {
        return this.addedBooks;
      }
    }
  },
  mounted() {
    this.getbooks();
  },
  methods: {
    deleteB(item) {
      this.deleteIndex = this.filteredBooks.indexOf(item);
      this.deleteItem = Object.assign({},item);
      this.dialogDelete = true;
    },
    closeDelete(){
      this.dialogDelete = false;
    },
    async getbooks() {
      try {
        const response = await axios.get('http://192.168.1.20:8080/library/getAllBooks');
        if (response.status === 200) {
          console.log(response.data);
          this.addedBooks = response.data.map(book => ({
            ...book,
            rowHighlighted: false // Initialize rowHighlighted property for each book
          }));
        }
      } catch (error) {
        console.error(error);
      }
    },
    editBook(index) {
      this.addedBooks[index].editable = true;
      this.addedBooks[index].rowHighlighted = true; // Highlight the row
    },
    async submitEdit(index) {
      try {
        const book = this.addedBooks[index];
        const response = await axios.put('http://192.168.1.20:8080/library/update', {
          "id": book.id,
          "bookName": book.bookName,
          "authorName": book.authorName,
          "language": book.language,
          "category": book.category,
          "rack": book.rack,
          "quantity": book.quantity
        });
        if (response.status === 200) {
          alert('successfully updated')
          this.addedBooks[index].editable = false;
          this.addedBooks[index].rowHighlighted = false; // Remove row highlight after edit
          this.getbooks();
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBook() {
      try {
        const bookid = this.deleteItem.id
        const response = await axios.delete(`http://192.168.1.20:8080/library/deleteId/${bookid}`)
        if (response.status === 200) {
          this.dialogDelete = false;
          // alert('successfully deleted')
          this.getbooks()
        }
      } catch (error) {
        alert(error)
        console.error(error)
      }
    },
  }
}
</script>

<style scoped>
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

.search-bar i {
  margin-left: 5px; /* Adjust icon spacing */
}

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
  background: #646c4c;
  color: white;
}

.highlighted-row {
  background-color: rgba(0, 0, 0, 0.1); /* Change background color for highlighted row */
}
</style>
