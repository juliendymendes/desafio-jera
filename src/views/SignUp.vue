<template>
  <main>
    <section class="flex justify-center mt-20">
      <form class="shadow-lg p-5 flex flex-col gap-5 w-1/2" @submit="createAccount">
        <h1 class="text-2xl">Criar conta</h1> <label class="input input-bordered flex items-center gap-2"> 
          <input type="text" class="grow" required placeholder="Nome completo" v-model="name" />
        </label>
        <label class="input input-bordered flex items-center gap-2"> 
          <input type="text" class="grow" v-maska data-maska="##/##/####" v-model="dateOfBirth" required placeholder="Data de nascimento"/>
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <input type="email" class="grow" required placeholder="Email" v-model="email" />
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
import { useAccountStore } from '@/stores/account';
const name = ref('');
const dateOfBirth = ref('');
const email = ref('');
const password = ref('');
const invalidPassword = ref(false);
const accountStore = useAccountStore();

function createAccount(event: Event) {
  event.preventDefault();
  if(!validatePassword(password.value)) {
    invalidPassword.value = true;
    return;
  }
  accountStore.createAccount({
    name: name.value,
    email: email.value,
    date_of_birth: dateOfBirth.value,
    password: password.value,
  });
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
