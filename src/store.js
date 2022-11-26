import { reactive } from 'vue'

import axios from 'axios'

export const store = reactive({
    actors: null,
    loading: true,
    errorMessage: null,
    API_url: 'https://www.breakingbadapi.com/api/characters',
    selectCategory: '',
    categoryParameter: 'category',
    callApi(url) {
        console.log(this.selectCategory);
        if (this.selectCategory !== '') {
            url += `?${this.categoryParameter}=${this.selectCategory}`
        }

        axios
            .get(url)
            .then(response => {
                this.actors = response.data
            })
            .catch(err => {
                console.error(err.message);
                this.errorMessage = err.message
            })
    }
})