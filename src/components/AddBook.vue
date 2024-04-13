<template>
    <div class="container added-books ms-5 mb-2">
            <h3 class="text mb-5 mt-4 text-center" style="font-size: 24px;">Add Book</h3>  
            <form @submit.prevent="submitForm" enctype="multipart/form-data">
          <div class="form-group">
            <div class="input-group mt-3 row">
              <label for="title" class="form-label col-2"><p>Book Name :</p></label>
              <input type="text" class="form-control w-50 col-10" id="title" v-model="bookname" required>
            </div>
          </div>
       
      
          <div class="input-group">
            <div class="input-group row mt-3">
              <label for="author" class="form-label col-2"><p>Author :</p></label>
              <input type="text" class="form-control col-10" id="author" v-model="author" required>
            </div>
          </div>
          <div class="input-group">
            <div class="input-group row mt-3">
              <label for="image" class="form-label col-2"><p>Image :</p></label>
              <input type="file" class="form-control col-10" id="author" ref="photo" @change="onFileChange"  required>
            </div>
          </div>
          <div class="input-group">
            <div class="input-group row mt-3">
              <label for="genre" class="form-label col-2"><p>Language :</p></label>
              <input type="text" class="form-control col-10" id="language" v-model="language" required>
             
            </div>

          </div>
          <div class="input-group">
            <div class="input-group row mt-3">
              <label for="category" class="form-label col-2"><p>Category :</p></label>
              <input type="text" class="form-control col-10" id="category" v-model="category" required>
            </div>
          </div>
          <div class="input-group">
            <div class="input-group row mt-3">
              <label for="rack" class="form-label col-2"><p>Rack :</p></label>
              <input type="text" class="form-control col-10" id="rack" v-model="rack" required>
            </div>
          </div>
          <div class="input-group">
            <div class="input-group row mt-3">
              <label for="quantity" class="form-label col-2"><p>Quantity :</p></label>
              <input type="text" class="form-control col-10" id="quantity" v-model="quantity" required>
            </div>
          
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-success mt-3 me-5">Add Book</button>
          </div>
          <v-dialog v-model="dialogSuccess" width="400px">
<v-card class="mx-auto rounded-5" elevation="2" max-width="400" width="100%" height="250">
    <v-card-title class="green-header mx-auto"><v-icon
      class="mb-2 mt-4"
      color="success"
      icon="mdi-check-circle"
      size="100"
    ></v-icon></v-card-title>
    <v-card-text class="text-success text-center"><h2>Successfully Added</h2></v-card-text>
</v-card>
    
</v-dialog>
           </form>
           
          </div>
</template>

<script>
      import axios from 'axios';
      export default {
        data() {                                
          return {
            bookname: '',
            author: '',
            image: '',
            language: '',
            category: '',
            rack: '',
            quantity: '',
            coverImg:'',
            dialogSuccess: false
          };
        },
        
        methods: { 
          onFileChange() {
            const fileInput = this.$refs.photo;
            const file = fileInput.files[0];
  const reader = new Image();
console.log('reader', reader)
  reader.onload = () => {
    this.coverImg = file;
  };
   reader.src = URL.createObjectURL(file);
  },
          async submitForm() {
            console.log(typeof this.coverImg);
            const formData = new FormData();
    formData.append('bookName', this.bookname);
    formData.append('authorName', this.author);
    formData.append('language', this.language);
    formData.append('category', this.category);
    formData.append('rack', this.rack);
    formData.append('quantity', this.quantity);
    formData.append('imageFile', this.coverImg);
    try {
      console.log('hello')
      const response = await axios.post('http://192.168.1.20:8080/library/Add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if(response.status == 201) {
        console.log(response.data);
        this.dialogSuccess = true;
        this.clearForm();
      }
      // Handle response
    } catch (error) {
      console.error(error);
    }
},         
    clearForm() {
      this.bookname = '';
      this.author = '';
      this.language = '';
      this.category = '';
      this.rack = '';
      this.quantity = '';
      this.$refs.photo.value = null;
    },
  }
}
 
        
      
      
      </script>
      
      <style scoped>
      

.btn:hover {
  border: 2px solid rgb(248, 240, 12);
}

/* Other styles remain unchanged */
  

.btn:hover {
  border: 2px solid rgb(248, 240, 12);
}
/* .form-group {
  margin-bottom: 20px;
  
} */

.input-group {
  display: flex;
  align-items: center;
}

.input-group p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0;
}

.input-group label {
  
  margin-right: 10px;
}
/* .input-group input {
  flex: 1;
  } */
.added-books {
  margin-top: 40px;
  width: 900px;
  height: 600px;
  background-color: #fdfdfd;
  border: 3px solid #66BB6A;
  border-radius: 10px;
  } 

.btn{
  border-radius: 10px; 
}


</style>