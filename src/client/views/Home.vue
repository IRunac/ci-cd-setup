<script>
  import api from '../axios';
  export default {
    name: 'Home',
    data () {
      return {
        fetchData: ''
      }
    },
    methods: {
      async fetch() {
        try {
          const response = await api.get(`/data`);
          this.fetchData = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
</script>
<template>
  <h1>Basic Node CI/CD setup</h1>
  <button @click="fetch">Get Data from Backend</button>
  <div>{{ fetchData }}</div>
</template>
