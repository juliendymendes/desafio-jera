<template>
    <div>
        <label class="input input-bordered flex items-center gap-2">
            <input :type="passwordVisible ? 'text' : 'password'" v-model="password" @change="$emit('update', password)" class="grow" required placeholder="Senha" />
            <img src="/icons/visibility.svg" v-if="!passwordVisible" alt="Mostrar senha" width="24"
                class="cursor-pointer" @click="passwordVisible = true" />
            <img src="/icons/visibility_off.svg" v-if="passwordVisible" alt="Esconder senha" width="24"
                class="cursor-pointer" @click="passwordVisible = false" />
        </label>
        <span class="text-sm text-red-500" v-if="invalidPassword">A senha precisa conter pelo menos 6 caracteres, uma
            letra maiúscula, um número e um caractere especial </span>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
defineProps<{
    invalidPassword: boolean
}>()
const password = ref('');
const passwordVisible = ref(false);

</script>