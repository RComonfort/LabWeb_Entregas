<template>
  <div id="app">
   
    <img width="30" src="./assets/logo.png">
  
  <!--   <HelloWorld msg="Welcome to Your Vue.js App"/> 
  -->
    <h1>CRUD - Products</h1>

    <form v-on:submit.prevent="addProduct">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>codigo:</label>
            <input type="text" class="form-control" v-model="product.codigo"/>
          </div>
        </div>
        </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>nombre:</label>
            <input type="text" class="form-control" v-model="product.nombre"/>
          </div>
        </div>
        </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>precio:</label>
            <input type="text" class="form-control" v-model="product.precio"/>
          </div>
        </div>
        </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>exist:</label>
            <input type="text" class="form-control" v-model="product.exist"/>
          </div>
        </div>
        </div>
       
       <br />
        <div class="form-group">
          <button class="btn btn-primary">Create Product</button>
        </div>
      <br/>
           
    </form>
      <div class="form-group">

          <button @click="updateProduct()">
              Update Product
          </button>
        </div>

  <ul v-if="posts && posts.length">
    <li v-for="product of posts">
       {{ product.id }} - 
       {{ product.nombre }}
              <button @click="getoneproduct(product.id)">
                edit
     </button>
     <button @click="deleteProduct(product.id)">
                delete
     </button>
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' 
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      product: {},
      posts: [],
      errors: []
    }
  },
  created() {
    // Fetches posts when the component is created.
    this.getproducts();
 
  } ,
  methods: {
 
  getproducts() {
    axios.get('http://localhost:8000/api/products')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  getoneproduct(idproduct) {
    axios.get('http://localhost:8000/api/products/'+ idproduct)
    .then(response => {
      // JSON responses are automatically parsed.
      this.product = response.data
      alert("status: " + response.status + ", selected: " + JSON.stringify(response.data));

    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  addProduct() {
    alert(this.product.codigo + this.product.nombre + this.product.precio + this.product.exist);
    axios.post('http://localhost:8000/api/products',  this.product)
    .then(response => {
      alert("status: " + response.status + ", inserted: " + JSON.stringify(response.data));
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  
  updateProduct() {
    //alert(idproduct);
    alert(this.product.id);
    axios.put('http://localhost:8000/api/products/' + this.product.id,  this.product)
    .then(response => {
      alert("status: " + response.status + ", updated: " + JSON.stringify(response.data));
      this.getproducts();

    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  

  deleteProduct(idproduct) {
    alert("delete" + idproduct);
    
    axios.delete('http://localhost:8000/api/products/' + idproduct)
    .then(response => {

      alert("status: " + response.status + ", deleted: " + JSON.stringify(response.data));
      this.getproducts();

    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
