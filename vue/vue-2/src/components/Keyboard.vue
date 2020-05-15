<template>
  <div class="keyboard">
    <key
      v-for="({ value, label, title, color, gridStyle }, index) in keys"
      :key="index"
      :value="value"
      :label="label"
      :title="title"
      :color="color"
      :gridStyle="gridStyle"
      @key-pressed="onKeyPressed"
    />
  </div>
</template>

<script>
import Key from './Key'

export default {
  name: 'Keyboard',

  components: {
    Key
  },

  data () {
    return {
      keys: [
        {
          value: '1',
          label: '1',
          color: 'darkorange'
        },
        {
          value: '2',
          label: '2',
          color: 'darkorange'
        },
        {
          value: '3',
          label: '3',
          color: 'darkorange'
        },
        {
          value: 'erase',
          label: '\u2190',
          title: 'Стереть',
          color: 'rgba(0, 0, 0, 0.4)'
        },
        {
          value: '4',
          label: '4',
          color: 'darkorange'
        },
        {
          value: '5',
          label: '5',
          color: 'darkorange'
        },
        {
          value: '6',
          label: '6',
          color: 'darkorange'
        },
        {
          value: 'clear',
          label: 'C',
          title: 'Очистить',
          color: 'rgba(0, 0, 0, 0.4)'
        },
        {
          value: '7',
          label: '7',
          color: 'darkorange'
        },
        {
          value: '8',
          label: '8',
          color: 'darkorange'
        },
        {
          value: '9',
          label: '9',
          color: 'darkorange'
        },
        {
          value: 'next',
          label: '?',
          title: 'Пропустить',
          color: 'rgba(0, 0, 0, 0.4)'
        },
        {
          value: '0',
          label: '0',
          color: 'darkorange',
          gridStyle: 'grid-column: 1 / 4;'
        },
        {
          value: 'check',
          label: '=',
          title: 'Ответить',
          color: 'rgba(0, 0, 0, 0.4)'
        }
      ]
    }
  },

  methods: {
    onKeyPressed (value) {
      this.$emit('key-pressed', value)
    }
  }
}
</script>

<style scoped>
.keyboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}
</style>
