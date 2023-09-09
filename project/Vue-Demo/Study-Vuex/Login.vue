<template>
<p>{{ store.getters.getUser }}</p>
</template>

<script>
    // ...
method: {
        // ...
        store.dispatch('asyncUpdate', user)
    }
</script>

<style>
</style>