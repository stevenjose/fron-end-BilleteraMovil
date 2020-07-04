<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <hr />
          <h5>Registro de Clientes</h5>
          <hr />
          <form
            class="text-center"
            style="margin:auto"
            @submit="registrarCliente"
          >
            <div class="form-group col-lg-12">
              <input
                type="text"
                class="form-control"
                id="nombres"
                placeholder="Nombres"
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
            <div class="form-group col-lg-12">
              <input
                type="email"
                class="form-control "
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
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
            <button type="submit" class="btn btn-primary">Guardar</button>
          </form>
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
const Swal = require("sweetalert2");

export default {
  name: "RegistrarCliente",
  /* components: {
    Navbar,
  }, */
  props: {
    msg: String,
  },
  methods: {
    registrarCliente: function(e) {
      e.preventDefault();
      // eslint-disable-next-line no-unused-vars
      let data = {
        nombres: e.target.nombres.value,
        email: e.target.email.value,
        celular: e.target.celular.value,
        documento: e.target.documento.value,
      };
      const url = "http://localhost:3001/api/v1/cliente";
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios
        .post(url, data)
        .then((response) => {
          console.log(response);
          Swal.fire({
            icon: "success",
            title: "El cliente se registro satisfactoriamente",
            showConfirmButton: false,
            timer: 1500,
          });
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
      console.log("Registrar Cliente", data);
    },
  },

  beforeMount() {
    console.log("3 - beforeMount");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
