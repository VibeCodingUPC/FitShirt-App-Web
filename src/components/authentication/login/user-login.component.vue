<script setup>
import {useI18n} from "vue-i18n";
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

const i18nLocale = useI18n();
const changeLanguage = () => {
  if (i18nLocale.locale.value == 'en') {
    i18nLocale.locale.value='es'
  }
  else {
    i18nLocale.locale.value='en'
  }
}


</script>

<template>

  <div class="card-container">
    <div>
      <img src="/images/LogoFitShirt.png" alt="profile-Image" class="img-container">
      <div class="description-container">
        <p class="app-description"> {{ $t('login.description') }}</p>
      </div>
    </div>
    <div class ="login-card">
      <p class="title-container">{{ $t('login.title') }}</p>
      <p class="cwhite">{{ $t('login.user') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userLogin.username" aria-label="Enter a username" />
      <p class="cwhite">{{ $t('login.password') }}</p>
      <pv-inputText class="mb10" type="password" v-model="userLogin.password" aria-label="Enter a password"/>
      <router-link to="/catalogue">
        <pv-button :label="$t('login.button')" severity="info" class="button-container" />
      </router-link>
      <p class="cwhite mb100 tac">{{ $t('login.forgotPassword') }}</p>
      <hr class="line-container" />
      <p class="cwhite mb10 tac register">
        {{ $t('login.newmsg') }}
        <router-link to="/register">
          {{ $t('login.signup') }}
        </router-link>
      </p>
      <div class="changelanguage">
        <pv-button @click="changeLanguage" class="language-button">
          <i class="pi pi-globe"></i>
          {{ i18nLocale.locale.value }}
        </pv-button>
      </div>
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
.changelanguage {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.language-button {
  background-color: #4d94ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.language-button .pi-globe {
  margin-right: 5px;
}
</style>
