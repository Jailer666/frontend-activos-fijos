<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-bg-dark">
        <h3>Elegir el tipo Formulario que desea agregar</h3>
      </div>
      <div class="card-body">
        <select v-model="opcion" class="form-select" id="estado" name="estado" required>
          <option value="" selected disabled>seleccionar</option>
          <option value="1">INVENTARIO DE ACTIVOS FIJOS MUEBLES</option>
          <option value="2">RELEVO DE ACTIVOS FIJOS MUEBLES</option>
          <option value="3">
            INVENTARIO DE ACTIVOS FIJOS MUEBLES POR PARTIDAS PRESUPUESTARIAS Y/O
            POR RUBROS
          </option>
          <option value="4">TRANSFERENCIA DE ACTIVOS FIJOS MUEBLES</option>
        </select>
        {{ opcion }}
      </div>
      <div class="container text-center">
        <button @click="elegirOpcion" class="btn btn-success">Elegir</button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    data(){
        return{
            opcion:''
        }
    },
    methods:{
        elegirOpcion(){
            if(this.opcion==1){
                this.$router.push({name:'inventario'});
            }else if(this.opcion==2){
                this.$router.push({name:'relevo'});
            }else if(this.opcion==3){
                this.$router.push({name:'rubros'});
            }else if(this.opcion==4){
                this.$router.push({name:'transferencias'});

            }
        }
    }
}

</script>
