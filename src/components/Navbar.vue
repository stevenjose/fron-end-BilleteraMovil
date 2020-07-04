<template>
<div>
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="/">ePayco</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/registroCliente" class="nav-link" exact
            >Registrar Cliente</router-link
          >
        </li>
        <li class="nav-item active">
          <router-link to="/consultarBilletera" class="nav-link" exact
            >Consultar Billetera</router-link
          >
        </li>
        <li class="nav-item active">
           <router-link to="/recargarBilletera" class="nav-link" exact
            >Recargar Billetera</router-link
          >
        </li>
        <li class="nav-item active">
           <router-link to="/registrarPago" class="nav-link" exact
            >Registrar Pago</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</div>
  
  
</template>
