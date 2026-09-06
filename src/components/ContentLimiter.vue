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

    @media screen and (max-width: 790px) {
        .container{
            padding: 0 1em;
        }
    }

</style>

<script>

    export default {
        name: "ContentLimiter",
    }

</script>
