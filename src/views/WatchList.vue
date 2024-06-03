<template>
    <section class="p-7">
        <div class="mt-5">
            <h1 class="text-3xl">Minha lista</h1>
            <div class="my-5 flex gap-5 flex-wrap">
                <div v-for="movie in movieStore.watchlist" :key="movie.movie_id" @click="() => setWatchedMovie(movie.id, movie.genre_ids)">
                    <div class="relative group cursor-pointer" >
                        <img :src="'https://image.tmdb.org/t/p/w500' + getMovieById(movie.movie_id).poster_path" width="200"
                            alt="Poster do filme">
                        <div
                            class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <img src="/icons/check.svg" alt="Marcar como assistido" >

                            <span class="text-white text-base">Marcar como assistido</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>


<script setup lang="ts">
import { onMounted } from 'vue';

import {useMovieStore} from "@/stores/movie"

const movieStore = useMovieStore()

onMounted(async () => {
	movieStore.getWatchList()
})
async function getMovieById(id){
	let data = {}
	 fetch(`https://api.themoviedb.org/3/movie/${id}`,{
		method:  'GET',
		headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDI0Nzg5ZWZhYmNhNGM0NjNmYTAyMzRhNmNhMzRmZiIsInN1YiI6IjYyOGE0YzE0ZjEwYTFhNzVjN2IzMjdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xg3U6g6iB80XF21CO9EIbnszGPjIpGKlU4fAnBjsrgo'
  }
	}).then(res => res.json())
  .then(json => data = json.results)
  .catch(err => console.error('error:' + err));
	return data

}

function setWatchedMovie(movie_id, category){
	const profile_id = JSON.parse(localStorage.getItem('profile')).id
	movieStore.addWatchedMovie({movie_id: movie_id, profile_id: profile_id, category: category})
}


</script>