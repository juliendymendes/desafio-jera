<template>
    <section class="p-7">
        <div>
            <label class="input input-bordered flex items-center gap-2">
                <input type="text" class="grow" required placeholder="Buscar filmes" />
            </label>
        </div>
        <div class="mt-5">
            <h1 class="text-3xl">Filmes sugeridos</h1>
            <div class="my-5 flex gap-5 flex-wrap">
                <div v-for="n in [1, 2, 3, 4, 5, 6]">
                    <div class="relative group cursor-pointer">
                        <img src="https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg" width="200" alt="Poster do filme">
                        <div
                            class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <img src="/icons/add_clean.svg" alt="Adicionar à assistir mais tarde">

                            <span class="text-white text-base">Adicionar à minha lista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>