<template>
    <TextButton class="show-button" v-bind:="$attrs" ref="showButton">
        <span class="glyph" rel="icon">{{ glyph }}</span> 
        <slot></slot>
        <span class="card-count" ref="showCount">({{ cardCount }})</span>
    </TextButton>
</template>
<script>
    import TextButton from './TextButton.vue';

    export default {
        name: "ShowMoreButton",
        components: {
            TextButton,
        },
        props: {
            cardsToShow: Number, 
            glyph: {
                type: String,
                default: "+"
            }
        },
        data() {
            return {
                cardCount: this.cardsToShow
            }
        },
        watch: {
            cardCount(n) {
                if (n == 0) {
                    this.$refs.showCount.classList.add('zero');
                } else {
                    this.$refs.showCount.classList.remove('zero');
                }
            }
        },
        mounted() {
            document.addEventListener("updateCount", this.toggleVisibility);
        }
    }
</script>
<style scoped>

    .show-button {
        display: flex;
        font-size: 1rem;
        color: #ddd;
        --darker-color: #777777;
        /*gap: 1ex;*/
    }

    .show-button:hover:enabled {
        --darker-color: #888888;
    }

    .show-button .glyph {
        padding-right: 1.25rem;
        color: var(--darker-color);
    }

    .show-button .card-count {
        padding-left: 1ch;
        color: var(--darker-color);
    }

    .zero {
        display: none;
    }

    /*.show-button::before {
        content: "+";
    }*/

</style>
