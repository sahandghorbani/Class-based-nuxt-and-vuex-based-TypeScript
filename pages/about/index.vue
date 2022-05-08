<template>
  <div>
      <h1>about page</h1>

      <div v-for="title in  titles" :key="title">
        <h3> ...{{title}}</h3>
      </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios' ; 
import { Vue, Component } from 'vue-property-decorator'

@Component({
      async asyncData(context) {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        let data = response.data
        let arr = data.map((element : any) => element.title)
        
       return {
          titles: arr
        }
    }

})
export default class index extends Vue {
//  public titles = []

}
</script>

<style>

</style>