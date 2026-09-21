<template>

    <div class="container">
        <slot></slot>
    </div>

</template>

<style scoped>
    .container {
        --content-limiter-padding: 14rem;
        width: 100%;
        padding: 0 var(--content-limiter-padding);
    }

    /*@media screen and (max-width: 1100px) {
        .container {
            padding: 0 1em;
        }
    }
    
    @media screen and (max-width: 1340px) {
        .container {
            padding: 0 7px;
        }
    }*/

    @media screen and (max-width: 1340px) {
        .container {
            --content-limiter-padding: 7rem;
        }
    }
    
    @media screen and (max-width: 790px) {
        .container {
            --content-limiter-padding: 1rem;
        }
    }

</style>

<script>

    export default {
        name: "ContentLimiter",
    }

</script>
