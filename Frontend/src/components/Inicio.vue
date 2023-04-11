<template>
  <div>
    <div class="background1">
      <p class="item1">Actividades Diarias</p>
      <p class="item2">{{ dia }}</p>
    </div>
    <div class="background2">
      <ListaTareas :actividades="listaActividades" :metodoActualizar="obtenerActividades" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ListaTareas from "@/components/ListaTareas.vue";

export default {
  components: {
    ListaTareas,
  },
  data() {
    return {
      api: "https://tareas-diarias.fly.dev/api/",
      dia: "",
      listaActividades: [],
    }
  },
  methods: {
    obtenerActividades() {
      axios.get(this.api + "obtener-actividades")
        .then(async (res) => {
          let result = await res.data;
          this.listaActividades = result.datos;
        })
        .catch((err) => {
          this.error = true;
          this.msgError = err;
        })
    },
    obtenerDia() {
      let fecha = new Date();
      let diaNum = fecha.getDay();

      switch (diaNum) {
        case 0:
          this.dia = "Domingo"
          break;
        case 1:
          this.dia = "Lunes"
          break;
        case 2:
          this.dia = "Martes"
          break;
        case 3:
          this.dia = "Miércoles"
          break;
        case 4:
          this.dia = "Jueves"
          break;
        case 5:
          this.dia = "Viernes"
          break;
        case 6:
          this.dia = "Sábado"
          break;
      }
    },
  },
  mounted() {
    this.obtenerActividades();
    this.obtenerDia();
  },
}
</script>

<style scoped>
.background1 {
  background-image: url('@/assets/images/bckg.jpg');
  height: 40vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.item1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 35px;
  color: #fff;
  align-self: center;
}

.item2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 35px;
  color: #fff;
  align-self: center;
  text-decoration: underline;
}

.background2 {
  background: #000;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

@media (max-width: 426px) {
  .background1 {
    grid-template-columns: auto;
  }

  .item1 {
    display: none;
  }
}
</style>