<template>
  <div class="statistics pb-4">
    <h1>Привет!</h1>
    <p>
      Добро пожаловать на {{ day }} тренировочный день!
      <br />
      Ваш последний результат — решено {{ statistics.lastResult.solved }} из {{ statistics.lastResult.total }}.
      <br />
      Общая точность — {{ accuracy }}%.
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Statistics',

  computed: {
    ...mapGetters({
      statistics: 'getStatistics'
    }),

    day () {
      const { lastGameDate, totalDays } = this.statistics
      const today = new Date().setHours(0, 0, 0, 0)
      const days = (lastGameDate && lastGameDate === today ? 0 : 1)
      return totalDays + days
    },

    accuracy () {
      const { solved, total } = this.statistics.overallResult
      return total ? Math.round(solved / total * 100) : 0
    }
  }
}
</script>

<style scoped>
.statistics > h1 {
  font-size: 2rem;
}
</style>
