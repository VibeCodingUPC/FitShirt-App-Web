<script setup>
import { ref } from 'vue';
  let userLogin = ref({
    username: "",
    password: ""
  })

  const validateLogin = () => {

    if (userLogin.value.username.length < 6) {
      return false;
    }

    if (userLogin.value.password.length < 8) {
      return false;
    }

    return true;
  }
</script>

<template>
  <div class="card-container">
    <div>
      <img src="/images/LogoFitShirt.png" alt="profile-Image" class="img-container">
      <div class="description-container">
        <p class="app-description">
          Esperamos que disfrute navegando y usando nuestra aplicación.
          En nuestro equipo de desarrollo trabajamos arduamente para crear
          una plataforma fácil de usar y atractiva para nuestros usuarios.
          Esperamos que esta aplicación cumpla con todas sus expectativas
          y necesidades. Si tiene algún comentario o sugerencia sobre cómo
          podemos mejorar nuestra aplicación para hacerla aún más útil,
          por favor no dude en hacérnoslo saber.
        </p>
      </div>
    </div>
    <div class ="login-card">
      <p class="title-container">Iniciar Sesión</p>
      <p class="cwhite">Username</p>
      <pv-inputText class="mb10" type="text" v-model="userLogin.username" />
      <p class="cwhite">Contraseña</p>
      <pv-inputText class="mb10" type="password" v-model="userLogin.password" />
      <router-link :to="validateLogin() ? '/catalogue' : '/login'">
        <pv-button label="Login" severity="info" class="button-container"/>
      </router-link>
      <p class="cwhite mb100 tac">¿Olvidó su contraseña?</p>
      <hr class="line-container" />
      <p class="cwhite mb10 tac register">
        ¿Nuevo en Fit Shirt?
        <router-link to="/register">
          Regístrate
        </router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.line-container{
  margin: 0 1rem 1rem 1rem;
  border: solid white 1px;
}
@media (max-width: 900px) {
  .app-description{
    display: none;
  }
  .img-container{
    display: none;
  }
  .description-container{
    display: none;
  }
}
@media (min-width: 670px) {
  .img-container{
    width: 400px;
  }
  .description-container{
    width: 400px;
  }
}

.card-container {
  display: flex;
  flex-direction: row;
  background-color: #dadada;
  min-height: 100vh;
  justify-content: space-evenly;
  align-items: center;
}
.login-card {
  background-color: #333333;
  border-radius: 25px;
  padding: 3.2em;
  display:flex;
  flex-direction: column;
}
.app-description{
  text-align: justify;
  font-family: Roboto, sans-serif;
}
.title-container{
  text-align: center;
  align-items: center;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: bolder;
  margin-bottom: 20px;
  color: white;
}
.button-container{
  width: 360px;
  background-color: #4d94ff;
  color: white;
  margin-bottom: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
}
.cwhite{
  color: white;
}
.mb10{
  margin-bottom: 10px;
}
.mb100{
  margin-bottom: 1.2em;
}
.mb50{
  margin-bottom: 50px;
}
.tac{
  text-align: center;
}
.register:hover {
  text-decoration: underline;
}
</style>