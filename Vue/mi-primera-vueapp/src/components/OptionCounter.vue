<template>
    <div class="counter-app">
      <h1>Contador: <span :class="{ high: counter > 10 }">{{ counter }}</span></h1>
      <p v-if="counter > 10" class="message">¡El valor es alto!</p>
      <div class="buttons">
        <button class="btn increment" @click="increment">Incrementar</button>
        <button class="btn decrement" @click="decrement">Decrementar</button>
        <button class="btn reset" @click="reset">Reiniciar</button>
        <button class="btn duplicate" @click="duplicate">Duplicar</button>
      </div>
      <div class="input-container">
        <label for="initialValue">Valor inicial:</label>
        <input id="initialValue" type="number" v-model.number="initialValue" />
        <button class="btn set-initial" @click="setInitialValue">Establecer Valor Inicial</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "CounterComposition",
    setup() {
      const counter = ref(0);
      const initialValue = ref(0);
  
      const increment = () => counter.value++;
      const decrement = () => counter.value--;
      const reset = () => (counter.value = 0);
      const duplicate = () => (counter.value *= 2);
      const setInitialValue = () => (counter.value = initialValue.value);
  
      return {
        counter,
        initialValue,
        increment,
        decrement,
        reset,
        duplicate,
        setInitialValue,
      };
    },
  };
  </script>
  
  <style scoped>
  .counter-app {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  h1 .high {
    color: #ff5722;
    font-weight: bold;
  }
  
  .message {
    color: #f44336;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .btn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .increment {
    background-color: #4caf50;
    color: white;
  }
  .increment:hover {
    background-color: #45a049;
  }
  
  .decrement {
    background-color: #f44336;
    color: white;
  }
  .decrement:hover {
    background-color: #e53935;
  }
  
  .reset {
    background-color: #9e9e9e;
    color: white;
  }
  .reset:hover {
    background-color: #757575;
  }
  
  .duplicate {
    background-color: #2196f3;
    color: white;
  }
  .duplicate:hover {
    background-color: #1e88e5;
  }
  
  .set-initial {
    background-color: #ff9800;
    color: white;
    margin-left: 10px;
  }
  .set-initial:hover {
    background-color: #fb8c00;
  }
  
  .input-container {
    margin-top: 20px;
  }
  
  label {
    font-size: 1rem;
    margin-right: 10px;
  }
  
  input {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
  </style>
  