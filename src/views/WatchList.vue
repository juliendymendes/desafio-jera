<template>
    <section class="p-7">
        <div class="mt-5">
            <h1 class="text-3xl">Minha lista</h1>
            <div class="my-5 flex gap-5 flex-wrap">
                <div v-for="movie in movies">
                    <div class="relative group cursor-pointer">
                        <img :src="movie.imagem" width="200"
                            alt="Poster do filme">
                        <div
                            
                            class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <img src="/icons/check.svg" alt="Marcar como assistido" v-if="!movie.assistido">

                            <span class="text-white text-base">{{ movie.assistido ? 'Assistido' : "Marcar como assistido" }}</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>


<script setup lang="ts">
import { ref } from 'vue';

const movies = ref([
  {
    id: 1,
    imagem: "https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
    assistido: true,
    adicionadoALista: false
  },
  {
    id: 2,
    imagem: "https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
    assistido: false,
    adicionadoALista: true
  },
  {
    id: 3,
    imagem: "https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
    assistido: false,
    adicionadoALista: false
  },
  {
    id: 4,
    imagem: "https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
    assistido: true,
    adicionadoALista: true
  }
]);
</script>