<template>
  <div class="billetera">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <hr />
          <h5>Recargar Billetera</h5>
          <hr />
          <form
            class="text-center"
            style="margin:auto"
            @submit="registrarCliente"
          >
            <div class="form-group col-lg-12">
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  id="documento"
                  placeholder="Documento"
                  required
                />
              </div>
              <div class="form-group col-lg-12">
                <input
                  type="number"
                  class="form-control "
                  id="celular"
                  aria-describedby="emailHelp"
                  placeholder="Celular"
                  required
                />
              </div>
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  id="monto"
                  placeholder="Monto"
                  required
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import Vue from "vue";
const Swal = require("sweetalert2");
export default {
  name: "RecargarBilletera",
  methods: {
    registrarCliente: function(e) {
      e.preventDefault();
      // eslint-disable-next-line no-unused-vars
      let data = {
        monto: e.target.monto.value,
        celular: e.target.celular.value,
        documento: e.target.documento.value,
      };
      const url = "http://localhost:3001/api/v1/billetera/recargar";
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios
        .post(url, data)
        .then((response) => {
          console.log(response);
          Swal.fire({
            icon: "success",
            title: "El recargo la billetera satisfactoriamente!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(() => {
          // handle authentication and validation errors here
          Swal.fire({
            title: "Error!",
            text: "Intente de nuevo",
            icon: "error",
            confirmButtonText: "Cool",
          });
          console.log("Error");
        });
      console.log("Registrar Cliente", data);
    },
  },
};
</script>

<style></style>
