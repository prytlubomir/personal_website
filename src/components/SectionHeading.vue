<template>
    <div class="section-heading">
        <h2>
            <slot></slot>
        </h2>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "SectionHeading",
    }
</script>

<style>

    h2 {
        margin: 0;
        text-align: center;
    }

    hr {
        margin: 1.2rem auto;
        width: 75%;

    }

</style>
