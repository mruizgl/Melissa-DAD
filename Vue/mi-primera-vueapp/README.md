
# Vue.js Counter Application

This project showcases the implementation of a counter application using both the **Option API** and the **Composition API** in Vue.js. Each implementation demonstrates Vue.js's flexibility and capabilities.

---

## **Option API Implementation**

The **Option API** is the traditional way to define components in Vue.js. It organizes logic using pre-defined options such as `data`, `methods`, `computed`, etc.

### Features
- Increment the counter by 1.
- Decrement the counter by 1.
- Reset the counter to 0.
- Double the counter value.
- Set an initial value via an input field.
- Display a message ("¡El valor es alto!") when the counter exceeds 10.

### Code Structure

```vue
<template>
  <div class="counter-app">
    <h2>Contador: {{ counter }}</h2>
    <p v-if="counter > 10" class="message">¡El valor es alto!</p>
    <div class="buttons">
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
      <button @click="reset">Reiniciar</button>
      <button @click="duplicate">Duplicar</button>
    </div>
    <div class="input-container">
      <label for="initialValue">Valor inicial:</label>
      <input id="initialValue" type="number" v-model.number="initialValue" />
      <button @click="setInitialValue">Establecer Valor Inicial</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionCounter",
  data() {
    return {
      counter: 0,
      initialValue: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
    duplicate() {
      this.counter *= 2;
    },
    setInitialValue() {
      this.counter = this.initialValue;
    },
  },
};
</script>
```

---

## **Composition API Implementation**

The **Composition API** organizes logic using the `setup` function and leverages features like `ref` for reactivity. This approach is highly modular and encourages reusable logic.

### Features
- Increment the counter by 1.
- Decrement the counter by 1.
- Reset the counter to 0.
- Double the counter value.
- Set an initial value via an input field.
- Display a message ("¡El valor es alto!") when the counter exceeds 10.

### Code Structure

```vue
<template>
  <div class="counter-app">
    <h2>Contador: {{ counter }}</h2>
    <p v-if="counter > 10" class="message">¡El valor es alto!</p>
    <div class="buttons">
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
      <button @click="reset">Reiniciar</button>
      <button @click="duplicate">Duplicar</button>
    </div>
    <div class="input-container">
      <label for="initialValue">Valor inicial:</label>
      <input id="initialValue" type="number" v-model.number="initialValue" />
      <button @click="setInitialValue">Establecer Valor Inicial</button>
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
```

---

## **Comparison: Option API vs Composition API**

| Feature                     | Option API                     | Composition API                |
|-----------------------------|---------------------------------|---------------------------------|
| **Readability**             | More declarative and organized.| Requires familiarity with hooks. |
| **Modularity**              | Less modular, logic is tied to options.| Highly modular, logic can be reused easily. |
| **Learning Curve**          | Easier for beginners.          | Steeper, but more powerful.     |
| **Use Case**                | Ideal for simple components.   | Best for complex applications.  |

---

## **How to Run**

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm run serve
   ```
4. Open your browser and navigate to `http://localhost:8080`.

---

## **Conclusion**

- Use **Option API** for smaller projects or when migrating from Vue 2.
- Use **Composition API** for larger, more complex applications where modularity and reusable logic are required.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
