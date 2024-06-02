import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Account } from '@/types/Account';
import type { Profile } from '@/types/Profile';
import { BASE_URL } from '@/helpers/constants';

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      /** @type  {Profile | null}*/
      profile: {
        name: '',
        account_id: 0
      }
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
    async createProfile(profile: Profile){
      const response = await fetch(BASE_URL + '/profile/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
        
      })
      this.setProfile(profile)
      console.log(response)
    }
  }
})
