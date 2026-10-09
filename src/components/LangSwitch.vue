<template>
    <TextButton class="button" ref="button" @click="langState.change()">
        {{ langState.current }}
    </TextButton>
</template>
<script>
    import TextButton from './TextButton.vue';
    import { langState } from './langState.js';


    export default {
        name: "LangSwitch",
        components: {
            TextButton,
        },
        props: {
            lang: {
                type: String,
                default: langState.current,
                get(value) {
                    return value.toLowerCase();
                }
            }
        },
        data() {
            return { langState }
        },
    }
</script>
<style scoped>
    .button {
        text-transform: uppercase;
        color: white;
    }
</style>
