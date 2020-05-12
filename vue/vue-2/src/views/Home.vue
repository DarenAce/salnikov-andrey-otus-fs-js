<template>
  <div class="card">
    <div class="card-body">
      <statistics />
      <settings />
      <footer class="home-footer">
        <router-link to="/game" class="btn btn-outline-primary play-button">Играть!</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
import Settings from '../components/Settings'
import Statistics from '../components/Statistics'

export default {
  name: 'Home',

  components: {
    Settings,
    Statistics
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
