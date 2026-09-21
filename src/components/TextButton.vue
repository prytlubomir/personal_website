<template>
<button class="text-button" ref="textButton">
	<slot></slot>
</button>
</template>
<script>

    export default {
        name: "TextButton",
    }
</script>
<style scoped>

    .text-button {
        display: block;
        box-shadow: none;
        border: none;
        outline: none;
        background: none;
        padding: 0;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.2rem;
        color: #ddd;
        text-align: center;
    }

    .text-button:hover {
        color: white !important;
        /*text-decoration: underline;*/
    }

</style>
