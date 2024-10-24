<template>
    <main>
        <navbar class="navbar"/>
        <div class="center">
            <planetCard class="planet-card" />
        </div>
    </main>
</template>

<script setup>
import navbar from "../components/siteNavbar.vue"
import planetCard from "@/components/planetCard.vue";
</script>

<style scoped>
    main {
        width: 100%;
        height: 100vh;
        background-image: url("../../public/assets/destination/background-destination-desktop.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    .navbar {
        position: relative;
        top: 2%;
    }

    .planet-card {
        position: relative;
    }
</style>