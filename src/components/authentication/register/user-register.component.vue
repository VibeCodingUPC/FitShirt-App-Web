<script setup>
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
import { useRouter } from 'vue-router';

const router = useRouter();
const i18nLocale = useI18n();

let userRegistration = ref({
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  cellphone: ""
});

let registrationError = ref("");

const validateRegistration = () => {
  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userRegistration.value.username.length < 6) {
    registrationError.value = "Username must be at least 6 characters long";
    return false;
  }

  if (userRegistration.value.password.length < 8) {
    registrationError.value = "Password must be at least 8 characters long";
    return false;
  }

  if (userRegistration.value.password !== userRegistration.value.confirmPassword) {
    registrationError.value = "Passwords do not match";
    return false;
  }

  if (!reEmail.test(userRegistration.value.email)) {
    registrationError.value = "Invalid email format";
    return false;
  }

  if (userRegistration.value.cellphone.length !== 9) {
    registrationError.value = "Cellphone must be 9 digits long";
    return false;
  }

  registrationError.value = "";
  return true;
};

const registerUser = async () => {
  if (!validateRegistration()) {
    return;
  }

  try {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.username === userRegistration.value.username);

    if (userExists) {
      registrationError.value = "User already exists";
    } else {
      users.push({
        username: userRegistration.value.username,
        password: userRegistration.value.password,
        email: userRegistration.value.email,
        cellphone: userRegistration.value.cellphone
      });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful');
      await router.push('/login');
    }
  } catch (error) {
    registrationError.value = "Error registering user";
  }
};

const changeLanguage = () => {
  if (i18nLocale.locale.value == 'en') {
    i18nLocale.locale.value = 'es';
  } else {
    i18nLocale.locale.value = 'en';
  }
};
</script>

<template>
  <div class="card-container">
    <div>
      <img src="/images/LogoFitShirt.png" alt="profile-Image" class="img-container" />
      <div class="description-container">
        <p class="app-description">{{ $t('login.description') }}</p>
      </div>
    </div>
    <div class="register-card">
      <p class="title-container">{{ $t('register.title') }}</p>
      <p class="cwhite">{{ $t('register.user') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.username" aria-label="Enter a username" />
      <p class="cwhite">{{ $t('register.password') }}</p>
      <pv-inputText class="mb10" type="password" v-model="userRegistration.password" aria-label="Enter a password" />
      <p class="cwhite">{{ $t('register.confirmP') }}</p>
      <pv-inputText class="mb10" type="password" v-model="userRegistration.confirmPassword" aria-label="Confirm the password" />
      <p class="cwhite">{{ $t('register.email') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.email" aria-label="Enter an email" />
      <p class="cwhite">{{ $t('register.phone') }}</p>
      <pv-inputText class="mb10" type="text" v-model="userRegistration.cellphone" aria-label="Enter a phone" />
      <pv-button @click="registerUser" :label="$t('register.button')" severity="info" class="button-container" />
      <p class="cwhite mb100 tac">{{ registrationError }}</p>
      <p class="cwhite login">{{ $t('register.oldmsg') }} <router-link to="/login">{{ $t('register.signin') }}</router-link></p>
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