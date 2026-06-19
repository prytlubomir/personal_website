<template>

    <div class="container">
        <slot></slot>
    </div>

</template>

<style scoped>
    .container {
        width: 100%;
        padding: 0 7em;
    }

</style>

<script>

    export default {
        name: "ContentLimiter",
    }

</script>
