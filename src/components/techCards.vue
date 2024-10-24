<template>
    <main>
        <Transition name="fade">
        <div class="info" v-if="selectedTech" :key="selectedTech.name">
            <div class="info-container">
                <div class="select-buttons-container">
                    <p
                        v-for="(tech,index) in techs"
                        :key="index"
                        @click="selectTech(index)"
                        :class="[activeTech(tech)? 'active-button planet-button': 'non-active-button planet-button']"
                    >
                        {{ index }}
                    </p>
                </div>
                <div class="info-box">
                    <p class="term">The Terminology ...</p>
                    <p class="launch">{{ selectedTech.name }}</p>
                    <p class="desc">{{ selectedTech.description }}</p>
                </div>
            </div>
            <div class="image-container">
                <Transition name="fade">
                <img :src="selectedTech.images.portrait" alt="">
                </Transition>
            </div>
        </div>
    </Transition>
    </main>
</template>

<script setup> 
    import axios from 'axios'
    import { onMounted, ref } from 'vue';
    
    const techs = ref([]);
    let selectedTech = ref(null);

    const selectTech = (index) => {
        console.log("changing the retech to:", techs.value[index].name)
        selectedTech.value = techs.value[index]
    }

    const activeTech = (tech) => {
        return selectedTech.value === tech;
    }

    onMounted( async () => {
        try{
            const response = await axios.get('/data.json');
            techs.value = response.data.technology;
            if (techs.value.length > 0) {
                selectedTech.value = techs.value[0];
                } else {
                console.log("No tech data found");
            }
        } catch(error) {
            console.log("Error while getting json:",error);
        }
    })
</script>
    
<style scoped>
    main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1.5s ease;
    }
    .fade-enter, .fade-leave-to {
        transition: opacity 1.5s ease;
        opacity: 0;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;
        transition: opacity 0.5s ease;
    }

    .image-container .fade-enter-active, .image-container .fade-leave-active {
    transition: opacity 1.5s ease;
    }
    .image-container .fade-enter, .image-container .fade-leave-to {
        opacity: 0;
    }
    .image-container .fade-enter-to, .image-container .fade-leave {
        opacity: 1;
    }

    .info {
        overflow: hidden;
        width: 90%;
        display: flex;
        flex-direction: row;
        margin: auto;
        top: 20%;
        right: 2%;
        margin-left: 14%;
        transition: all 1s;
        position: absolute;
    }

    .info-container {
        width: 60%;
        height: auto;
        display: flex;
        flex-direction: row;
        color: white;
        margin-top: 5%;
    }

    .select-buttons-container{
        display: flex;
        flex-direction: column;
        width: auto;
        height: 60%;
        justify-content: space-between;
    }

    .planet-button {
        padding: 30px 32px;
        background-color: none;
        border: 2px solid gray;
        border-radius: 50%;
        font-size: 20px;
    }

    .planet-button:hover {
        cursor: pointer;
    }

    .active-button {
        background-color: white;
        color: black;
    }

    .info-box {
        width: 90%;
        height: 60%;
        margin-left: 5%;

    }

    .term {
        font-size: 30px;
        font-weight: lighter;
    }

    .launch {
        font-size: 90px;
        font-weight: lighter;
        margin-top: 2%;
    }

    .desc {
        margin-top: 2%;
        width: 50%;
        font-size: 15px;
        line-height: 20px;
    }

    .info-image-container {
        width: 40%;
    }


</style>