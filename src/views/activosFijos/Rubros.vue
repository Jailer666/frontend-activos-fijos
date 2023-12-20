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
            <h3 class="text-center">
              INVENTARIO DE ACTIVOS FIJOS MUEBLES POR PARTIDAS PRESUPUESTARIAS
              Y/O POR RUBROS
            </h3>
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
              <th colspan="6">EQUIPO DE OFICINA MUEBLES</th>
            </tr>
            <tr>
              <th rowspan="2">N°</th>
              <th rowspan="2">CODIGO</th>
              <th colspan="3">FECHA ALTA</th>
              <th rowspan="2">ESTADO</th>
              <th rowspan="2">DESCRIPCION DEL ACTIVO FIJO</th>
              <th rowspan="2">OFICINA ACTUAL</th>
            </tr>
            <tr>
              <th>DIA</th>
              <th>MES</th>
              <th>AÑO</th>
            </tr>
            <tr>
              <td></td>
              <td><input type="text" /></td>
              <td colspan="3"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
          </thead>
        </table>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th colspan="6">EQUIPO DE COMPUTACION</th>
            </tr>
            <tr>
              <th rowspan="2">N°</th>
              <th rowspan="2">CODIGO</th>
              <th colspan="3">FECHA ALTA</th>
              <th rowspan="2">ESTADO</th>
              <th rowspan="2">DESCRIPCION DEL ACTIVO FIJO</th>
              <th rowspan="2">OFICINA ACTUAL</th>
            </tr>
            <tr>
              <th>DIA</th>
              <th>MES</th>
              <th>AÑO</th>
            </tr>
            <tr>
              <td></td>
              <td><input type="text" /></td>
              <td colspan="3"><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
          </thead>
        </table>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th colspan="6">EQUIPO DE COMUNICACION</th>
            </tr>
            <tr>
              <th rowspan="2">N°</th>
              <th rowspan="2">CODIGO</th>
              <th colspan="3">FECHA ALTA</th>
              <th rowspan="2">ESTADO</th>
              <th rowspan="2">DESCRIPCION DEL ACTIVO FIJO</th>
              <th rowspan="2">OFICINA ACTUAL</th>
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
  <div class="card p-2" style="width: 100%; height: 18rem">
    <div class="row" style="height: 16rem">
      <p class="col-4">Oruro,00 mmmm de 2023</p>
      <p class="col-4 text-center mt-auto">
        Cbo. Abel Isidro Avilez Vallejos <br />
        ENCARGADO DE ACTIVOS FIJOS <br />
        BATALLON DE SEGURIDAD FISICA PRIVADA ORURO
      </p>
      <p class="col-4 text-center mt-auto">
        Cbo. Abel Isidro Avilez Vallejos <br />
        ENCARGADO DE ACTIVOS FIJOS <br />
        BATALLON DE SEGURIDAD FISICA PRIVADA ORURO
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      activos_fijos: [],
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
