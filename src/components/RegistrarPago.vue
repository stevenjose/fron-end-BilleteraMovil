<template>
  <div class="billetera">
    <div class="container">
      <div class="row" v-if="!token">
        <div class="col text-center">
          <hr />
          <h5>Realizar Compra</h5>
          <hr />
          <form
            class="text-center"
            style="margin:auto"
            @submit="registrarPago"
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
                  type="text"
                  class="form-control"
                  id="monto"
                  placeholder="Monto"
                  required
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Pagar</button>
          </form>
        </div>
      </div>
       <div class="row" v-if="token">
        <div class="col text-center">
          <hr />
          <h5>Confirmar Compra</h5>
          <hr />
          <form
            class="text-center"
            style="margin:auto"
            @submit="confirmarPago"
          >
            <div class="form-group col-lg-12">
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  id="token"
                  placeholder="token"
                  required
                />
              </div>
              <div class="form-group col-lg-12">
                <input
                  type="text"
                  class="form-control"
                  id="session"
                  placeholder="Session"
                  required
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Confirmar pago</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import Vue from "vue";
// eslint-disable-next-line no-unused-vars
const Swal = require("sweetalert2");
export default {
 name: "RegistrarPago",
 data() {
    return {
      session: null,
      token: null,
      isLoading: true,
    };
  },
  methods: {
    registrarPago: function(e) {
      e.preventDefault();
      // eslint-disable-next-line no-unused-vars
      let data = {
        monto: e.target.monto.value,
        documento: e.target.documento.value,
      };
      const url = "http://localhost:3001/api/v1/billetera/pago";
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios
        .post(url, data)
        .then((response) => {
          console.log(response);
          let data = response['data'];
           console.log(data['data']);
          var arrayDeCadenas = data['data'].split(" ");
          console.log(arrayDeCadenas);

          this.token = arrayDeCadenas[1];
          this.session = arrayDeCadenas[3];
          console.log(this.token);
          console.log(this.session);
          //this.saldo = saldo['data']['saldo'];
          Swal.fire({
            icon: "success",
            title: "Por favor ingrese su token y session para confirmar el pago!",
            showConfirmButton: false,
            timer: 2500,
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
    },
    confirmarPago: function(e) {
      e.preventDefault();
      // eslint-disable-next-line no-unused-vars
      let data = {
        token: e.target.token.value,
        idSesion: e.target.session.value,
      };
      console.log(data);
      const url = "http://localhost:3001/api/v1/billetera/pago/confirmar";
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios
        .post(url, data)
        .then((response) => {
          console.log(response);
          let data = response['data'];
           console.log(data['data']);
          var arrayDeCadenas = data['data'].split(" ");
          console.log(arrayDeCadenas);

          this.token = arrayDeCadenas[1];
          this.session = arrayDeCadenas[3];
          console.log(this.token);
          console.log(this.session);
          //this.saldo = saldo['data']['saldo'];
          Swal.fire({
            icon: "success",
            title: "Se confirmo su pago con exito!",
            showConfirmButton: false,
            timer: 2500,
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


    }
  },
};
</script>

<style></style>
