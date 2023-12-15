<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between">
              <p class="text-center">
                POLICIA BOLIVIANA <br />
                COMANDO DEPARTAMENTAL <br />
                BATALLLON DE SEGURIDAD FISICA PRIVADA
              </p>
              <p class="text-center">
                FORM AF 001 <br />
                DIV. NAL. ACTIVOS FIJOS
              </p>
            </div>
          </div>
          <div class="col-12">
            <h2 class="text-center">INVENTARIO DE ACTIVOS FIJOS</h2>
            <div class="row">
              <div class="col-3">
                <div class="me-3 d-flex">
                  <label for="unidadPrincipal" class="form-label"
                    >Unidad Principal</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="unidadPrincipal"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="me-3 d-flex">
                  <label for="unidad" class="form-label">Unidad:</label>
                  <input type="text" class="form-control" id="unidad" />
                </div>
              </div>
              <div class="col-3">
                <div class="me-3 d-flex">
                  <label for="dpto" class="form-label">Dpto:</label>
                  <input type="text" class="form-control" id="dpto" />
                </div>
              </div>
              <div class="col-3">
                <div class="me-3 d-flex">
                  <label for="lugar" class="form-label">Lugar:</label>
                  <input type="text" class="form-control" id="lugar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th rowspan="2">N°</th>
              <th rowspan="2">CODIGO</th>
              <th colspan="3">FECHA ALTA</th>
              <th rowspan="2">ESTADO</th>
              <th rowspan="2">DESCRIPCION DEL ACTIVO FIJO</th>
              <th rowspan="2">RESPONSABLE</th>
            </tr>
            <tr>
              <th>DIA</th>
              <th>MES</th>
              <th>AÑO</th>
            </tr>
            <tr v-for="(item, index) in activos_fijos" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.codigo }}</td>
              <td>{{ obtenerDia(item.fechaAlta) }}</td>
              <td>{{ obtenerMes(item.fechaAlta) }}</td>
              <td>{{ obtenerAnio(item.fechaAlta) }}</td>
              <td>{{ item.estado }}</td>
              <td>{{ item.descripcion }}</td>
              <td>{{ item.responsable }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      activos_fijos: [{
        codigo: "",
        fechaAlta: "",
        estado: "",
        descripcion: "",
        responsable: "",
        tipo:"",
        detalleActivoFijoId:1
      },],
    };
  },
  created() {
    this.getActivosFijos();
  },
  methods: {
    getActivosFijos() {
      this.axios
        .get("/activos-fijos/")
        .then((response) => {
          console.log(response.data);
          this.activos_fijos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fechaFormateada(fechaISO) {
      const fechaObj = new Date(fechaISO);
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return fechaObj.toLocaleDateString("es-ES", options);
    },
    obtenerDia(fecha) {
      return moment(fecha).format("DD"); // 'DD' para obtener el día en formato de dos dígitos
    },
    obtenerMes(fecha) {
      return moment(fecha).format("MM"); // 'DD' para obtener el día en formato de dos dígitos
    },
    obtenerAnio(fecha) {
      return moment(fecha).format("YYYY"); // 'DD' para obtener el día en formato de dos dígitos
    },
  },
};
</script>

<style></style>
