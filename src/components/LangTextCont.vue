<template>
    <span class="lang-cont" ref="langCont">
        <slot></slot>
    </span>
</template>
<script>
    import { langState } from './langState.js';

    export default {
        name: "LangTextCont",
        props: {
            lang: {
                type: String,
                default: langState.current
            }
        },
        data() {
            return { langState }
        },
        watch: {
            'langState.current'() {
                this.localize();
            }
        },
        methods: {
            localize() {
                let localizations = Array.from(this.$refs.langCont.children);
                this.selected = false;
                
                localizations.forEach((loc) => {
                    if (loc.getAttribute('lang') == this.langState.current) {
                        this.selected = true;
                        loc.classList.add('selected');
                    } else {
                        loc.classList.remove('selected');
                    }
                })

                if (this.selected == false) {
                    localizations[0].classList.add('selected');
                }
            }
        },
        mounted() {
            this.localize();
        }
    }
</script>
<style scoped>

    :deep(.selected) {
        display: inline;
    }

</style>
