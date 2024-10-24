<template>
    <nav class="navbar">
        <div class="nav-inside">
            <div class="logo-nav-container">
                <RouterLink
                    to="/home"
                    class="logo-nav-router"
                >
                    <img src="../../public/assets/shared/logo.svg" alt="" class="logo-nav">
                </RouterLink>
            </div>
            <div class="line" >
            </div>
            <div class="nav-parts">
                <RouterLink
                    to="/home"
                    :class="[isActiveLink('/home')?'active-nav-item  nav-link': 'non-active-nav-item  nav-link']"
                >   
                    <span class="nav-number">00</span>
                    <p class="nav-test">HOME</p>
                </RouterLink>

                <RouterLink
                    to="/destination"
                    :class="[isActiveLink('/destination')?'active-nav-item  nav-link': 'non-active-nav-item  nav-link']"
                >
                    <span class="nav-number">01</span>
                    <p class="nav-test">DESTINATION</p>
                </RouterLink>

                <RouterLink
                    to="/crew"
                    :class="[isActiveLink('/crew')?'active-nav-item  nav-link': 'non-active-nav-item  nav-link']"
                >
                    <span class="nav-number">02</span>
                    <p class="nav-test">CREW</p>
                </RouterLink>

                <RouterLink
                    to="/technology"
                    :class="[isActiveLink('/technology')?'active-nav-item  nav-link': 'non-active-nav-item  nav-link']"
                >
                    <span class="nav-number">03</span>
                    <p class="nav-test">TECHNOLOGY</p>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import {RouterLink,useRoute} from 'vue-router'
    const route = useRoute();
    const isActiveLink = (routePath) =>{
        return route.path == routePath;
    }
</script>

<style >

    .logo-nav-container {
        position: relative;
        top: 20px;
        width: 40px;
        height: 40px;
    }

    .logo-nav {
        width: 40px;
        height: 40px;
    }

    .line {
        position: relative;
        width: 700px;
        height: 0.5px;
        background-color: gray;
        top: 40px;
        z-index: 99;
        left: 40px;
    }


    .nav-inside {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .nav-parts {
        display: flex;
        flex-direction: row;
        width: 55%;
        height: auto;
        margin-left: auto;
        backdrop-filter: blur(100px);
        border: 1px none rgba(255, 8, 8, 0.734);
        justify-content: space-between;
    }

    .non-active-nav-item .nav-number {
        padding-right: 10px;
        font-weight: 800;
        text-decoration: none;
    }

    .nav-link {
        margin-left: 0%;
        padding-left: 0;
    }

    .nav-link:nth-of-type(1) {
        margin-left: 10%;
    }

    .nav-link:nth-of-type(2) {
        position: relative;
        right: 10%;
    }

    .nav-link:nth-of-type(3) {
        position: relative;
        right: 10%;
    }

    .nav-link:nth-of-type(4) {
        position: relative;
        right: 20%;
    }

    .active-nav-item .nav-test {
        text-decoration: underline;
        text-underline-position: below;
    }

    .active-nav-item .nav-number {
        padding-right: 10px;
        font-weight: 800;
        text-decoration: none;
    }

    .active-nav-item {
        display: flex;
        flex-direction: row;
        width: 30px;
        height: 30px;
        padding: 30px 30px 30px 0px;
        color: white;
        font-size: 20px;
        font-weight: lighter;
        text-decoration: none;
    }
    
    .non-active-nav-item {
        display: flex;
        flex-direction: row;
        height: 30px;
        width: 30px;
        padding: 30px 30px 30px 0px;
        color: white;
        font-size: 20px;
        font-weight: lighter;
        text-decoration: none;
    }
</style>