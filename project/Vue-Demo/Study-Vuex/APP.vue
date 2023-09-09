<template>

</template>

<script>
export default {
    name: 'APP',
    mounted() {
        window.addEventListener('unload', this.saveState)
    },
    methods: {
        saveState() {
            window.sessionStorage.setItem('state', JSON.stringify(store.state))
        }
    }
}
</script>

<style>
</style>