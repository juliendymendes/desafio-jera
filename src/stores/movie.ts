import { BASE_URL } from '@/helpers/constants';
import { defineStore } from 'pinia';

interface WatchedMovie {
	profile_id: number
	movie_id: number
	category: number[]
}
export const useMovieStore = defineStore('movie', {
  state: () => {
    return {
			 /** @type  { WatchedMovie[] }*/
			watchedMovies: [],
			 /** @type  { WatchedMovie[] }*/
			 watchlist: [],
			 recommended: []
    }
  },
  getters: {
    getWatchedMovies(): WatchedMovie{
      return this.watchedMovies
    }
  },
  actions: {
		async addWatchedMovie(watchedMovie: WatchedMovie){
			const response = fetch(BASE_URL + '/watchedMovies/create', {
				method: 'POST',
				headers: {
          'Content-Type': 'application/json',
        },
				body: JSON.stringify(watchedMovie)
			})


			console.log(response);
		},
		async getWatchList(){
			const profile_id = JSON.parse(localStorage.getItem("profile")).id
			const response = await fetch(BASE_URL + `/watchlist/${profile_id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			this.watchlist = data.results
	
		},
		async getRecommended(){
			const profile_id = JSON.parse(localStorage.getItem("profile")).id
			const response = await fetch(BASE_URL + `/movie/recomended/${profile_id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			this.recomended = data.results
		},
		async addMovieToWatchlist(movie: WatchedMovie){
			const response = await fetch(BASE_URL + '/watchlist/add', {
				method: 'POST',
				headers: {
          'Content-Type': 'application/json',
        },
				body: JSON.stringify(movie)
			})

			console.log(response);
		},

	}
})
