<template>
    <button class="post-button">Click aqui</button>
</template>

<script setup>

</script>

<style>
    .post-button {
        padding: 15px;
        background-color: blueviolet;
        color: white;
        border: 1px solid;
    }

    .post-button:hover {
        background-color: darkblue;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-color: darkblue;
    }
</style>