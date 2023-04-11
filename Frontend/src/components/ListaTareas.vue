<template>
  <div>
    <div class="container-lista">
      <div v-if="error">
        <div class="card">
          <div class="card-body">
            <div class="alert alert-danger" role="alert">
              <div class="contenedor-error">
                <i class="fa fa-circle-xmark"></i>
                <h6><strong>Upps! ha ocurrido un error</strong></h6>
              </div>
              <p>{{ msgError }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="card" v-for="(actividad, index) in actividades"
          v-show="(pag - 1) * num_results <= index && pag * num_results > index" :key="index">
          <div class="card-body lista">
            <div class="icon-width">
              <button @click="() => actualizarEstadoActividad(actividad.id_adu)" class="boton-estado"><i
                  :class="actividad.est_adu ? 'fa fa-circle-check completada' : 'fa fa-circle-info incompleta'"></i></button>
            </div>
            <div class="task-width">
              <h6 :class="actividad.est_adu ? 'estilo-texto' : ''">{{ actividad.nom_ad }}</h6>
            </div>
          </div>
        </div>
      </div>
      <nav class="paginacion">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link boton-paginacion" v-show="pag != 1" @click.prevent="pag -= 1">
              <span class="boton-paginacion">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link">{{ pag }}</a></li>
          <li class="page-item">
            <a class="page-link boton-paginacion" v-show="pag * num_results / actividades.length < 1"
              @click.prevent="pag += 1">
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import iziToast from "izitoast";

export default {
  name: 'ListaTareas',
  props: {
    actividades: Array,
    metodoActualizar: Function,
  },
  data() {
    return {
      api: "https://tareas-diarias.fly.dev/api/",
      num_results: 5,
      pag: 1,
      msgError: "",
      error: false,
    }
  },
  methods: {
    actualizarEstadoActividad(id) {
      axios.get(this.api + "completar-actividad/" + id)
        .then(async (res) => {
          let result = res.data
          if (res.status === 200) {
            iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1dc74c',
              color: '#fff',
              class: 'text-success',
              position: 'topRight',
              message: result.mensaje,
            })
            this.metodoActualizar();
          }
        })
    },
  },
}
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
