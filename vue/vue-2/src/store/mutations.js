export default {
  setDuration (state, duration) {
    state.settings.duration = duration
  },

  setDifficulty (state, difficulty) {
    state.settings.difficulty = difficulty
  },

  addOperation (state, operation) {
    const { operations } = state.settings
    if (!operations.includes(operation)) {
      operations.push(operation)
    }
  },

  removeOperation (state, operation) {
    const { operations } = state.settings
    operations.splice(operations.indexOf(operation), 1)
  },

  updateLastGameDate (state) {
    state.statistics.lastGameDate = new Date().setHours(0, 0, 0, 0)
  },

  updateTotalDays (state) {
    if (new Date(state.statistics.lastGameDate).getTime() !== new Date().setHours(0, 0, 0, 0)) {
      state.statistics.totalDays++
    }
  },

  registerSolvedQuiz (state) {
    state.statistics.lastResult.solved++
    state.statistics.lastResult.total++
  },

  registerUnsolvedQuiz (state) {
    state.statistics.lastResult.total++
  },

  resetLastResult (state) {
    state.statistics.lastResult.solved = 0
    state.statistics.lastResult.total = 0
  },

  updateOverallResult (state) {
    state.statistics.overallResult.solved += state.statistics.lastResult.solved
    state.statistics.overallResult.total += state.statistics.lastResult.total
  },

  setQuiz (state, quiz) {
    state.quiz = quiz
  }
}
