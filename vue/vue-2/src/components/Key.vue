<template>
  <div class="key-wrapper" :style="gridStyle">
    <button
      :title="title"
      class="key"
      :style="'background-color: ' + color + '; '"
      @click="$emit('key-pressed', value)"
      >{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: 'Key',

  props: {
    value: String,
    label: String,
    title: String,
    color: String,
    gridStyle: String
  }
}
</script>

<style scoped>
.key-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5.5rem;
}

.key {
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  margin: 0.75rem;
  outline: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);
  font-size: 1.5rem;
  font-weight: bold;
}

.key:active {
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}
</style>
