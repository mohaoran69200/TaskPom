<script setup></script>

<template>
    <div>
        <section class="tasks-section">
            <RouterLink to="/tasks/task">Liste</RouterLink>
            <RouterLink to="/tasks/new">Ajouter</RouterLink>
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

.tasks-section {
    display: flex;
}
</style>
