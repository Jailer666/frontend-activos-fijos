<template>
  <div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th rowspan="2">FECHA DE ENTREGA</th>
          <th rowspan="2">FECHA DE RECEPCION</th>
          <th rowspan="2">NUMERO DE ACTA DE ENTREGA</th>
          <th rowspan="2">FECHA DE REGISTRO ACTUAL</th>
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
              ><button
                @click="deleteActivoFijo(item.id)"
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
      </tbody>
    </table>
  </div>
</template>

<script>
export default{
  data(){  
    return{
      armas:[]
  }
}

}
</script>
