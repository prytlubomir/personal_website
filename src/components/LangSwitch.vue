<template>
    <TextButton class="button" ref="button">
        <slot></slot>
    </TextButton>
</template>
<script>
    import TextButton from './TextButton.vue';


    export default {
        name: "LangSwitch",
        components: {
            TextButton,
        }
    }
</script>
<style scoped>
    .button {
        color: white;
    }
</style>
