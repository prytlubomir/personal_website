<template>
    <TextButton class="show-button" v-bind:="$attrs" ref="showButton" :disabled="isDisabled">
        <span class="glyph" rel="icon">{{ glyph }}</span> 
        <slot></slot>
        <span class="card-count" ref="showCount">({{ currentEstimate }})</span>
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
            },
            estimate: {
                type: Number, 
                default: 0
            },
            hideEstimate: Boolean,
        },
        methods: {
            updateEstimate(newEstimate) {
                this.currentEstimate = newEstimate;
            }
        },
        data() {
            return {
                currentEstimate: this.estimate,
                isDisabled: this.$props.disabled,
            }
        },
        watch: {
            currentEstimate(n) {
                if (n == 0) {
                    this.isDisabled = true;
                } else {
                    this.isDisabled = false;
                }
            },
        },
        mounted() {
            if (this.hideEstimate) {
                this.$refs.showCount.classList.add('hidden');
            }
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

    .hidden {
        display: none;
    }

    /*.show-button::before {
        content: "+";
    }*/

</style>
