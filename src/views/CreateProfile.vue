<template>
    <section class="flex justify-center mt-20">
        <form class="shadow-lg p-5 flex flex-col gap-5 mx-5 md:mx-0 md:w-1/2">
            <h1 class="text-2xl">Criar novo perfil</h1>
            <label class="input input-bordered flex items-center gap-2">
                <input type="text" class="grow" required placeholder="Nome do perfil" />
            </label>
            <div class="flex gap-3 justify-between">
                <button className="btn btn-neutral" type="button">
                    <router-link to="/profile">Cancelar</router-link>
                </button>
                <button className="btn btn-primary" type="submit">Criar perfil</button>
            </div>
        </form>
    </section>
</template>