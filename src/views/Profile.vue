<template>
  <section class="flex gap-5 justify-center items-center h-screen">
    <div v-for="n in [1, 2, 3, 4, 5]" class="hover:scale-110 cursor-pointer">
      <router-link to="/suggested_movies">
        <div class="w-24 h-24 bg-transparent border border-slate-400">
          <img
            src="https://plus.unsplash.com/premium_photo-1673959393136-4229d58c2517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Perfil"
            class="w-full h-full object-cover"
          />
        </div>
        <p class="text-center mt-2 text-lg">Perfil {{ n }}</p>

      </router-link>
    </div>
    <div class="hover:scale-110 cursor-pointer">
      <router-link to="/create_profile">
        <div
          class="w-24 h-24 bg-transparent border border-slate-400 flex justify-center items-center"
        >
          <img src="/icons/add.svg" alt="Adicionar novo perfil" />
        </div>
        <p class="text-center mt-2 text-lg">Novo perfil</p>
        </router-link>
      
    </div>
  </section>
</template>
