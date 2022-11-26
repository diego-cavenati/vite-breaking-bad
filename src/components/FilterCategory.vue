<script>
import { store } from '../store.js'
export default {
    name: 'FilterCategory',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="filter container">
        <select v-model="store.selectCategory" @change="$emit('filterByCategory')">
            <option value="">All</option>
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Better Call Saul">Better Call Saul</option>
        </select>
    </div>
</template>


<style lang="scss" scoped>

</style>