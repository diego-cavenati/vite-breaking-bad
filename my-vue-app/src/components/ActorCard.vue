<script>
export default {

}
</script>

<template>
    <div class="col">
        <div class="actor card rounded-0 bg-dark h-100 p-2">
            <img :src="actor.img" :alt="actor.name">
            <div class="card-body">
                <h6>{{ actor.name }}</h6>
                <div class="category">{{ actor.category }}</div>
                <div class="status">{{ actor.status }}</div>
            </div>
        </div>
    </div>
</template>