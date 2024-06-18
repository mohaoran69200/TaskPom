<script setup></script>

<template>
    <div>
        <section class="users-section">
            <RouterLink to="/users/user">Liste des utilisateurs</RouterLink>
            <RouterLink to="/users/new">Ajouter un utilisateur</RouterLink>
        </section>
        <RouterView />
    </div>
</template>

<style scoped>
#main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.users-section {
    display: flex;
}
</style>