<template>
    <a class="link-button">
        <slot></slot>
    </a>
</template>
<script>
    export default {
        name: "LinkButton",
    }
</script>
<style>
    .link-button {
        --hover-ani-duration: .1s;
        display: block;
        padding: 1em 2em;
        color: white;
        background: rgb(1, 1, 1);
        text-decoration: none;
        text-align: center;
        border-radius: 20em;
        /*box-shadow: 0px 0px 1000px #303030;*/
        transition: color var(--hover-ani-duration), background var(--hover-ani-duration);
    }

    .link-button:hover {
        background: #aaaaff;
        color: black;
        transition: color var(--hover-ani-duration), background var(--hover-ani-duration);
    }

    .link-button:active {
        background: white;
        box-shadow: none;
    }

</style>
