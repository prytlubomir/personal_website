<template>
    <section class="section" ref="section">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: "AppSection",
        props: {
            fullScreen: Boolean,
        },
        mounted() {
            if (this.fullScreen) {
                this.$refs.section.classList.add('full-screen');
            }
        }
    }
</script>

<style scoped>

    .section {
        padding: 1.2rem 0;
        background-color: #1a1a1a;
        color: #afafaf;
        font-size: 1.2em;
        word-spacing: .2em;

    }

    .full-screen {
        min-height: 100vh;
    }

</style>
