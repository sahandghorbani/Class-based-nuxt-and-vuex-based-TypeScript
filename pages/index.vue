<template>
  <div class="container">
    <Navbar />
    <div>
      <h1 class="title">nuxt-typed-vuex-example</h1>
      <h2 class="subtitle">Example project for nuxt-typed-vuex.</h2>

      <div class="con">
        <div class="row">Email: {{ email }}</div>
        <div class="row"><button @click="setEmail">Set email</button></div>
      </div>

      <div class="con">
        <p>count is :&nbsp; {{ currentCount }}</p>
      </div>

      <div class="containerr">
        <div class="bt" @click="increasing">inctrease</div>
        <div class="bt" @click="decreasing">decrease</div>
        <br />
      </div>

      <div v-show="shown" class="alrt">
        <p>really want to decrease ?</p>
        <button @click="allowanceChanger" class="bt">yes</button>
      </div>

      <div id="snackbar">Go on ...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class HomePage extends Vue {
  public currentCount = 0;
  public shown = false;

  //email
  get email() {
    return this.$accessor.email;
  }

  setEmail() {
    this.$accessor.setEmail("test@email.com");
  }

  //counter
  get count() {
    return this.$accessor.counter;
  }

  increasing(): void {
    let updatedCount = this.currentCount++;
    this.$accessor.increase(updatedCount);
  }

  decreasing(): void {
    let updatedCount = this.currentCount--;
    this.$accessor.decrease(updatedCount);
  }

  get underZeroAllowance(): boolean {
    return this.$accessor.underZeroAllowance;
  }

  //watchers
  @Watch("currentCount")
  counterWatcher(val: number) {
    if (val <= 0 && !this.underZeroAllowance) {
      this.currentCount = 0;
      this.shown = true;
    } else {
      this.shown = false;
    }
  }

  allowanceChanger() {
    this.$accessor.alowanceChnger(true);
    this.currentCount = -1;
    this.shown = false;

    let snackbar = document.getElementById("snackbar") as HTMLDivElement;
    snackbar.className = "show";
    setTimeout(() => {
      snackbar.className = snackbar.className.replace("show", "");
    }, 1000);
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.con {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300px;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

:root {
  --background-color: #ffe5e5;
  --color: #000000;
  --feedback-bg-color: #ffffff;
  --feedback-secondary-color: #ffacac;
  --feedback-primary-color: #53488d;
  --feedback-icon-color: #ffffff;
  --feedback-form-input: #f4f4f4;
}

.center-content,
.submit-feedback,
.containerr {
  display: flex;
  place-content: center;
  height: 4rem;
}

.containerr {
  height: 15vh;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}

.submit-feedback {
  padding: 10px 30px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 7px;
  border-bottom-left-radius: 0;
  background-color: var(--feedback-secondary-color);
  color: var(--feedback-primary-color);
  transition: all 0.3s;
}
.submit-feedback:hover {
  border-radius: 0px;
  color: var(--feedback-primary-color);
  background-color: var(--background-color);
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffacac' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  animation: animatedBackground 5s linear infinite alternate;
}

@keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}

.bt {
  /* CSS */

  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}

.bt:hover {
  background: #f6f9fe;
  color: #174ea6;
}

.bt:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
  transform: scale(0.85);
}

.bt:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.bt:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.bt:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.bt:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.bt:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

/* snackbar */
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
