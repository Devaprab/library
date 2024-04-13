<template>
  <h1 class="thr">Teachers List</h1>
  <div class="search-bar ms-3">
    <div class="search">
      <div class="search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search icon" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <input v-model="searchText" type="text" placeholder="Search" @input="search" />
      </div>
    </div>
  </div>
  <div style="margin-left: 15px; margin-right: 20px;" class="mt-5">
    <v-table class="table" height="300px" fixed-header>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Class</th>
          <th>Division</th>
          <th>Subject</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(teacher, index) in filteredTeachers" :key="index" :class="{ 'edit-mode': teacher.editMode }">
        
          <td>{{ teacher.id }}</td>
          <td>
            <input type="text" v-model="teacher.teacherName" :disabled="!teacher.editMode">
          </td>
          <td>
            <input type="text" v-model="teacher.email" :disabled="!teacher.editMode">
          </td>
          <td>
            <input type="text" v-model="teacher.standard" :disabled="!teacher.editMode">
          </td>
          <td>
            <input type="text" v-model="teacher.division" :disabled="!teacher.editMode">
          </td>
          <td>
            <input type="text" v-model="teacher.subject" :disabled="!teacher.editMode">
          </td>
          <td>
            <button v-if="!teacher.editMode" @click="toggleEditMode(index)"><v-icon>mdi-pencil</v-icon></button>
            <button v-else @click="submitEdit(index)">Submit</button>
          </td>
          <td>
            <button @click="deleteT(teacher)"><v-icon style="color: red;">mdi-delete</v-icon></button>
            <v-dialog v-model="dialogDelete" width="400px">
                        <v-card class=" pb-4" style="border-top:25px solid #FFCDD2">
                            <v-icon color="red-accent-4" size="54"
                                class="align-self-center mt-2">mdi-alert-outline</v-icon>
                            <v-card-title class="mb-2 text-center fs-4">Delete
                                Teacher?</v-card-title>
                            <v-card-text class="text-center">Are you sure you want to delete 
                                {{ deleteItem.teacherName }}?</v-card-text>
                            <v-card-actions class="d-flex justify-content-center ">

                                <v-btn color="#B71C1C" variant="tonal" @click="deleteTeacher()">Delete</v-btn>
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
      teachers: [],
      searchText: '',
      dialogDelete: false,
      deleteIndex: -1,
      deleteItem: {},
    };
  },
  computed: {
    filteredTeachers() {
      if (this.searchText !== '') {
        return this.teachers.filter(teacher =>
          teacher.teacherName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          teacher.standard.toLowerCase().includes(this.searchText.toLowerCase()) ||
          teacher.subject.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } else {
        return this.teachers;
      }
    }
  },
  mounted() {
    this.getteachers();
  },
  methods: {
  deleteT(item) {
    this.deleteIndex = this.filteredTeachers.indexOf(item);
    this.deleteItem = Object.assign({},item);
    this.dialogDelete = true;
  },
  closeDelete(){
      this.dialogDelete = false;
    },
    toggleEditMode(index) {
      this.teachers[index].editMode = !this.teachers[index].editMode;
    },
    async submitEdit(index) {
      this.toggleEditMode(index);
      try {
        const teacher = this.teachers[index];

        const response = await axios.put(`http://192.168.1.20:8080/api/${teacher.id}`, {

          "teacherName": teacher.teacherName,
          "standard": teacher.standard,
          "division": teacher.division,
          "subject": teacher.subject,
        });
        if (response.status === 200) {
          alert('successfully updated')
          this.teachers[index].editable = false;
          this.getteachers();
        }
      } catch (error) {
        console.error(error)
      }

    },
    async deleteTeacher() {
      // this.dialogDelete = true;
      try {
        const teacherid = this.deleteItem.id
        const response = await axios.delete(`http://192.168.1.20:8080/api/${teacherid}`, {})
        if (response.status === 200) {
          this.dialogDelete = false;
          // alert('successfully deleted')
          this.getteachers()
        } else if(response.status === 500) {
          const errorMessage = 'Book is not returned. Please return the book and delete again ';
          
      throw new Error(errorMessage);
        }
      } catch (error) {
        // alert(error)
        this.dialogDelete = false;
        alert('Book is not returned. Please return the book and delete again ');
        console.error(error)
      }
    },
    async getteachers() {
      try {
        const response = await axios.get('http://192.168.1.20:8080/api/allTeachers')
        if (response.status === 200) {
          const teachers = response.data.filter(res => res.role !== 'ADMIN');          
          this.teachers = teachers.map(teacher => ({
            ...teacher,
            editMode: false // Initialize editMode property for each teacher
          }));
        }
      } catch (error) {
        console.error(error)
      }
    },

  }
};
</script>

<style scoped>
/* Your existing CSS styles */
.table {
  /* width: 70%; */
  border-collapse: collapse;
  /* margin-top: 100px;
  margin-left: 250px; */
}

th, td {
  border: 1px solid #ddd;
  /* padding: 8px; */
}

th {
  background-color: #f2f2f2;
}

table input[type="text"] {
  border: none; /* Remove the border */
  outline: none; /* Remove the outline box */
  width: 100%; /* Expand the input field to fill the available space */
  padding: 4px; /* Add some padding to the input field */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.thr {
  text-align: center;
  /* margin-top: 10px;
  margin-bottom: 2px; */
  /* padding: 8px; */
}

/* Remove the box around buttons */
table button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
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

.search-bar i {
  margin-left: 5px; /* Adjust icon spacing */
}
.v-table.v-table--fixed-header > .v-table__wrapper > table > thead > tr > th {
  background: #646c4c;
  color: white;
}
/* Styles for edit mode */
.edit-mode {
  background-color: rgba(0, 0, 0, 0.1); /* Change background color for rows in edit mode */
}
</style> 
