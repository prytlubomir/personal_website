<template>
    <section class="section">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: "AppSection",
    }
</script>

<style scoped>

    .section {
        padding: 1.2rem 0;
        background-color: #1a1a1a;
        color: #afafaf;
        /*line-height: 1.7em;*/
        font-size: 1.2em;
        word-spacing: .2em;

        /*box-shadow: inset -10px 10px 20px #3f3f3f;*/
    }

</style>
