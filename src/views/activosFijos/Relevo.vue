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
            <h2 class="text-center">RELEVO DE ACTIVOS FIJOS MUEBLES</h2>
            <div class="row">
              <div class="col-4">
                <div class="card border-light p-2 d-flex">
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

              <div class="col-4">
                <div class="card border-light p-2 d-flex">
                  <label for="unidad" class="form-label">Unidad:</label>
                  <input type="text" class="form-control" id="unidad" />
                </div>
              </div>
              <div class="col-4">
                <div class="card border-light p-2 d-flex">
                  <label for="dpto" class="form-label">Dpto:</label>
                  <input type="text" class="form-control" id="dpto" />
                </div>
              </div>
              <div class="col-4">
                <div class="card border-light p-2 d-flex">
                  <div class="car-header">
                    <h5 class="card-text">Saliente</h5>
                  </div>
                  <div>
                    <label for="Responsable" class="form-label"
                      >Responsable:</label
                    >
                    <input type="text" class="form-control" id="Responsable" />
                  </div>
                  <div>
                    <label for="Cargo" class="form-label">Cargo:</label>
                    <input type="text" class="form-control" id="Cargo" />
                  </div>
                  <div>
                    <label for="Oficina" class="form-label">Oficina:</label>
                    <input type="text" class="form-control" id="Oficina" />
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card border-light p-2 d-flex">
                  <div class="car-header">
                    <h5 class="card-text">Entrante</h5>
                  </div>
                  <label for="Responsable" class="form-label"
                    >Responsable:</label
                  >
                  <input type="text" class="form-control" id="Responsable" />
                </div>
                <div>
                  <label for="Cargo" class="form-label">Cargo:</label>
                  <input type="text" class="form-control" id="Cargo" />
                </div>
                <div>
                  <label for="Oficina" class="form-label">Oficina:</label>
                  <input type="text" class="form-control" id="Oficina" />
                </div>
              </div>
              <div class="col-4">
                <div class="card border-light p-2 d-flex">
                  <br>
                  <label for="Fecha" class="form-label">Fecha:</label>
                  <input type="text" class="form-control" id="Fecha" />
                  <br>  <br> <br>
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
      <div class="card-footer text-bg-light">
        <div class="d-flex">
          <div class="card" style="width: 18rem; height: 16rem">
            <textarea class="form-control" name="" id="" cols="30" rows="10">
              Observaciones:
            </textarea>
          </div>
          <div class="card" style="width: 18rem; height: 16rem">
            <p class="text-center mt-auto">
              Cbo. Abel Isidro Avilez Vallejos <br />
              ENCARGADO DE ACTIVOS FIJOS <br />
              BATALLON DE SEGURIDAD FISICA PRIVADA ORURO
            </p>
          </div>
          <div class="card" style="width: 18rem; height: 16rem">
            <p class="text-center mt-auto">
              NN <br />
              RESPONSABLE <br />
              ENTREGUE CONFORME
            </p>
          </div>
          <div class="card" style="width: 18rem; height: 16rem">
            <p class="text-center mt-auto">
              NN <br />
              RESPONSABLE <br />
              RECIBI CONFORME
            </p>
          </div>
          <div class="card" style="width: 18rem; height: 16rem">
            <p>Vo.Bo.</p>
            <p class="text-center mt-auto">
              Cnl. DESP: Fernando Juan Villarroel Ramallo <br />
              COMANDANTE <br />
              BATALLON DE SEGURIDAD FISICA PRIVADA ORURO
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
