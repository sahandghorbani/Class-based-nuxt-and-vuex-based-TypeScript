<template>
  <div>
    <h1>admin page</h1>
    <div v-for="item in items" :key="item">
      <button
        :class="{ actived: currentBtn == item }"
        @click="clickHandler(item, $event)"
      >
        {{ item }}
      </button>
    </div>

    <button class="cookie-btn" @click="setting()">
      set cookie
    </button>

    <button class="cookie-btn" @click="getting()">
      get cookie
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Cookies from 'js-cookie'

@Component({
  components: {}
})
export default class index extends Vue {
  items = ['option1', 'option2', 'option3', 'option4']
  currentBtn = 'option1'
  selectedBtns = []

  clickHandler (item: never, e: any) {
    e.target.classList.toggle('actived')
    this.selectedBtns.push(item)
  }

  setting () {
    const userId = 123
    const user = { name: 'sahand', age: 23 }
    const date = new Date(new Date().getTime() + 1 * 60 * 1000)
    Cookies.set('userId', userId)
    Cookies.set('user', JSON.stringify(user), { expires: date })
    // document.cookie = `userid=${userId}`
    // document.cookie = `user=${JSON.stringify(user)}`
  }

  getting () {
    const cookieData = Cookies.get('user')
    console.log(cookieData)
    // const cookieData = document.cookie.split(';')
    // const data = cookieData.map((i: any) => {
    //   return i.trim()
    // })
    // console.log(data[0].split('=')[1])
  }
}
</script>

<style scoped>
.actived {
  background-color: #5468ff;
}

.cookie-btn {
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}
</style>
