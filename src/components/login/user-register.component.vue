<script setup>
import { ref } from 'vue';

  let userRegistration = ref({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    cellphone: ""
  })

  const validateRegistration = () => {
    let reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userRegistration.value.username.length < 6) {
      return false;
    }

    if (userRegistration.value.password.length < 8) {
      return false;
    }

    
    if (userRegistration.value.password !== userRegistration.value.confirmPassword) {
      return false;
    }
    
    if (!reEmail.test(userRegistration.value.email)) {
      return false;
    }

    if (userRegistration.value.cellphone.length!==9) {
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
    <div class ="register-card">
      <p class="title-container">Registrate</p>
      <p class="cwhite">Username</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.username" />
      <p class="cwhite">Contraseña</p>
      <pv-inputText class="mb10" type="password" v-model="userRegistration.password" />
      <p class="cwhite">Confirmar Contraseña</p>
      <pv-inputText class="mb10" type="password" v-model="userRegistration.confirmPassword" />
      <p class="cwhite">Correo</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.email" />
      <p class="cwhite">Celular</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.cellphone" />
      
      <router-link :to="validateRegistration() ? '/catalogue' : '/'">
        <pv-button @click="" label="Registrate" severity="info" class="button-container mb50"/>
      </router-link>

      <p class="cwhite login">¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link></p>
    </div>
  </div>
</template>

<style scoped>
.login {
  text-align: center;
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
.register-card {
  background-color: #333333;
  border-radius: 25px;
  padding: 65px 65px 65px 65px;
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

.mb50{
  margin-bottom: 50px;
}
</style>