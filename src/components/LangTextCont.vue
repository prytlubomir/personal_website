<template>
    <span class="lang-cont" ref="langCont">
        <slot></slot>
    </span>
</template>
<script>
    export default {
        name: "LangTextCont",
        props: {
            lang: {
                type: String,
                default: 'en'
            }
        },
        data() {
            return { currentLang: this.lang }
        },
        methods: {
            localize() {
                let localizations = Array.from(this.$refs.langCont.children);
                this.selected = false;
                
                localizations.forEach((loc) => {
                    if (loc.getAttribute('lang') == this.currentLang) {
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
        }
    }
</script>
<style scoped>

    .localization.selected {
        display: inline;
    }

</style>
