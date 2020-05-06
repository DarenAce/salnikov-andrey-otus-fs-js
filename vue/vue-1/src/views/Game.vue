<template>
  <div class="card">
    <div class="card-body">
      <header class="game-header pb-4">
        <router-link to="/" class="btn btn-outline-primary cancel-button">Отмена</router-link>
        <div class="timer">4:37</div>
      </header>
      <div class="quiz pb-4">
        <span id="operand-1">13</span>
        <span id="operation-1" class="math-sign">*</span>
        <span id="operand-2" class="answer">__</span>
        <span id="operation-2" class="math-sign">*</span>
        <span id="operand-3" class="answer">__</span>
        <span class="math-sign">=</span>
        <span id="result">84 240</span>
      </div>
      <div class="buttons">
        <div class="button-wrapper">
          <button class="button">1</button>
        </div>
        <div class="button-wrapper">
          <button class="button">2</button>
        </div>
        <div class="button-wrapper">
          <button class="button">3</button>
        </div>
        <div class="button-wrapper">
          <button class="button bg-grey">&lt;</button>
        </div>
        <div class="button-wrapper">
          <button class="button">4</button>
        </div>
        <div class="button-wrapper">
          <button class="button">5</button>
        </div>
        <div class="button-wrapper">
          <button class="button">6</button>
        </div>
        <div class="button-wrapper">
          <button class="button bg-grey">&gt;</button>
        </div>
        <div class="button-wrapper">
          <button class="button">7</button>
        </div>
        <div class="button-wrapper">
          <button class="button">8</button>
        </div>
        <div class="button-wrapper">
          <button class="button">9</button>
        </div>
        <div class="button-wrapper">
          <button class="button bg-grey">?</button>
        </div>
        <div class="button-wrapper wide-button">
          <button class="button">0</button>
        </div>
        <div class="button-wrapper">
          <button class="button bg-grey">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  computed: {
    duration: {
      get () {
        return this.$store.state.settings.duration
      }
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

.timer {
  width: 6rem;
  padding: .375rem .75rem;
  border: 1px solid #007bff;
  border-radius: .25rem;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  color: grey;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 80%, #007bff 80%);
}

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
    padding-left: .75rem;
    padding-right: .75rem;
}

.answer {
    color: #2c3e50;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}

.button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 5.5rem;
}

.button {
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  margin: .75rem;
  outline: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
  background: darkorange;
  font-size: 1.5rem;
  font-weight: bold;
}

.button:active {
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.wide-button {
  grid-column: 1 / 4;
}

.bg-grey {
  background: rgba(0, 0, 0, 0.4);
}
</style>
