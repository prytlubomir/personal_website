<template>
    <div class="content-controls">
        <ContentLimiter class="content-limiter">
            <nav class="controls">
                <div class="show">
                    <ShowMoreButton :estimate="currentGragual" @click="$emit('show-more')" class="show-button sh-b-more" ref="showMore"> Show more
                    </ShowMoreButton>
                    <ShowMoreButton :estimate="currentTotal" @click="$emit('show-all')" class="show-button sh-b-all"
                        ref="showAll"> Show all </ShowMoreButton>
                </div>
                <div class="hide">
                    <ShowMoreButton @click="$emit('hide-all')" class="show-button sh-h-extra" ref="hideExtra" glyph="–"
                        hideEstimate>Hide extra</ShowMoreButton>
                </div>
            </nav>
        </ContentLimiter>
        <div class="background"></div>
    </div>
</template>
<script>
    import ContentLimiter from './ContentLimiter.vue';
    import ShowMoreButton from './ShowMoreButton.vue';


    export default {
        name: "DisclosureControls",
        events: ["show-more", "show-all", "hide-all"],
        components: {
            ShowMoreButton,
            ContentLimiter
        },
        props: {
            totalEstimate: {
                type: Number,
                default: 0
            },
            gradualEstimate: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                currentTotal: this.totalEstimate,
                currentGragual: this.gradualEstimate,
            }
        },
        watch: {
            currentTotal() {
                this.$refs.showAll.updateEstimate(this.currentTotal);
            },
            currentGragual() {
                this.$refs.showMore.updateEstimate(this.currentGragual);
            }
        },
        methods: {
            updateTotal(newTotal) {
                this.currentTotal = newTotal;
            },
            updateGradual(newGradual) {
                this.currentGragual = newGradual;
            },
        }
    }
</script>
<style scoped>

    .content-controls {
        box-sizing: content-box;
        position: relative;
        /*height: 1.2rem;*/
        /*padding: 1rem 0;*/
        margin-top: 1rem;
    }

    .content-controls .controls {
        position: relative;
        display: flex;
        z-index: 1;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .content-controls .show-button {
        margin: 1rem 0;
    }

    .content-controls .show {
        display: flex;
        flex-wrap: wrap;
        gap: 0 3rem;
    }

    /*.content-controls .show-button {
    position: relative;
}

.content-controls .show-button::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 1em;
    height: 1px;
    width: inherit;
}

.content-controls .show-button:hover::after{
    background-color: currentColor;
}*/

    .content-controls .background {
        position: absolute;
        width: 100%;
        /*height: 3.2rem;*/
        height: 100%;
        top: 0;
        left: calc(var(--content-limiter-padding) * -1);
        z-index: 0;
        background-color: #000;
    }
</style>
