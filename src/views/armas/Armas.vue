<template>
  <div class="table-responsive">
    <h2 class="card-title text-center">
      {{ arma.userId }}
      REGISTRO INVENTARIO ARMAS 
     </h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>FECHA DE ENTREGA</th>
          <th>FECHA DE RECEPCION</th>
          <th>NUMERO DE ACTA DE ENTREGA</th>
          <th>FECHA DE REGISTRO ACTUAL</th>
          <th>MES DE REGISTRO</th>
          <th>PROCEDENCIA</th>
          <th>TIPO DE ARMA</th>
          <th>MARCA DEL ARMA</th>
          <th>MODELO</th>
          <th>CALIBRE</th>
          <th>SERIE DEL ARMA</th>
          <th>INDUSTRIA</th>
          <th>NUMERO DE CARGADOR</th>
          <th>CAPACIDAD DE CARGADOR</th>
          <th>CAPACIDAD DEL TAMBOR</th>
          <th>ESTADO DEL ARMA DE FUEGO</th>
          <th>DESCRIPCION</th>
          <th>
            VERIFICACION Y EXISTENCIA DE ARMA DE FUEGO (FISICAMENTE Y
            DOCUMENTALMENTE)
          </th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in armas" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.fechaEntrega }}</td>
          <td>{{ item.fechaRecepcion }}</td>
          <td>{{ item.nroActaEntrega }}</td>
          <td>{{ item.fecharegActual }}</td>
          <td>{{ item.mesRegistro }}</td>
          <td>{{ item.procedencia }}</td>
          <td>{{ item.tipoArma }}</td>
          <td>{{ item.marcaArma }}</td>
          <td>{{ item.modelo }}</td>
          <td>{{ item.calibre }}</td>
          <td>{{ item.serialArma }}</td>
          <td>{{ item.industria }}</td>
          <td>{{ item.nroCargador }}</td>
          <td>{{ item.capacidadCargador }}</td>
          <td>{{ item.capacidadTambor }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.estadoExistencia }}</td>
          <td>
            <div class="btn-group">
              <!-- <button class="btn btn-warning btn-sm">Editar</button> -->
              <button @click="deleteArma(item.id)"
                class="btn btn-danger btn-sm"
              >
                Eliminar
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input
              v-model="arma.fechaEntrega"
              class="form-control"
              type="date"
            />
          </td>
          <td>
            <input
              v-model="arma.fechaRecepcion"
              class="form-control"
              type="date"
            />
          </td>
          <td>
            <input
              v-model="arma.nroActaEntrega"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.fechaRegActual"
              class="form-control"
              type="date"
            />
          </td>
          <td>
            <input
              v-model="arma.mesRegistro"
              class="form-control"
              type="date"
            />
          </td>
          <td>
            <input
              v-model="arma.procedencia"
              class="form-control"
              type="text"
            />
          </td>
       
          <td>
            <input v-model="arma.tipoArma" class="form-control" type="text" />
          </td>
          <td>
            <input v-model="arma.marcaArma" class="form-control" type="text" />
          </td>
          <td>
            <input v-model="arma.modelo" class="form-control" type="text" />
          </td>
          <td>
            <input v-model="arma.calibre" class="form-control" type="text" />
          </td>
          <td>
            <input v-model="arma.serialArma" class="form-control" type="text" />
          </td>
          <td>
            <input v-model="arma.industria" class="form-control" type="text" />
          </td>
          <td>
            <input
              v-model="arma.nroCargador"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.capacidadCargador"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.capacidadTambor"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input v-model="arma.estado" class="form-control" type="text" />
          </td>
          <td>
            <input v-model="arma.descripcion" class="form-control" type="text" />
          </td>
          <td>
            <input
              v-model="arma.estadoExistencia"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <button @click="saveArma" class="btn btn-primary">
              Insertar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      armas: [],
      arma: {
        tipoArma: "",
        marcaArma: "",
        modelo: "",
        calibre: "",
        serialArma: "",
        industria: "",
        nroCargador: "",
        capacidadCargador: "",
        capacidadTambor: "",
        estado: "",
        descripcion: "",
        estadoExistencia: "",
        fechaEntrega: "",
        fechaRecepcion: "",
        nroActaEntrega: "",
        fechaRegActual: "",
        mesRegistro: "",
        procedencia: "",
        userId: "",
      },
    };
  },
  computed: {
    ...mapState(["auth"]),
  },
  created(){
    this.getArmas();
  },
  methods: {
    getArmas() {
      this.axios
        .get("/armas")
        .then((response) => {
          this.armas = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveArma() {
      this.arma.userId = this.auth.user.id;
      console.log(this.arma);
      this.axios
        .post("/armas", this.arma)
        .then((response) => {
          console.log(response.data);
          this.armas.push(response.data);
          this.arma = {
            tipoArma: "",
            marcaArma: "",
            modelo: "",
            calibre: "",
            serialArma: "",
            industria: "",
            nroCargador: "",
            capacidadCargador: "",
            capacidadTambor: "",
            estado: "",
            descripcion: "",
            estadoExistencia: "",
            fechaEntrega: "",
            fechaRecepcion: "",
            nroActaEntrega: "",
            fecharegActual: "",
            mesRegistro: "",
            procedencia: "",
            tipoAdquisicion: "",
            userId: "",
          };
          this.errors = [];
        })
        .catch((error) => {
          console.log(error);
          this.errors = error.response.data.message;
        });
    },
    deleteArma(id) {
      this.axios
        .delete("/armas/" + id)
        .then(() => {
          this.armas = this.armas.filter(
            (arma) => arma.id != id
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
