<template>
    <a class="min-link">
        <slot></slot>
    </a>
</template>
<script>

    export default {
        name: "MinLink",
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
