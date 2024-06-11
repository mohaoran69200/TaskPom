<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <div class="container-nav">
                <RouterLink to="/" class="site-title">TaskPom</RouterLink>
                <RouterLink to="/tasks" class="tasks-section">Tâches</RouterLink>
                <RouterLink to="/users" class="add-section">Utilisateurs</RouterLink>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.container-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.site-title {
    color: aliceblue;
    font-size: 24px;
    margin-left: 150px;
    margin-top: 20px;
    font-family: 'Poppins-Bold', sans-serif;
    text-decoration: none;
}

.tasks-section,
.add-section {
    background-color: rgb(5, 6, 45);
    color: azure;
    border-radius: 6px;
    box-shadow: azure 0 1px 0, azure 0 1px 0 inset;
    cursor: pointer;
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 14px;
    padding: 6px 16px;
    margin-top: 20px;
    border: none;
    text-decoration: none;
}

.tasks-section:hover,
.add-section:hover {
    color: #F8706E;
    box-shadow: #F8706E 0 1px 0, #F8706E 0 1px 0 inset;
    transition-duration: 0.1s;
}</style>
