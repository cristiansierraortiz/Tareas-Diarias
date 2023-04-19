<template>
  <div>
    <div class="container-lista">
      <div v-if="state.error">
        <div class="card">
          <div class="card-body">
            <div class="alert alert-danger" role="alert">
              <div class="contenedor-error">
                <i class="fa fa-circle-xmark"></i>
                <h6><strong>Upps! ha ocurrido un error</strong></h6>
              </div>
              <p>{{ state.msgError }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="card" v-for="(actividad, index) in state.listaActividades"
          v-show="(state.pag - 1) * state.num_results <= index && state.pag * state.num_results > index" :key="index">
          <div class="card-body lista">
            <div class="icon-width">
              <button @click="() => completarActividad(actividad.id)" class="boton-estado"><i
                  :class="actividad.estado ? 'fa fa-circle-check completada' : 'fa fa-circle-info incompleta'"></i></button>
            </div>
            <div class="task-width">
              <h6 :class="actividad.estado ? 'estilo-texto' : ''">{{ actividad.actividadDiariaId.descripcion }}</h6>
            </div>
          </div>
        </div>
      </div>
      <nav class="paginacion">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link boton-paginacion" v-show="state.pag != 1" @click.prevent="state.pag -= 1">
              <span class="boton-paginacion">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link">{{ state.pag }}</a></li>
          <li class="page-item">
            <a class="page-link boton-paginacion"
              v-show="state.pag * state.num_results / state.listaActividades.length < 1" @click.prevent="state.pag += 1">
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button class="btn btn-outline-primary" @click="() => resetearEstadoActividades()">Resetear</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import iziToast from "izitoast";
import { onMounted, ref, onUpdated } from "vue";

export default {
  setup() {
    const state = ref({
      api: "https://apitareasdiarias.fly.dev/api/",
      nomDia: "",
      numDia: 0,
      listaActividades: [],
      num_results: 5,
      pag: 1,
      msgError: "",
      error: false,
    });

    const obtenerActividades = async () => {
      try {
        const diaNum = obtenerNumeroDia();
        if (diaNum === 0) {
          diaNum = 7
        }
        console.log(diaNum)
        const response = await axios.get(state.value.api + 'obtener-actividades/' + diaNum);
        state.value.listaActividades = response.data.datos;
      } catch (error) {
        state.value.error = true;
        state.value.msgError = error.message;
      }
    };

    const obtenerNumeroDia = () => {
      const fecha = new Date();
      const diaNum = fecha.getDay();
      return diaNum;
    }

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
      const diaNum = obtenerNumeroDia();
      state.value.nomDia = dias[diaNum];
    };

    const completarActividad = async (id) => {
      try {
        const res = await axios.get(state.value.api + "completar-actividad/" + id);
        const result = res.data;
        if (res.status === 200) {
          iziToast.show({
            title: "SUCCESS",
            titleColor: "#1dc74c",
            color: "#fff",
            class: "text-success",
            position: "topRight",
            message: result.mensaje,
          });
          await obtenerActividades();
        }
      } catch (err) {
        console.error(err);
      }
    };

    const resetearEstadoActividades = async () => {
      try {
        const res = await axios.put(
          `${state.value.api}resetear-actividades`
        );
        const result = res.data;
        if (res.status === 200) {
          iziToast.show({
            title: "SUCCESS",
            titleColor: "#1dc74c",
            color: "#fff",
            class: "text-success",
            position: "topRight",
            message: result.mensaje,
          });
          await obtenerActividades();
        }
      } catch (err) {
        console.error(err);
      }
    };

    onMounted(async () => {
      await obtenerActividades();
      obtenerDia();
    });

    onUpdated(async () => {
      await obtenerActividades();
    }, [state.value.listaActividades])

    return {
      state,
      completarActividad,
      resetearEstadoActividades,
    };
  },
};
</script>

<style>
.container-lista {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: -20%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.card {
  width: 35em;
}

.lista {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lista h6 {
  margin: 0px;
  padding: 0px;
  text-align: start;
}

.boton-estado {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
}

.completada {
  color: #09F617;
  font-size: 23px;
}

.incompleta {
  color: #1E7DF5;
  font-size: 23px;
}

.icon-width {
  width: 20%;
}

.task-width {
  width: 80%;
}

.paginacion {
  display: flex;
  align-items: center;
  justify-content: center;
}

.boton-paginacion {
  cursor: pointer;
}

.contenedor-error {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
}

.contenedor-error i {
  font-size: 40px;
}

.contenedor-error h6 {
  margin: 0px;
  margin-left: 20px;
}

.alert {
  margin: 0px;
}

.estilo-texto {
  text-decoration: line-through;
  color: #c7c7c7;
}

@media (max-width: 426px) {
  .card {
    width: 20em;
  }
}
</style>
