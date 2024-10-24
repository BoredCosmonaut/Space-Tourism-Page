<template>
    <main>
        <siteNavbar />
        <crewCards />
    </main>
</template>

<script setup>
    import siteNavbar from '@/components/siteNavbar.vue';
    import crewCards from '@/components/crewCards.vue';
</script>

<style scoped>
    main {
        width: 100%;
        height: 100vh;
        background-image: url("../../public/assets/crew/background-crew-desktop.jpg");
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    .navbar {
        position: relative;
        top: 2%;
    }
</style>