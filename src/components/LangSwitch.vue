<template>
    <TextButton class="button" ref="button">
        {{ lang }}
    </TextButton>
</template>
<script>
    import TextButton from './TextButton.vue';


    export default {
        name: "LangSwitch",
        components: {
            TextButton,
        },
        props: {
            lang: {
                type: String,
                default: 'en',
                get(value) {
                    return value.toLowerCase();
                }
            }
        }
    }
</script>
<style scoped>
    .button {
        text-transform: uppercase;
        color: white;
    }
</style>
