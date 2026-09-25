<template>
    <div class="content-controls">
        <ContentLimiter class="content-limiter">
            <nav class="controls">
                <div class="show">
                    <ShowMoreButton @click="$emit('show-more')" class="show-button sh-b-more" ref="showMore"> Show more
                    </ShowMoreButton>
                    <ShowMoreButton :estimate="currentTotal" @click="$emit('show-all')" class="show-button sh-b-all"
                        ref="showAll"> Show all </ShowMoreButton>
                </div>
                <div class="hide">
                    <ShowMoreButton @click="$emit('hide-all')" class="show-button sh-h-extra"
                        ref="hideExtra" glyph="–" hideEstimate>Hide extra</ShowMoreButton>
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
            total: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {currentTotal: this.total}
        },
        methods: {
            updateTotal(newTotal) {
                this.currentTotal = newTotal;
            }
        }
    }
</script>
<style scoped>

    .min-link {
        text-decoration: none;
        color: #aaaaaa;
    }

    .min-link:hover {
        text-decoration: underline;
        color: #f8f8f8;
    }

</style>
