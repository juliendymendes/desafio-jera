<template>
    <section class="p-7">
        <div class="flex gap-2 w-full">
            <label class="input input-bordered flex items-center gap-2">
                <input type="text" class="grow" required v-model="term" placeholder="Buscar filmes" />
							</label>
							<button class="btn btn-primary" @click="searchMovies">Buscar</button>
        </div>
        <div class="mt-5" v-if="results.length == 0">
            <h1 class="text-3xl">Filmes sugeridos</h1>
            <div class="my-5 flex gap-5 flex-wrap">
                <div v-for="movie in movieStore.recomended" :key="movie.id">
                    <div class="relative group cursor-pointer" @click="() => addToWatchlist(movie.id, movie.genre_ids)">
                        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" width="200"
                            :alt="movie.title">
                        <div

                            class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <img src="/icons/add_clean.svg" alt="Adicionar à assistir mais tarde">

                            <span class="text-white text-base">Adicionar à lista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
				<div class="mt-5" v-if="results.length > 0">
            <h1 class="text-3xl">Resultados</h1>
            <div class="my-5 flex gap-5 flex-wrap">
                <div v-for="movie in results" :key="movie.id">
                    <div class="relative group cursor-pointer" @click="() => addToWatchlist(movie.id, movie.genre_ids)">
                        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" width="200"
                            :alt="movie.title">
                        <div

                            class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <img src="/icons/add_clean.svg" alt="Adicionar à assistir mais tarde">

                            <span class="text-white text-base">Adicionar à lista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import {useMovieStore} from "@/stores/movie"

const movieStore = useMovieStore()
const term = ref('')

const results = ref([])

onMounted(async () => {
	await movieStore.getRecommended()
	console.log(data.results);
	
})

function searchMovies(){

const url = `https://api.themoviedb.org/3/search/movie?query=${term.value}&include_adult=false&language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDI0Nzg5ZWZhYmNhNGM0NjNmYTAyMzRhNmNhMzRmZiIsInN1YiI6IjYyOGE0YzE0ZjEwYTFhNzVjN2IzMjdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xg3U6g6iB80XF21CO9EIbnszGPjIpGKlU4fAnBjsrgo'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => results.value = json.results)
  .catch(err => console.error('error:' + err));
};


function addToWatchlist(movie_id, category){
	const profile_id = JSON.parse(localStorage.getItem('profile')).id
	movieStore.addMovieToWatchlist({movie_id: movie_id, profile_id: profile_id, category: category})
}
</script>