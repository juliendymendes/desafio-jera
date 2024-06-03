<template>
  <main>
    <section class="flex justify-center mt-20">
      <form class="shadow-lg p-5 flex flex-col gap-5 mx-5 md:mx-0 md:w-1/2" @submit="login">
        <h1 class="text-2xl">Entrar</h1>
        <label class="input input-bordered flex items-center gap-2">
          <input type="email" v-model="email" class="grow" required placeholder="Email" />
        </label>

        <PasswordInput :invalidPassword="invalidPassword" @update="passwordChange" />
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
import { validatePassword } from '@/helpers/validators';
import PasswordInput from '@/components/PasswordInput.vue';
import router from '@/router';
import { useAccountStore } from '@/stores/account';

const email = ref('');
const password = ref('');
const invalidPassword = ref(false);

const accountStore = useAccountStore();

function login(event: Event) {
  event.preventDefault();
  if (!validatePassword(password.value)) {
    invalidPassword.value = true;
    return;
  }
  accountStore.login(
    email.value,
    password.value,
  );
  invalidPassword.value = false;
  email.value = '';
  password.value = '';
  router.push('/profile');
}


function passwordChange(newPassword: string) {
  password.value = newPassword;
}
</script>