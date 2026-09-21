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

<style scoped>

    h2 {
        margin: 0;
        /*margin-top: 1.2rem;*/
        text-align: center;
        font-weight: normal;
    }

    hr {
        margin: 1.2rem auto 2rem auto;
        width: 75%;
    }

</style>
