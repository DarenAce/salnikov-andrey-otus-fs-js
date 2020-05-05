<template>
  <div class="card">
    <div class="card-body">
      <header class="home-header pb-4">
        <h1>Привет!</h1>
        <p>
          Добро пожаловать на {{ day }} тренировочный день!
          <br />
          Ваш последний результат — решено {{ solved }} из {{ total }}.
          <br />
          Общая точность — {{ accuracy * 100 }}%.
        </p>
      </header>
      <form class="settings pb-4">
        <h2>Настройки</h2>
        <div class="form-group duration-difficulty-settings">
          <input
            type="range"
            class="custom-range duration-range"
            min="1"
            max="15"
            id="duration"
            v-model="duration"
          />
          <label for="duration">Длительность: {{ duration }} минут</label>

          <input
            type="range"
            class="custom-range difficulty-range"
            min="1"
            max="10"
            id="difficulty"
            v-model="difficulty"
          />
          <label for="difficulty">Сложность: {{ difficulty }}</label>
        </div>
        <div class="form-group">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="addition" v-model="addition" />
            <label class="custom-control-label" for="addition">Суммирование</label>
          </div>

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="subtraction"
              v-model="subtraction"
            />
            <label class="custom-control-label" for="subtraction">Разность</label>
          </div>

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="multiplication"
              v-model="multiplication"
            />
            <label class="custom-control-label" for="multiplication">Умножение</label>
          </div>

          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="division" v-model="division" />
            <label class="custom-control-label" for="division">Деление</label>
          </div>

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="exponentiation"
              v-model="exponentiation"
            />
            <label class="custom-control-label" for="exponentiation">Возведение в степень</label>
          </div>
        </div>
      </form>
      <footer class="home-footer">
        <router-link to="/game" class="btn btn-outline-primary play-button">Play!</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    day: {
      get () {
        return this.$store.state.statistics.day
      },
      set (value) {
        this.$store.commit('setDay', parseInt(value))
      }
    },
    accuracy: {
      get () {
        return this.$store.state.statistics.accuracy
      },
      set (value) {
        this.$store.commit('setAccuracy', value)
      }
    },
    total: {
      get () {
        return this.$store.state.statistics.lastResult.total
      },
      set (value) {
        this.$store.commit('setTotal', parseInt(value))
      }
    },
    solved: {
      get () {
        return this.$store.state.statistics.lastResult.solved
      },
      set (value) {
        this.$store.commit('setSolved', parseInt(value))
      }
    },
    duration: {
      get () {
        return this.$store.state.settings.duration
      },
      set (value) {
        this.$store.commit('setDuration', parseInt(value))
      }
    },
    difficulty: {
      get () {
        return this.$store.state.settings.difficulty
      },
      set (value) {
        this.$store.commit('setDifficulty', parseInt(value))
      }
    },
    addition: {
      get () {
        return this.$store.state.settings.operations.addition
      },
      set (value) {
        this.$store.commit('setAddition', value)
      }
    },
    subtraction: {
      get () {
        return this.$store.state.settings.operations.subtraction
      },
      set (value) {
        this.$store.commit('setSubtraction', value)
      }
    },
    multiplication: {
      get () {
        return this.$store.state.settings.operations.multiplication
      },
      set (value) {
        this.$store.commit('setMultiplication', value)
      }
    },
    division: {
      get () {
        return this.$store.state.settings.operations.division
      },
      set (value) {
        this.$store.commit('setDivision', value)
      }
    },
    exponentiation: {
      get () {
        return this.$store.state.settings.operations.exponentiation
      },
      set (value) {
        this.$store.commit('setExponentiation', value)
      }
    }
  }
}
</script>

<style>
.card {
  min-height: 40rem;
  border-radius: .25rem;
}

.card-body {
  display: flex;
  flex-flow: column nowrap;
}

.card-body > h1 {
  font-size: 2rem;
}

.settings > h2 {
  font-size: 1.5rem;
}

.duration-range,
.difficulty-range {
  width: 16rem;
}

.duration-difficulty-settings {
  display: flex;
  flex-flow: column nowrap;
}

.home-footer {
  display: flex;
  flex-flow: row-reverse wrap;
  align-items: flex-end;
  flex-grow: 1;
}

.play-button {
  min-width: 6rem;
  align-self: flex-end;
}
</style>
