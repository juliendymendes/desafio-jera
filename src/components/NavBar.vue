<template>
    <nav className="navbar bg-base-100">
        <div className="flex-1">
            <router-link to="/suggested_movies" className="btn btn-ghost text-xl">Movies</router-link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><router-link active-class="bg-slate-500 rounded-md" to="/watchlist">Minha lista</router-link></li>
            </ul>
        </div>
    </nav>
</template>