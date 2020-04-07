<template>
  <div id="app">
      <router-view/>
      <particlesJS/>
  </div>
</template>

<script>
import particlesJS from './components/particlesJS'

export default {
  name: 'app',
  components: { particlesJS }
 
}
</script>
