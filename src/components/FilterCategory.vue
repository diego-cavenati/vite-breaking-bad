<script>
import { store as state } from '';
export default {
    name: 'FilterCategory',
}
</script>

<template>
    <div class="filter container">
        <select v-model="state.selectCategory" @change="$emit('filterByCategory')">
            <option value="">Select Category</option>
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Bette Call Soul">Bette Call Soul</option>
        </select>
    </div>
</template>