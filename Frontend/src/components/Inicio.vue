<template>
  <div>
    <div class="background1">
      <p class="item1">Actividades Diarias</p>
      <p class="item2">{{ state.dia }}</p>
    </div>
    <div class="background2">
      <ListaTareas />
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import ListaTareas from "@/components/ListaTareas.vue";

export default {
  components: {
    ListaTareas,
  },
  setup() {
    const state = reactive({
      api: "https://apitareasdiarias.fly.dev/api/",
      dia: "",
    });

    const obtenerDia = () => {
      const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
      const fecha = new Date();
      const diaNum = fecha.getDay();
      state.dia = dias[diaNum];
    };

    onMounted(async () => {
      obtenerDia();
    });

    return {
      state,
    };
  },
};
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