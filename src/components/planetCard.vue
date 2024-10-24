<template>
    <main>
        <Transition name="fade">
            <div class="planet-menu" v-if="selectedPLanet" :key="selectedPLanet.name">
                <div class="planet-info-image-contain" >
                        <img :src="selectedPLanet.images.webp" alt="" class="planet-info-image">
                </div>
                <div class="planet-menu-left">
                    <p class="text"><span class="number">01</span>PICK YOUR DESTINATION</p>
                    <div class="button-box">
                        <p
                        v-for="(planet,index) in planets"
                        :key="index"
                        @click="selectPLanet(index)"
                        :class="[activePlanet(planet)? 'active-button planet-button': 'non-active-button planet-button']"
                        >
                            {{ planet.name }}
                        </p>
                    </div>
                    <div class="planet-info">
                        <p class="planet-name">{{ selectedPLanet.name }}</p>
                        <p class="planet-text">{{ selectedPLanet.description }}</p>
                        <div class="line-div"></div>
                        <div class="text-box-container">
                            <div class="text-box">
                            <p class="average">AVG. DISTANCE</p>
                            <p class="distance">{{ selectedPLanet.distance }}</p>
                            </div>

                            <div class="text-box">
                            <p class="average">EST. TRAVEL TIME</p>
                            <p class="distance">{{ selectedPLanet.travel }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </main>
</template>

<script setup>
    import axios from 'axios'
    import { onMounted, ref } from 'vue';
    
    const planets = ref([]);
    
    let selectedPLanet = ref(null);

    let selectPLanet = (index) => {
        console.log("changing the planet to:", planets.value[index].name)
        selectedPLanet.value = planets.value[index];
    }

    const activePlanet = (planet) => {
        return selectedPLanet.value == planet;
    }

    onMounted( async () => {
        try{
            const response = await axios.get('/data.json');
            planets.value = response.data.destinations;
            setTimeout(() => {
            selectedPLanet.value = planets.value[0];
        }, 50);
            console.log('Selected Planet:', selectedPLanet.value);
        } catch(error) {
            console.log(error);
        }
    })
</script>

<style scoped>
    main {
        position: relative;
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter, .fade-leave-to {
        transform:0.5s ease;
        opacity: 0;
    }



    .text {
        font-size: 22px;
        margin-bottom: 10%;
        font-weight: lighter;
        color: white;
        position: relative;
        right: 80%;
        bottom: 10%;
    }

    .number {
        color: green;
        margin-right: 3%;
    }

    .planet-menu {
        position: absolute;
        display: flex;
        flex-direction: row;
        width: 90%;
        height: auto;
        align-self: center;
        margin-left: 15%;
        margin-top: 5%;
    }

    .planet-info-image-contain {
        width: 50%;
        height: auto;
    }

    .planet-info-image {
        transition: opacity 0.5s ease;
    }

    .planet-menu-left {
        width: 50%;
        position: relative;
        right: 10%;
    }

    .button-box {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .planet-button {
        margin-right: 3%;
        padding: 10px 0;
        font-size: 18px;
        color: white;
        font-weight: bold;
    }

    .planet-button:hover {
        cursor: pointer;
    }

    .active-button {
        border-bottom: solid 3px white;
    }

    .planet-info {
        display: flex;
        flex-direction: column;
        width: 60%;
        height: auto;
        margin-top: 3%;
    }

    .planet-name {
        font-size: 80px;
        color: white;
        font-weight: lighter;
        margin-top: 2%;
    }

    .planet-text {
        line-height: 30px;
        font-size: 15px;
        font-weight: 400;
        color: white;
    }

    .line-div {
        width: 100%;
        height: 0.1px;
        border-top: gray 1px solid;
        margin-top: 8%;
        margin-bottom: 5%;
    }

    .text-box-container {
        display: flex;
        flex-direction: row;
        color: white;
    }

    .text-box {
        display: flex;
        flex-direction: column;
    }

    .text-box:nth-of-type(1) {
        margin-right: 20%;
    }

    .average {
        font-size: 9px;
    }

    .distance {
        font-size: 35px;
        font-weight: 400;
    }
</style>