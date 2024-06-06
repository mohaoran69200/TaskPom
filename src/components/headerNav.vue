<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav>
            <div class="container-nav">
                <RouterLink to="/">TaskPom</RouterLink> 
                <RouterLink to="/task">Liste</RouterLink>
                <RouterLink to="/task/new">Ajouter</RouterLink> 
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
.title {
    color: aliceblue;
    margin-left: 150px;
    margin-top: 40px;
    font-family: 'Poppins-Bold', sans-serif;
}

.title:hover {
    cursor: pointer;
}
.liste-btn {
    background-color: rgb(5, 6, 45);
    color: azure;
    border-radius: 6px;
    box-shadow: azure 0 1px 0, azure 0 1px 0 inset;
    cursor: pointer;
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 14px;
    padding: 6px 16px;
    margin-top: 40px;
    margin-right: 150px;
    border: none;
}
.liste-btn:hover {
    color: #F8706E;
    box-shadow: #F8706E 0 1px 0, #F8706E 0 1px 0 inset;
    transition-duration: 0.1s;
}

.add-btn {
    background-color: rgb(5, 6, 45);
    color: azure;
    border-radius: 6px;
    box-shadow: azure 0 1px 0, azure 0 1px 0 inset;
    cursor: pointer;
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 14px;
    padding: 6px 16px;
    margin-top: 40px;
    margin-right: 150px;
    border: none;
}
.add-btn:hover {
    color: #F8706E;
    box-shadow: #F8706E 0 1px 0, #F8706E 0 1px 0 inset;
    transition-duration: 0.1s;
}


</style>
