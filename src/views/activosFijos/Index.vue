<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h2 class="card-title text-center">INVENTARIO DE ACTIVOS FIJOS</h2>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th rowspan="2">N°</th>
                <th rowspan="2">CODIGO</th>
                <th colspan="3">FECHA ALTA</th>
                <th rowspan="2">ESTADO</th>
                <th rowspan="2">DESCRIPCION DEL ACTIVO FIJO</th>
                <th rowspan="2">RESPONSABLE</th>
                <th rowspan="2">TIPO</th>
                <th rowspan="2">Opciones</th>
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
                <td>{{ item.tipo }}</td>
                <td>
                  <div class="btn-group">
                    <button class="btn btn-warning btn-sm">Editar</button
                    ><button @click="deleteActivoFijo(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    v-model="activo_fijo.codigo"
                    class="form-control"
                    type="text"
                  />
                </td>
                <td colspan="3">
                  <input
                    v-model="activo_fijo.fechaAlta"
                    class="form-control"
                    type="date"
                  />
                </td>
                <td>
                  <select
                    v-model="activo_fijo.estado"
                    class="form-select"
                    id="estado"
                    name="estado"
                    required
                  >
                    <option value="" selected disabled>seleccionar</option>
                    <option value="Bueno">Bueno</option>
                    <option value="Malo">Malo</option>
                    <option value="Regular">Regular</option>
                  </select>
                </td>
                <td>
                  <input
                    v-model="activo_fijo.descripcion"
                    class="form-control"
                    type="text"
                  />
                </td>
                <td>
                  <input
                    v-model="activo_fijo.responsable"
                    class="form-control"
                    type="text"
                  />
                </td>
                <td>
                  <select
                    v-model="activo_fijo.tipo"
                    class="form-select"
                    id="tipo"
                    name="tipo"
                    required
                  >
                    <option value="" selected disabled>seleccionar</option>
                    <option value="Equipo de oficina y muebles">
                      Equipo de oficina y muebles
                    </option>
                    <option value="Equipo de Computación">
                      Equipo de Computación
                    </option>
                    <option value="Equipo de comunicación">
                      Equipo de comunicación
                    </option>
                    <option value="Otro tipo">Otro tipo</option>
                  </select>
                </td>
                <td>
                  <button @click="guardarActivoFijo" class="btn btn-primary">
                    Insertar
                  </button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      activos_fijos: [],
      activo_fijo: {
        codigo: "",
        fechaAlta: "",
        estado: "",
        descripcion: "",
        responsable: "",
        tipo: "",
        detalleActivoFijoId: 1,
      },
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
    guardarActivoFijo() {
      console.log(this.activos_fijos);
      this.axios
        .post("/activos-fijos", this.activo_fijo)
        .then((response) => {
          console.log(response.data);
          this.getActivosFijos();
          this.activo_fijo = {
            codigo: "",
            fechaAlta: "",
            estado: "",
            descripcion: "",
            responsable: "",
            tipo: "",
          };
          this.errors = [];
        })
        .catch((error) => {
          console.log(error);
          this.errors = error.response.data.message;
        });
    },
    deleteActivoFijo(id) {
      this.axios
        .delete("/activos-fijos/" + id)
        .then(() => {
          this.activos_fijos = this.getActivosFijos.filter(
            (activo_fijo) => activo_fijo.id != id
          );
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
