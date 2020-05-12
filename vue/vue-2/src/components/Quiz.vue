<template>
  <div :class="['quiz', 'mb-4', className]">
    <template v-for="(operand, index) in quiz.operands">
      <span :key="`operand-${index}`">{{ operand }}</span>
      <span
        v-if="index < quiz.operands.length - 1"
        :key="`operator-${index}`"
        class="math-sign"
      >{{ quiz.operator }}</span>
    </template>
    <span class="math-sign">=</span>
    <span id="answer">{{ answerMask }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Quiz',

  props: {
    userInput: Number,
    isAnswerCorrect: Boolean
  },

  computed: {
    ...mapGetters({
      quiz: 'getQuiz'
    }),

    className () {
      if (this.isAnswerCorrect === null) {
        return ''
      }
      if (this.isAnswerCorrect) {
        return 'correct'
      } else {
        return 'error'
      }
    },

    answerMask () {
      const userInputLength = this.userInput ? this.userInput.toString().length : 0
      return (this.userInput || '') + '_'.repeat(this.quiz.answer.toString().length - userInputLength)
    }
  }
}
</script>

<style scoped>
.quiz {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 2rem;
  font-weight: bold;
  color: grey;
}

.math-sign {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.answer {
  color: #2c3e50;
}

.correct {
  border-radius: .25rem;
  box-shadow: inset 0 0 .5rem 0 lawngreen;
}

.error {
  border-radius: .25rem;
  box-shadow: inset 0 0 .5rem 0 red;
}
</style>
