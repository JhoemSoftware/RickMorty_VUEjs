<template>
    <div class="character">
        <div class="character_info">
            <img :src="character.image" alt="imagen del personaje">
            <h3>{{ character.name }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['character']
}
</script>

<style>
.character, .character_info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>