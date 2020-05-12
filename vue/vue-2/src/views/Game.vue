<template>
  <div class="card">
    <div class="card-body">
      <header class="game-header pb-4">
        <router-link to="/" class="btn btn-outline-primary cancel-button">Отмена</router-link>
        <timer :timeLeft="secondsLeft" :timeTotal="settings.duration" />
      </header>
      <quiz :userInput="userInput" :isAnswerCorrect="isUserAnswerCorrect" />
      <keyboard @key-pressed="handleKeyPress" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Timer from '../components/Timer'
import Quiz from '../components/Quiz'
import Keyboard from '../components/Keyboard'
import gameService from '../utils/game.service'

export default {
  name: 'Game',

  components: {
    Timer,
    Quiz,
    Keyboard
  },

  data () {
    return {
      timer: null,
      secondsLeft: 0,
      userInput: null,
      isUserAnswerCorrect: null
    }
  },

  computed: {
    ...mapGetters({
      quiz: 'getQuiz',
      settings: 'getSettings'
    })
  },

  methods: {
    ...mapMutations([
      'registerSolvedQuiz',
      'registerUnsolvedQuiz',
      'resetLastResult',
      'setQuiz',
      'updateLastGameDate',
      'updateOverallResult',
      'updateTotalDays'
    ]),

    startGame () {
      this.updateTotalDays()
      this.updateLastGameDate()
      this.resetLastResult()
      this.setQuiz(gameService.generateQuiz(this.settings))
      this.secondsLeft = this.settings.duration
      this.timer = setInterval(() => {
        this.secondsLeft--
        if (this.secondsLeft <= 0) {
          this.stopGame()
          this.$router.push({ name: 'Home' })
        }
      }, 1000)
    },

    stopGame () {
      clearInterval(this.timer)
      this.timer = null
      this.updateOverallResult()
    },

    handleKeyPress (keyValue) {
      switch (keyValue) {
        case 'erase':
          if (this.userInput) {
            this.userInput = this.userInput < 10 ? null : Math.floor(this.userInput / 10)
          }
          break
        case 'clear':
          this.userInput = null
          break
        case 'next':
          this.userInput = this.quiz.answer
          this.registerUnsolvedQuiz()
          setTimeout(() => {
            this.setQuiz(gameService.generateQuiz(this.settings))
            this.userInput = null
          }, 500)
          break
        case 'check':
          if (this.userInput && this.userInput === this.quiz.answer) {
            this.registerSolvedQuiz()
            this.isUserAnswerCorrect = true
            setTimeout(() => {
              this.setQuiz(gameService.generateQuiz(this.settings))
              this.userInput = null
              this.isUserAnswerCorrect = null
            }, 500)
          } else {
            this.isUserAnswerCorrect = false
            setTimeout(() => { this.isUserAnswerCorrect = null }, 500)
          }
          break
        default:
          if (!this.userInput) {
            this.userInput = parseInt(keyValue)
          } else if (this.userInput.toString().length < this.quiz.answer.toString().length) {
            this.userInput = this.userInput * 10 + parseInt(keyValue)
          }
      }
    }
  },

  mounted () {
    this.startGame()
  },

  destroyed () {
    if (this.timer) {
      this.stopGame()
    }
  }
}
</script>

<style>
.game-header {
  display: flex;
  justify-content: space-between;
}

.cancel-button {
  min-width: 6rem;
}
</style>
