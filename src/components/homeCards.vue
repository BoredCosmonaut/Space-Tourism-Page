<template>
    <div class="card-inside">
        <div class="card-inside-left">
            <h2 class="want-go">SO,YOU WANT TO TRAVEL TO</h2>
            <h1 class="space">SPACE</h1>
            <p class="space-text">
                                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind 
                                of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <p class="explore">Explore</p>
    </div>
</template>

<script setup>

</script>

<style scoped>

    .card-inside {
        display: flex;
        flex-direction: row;
        width: 90%;
        height: auto;
        margin: auto;
        align-items: center; 
    }

    .card-inside-left {
        display: flex;
        flex-direction: column;
        color: white;
        width: 50%;
        margin-top: 10%;
        margin-left: 20%;
        text-align: left;
    }

    .want-go {
        font-size: 25px;
        font-weight: bold;
    }

    .space {
        font-size: 70px;
        font-weight: bold;
        margin-top: 2%;
    }

    .space-text {
        width: 55%;
        font-size: 15px;
        margin-top: 3%;
        line-height: 25px;
    }

    .explore {
        color: black;
        padding: 80px 45px;
        border-radius: 50%;
        background-color: white;
        margin-top: 10%;
        font-size: 50px;
        font-weight: lighter;
    }
</style>