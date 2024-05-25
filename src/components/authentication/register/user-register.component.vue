<script setup>
import { ref } from 'vue';
import {useI18n} from "vue-i18n";
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
    <div class ="register-card">
      <p class="title-container">{{ $t('register.title') }}</p>
      <p class="cwhite">{{ $t('register.user') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.username" />
      <p class="cwhite">{{ $t('register.password') }}</p>
      <pv-inputText class="mb10" type="password" v-model="userRegistration.password" />
      <p class="cwhite">{{ $t('register.confirmP') }}</p>
      <pv-inputText class="mb10" type="password" v-model="userRegistration.confirmPassword" />
      <p class="cwhite">{{ $t('register.email') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.email" />
      <p class="cwhite">{{ $t('register.phone') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.cellphone" />

      <router-link to="/catalogue">
        <pv-button :label="$t('register.button')" severity="info" class="button-container" />
      </router-link>

      <p class="cwhite login">{{ $t('register.oldmsg') }} <router-link to="/login">{{ $t('register.signin') }}</router-link>
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
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
}
.register-card {
  background-color: #333333;
  border-radius: 25px;
  padding: 2.8em 3.2em;
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
.login {
  margin-top: .8em;
}
.login:hover {
  text-decoration: underline;
}
.mb10{
  margin-bottom: 10px;
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