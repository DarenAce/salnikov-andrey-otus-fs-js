import { ADD, SUB, MUL, DIV, EXP } from '../utils/constants'

export default {
  statistics: {
    lastGameDate: null,
    totalDays: 0,
    lastResult: {
      total: 0,
      solved: 0
    },
    overallResult: {
      solved: 0,
      total: 0
    }
  },
  settings: {
    duration: 60,
    difficulty: 1,
    operations: [
      ADD,
      SUB,
      MUL,
      DIV,
      EXP
    ]
  },
  quiz: {
    operator: '',
    operands: [],
    answer: 0
  }
}
