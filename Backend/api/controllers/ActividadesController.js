/**
 * ActividadesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  obtenerActividades: async (peticion, respuesta) => {
    try {
      let fecha = new Date();
      let dia = fecha.getDay();

      if (dia === 0) {
        dia = 7;
      }

      let resultado = await sails.sendNativeQuery(
        "select id_adu, nom_ad, nom_ds, est_adu from public.actividades_diarias_usuario \
      inner join public.actividades_diarias ON actividades_diarias.id_ad = actividades_diarias_usuario.id_adu_ad \
      inner join public.dias_semana ON dias_semana.id_ds = actividades_diarias_usuario.id_adu_ds \
      where id_ds = '" +
          dia +
          "'"
      );
      let actividades = resultado.rows;
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
      }).populate("actividades");
      let nombreMostar = nombre.actividades.nom_ad;
      await ActividadesUsuario.update({ id: idFinal }, { est_adu: true });
      respuesta
        .status(200)
        .json({ mensaje: "La tarea " + nombreMostar + " se ha completado" });
    } catch (error) {
      respuesta.status(500).json({ mensaje: error });
    }
  },
};
