<script setup>
import {computed, onMounted, ref} from "vue";
import {DesignsApiService} from "@/services/designs-api.service.js";
import {ColorApiService} from "@/services/color-api.service.js";
import {ShieldApiService} from "@/services/shield-api.service.js";
import { environment } from "@/environments/environment";
import router from "@/routes";
import { AccountApiService } from "@/services/account-api.service";
import axios from 'axios';

const colorService = new ColorApiService();
const designService = new DesignsApiService();
const shieldService = new ShieldApiService();
const authApiService = new AccountApiService();
const customPrompt = ref('');


let designInformation = ref ({
  "name": "",
  "primaryColorId": 0,
  "secondaryColorId": 0,
  "tertiaryColorId": 0,
  "userId": authApiService.getUserIdFromToken(),
  "shieldId": 0,
  "imageUrl": null
})

let designInformation2 = ref ({})


const colors = ref([]);
const shields = ref([]);

const aiImageUrl = ref('');


const generateDynamicImageUrl = async () => {
  if (!customPrompt.value.trim()) {
    alert("Por favor escribe un prompt antes de generar la imagen.");
    return;
  }
  try {
    const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          model: "dall-e-3",
          prompt: customPrompt.value,
          n: 1,
          size: "1024x1024"
        },
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
    );
    aiImageUrl.value = response.data.data[0].url;
  } catch (error) {
    console.error("❌ Error al generar imagen con OpenAI:", error);
    aiImageUrl.value = "/images/fallback.png"; // imagen alternativa si falla
  }
};


const addDesign = async () => {
  designInformation.value.imageUrl = aiImageUrl.value;
  await designService.creatingDesign(designInformation.value);
}

const fetchShieldData = async () => {
  let fetchedShields = await shieldService.getShield();
  shields.value = [...shields.value, ...fetchedShields];
}
const fetchColorData = async () => {
  let fetchedColors = await colorService.getColors();
  colors.value = [...colors.value, ...fetchedColors];
}

const areCorrectAllInputs = computed(() => {
  return designInformation.value.name.trim() !== "" && customPrompt.value.trim() !== "";
});

const handleDesignCreation = async () => {
  console.log('Design info before creation:', designInformation.value);
  if (areCorrectAllInputs.value) {
    await addDesign();
    router.push("/my-design");
  }
}



const activeAIImage = computed(
    ()  => {
      return areCorrectAllInputs.value;
    }
)

const activeImage= computed (() => {
  console.log(generateDynamicImageUrl.value)
  return !areCorrectAllInputs.value;
})

onMounted(async () => {
  await fetchColorData();
  await fetchShieldData();
  console.log(areCorrectAllInputs.value);
})
</script>

<template>
  <pv-card class="card-container">
    <template #content>
      <div class="form-container">
        <div class="title-text">
          {{ $t('designs.create') }}
        </div>

        <!-- Mostrar imagen generada o cargando -->
        <div>
          <img v-if="activeAIImage"
            :src="aiImageUrl || '/images/loanding.webp'" 
            :alt="aiImageUrl ? 'AI Generated Design' : 'Loading image...'" 
            max-width="200" 
            height="200" 
          />
          <img v-else :src="environment.designImagePath" class="image-container"/>
        </div>


        <div class="inputs-container">
          <div class="subtitle-text">{{ $t('designs.name') }}</div>
          <pv-inputText class="info-container" v-model="designInformation.name"></pv-inputText>

          <div class="subtitle-text">{{ $t('designs.fColor') }} </div>
          <select v-model="designInformation.primaryColorId" id="color-input">
            <option
                v-for="color in colors"
                :value="color.id"
                :key="color.id">
              {{ color.name }}
            </option>
          </select>

          <div class="subtitle-text">Prompt personalizado (obligatorio)</div>
          <pv-inputText
              class="info-container"
              v-model="customPrompt"
              placeholder="Ejemplo: Camiseta negra con líneas rojas y escudo de dragón"
          />

          <div class="subtitle-text">{{ $t('designs.sColor') }}</div>
          <select v-model="designInformation.secondaryColorId" id="color-input">
            <option
                v-for="color in colors"
                :value="color.id"
                :key="color.id">
              {{ color.name }}
            </option>
          </select>

          <div class="subtitle-text">{{ $t('designs.tColor') }}</div>
          <select v-model="designInformation.tertiaryColorId" id="color-input">
            <option
                v-for="color in colors"
                :value="color.id"
                :key="color.id">
              {{ color.name }}
            </option>
          </select>

          <div class="subtitle-text">{{ $t('designs.shield') }}</div>
          <select v-model="designInformation.shieldId" id="color-input">
            <option
                v-for="shield in shields"
                :value="shield.id"
                :key="shield.id">
              {{ shield.nameTeam }}
            </option>
          </select>
        </div>
      </div>
      <div class="button-container">
        <pv-button
            class="button-style"
            aria-label="Confirm a design"
            :disabled="!areCorrectAllInputs"
            @click="handleDesignCreation">
          {{ $t('designs.confirmButton') }}
        </pv-button>

        <pv-button
            class="button-style"
            aria-label="AI design"
            :disabled="!areCorrectAllInputs"
            @click="generateDynamicImageUrl"
        >
          {{ $t('designs.aibutton') }}
        </pv-button>


        <router-link to="/my-design" aria-label="Cancel a design">
          <pv-button class="button-style">{{ $t('designs.cancelButton') }}</pv-button>
        </router-link>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card-container {
  height: 100vh; /* Usar todo el viewport vertical */
  display: flex;
  justify-content: center;
  flex: .95;
  align-self: center;
  background-color: #e0e7ff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto; /* Añadir scroll si el contenido excede */
  overflow-x: hidden; /* Eliminar cualquier desbordamiento horizontal */
}

.form-container {
  padding: 10px;
  flex-direction: column;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  max-height: 100%; /* Limitar la altura */
}

.inputs-container {
  width: 100%; /* Usar todo el ancho disponible */
  max-width: 900px; /* Limitar el ancho máximo */
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas en pantallas grandes */
  grid-gap: 10px;
  margin-top: 15px;
}

.title-text {
  font-size: 2.4em;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
  grid-column: span 2; /* El título ocupa ambas columnas */
}

.subtitle-text {
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
  color: #3B82F6;
}

.info-container {
  border-radius: 8px;
  background-color: #ffffff;
  width: 100%;
  border: 1px solid #3B82F6;
  padding: 0.6em;
}

select {
  border-radius: 8px;
  padding: 0.6em;
  border: 1px solid #3B82F6;
  background-color: #ffffff;
  font-size: 1em;
  color: #333333;
}

.image-container {
  height: 200px;
  object-fit: contain;
  margin: 5px;
  border-radius: 12px;
  border: 1px solid #e0e7ff;
  grid-column: span 2;
  justify-self: center;
}

.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  grid-column: span 2;
}

.button-style {
  padding: 0.4em 1.6em;
  margin: 0.2em 0;
  border-radius: 6px;
  font-size: 1em;
  cursor: pointer;
  background-color: #4d94ff;
  color: #ffffff;
  border: none;
  transition: background-color 0.3s ease;
}

.button-style:hover {
  background-color: #3B82F6;
}

@media (max-width: 768px) {
  .inputs-container {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }

  .title-text {
    font-size: 1.8em;
    margin-bottom: 10px;
  }

  .image-container {
    height: 150px;
  }

  .info-container, select {
    padding: 0.5em;
  }

  .button-style {
    padding: 0.4em 1.2em;
    font-size: 0.9em;
  }

  .button-container {
    grid-column: span 1;
    justify-content: space-around;
  }
}

</style>