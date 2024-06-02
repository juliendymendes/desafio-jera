<template>
  <main>
    <section class="flex justify-center mt-20">
      <form class="shadow-lg p-5 flex flex-col gap-5 w-1/2" @submit="createAccount">
        <h1 class="text-2xl">Criar conta</h1> <label class="input input-bordered flex items-center gap-2"> 
          <input type="text" class="grow" required placeholder="Nome completo" />
        </label>
        <label class="input input-bordered flex items-center gap-2"> 
          <input type="text" class="grow" v-maska data-maska="##/##/####" required placeholder="Data de nascimento"/>
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <input type="email" class="grow" required placeholder="Email" />
        </label>
        <PasswordInput :invalidPassword="invalidPassword" @update="passwordChange" />
        <button class="btn btn-primary" type="submit">Criar conta</button>
        <p class="text-center text-sm">Já tem uma conta? <router-link to="/" class="text-blue-500">Entrar</router-link></p>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {vMaska} from "maska"
import PasswordInput from '@/components/PasswordInput.vue';
import { validatePassword } from '@/helpers/validators';
const name = ref('');
const dateOfBirth = ref('');
const email = ref('');
const password = ref('');
const invalidPassword = ref(false);

function createAccount(event: Event) {
  event.preventDefault();
  if(!validatePassword(password.value)) {
    invalidPassword.value = true;
    return;
  }
  invalidPassword.value = false;
  name.value = '';
  email.value = '';
  dateOfBirth.value = '';
  password.value = '';
  alert('Formulário enviado');
}

function passwordChange(newPassword: string) {
  password.value = newPassword;
}
</script>
