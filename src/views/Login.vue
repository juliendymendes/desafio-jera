<template>
  <main>
    <section class="flex justify-center mt-20">
      <form class="shadow-lg p-5 flex flex-col gap-5 mx-5 md:mx-0 md:w-1/2" @submit="login">
        <h1 class="text-2xl">Entrar</h1>
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
        <button className="btn btn-primary" type="submit">Entrar</button>
        <div className="divider">OU</div>
        <div
          class="flex cursor-pointer gap-3 justify-center border text-white hover:bg-slate-200 hover:text-black rounded-md p-3"
        >
          <img src="/icons/facebook.png" alt="Facebook" width="24" />
          <p>Entrar com Facebook</p>
        </div>
        <p class="text-center text-sm">
          Não tem uma conta?
          <router-link to="/signup" class="text-blue-500">Criar conta</router-link>
        </p>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const invalidPassword = ref(false);
const passwordVisible = ref(false);
function login(event: Event) {
  event.preventDefault();
  const email = (event.target as HTMLFormElement).elements[0] as HTMLFormElement;
  const password = (event.target as HTMLFormElement).elements[1] as HTMLFormElement;
  if (!validatePassword(password.value)) {
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