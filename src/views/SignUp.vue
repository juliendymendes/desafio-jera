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
        <div>
          <label class="input input-bordered flex items-center gap-2">
            <input :type="passwordVisible ? 'text' : 'password'" class="grow" required placeholder="Senha" />
            <img src="/icons/visibility.svg" v-if="!passwordVisible" alt="Mostrar senha" width="24" class="cursor-pointer" @click="passwordVisible = true" />
            <img src="/icons/visibility_off.svg" v-if="passwordVisible" alt="Esconder senha" width="24" class="cursor-pointer" @click="passwordVisible = false" />
          </label>
          <span class="text-sm text-red-500" v-if="invalidPassword">A senha precisa conter pelo menos 6 caracteres, uma letra maiúscula, um número e um caractere especial </span>
        </div>
        <button class="btn btn-primary" type="submit">Criar conta</button>
        <p class="text-center text-sm">Já tem uma conta? <router-link to="/" class="text-blue-500">Entrar</router-link></p>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {vMaska} from "maska"

const invalidPassword = ref(false);
const passwordVisible = ref(false);
function createAccount(event: Event) {
  event.preventDefault();
  const name = (event.target as HTMLFormElement).elements[0] as HTMLFormElement;
  const birthdate = (event.target as HTMLFormElement).elements[1] as HTMLFormElement;
  const email = (event.target as HTMLFormElement).elements[1] as HTMLFormElement;
  const password = (event.target as HTMLFormElement).elements[1] as HTMLFormElement;
  if(!validatePassword(password.value)) {
    invalidPassword.value = true;
    return;
  }
  invalidPassword.value = false;
  alert('Formulário enviado');
}
// Valida se a senha contém pelo menos 6 caracteres, uma letra maiúscula, um número e um caractere especial 
function validatePassword(password: string) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
  return regex.test(password);
}
</script>
