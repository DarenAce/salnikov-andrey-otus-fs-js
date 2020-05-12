<template>
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
      <label for="duration">Длительность: {{ duration }} {{ minutes }}</label>

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
        <input
          type="checkbox"
          class="custom-control-input"
          id="addition"
          v-model="addition"
        />
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
        <input
          type="checkbox"
          class="custom-control-input"
          id="division"
          v-model="division"
        />
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
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { ADD, SUB, MUL, DIV, EXP } from '../utils/constants'

export default {
  name: 'Settings',

  computed: {
    ...mapGetters({
      settings: 'getSettings'
    }),

    minutes () {
      const number = this.duration
      const base = 'минут'
      switch (number % 100) {
        case 11:
        case 12:
        case 13:
        case 14:
          return base
        default:
          switch (number) {
            case 1:
              return base + 'а'
            case 2:
            case 3:
            case 4:
              return base + 'ы'
            default:
              return base
          }
      }
    },

    duration: {
      get () {
        return this.settings.duration / 60
      },
      set (value) {
        this.setDuration(parseInt(value * 60))
      }
    },

    difficulty: {
      get () {
        return this.settings.difficulty
      },
      set (value) {
        this.setDifficulty(parseInt(value))
      }
    },

    addition: {
      get () {
        return this.settings.operations.includes(ADD)
      },
      set (enable) {
        this.toggleOperation(enable, ADD)
      }
    },

    subtraction: {
      get () {
        return this.settings.operations.includes(SUB)
      },
      set (enable) {
        this.toggleOperation(enable, SUB)
      }
    },

    multiplication: {
      get () {
        return this.settings.operations.includes(MUL)
      },
      set (enable) {
        this.toggleOperation(enable, MUL)
      }
    },

    division: {
      get () {
        return this.settings.operations.includes(DIV)
      },
      set (enable) {
        this.toggleOperation(enable, DIV)
      }
    },

    exponentiation: {
      get () {
        return this.settings.operations.includes(EXP)
      },
      set (enable) {
        this.toggleOperation(enable, EXP)
      }
    }
  },

  methods: {
    ...mapMutations([
      'setDuration',
      'setDifficulty',
      'addOperation',
      'removeOperation'
    ]),

    toggleOperation (enable, operation) {
      if (enable) {
        this.addOperation(operation)
      } else {
        this.removeOperation(operation)
      }
    }
  }
}
</script>

<style scoped>
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
</style>
