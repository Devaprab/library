<template>
    <h1 class="thr">Issued Book List</h1>
      <div class="search-bar ms-5">
        <div class="search">
          <div class="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search icon" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <input v-model="searchText" type="text" placeholder="Search" @input="search" />
          </div>
        </div>
        <input type="text" v-model="searchText" placeholder="Search by Name, Class, or Subject">
        <i class="fa fa-search" aria-hidden="true"></i> 
      </div>
      <div class="additional-inputs">
        <th>Teachers ID</th> <input type="text" placeholder="Teachers Id" v-model="teacherid">
        <th>Issued Book ID</th>
        <input type="text" placeholder="Issued Book Id" v-model="bookid">
        <button @click="issueBook">Issue Book</button>
      </div>
      <table>
        <thead>
          <tr>
          <th>SlNo.</th>
            <!-- <th>ID</th> -->
            <th>Name</th>
            <th>Class</th>
            <th>Subject</th>
            <th>BookName</th>
            <th>IssuedDate</th>
            <th>ReturnDate</th>
            <th>Action</th>
            <!-- <th>Edit/Delete</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(teacher, index) in filteredTeachers" :key="index">
            <td>{{ index+1 }} {{ teacher.userId }}</td>
            <!-- <td>{{ teacher.id }}</td> -->
            <td>
              <input type="text" v-model="teacher.teacherName" :disabled="!teacher.editMode">
            </td>
            <td>
              <input type="text" v-model="teacher.class" :disabled="!teacher.editMode">
            </td>
            <td>
              <input type="text" v-model="teacher.subject" :disabled="!teacher.editMode">
            </td>
            <td>
              <input type="text" v-model="teacher.bookName" :disabled="!teacher.editMode">
            </td>
            <td>
              <input type="text" v-model="teacher.issueDate" :disabled="!teacher.editMode">
            </td>
            <td>
              <input type="text" v-model="teacher.returnDate" :disabled="!teacher.editMode">
            </td>
            <td>
              <button class="btn btn-primary" @click="returnBook(index)">Return</button>
            </td>
            <!-- <td>
              <button v-if="!teacher.editMode" @click="toggleEditMode(index)">Edit/</button>
              <button v-else @click="submitEdit(index)">Submit</button>
              <button @click="deleteTeacher(index)">Delete</button>

            </td> -->
          </tr>
        </tbody>
      </table>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      teachers: [
        // { id: 1, name: 'John Doe', class: '5th', subject: 'Maths', BookName: 'The Alchemist', IssuedDate: '', Return: '', editMode: false },
        // { id: 1, name: 'Siya', class: '8th', subject: 'Maths', BookName: 'It Ends with Us', IssuedDate: '', Return: '', editMode: false },
        // { id: 2, name: 'Jane Smith', class: '6th', subject: 'Maths', BookName: 'It Starts with Us', IssuedDate: '', Return: '', editMode: false },
        // { id: 3, name: 'Alice Johnson', class: '7th', subject: 'English', BookName: 'Who Sank the Boat', IssuedDate: '', Return: '', editMode: false },
        // { id: 4, name: 'Bob Johnson', class: '8th', subject: 'Maths', BookName: 'It', IssuedDate: '', Return: '', editMode: false },
        // { id: 5, name: 'Emily Brown', class: '9th', subject: 'Malayalam', BookName: 'Chemmeen', IssuedDate: '', Return: '', editMode: false },
        // { id: 6, name: 'Michael Clark', class: '10th', subject: 'Hindi', BookName: 'Aadujeevitham', IssuedDate: '', Return: '', editMode: false }
      ],
      searchText: '',
      bookid: null,
      teacherid: null
    };
  },
  computed: {
    filteredTeachers() {
      if(this.searchText !== '')
      {
        return this.teachers.filter(teacher =>
        teacher.teacherName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        teacher.class.toLowerCase().includes(this.searchText.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(this.searchText.toLowerCase()) ||
        teacher.bookName.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
      } else
      return this.teachers; 
    }
  },
  mounted(){
this.getissuedbooks()
  },
  methods: {
    async issueBook() {
    try {
        const response = await axios.post(`http://192.168.1.20:8080/issues/issue-book?bookId=${this.bookid}&userId=${this.teacherid}`, {
            "bookId": this.bookid,
            "userId": this.teacherid 
        });
        if (response.status === 200) {
            alert('Successfully issued');
            this.getissuedbooks()
        }
    } catch (error) {
        console.error(error);
        alert(error.response.data)
    }
},
   async getissuedbooks(){
try{
  const response = await axios.get('http://192.168.1.20:8080/issues/allissuedbooks')
  if(response.status===200){
    this.teachers = response.data
    console.log(response.data)
  }                                                                                             
}
catch(error){
  console.error(error)
}
   },
   async returnBook(index) {
    try {
        const bookid=this.filteredTeachers[index].bookId
        console.log(bookid);
        console.log(typeof(bookid));
        const teacherid=this.filteredTeachers[index].teacherId
        const response = await axios.post(`http://192.168.1.20:8080/return/return-book?bookId=${bookid}&userId=${teacherid}`, {
          "bookId": this.bookid,
          "userId": this.teacherid 
        });
        if (response.status === 200) {
            alert('Returned Successfully');
            this.getissuedbooks()
        }
    } catch (error) {
        console.error(error);
        alert(error)
    }
},
    search() {
      // Function to handle search
      // Since we are using v-model, searchText is automatically updated
    }
  }
};
</script>

<style scoped>
  /* Your existing CSS styles */
  table {
    width: 70%;
    border-collapse: collapse;
    margin-top: 100px;
    margin-left: 250px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tbody tr:nth-child(even) {
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
    margin-top: 10px;
    margin-bottom: 2px;
    padding: 8px;
  }
  
  /* Remove the box around buttons */
  table button {
    border: none;
    /* background: none; */
    cursor: pointer;
    padding: 10;
  }
  .navbar {
    background-color: #f4c807;
    color: #150101;
    padding: 5px 0;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  .navbar-brand {
    font-size: 1.5rem;
    text-decoration: white;
    color: #fff;
  }
  
  .navbar-nav {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    display: flex;
  }
  
  .nav-item {
    margin-right: 20px;
  }
  
  .nav-link {
    text-decoration:white;
    color: #fff;
  }
  
  .search-bar {
    width: 250px;
    border: none; /* Remove the border */

  }
  
  .search-bar input[type="text"] {
    border: none; /* Remove border */
    outline: none; /* Remove outline */
    width: 100%; /* Full width */
    padding: 4px; /* Add padding */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }
  
  /* Rest of your CSS */
  
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
  
.additional-inputs {
  margin-top: 50px; /* Adjust the margin as needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70%; /* Adjust the width as needed */
  margin-left: 250px;
  

}

.additional-inputs input[type="text"] {
  width: calc(33.33% - 10px); /* Divide the width equally between inputs with some margin */
  padding: 8px; /* Add padding */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.additional-inputs button {
  padding: 8px 16px; /* Add padding */
  background-color: #007bff; /* Change button background color */
  color: #fff; /* Change button text color */
  border: none; /* Remove border */
  border-radius: 4px; /* Add border radius */
  cursor: pointer;
}

.additional-inputs button:hover {
  background-color: #0056b3; /* Change button background color on hover */
}
  </style>