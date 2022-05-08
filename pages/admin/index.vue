<template>
  <div>
    <h1>admin page</h1>
    <div v-for="t in title" :key="t">
      <h3>{{ t }}</h3>
    </div>
  </div>
</template>

<script >
export default {
  data () {
    return {
      title: [
        'sdsdsadsadasdsafdadsa',
        'sdsdsadsadasdsaddadsa',
        'sdsdsadsadasdsadsadsa',
        'sdsdsadsadasdsaddfadsa',
        'sdsdsadsadasdsadaadsa',
        'sdsdsadsadasdsadfdsfdadsa',
        'sdsdsadsadasdsadfgfdadsa',
        'sdsdsadsadasdsgnadadsa'
      ]
    }
  }
}
</script>
