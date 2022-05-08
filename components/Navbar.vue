<template>
  <div>
    <h2 class="card-5">{{ Navbar_Title }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  get Navbar_Title() {
    return this.$accessor.navbar_Title;
  }
}
</script>

<style scoped>
.card-5 {
  padding: 2rem;
  border-radius: 30px;
  background: radial-gradient(#f588d8, #c0a3e5);
}
</style>
