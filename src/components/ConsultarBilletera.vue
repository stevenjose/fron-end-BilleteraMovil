<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <hr />
          <h5>Consultar Billetera</h5>
          <hr />
          <form
            class="text-center"
            style="margin:auto"
            @submit="consultarBilletera"
          >
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
                id="documento"
                placeholder="Documento"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary">Consultar</button>
          </form>
        </div>
      </div>
       <hr>
      <div class="row" v-if="saldo > 0 ">
        <div class="col text-center">
          <h3 >
            Saldo: {{ saldo }} BTC  
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Navbar from "./Navbar.vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
//import Vue from "vue";
// eslint-disable-next-line no-unused-vars
const Swal = require("sweetalert2");

export default {
  name: "ConsultarBilletera",
 /*  components: {
    Navbar,
  }, */
  data() {
    return {
      saldo: 0,
      isLoading: true,
    };
  },
  methods: {
    consultarBilletera: function(e) {
      e.preventDefault();
      let data = {
        celular: e.target.celular.value,
        documento: e.target.documento.value,
      };
      const url = "http://localhost:3001/api/v1/billetera/saldo";
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios
        .post(url, data)
        .then((response) => {
          console.log(response['data']);
          let saldo = response['data'];
          this.saldo = saldo['data']['saldo'];
          /*  Swal.fire({
            icon: "success",
            title: "El cliente se registro satisfactoriamente",
            showConfirmButton: false,
            timer: 1500,
          }); */
        })
        .catch(() => {
          // handle authentication and validation errors here
          Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
          console.log("Error");
        });
    },
  },
};
</script>
