<script>
import { store as state } from '../store';
import filterCategory from '';

export default {
    name: 'AppMain',
    components: {
        ActorsList,
        FilterCategory,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        callApi(url) {
            if (this.state.selectCategory, 'riga 21') {
                url += `?${this.state.categoryPatameter}=${this.state.selectCategory}`
            }
            axios
                .get(url)
                .then(response => {
                    this.state.actors = response.data;
                    this.state.loading = false;
                })
                .catch(err);
        },
        mounted() {
            this.callApi("this.state.API_url");
        }
    }
}
</script>

<template>
    <main>
        <FilterCategory @filterByCategory="callApi(state.API_url)" />

        <div class="actors">

            <div class="container p-5 bg-white">

                <div class="alert alert-primary" role="alert">
                    <strong>Found {{ state.actor.lenght }}</strong> characters
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