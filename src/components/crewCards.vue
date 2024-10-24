 <template>
    <main>
        <Transition name="fade">
            <div class="info-box-container" v-if="selectedCrew" :key="selectedCrew.name">
                <div class="image-container">
                    <Transition name="fade">
                    <img :src="selectedCrew.images.webp" alt="">
                    </Transition>
                </div>
                <div class="text-container">
                    <Transition name="fade">
                    <div class="crew-info-container">
                        <p class="meet"><span class="meet-number">02 </span>MEET YOUR CREW</p>
                        <p class="role">{{ selectedCrew.role }}</p>
                        <p class="name">{{ selectedCrew.name }}</p>
                        <p class="bio">{{ selectedCrew.bio }}</p>
                    </div>
                    </Transition>
                    <div class="select-crew">
                        <p 
                            v-for="(crew,index) in crews"
                            :key="index"
                            @click="selectCrew(index)"
                            :class="[activeCrew(crew)? 'active-button crew-button':'non-active-button crew-button']"
                        >
                            
                        </p>
                    </div>
                </div>
            </div>
        </Transition>
    </main>
 </template>

 <script setup>
    import axios from 'axios'
    import { onMounted, ref } from 'vue';
    
    const crews = ref([]);
    let selectedCrew = ref(null);

    const selectCrew = (index) => {
        console.log("changing the rew to:", crews.value[index].name)
        selectedCrew.value = crews.value[index]
    }

    const activeCrew = (crew) => {
        return selectedCrew.value === crew;
    }

    onMounted(async () => {
    try {
        const response = await axios.get('/data.json');
        crews.value = response.data.crew;
        setTimeout(() => {
            if (crews.value.length > 0) {
                selectedCrew.value = crews.value[0];  // Add delay before setting crew
            }
        }, 50);
    } catch(error) {
        console.log("Error while getting json:", error);
    }
});
</script>

<style scoped>
    main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
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

    .text-container .fade-enter-active, .text-container .fade-leave-active {
    transition: opacity 1s ease;
    }

    .text-container .fade-enter, .text-container .fade-leave-to {
        opacity: 0;
    }

    .text-container .fade-enter-to, .text-container .fade-leave {
        opacity: 1;
    }

    .meet {
        font-size: 22px;
        margin-bottom: 10%;
        font-weight: lighter;
    }

    .meet-number {
        color: green;
    }

    .info-box-container {
        width: 80%;
        display: flex;
        flex-direction: row-reverse;
        margin: auto;
        transition: all 0.5s;
        position: relative;
    }

    .image-container {
        width: 50%;
        margin-left: 5%;
    }

    .text-container {
        width: 60%;
        height: auto;
        margin-top: 5%;
    }

    .crew-info-container {
        width: 100%;
        color: white;
    }

    .role {
        margin-top: 3%;
        font-size: 50px;
        font-weight: lighter;
    }

    .name {
        font-weight: bold;
        margin-top: 3%;
        font-size: 75px;
    }

    .bio {
        width: 70%;
        margin-top: 4%;
        font-size: 18px;
        line-height: 25px;
    }

    .select-crew {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10%;
    }

    .crew-button {
        width: 20px;
        height: 20px;
        border: 2px white solid;
        border-radius: 50%;
    }

    .crew-button:hover {
        cursor: pointer;
    }

    .active-button {
        background-color: white;
        border-color: white;
    }

    .non-active-button {
        background-color: gray;
        border-color: gray;
    }
</style>