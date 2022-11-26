
<script>
import ActorCard from './ActorCard.vue';
import { store } from '../store.js';
export default {
    name: 'ActorsList',
    components: {
        ActorCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container p-5 bg-white">

        <!-- <div class="alert dark" role="alert">
            <strong>Found {{ store.actors.length }}</strong> Characters
        </div> -->

        <div class="row row-cols-1 row-cols-md-5 g-4">
            <ActorCard v-for="actor in store.actors" :actor="actor" />
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>