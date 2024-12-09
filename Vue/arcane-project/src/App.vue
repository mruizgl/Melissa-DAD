<template>
  <div class="container py-5">
    <header class="text-center mb-4">
      <h1 class="display-5 fw-bold">Gestión de Personajes de Arcane</h1>
      <p class="text-muted">Selecciona y gestiona personajes del universo de Arcane</p>
    </header>

    <section class="card shadow p-4 mb-5">
      <h2 class="h4 text-secondary mb-4">Añadir Nuevo Personaje</h2>
      <form @submit.prevent="addCharacter">
        <div class="row g-3">
          <div class="col-md-6">
            <label for="name" class="form-label">Personaje</label>
            <select v-model="newCharacter.name" id="name" class="form-select" required>
              <option disabled value="">Selecciona un personaje</option>
              <option v-for="character in charactersList" :key="character" :value="character">
                {{ character }}
              </option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="origin" class="form-label">Origen</label>
            <select v-model="newCharacter.origin" id="origin" class="form-select" required>
              <option disabled value="">Selecciona un origen</option>
              <option v-for="origin in originsList" :key="origin" :value="origin">
                {{ origin }}
              </option>
            </select>
          </div>
        </div>
        <div class="row g-3 mt-3">
          <div class="col-md-6">
            <label for="specialAbility" class="form-label">Habilidad Especial</label>
            <select v-model="newCharacter.specialAbility" id="specialAbility" class="form-select" required>
              <option disabled value="">Selecciona una habilidad</option>
              <option v-for="ability in abilitiesList" :key="ability" :value="ability">
                {{ ability }}
              </option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="allies" class="form-label">Aliados</label>
            <select v-model="newCharacter.allies" id="allies" class="form-select">
              <option disabled value="">Selecciona un aliado</option>
              <option v-for="ally in alliesList" :key="ally" :value="ally">
                {{ ally }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-check mt-4">
          <input 
            type="checkbox" 
            v-model="newCharacter.completedMission" 
            id="completedMission" 
            class="form-check-input"
          >
          <label for="completedMission" class="form-check-label">¿Cumplió su misión principal?</label>
        </div>
        <button type="submit" class="btn btn-primary mt-4 w-100">Añadir Personaje</button>
      </form>
    </section>

    <section>
      <h2 class="h4 text-secondary mb-3 text-center">Personajes Registrados</h2>
      <div class="table-responsive shadow rounded">
        <table class="table table-hover">
          <thead class="table-primary">
            <tr>
              <th>Nombre</th>
              <th>Origen</th>
              <th>Habilidad Especial</th>
              <th>Aliados</th>
              <th>Misión Cumplida</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(character, index) in characters" :key="index">
              <td>{{ character.name }}</td>
              <td>{{ character.origin }}</td>
              <td>{{ character.specialAbility }}</td>
              <td>{{ character.allies }}</td>
              <td>
                <span v-if="character.completedMission" class="badge bg-success">Sí</span>
                <span v-else class="badge bg-danger">No</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  setup() {
    const charactersList = [
      "Jinx",
      "Vi",
      "Caitlyn",
      "Ekko",
      "Jayce",
      "Viktor",
      "Silco",
    ];
    const originsList = ["Piltover", "Zaun"];
    const abilitiesList = [
      "Manipulación de explosivos",
      "Combate cuerpo a cuerpo",
      "Precisión con armas",
      "Ingeniería avanzada",
    ];
    const alliesList = ["Ekko", "Caitlyn", "Jayce", "Viktor"];

    const newCharacter = ref({
      name: "",
      origin: "",
      specialAbility: "",
      allies: "",
      completedMission: false,
    });

    const characters = ref([]);

    const addCharacter = () => {
      if (!newCharacter.value.name || !newCharacter.value.origin || !newCharacter.value.specialAbility) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }

      characters.value.push({ ...newCharacter.value });
      newCharacter.value = {
        name: "",
        origin: "",
        specialAbility: "",
        allies: "",
        completedMission: false,
      };
    };

    return {
      charactersList,
      originsList,
      abilitiesList,
      alliesList,
      newCharacter,
      characters,
      addCharacter,
    };
  },
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
header h1 {
  font-size: 2.5rem;
}
.card {
  border: none;
  border-radius: 12px;
}
.table-hover tbody tr:hover {
  background-color: rgba(0, 123, 255, 0.1);
}
</style>
