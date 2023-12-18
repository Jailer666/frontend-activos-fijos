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
              <div>
                <div class="btn-group">
                  <button @click="botonGuardar" class="btn btn-success">Guardar</button>
                  <button class="btn btn-warning">Imprimir</button>
                </div>
              </div>
              <p class="text-center">
                <input
                  v-model="detalleForm.codFormulario"
                  class="form-control text-center"
                  type="text"
                  disabled
                />
                <br />
                DIV. NAL. ACTIVOS FIJOS
              </p>
            </div>
          </div>
          <div class="col-12">
            <div class="container mb-2">
              <input
                v-model="detalleForm.tipo"
                class="form-control text-center fw-bold"
                type="text"
                disabled
              />
            </div>
            <div class="row">
              <div class="col-3">
                <div class="me-3 d-flex">
                  <label for="unidadPrincipal" class="form-label"
                    >Unidad Principal</label
                  >
                  <input
                    v-model="formulario.unidadPrincipal"
                    type="text"
                    class="form-control"
                    id="unidadPrincipal"
                    requerid
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="me-3 d-flex">
                  <label for="unidad" class="form-label">Unidad:</label>
                  <input
                    v-model="formulario.unidad"
                    type="text"
                    class="form-control"
                    id="unidad"
                    requerid
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="me-3 d-flex">
                  <label for="dpto" class="form-label">Dpto:</label>
                  <input
                    v-model="formulario.departamento"
                    type="text"
                    class="form-control"
                    id="dpto"
                    requerid
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="me-3 d-flex">
                  <label for="lugar" class="form-label">Lugar:</label>
                  <input
                    v-model="formulario.lugar"
                    type="text"
                    class="form-control"
                    id="lugar"
                    requerid

                  />
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
      <div class="card-footer">
        <div>
          <input class="form-control" v-model="formulario.fecha" type="date" >
        </div>
        <!-- aquiii -->
        <div class="card p-2" style="width:100%; height: 18rem">
    <div class="row" style="height: 16rem;">
    <p class="col-4">Oruro,</p>
    <p class="col-4 text-center mt-auto">
      Cbo. Abel Isidro Avilez Vallejos <br />
      ENCARGADO DE ACTIVOS FIJOS <br />
      BATALLON DE SEGURIDAD FISICA PRIVADA ORURO
    </p>
    <p class="col-4 text-center mt-auto">
      Cnl. DESP: Fernando Juan Villarroel Ramallo				
 <br />
      COMANDANTE				
 <br />
      BATALLON DE SEGURIDAD FISICA PRIVADA ORURO
    </p>
  </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  data() {
    return {
      formulario: {
        unidadPrincipal: "",
        unidad: "",
        departamento: "",
        lugar: "",
        fecha:'',
        detalleActivoFijoId: 1,
      },
      detalleForm: {
        tipo: "INVENTARIO DE ACTIVOS FIJOS MUEBLES",
        codFormulario: "FORM AF 001",
      },
      activos_fijos: [
        {
          codigo: "",
          fechaAlta: "",
          estado: "",
          descripcion: "",
          responsable: "",
          tipo: "",
          detalleActivoFijoId: 1,
        },
      ],
    };
  },
  created() {
    this.getActivosFijos();
  },
  computed: {
    ...mapState(["auth"]),
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
    saveFormulario() {
      this.formulario.userId = this.auth.user.id;
      console.log(this.formulario);
      this.axios
        .post("/formularios", this.formulario)
        .then((response) => {
          console.log(response.data);
          // this.institutions.push(response.data);
          this.errors = [];
        })
        .catch((error) => {
          console.log(error);
          this.errors = error.response.data.message;
        });
    },
    saveDetalleForm(){
      this.detalleForm.formularioId = this.formulario.id;
      console.log(this.detalleForm);
      this.axios
        .post("/detalle-formulario", this.detalleForm)
        .then((response) => {
          console.log(response.data);
          // this.institutions.push(response.data);

          this.errors = [];
        })
        .catch((error) => {
          console.log(error);
          this.errors = error.response.data.message;
        });
    },
    botonGuardar(){
      this.saveFormulario();
      this.saveDetalleForm();
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
