<template>
    <span class="localization" :lang='lang' ref='localization'>
        <slot></slot>
    </span>
</template>
<script>

    export default {
        name: "LocalizedText",
        props: {
            'lang': {
                type: String,
                default: 'en'
            }
        },
    }
</script>
<style scoped>
    .localization {
        display: none;
    }
</style>
