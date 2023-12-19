<template>
  <div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th rowspan="2">FECHA DE ENTREGA</th>
          <th rowspan="2">FECHA DE RECEPCION</th>
          <th rowspan="2">NUMERO DE ACTA DE ENTREGA</th>
          <th rowspan="2">FECHA DE REGISTRO ACTUAL</th>
          <th rowspan="2">MES DE REGISTRO</th>
          <th rowspan="2">PROCEDENCIA</th>
          <th rowspan="2">ENTREGA DE ARMA DE FUEGO EN CALIDAD DE</th>
          <th rowspan="2">TIPO DE ARMA</th>
          <th rowspan="2">MARCA DEL ARMA</th>
          <th rowspan="2">MODELO</th>
          <th rowspan="2">CALIBRE</th>
          <th rowspan="2">SERIE DEL ARMA</th>
          <th rowspan="2">INDUSTRIA</th>
          <th rowspan="2">NUMERO DE CARGADOR</th>
          <th rowspan="2">CAPACIDAD DE CARGADOR</th>
          <th rowspan="2">CAPACIDAD DEL TAMBOR</th>
          <th rowspan="2">ESTADO DEL ARMA DE FUEGO</th>
          <th rowspan="2">
            ESTADO DEL ARMA DE FUEGO QUE SE ENCUENTRA FISICAMENTE
          </th>
          <th rowspan="2">
            VERIFICACION Y EXISTENCIA DE ARMA DE FUEGO (FISICAMENTE Y
            DOCUMENTALMENTE)
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(item, index) in activos_fijos" :key="item.id">
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
              ><button
                @click="deleteActivoFijo(item.id)"
                class="btn btn-danger btn-sm"
              >
                Eliminar
              </button>
            </div>
          </td>
        </tr> -->
        <tr>
          <td></td>
          <td>
            <input
              v-model="arma.fechaEntrega"
              class="form-control"
              type="date"
            />
          </td>
          <td colspan="3">
            <input
              v-model="arma.fechaRecepcion "
              class="form-control"
              type="date"
            />
          </td>
          <td>
            <input
              v-model="arma.nroActaEntrega "
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.fecharegActual"
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
            <input
              v-model="arma.tipoAdquisicion"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.tipoArma"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.marcaArma"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.modelo"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.calibre"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.serialArma"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.industria"
              class="form-control"
              type="text"
            />
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
            <input
              v-model="arma.estado"
              class="form-control"
              type="text"
            />
          </td>
          <td>
            <input
              v-model="arma.estadoExistencia"
              class="form-control"
              type="date"
            />
          </td>
          <td>
      
          </td>
          <td>
            <button @click="guardarActivoFijo" class="btn btn-primary">
              Insertar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default{
  data(){  
    return{
      armas:[
      ],
      arma:{
        tipoArma:'',
        marcaArma:'',
        modelo:'',
        calibre:'',
        serialArma:'',
        industria:'',
        nroCargador:'',
        capacidadCargador:'',
        capacidadTambor:'',
        estado:'',
        descripcion:'',
        estadoExistencia:'',
        fechaEntrega:'',
        fechaRecepcion:'',
        nroActaEntrega:'',
        fecharegActual:'',
        mesRegistro:'',
        procedencia:'',
        tipoAdquisicion:'',
        detallePerdidaId:'',

      }

  }
}

}
</script>
