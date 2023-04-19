/**
 * ActividadesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  obtenerActividades: async (peticion, respuesta) => {
    try {
      let idFinal = peticion.params.actId;
      const resultado = await ActividadesUsuario.find({
        where: {
          diaSemanaId: idFinal,
        },
      })
        .populate("actividadDiariaId")
        .populate("diaSemanaId");

      let actividades = resultado;
      respuesta.status(200).json({ datos: actividades });
    } catch (error) {
      respuesta.status(500).json({ mensaje: error });
    }
  },

  completarActividad: async (peticion, respuesta) => {
    try {
      let idFinal = peticion.params.actId;
      let nombre = await ActividadesUsuario.findOne({
        id: idFinal,
      }).populate("actividadDiariaId");
      let nombreMostar = nombre.actividadDiariaId.descripcion;
      await ActividadesUsuario.update({ id: idFinal }, { estado: true });
      respuesta
        .status(200)
        .json({ mensaje: "La tarea " + nombreMostar + " se ha completado" });
    } catch (error) {
      respuesta.status(500).json({ mensaje: error });
    }
  },

  resetearActividades: async (peticion, respuesta) => {
    try {
      let fecha = new Date();
      let dia = fecha.getDay();

      if (dia === 0) {
        dia = 7;
      }

      await ActividadesUsuario.update({ diaSemanaId: dia }, { estado: false });
      respuesta
        .status(200)
        .json({ mensaje: "Las tareas del día se han reseteado correctamente" });
    } catch (error) {
      respuesta.status(500).json({ mensaje: error });
    }
  },
};
