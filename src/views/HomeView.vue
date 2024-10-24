<template>
    <main>
        <navbar class="navbar" />
        <homeCards class="homeCard" />
    </main>
</template>

<script setup>
    import navbar from "../components/siteNavbar.vue"
    import homeCards from "../components/homeCards.vue"
</script>

<style scoped>
    main {
        width: 100%;
        height: 100vh;
        background-image: url("../../public/assets/home/background-home-desktop.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    .navbar {
        position: relative;
        top: 2%;
    }
</style>