<template>
    <TextButton class="button" ref="button" @click="change">
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
        methods: {
            change() {
                switch (this.langState.current) {
                    case 'en':
                        this.langState.current = 'ua';
                        break;
                    case 'ua':
                        this.langState.current = 'en';
                        break
                    default:
                        console.error('langState', this.langState);
                        break
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
