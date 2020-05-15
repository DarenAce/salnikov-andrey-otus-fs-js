import { ADD, SUB, MUL, DIV, EXP, OPERATIONS } from './constants'
import { DIFFICULTIES } from './config'

const generateRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1))
}

const generateAdditionQuiz = (difficulty) => {
  const { numberOfOperands, range } = DIFFICULTIES.ADD[difficulty]
  const operands = []
  let answer = 0
  for (let i = 0; i < numberOfOperands; i++) {
    const operand = generateRandomNumber(range.min, range.max)
    operands.push(operand)
    answer += operand
  }
  return {
    operator: OPERATIONS.ADD.sign,
    operands,
    answer
  }
}

const generateSubtractionQuiz = (difficulty) => {
  const { numberOfOperands, range } = DIFFICULTIES.SUB[difficulty]
  const answer = generateRandomNumber(range.min, range.max)
  let minuend = answer
  const operands = []
  for (let i = 0; i < numberOfOperands - 1; i++) {
    const operand = generateRandomNumber(range.min, range.max)
    operands.push(operand)
    minuend += operand
  }
  operands.splice(0, 0, minuend)
  return {
    operator: OPERATIONS.SUB.sign,
    operands,
    answer
  }
}

const generateMultiplicationQuiz = (difficulty) => {
  const { numberOfOperands, range } = DIFFICULTIES.MUL[difficulty]
  const operands = []
  let answer = 1
  for (let i = 0; i < numberOfOperands; i++) {
    const operand = generateRandomNumber(range.min, range.max)
    operands.push(operand)
    answer *= operand
  }
  return {
    operator: OPERATIONS.MUL.sign,
    operands,
    answer
  }
}

const generateDivisionQuiz = (difficulty) => {
  const { numberOfOperands, range } = DIFFICULTIES.DIV[difficulty]
  const answer = generateRandomNumber(range.min, range.max)
  let dividend = answer
  const operands = []
  for (let i = 0; i < numberOfOperands - 1; i++) {
    const operand = generateRandomNumber(range.min, range.max)
    operands.push(operand)
    dividend *= operand
  }
  operands.splice(0, 0, dividend)
  return {
    operator: OPERATIONS.DIV.sign,
    operands,
    answer
  }
}

const generateExponentiationQuiz = (difficulty) => {
  const { baseRange, powerRange } = DIFFICULTIES.EXP[difficulty]
  const base = generateRandomNumber(baseRange.min, baseRange.max)
  const power = generateRandomNumber(powerRange.min, powerRange.max)
  const operands = [base, power]
  const answer = Math.pow(base, power)
  return {
    operator: OPERATIONS.EXP.sign,
    operands,
    answer
  }
}

const getRandomOperation = (operations) => {
  return operations[Math.floor(Math.random() * operations.length)]
}

export default {
  generateQuiz ({ operations, difficulty }) {
    const operation = getRandomOperation(operations)
    difficulty--
    switch (operation) {
      case ADD:
        return generateAdditionQuiz(difficulty)
      case SUB:
        return generateSubtractionQuiz(difficulty)
      case MUL:
        return generateMultiplicationQuiz(difficulty)
      case DIV:
        return generateDivisionQuiz(difficulty)
      case EXP:
        return generateExponentiationQuiz(difficulty)
      default:
        throw new Error(`Unsupported operation: ${operation}`)
    }
  }
}
