<template>
    <h1>Rick and Morty</h1>
    <ListCharacters />
</template>

<script>
import ListCharacters from '@/components/ListCharacters.vue'

export default {
    name: 'App',
    components: {
        ListCharacters
    }
}
</script>

<style lang="scss">

</style>
