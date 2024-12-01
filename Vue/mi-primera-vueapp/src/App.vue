<template>
  <div class="app-container">
    <h1>Option API:</h1>
    <div class="counter-option">
      <OptionCounter />
    </div>
  </div>
  <div class="app-container">
    <h1 class="composition">Composition API:</h1>
    <div class="counter-composition">
      <CompositionCounter />
    </div>
  </div>
</template>

<script setup>
import OptionCounter from './components/OptionCounter.vue';
import CompositionCounter from './components/CompositionCounter.vue';
</script>

<style scoped>
.app-container {
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  color: #4caf50;
  margin-bottom: 20px;
}

.composition {
  font-size: 2rem;
  color: blu;
  margin-bottom: 20px;
}

.counter-option {
  display: flex;
  max-width: 600px; 
  padding: 20px;
  border: 2px solid #4caf50;
  background-color: beige;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.counter-composition {
  display: flex;
  max-width: 600px; 
  padding: 20px;
  border: 2px solid blue;
  background-color: beige;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
