
import type { Profile } from '@/types/Profile';
import { BASE_URL } from '@/helpers/constants';
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      /** @type  {Profile | null}*/
      profile: {
        name: '',
        account_id: 0
      },
			 /** @type  {Profile[]}*/
			profilesByAccount: []
    }
  },
  getters: {
    getProfile(): Profile | null{
      return this.profile
    }
  },
  actions: {
    setProfile(newProfile: Profile){
      this.profile = newProfile
    },
		setProfilesByAccount(newProfiles: Profile[]){
			this.profilesByAccount = newProfiles
		},
    async createProfile(profile: Profile){
      const response = await fetch(BASE_URL + '/profile/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      })
			const data = await response.json()
      this.setProfile(data)

			console.log("login");
      console.log(data)
    },
		async getAllByAccount(account_id: number){
			const response = await fetch(BASE_URL + `/profile?account_id=${account_id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const data = await response.json()
			this.setProfilesByAccount(data)
			console.log(response)
		}
  },
})
