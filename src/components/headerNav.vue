<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <div class="container-nav">
                <RouterLink to="/" class="site-title">TaskPom</RouterLink> 
                <RouterLink to="/task" class="liste-section">Liste</RouterLink>
                <RouterLink to="/task/new" class="add-section">Ajouter</RouterLink> 
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

.title:hover {
    cursor: pointer;
}
.liste-section {
    background-color: rgb(5, 6, 45);
    color: azure;
    border-radius: 6px;
    box-shadow: azure 0 1px 0, azure 0 1px 0 inset;
    cursor: pointer;
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 14px;
    padding: 6px 16px;
    margin-top: 20px;
    margin-right: 150px;
    border: none;
    text-decoration: none;
}
.liste-section:hover {
    color: #F8706E;
    box-shadow: #F8706E 0 1px 0, #F8706E 0 1px 0 inset;
    transition-duration: 0.1s;
}

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
    margin-right: 150px;
    border: none;
    text-decoration: none;

}
.add-section:hover {
    color: #F8706E;
    box-shadow: #F8706E 0 1px 0, #F8706E 0 1px 0 inset;
    transition-duration: 0.1s;
}


</style>
