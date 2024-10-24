<template>
    <main>
        <siteNavbar />
        <techCards />
    </main>
</template>

<script setup>
    import siteNavbar from '@/components/siteNavbar.vue';
    import techCards from '@/components/techCards.vue';
</script>

<style scoped>
    main {
        width: 100%;
        height: 100vh;
        background-image: url("../../public/assets/technology/background-technology-desktop.jpg");
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