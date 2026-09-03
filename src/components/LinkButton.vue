<template>
    <a class="link-button">
        <BasePill class="pill"><slot></slot></BasePill>
    </a>
</template>
<script>
import BasePill from './BasePill.vue';

    export default {
        name: "LinkButton",
        components: {
            BasePill,
        }
    }
</script>
<style scoped>

    .link-button {
        text-decoration: none;
    }

    .pill {
        --hover-ani-duration: .1s;
        display: block;
        padding: 1em 2em;
        color: white;
        background: rgb(1, 1, 1);
        text-align: center;
        border-radius: 20em;
        transition: color var(--hover-ani-duration), background var(--hover-ani-duration);
    }

    .pill:hover {
        background: #aaaaff;
        color: black;
        transition: color var(--hover-ani-duration), background var(--hover-ani-duration);
    }

    .pill:active {
        background: white;
        box-shadow: none;
    }

</style>
