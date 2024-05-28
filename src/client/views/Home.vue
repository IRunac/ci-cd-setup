<script>
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
          const response = await fetch('https://api.irunac.gostudion.com/api/data');
          const data = await response.json();
          this.fetchData = data.message;
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