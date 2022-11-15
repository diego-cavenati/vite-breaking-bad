<script>
import { store as state } from '../store'
export default {
    name: 'AppMain',
    components: {
        ActorsList,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <main>
        <div class="filter container">
            <select class="" name="" id="">
                <option value="">Select Category</option>
            </select>
        </div>
        <div class="actors">

            <div class="container p-5 bg-white">

                <div class="alert alert-primary" role="alert">
                    <strong>Found 62</strong> characters
                </div>

                <div class="row row-cols-1 row-cols-md-5">
                    <ActorCard v-for="actor in state.actors" :actors="actor" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>