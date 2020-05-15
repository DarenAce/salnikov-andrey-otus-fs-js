<template>
  <div class="timer" :style="gradient">{{ time }}</div>
</template>

<script>
export default {
  name: 'Timer',

  props: {
    timeLeft: Number,
    timeTotal: Number
  },

  computed: {
    time () {
      const time = new Date(0, 0, 0, 0, 0, this.timeLeft)
      const timeOptions = {
        minute: 'numeric',
        second: '2-digit'
      }
      return time.toLocaleTimeString('ru', timeOptions)
    },

    gradient () {
      const percents = (this.timeLeft / this.timeTotal) * 100
      return `background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) ${percents}%, #007bff ${percents}%);`
    }
  }
}
</script>

<style scoped>
.timer {
  width: 6rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  color: grey;
}
</style>
