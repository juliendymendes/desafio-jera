import { defineStore } from 'pinia'
import type { Account } from '@/types/Account';
import { BASE_URL } from '@/helpers/constants';

export const useAccountStore = defineStore('account', {
  state: () => {
    return {
      /** @type  {Account | null}*/
      account: {
        name: '',
        email: '',
        password: '',
        date_of_birth: ''
      }
    }
  },
  getters: {
    getAccount(): Account | null{
      return this.account
    }
  },
  actions: {
    setAccount(newAccount: Account){
      this.account= newAccount
    },
    async login(email: string, password: string){ 
      const response = await fetch(BASE_URL + '/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json();
      this.account = data
			localStorage.setItem('account', JSON.stringify(data))
			console.log("login");
			console.log(data);
    },
    logout(){
      this.setAccount({
        name: '',
        email: '',
        password: '',
        date_of_birth: ''
      })
    },
    async createAccount(account: Account){
      const response = await fetch(BASE_URL + '/account/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
      })
      this.setAccount(account)
      console.log(response)
    }
  }
})
