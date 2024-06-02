<template>
    <section class="flex justify-center mt-20">
        <form class="shadow-lg p-5 flex flex-col gap-5 mx-5 md:mx-0 md:w-1/2" @submit="createProfile">
            <h1 class="text-2xl">Criar novo perfil</h1>
            <label class="input input-bordered flex items-center gap-2">
                <input type="text" class="grow" required placeholder="Nome do perfil" v-model="name" />
            </label>
            <div class="flex gap-3 justify-between">
                <router-link to="/profile">
                    <button className="btn btn-neutral" type="button">
                        Cancelar
                    </button>
                </router-link>
                <button className="btn btn-primary" type="submit">Criar perfil</button>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import { useProfileStore } from '@/stores/profile';
import { ref } from 'vue';

const name = ref('');
const profileStore = useProfileStore();
const accountStore = useAccountStore();
function createProfile(event: Event) {
    event.preventDefault();
    if (accountStore.getAccount) {
        profileStore.createProfile({
            name: name.value,
            account_id: 1,
        });
    }
    name.value = '';
    alert('Perfil criado');
}
</script>