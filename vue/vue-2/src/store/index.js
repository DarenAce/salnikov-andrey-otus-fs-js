import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statistics: {
      day: 24,
      accuracy: 0.8,
      lastResult: {
        total: 25,
        solved: 10
      }
    },
    settings: {
      duration: 7,
      difficulty: 5,
      operations: {
        addition: true,
        subtraction: false,
        multiplication: false,
        division: true,
        exponentiation: true
      }
    },
    game: {
      total: 25,
      solved: 10
    }
  },
  mutations: {
    setStatistics (state, statistics) {
      state.statistics = statistics
    },

    setSettings (state, settings) {
      state.settings = settings
    },

    setDay (state, day) {
      state.statistics.day = day
    },

    setAccuracy (state, accuracy) {
      state.statistics.accuracy = accuracy
    },

    setTotal (state, total) {
      state.statistics.lastResult.total = total
    },

    setSolved (state, solved) {
      state.statistics.lastResult.solved = solved
    },

    setDuration (state, duration) {
      state.settings.duration = duration
    },

    setDifficulty (state, difficulty) {
      state.settings.difficulty = difficulty
    },

    setAddition (state, addition) {
      state.settings.operations.addition = addition
    },

    setSubtraction (state, subtraction) {
      state.settings.operations.subtraction = subtraction
    },

    setMultiplication (state, multiplication) {
      state.settings.operations.multiplication = multiplication
    },

    setDivision (state, division) {
      state.settings.operations.division = division
    },

    setExponentiation (state, exponentiation) {
      state.settings.operations.exponentiation = exponentiation
    }
  },
  actions: {
  },
  modules: {
  }
})
