<template>
    <p class="pill">
        <slot></slot>
    </p>
</template>
<script>
    export default {
        name: "BasePill",
    }
</script>
<style scoped>
    .pill {
        padding: 0.65em 1.35em;
        /*padding: 1em 2em;*/
        color: #f7f7f7;
        /*background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.23) 0%, transparent 42%),
            linear-gradient(165deg, #4a4a4a 0%, #2c2c2c 42%, #1c1c1c 100%);*/
        text-decoration: none;
        text-align: center;
        border-radius: 20em;
        border: 1px solid #4c4c4c;
        /*box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.16),
            inset 0 -1px 2px rgba(0, 0, 0, 0.5),
            0 0.35em 0.7em rgba(0, 0, 0, 0.48);*/
        /*text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);*/
        background-color: black;
        /*background: radial-gradient(120% 130% at 100% 100%,#ffffff12 0%,#0000 55%),radial-gradient(140% 120% at 0 0,#ffffff38 0%,#ffffff0f 40%,#0000 66%),#ffffff12;*/
        border: none;
        margin: 0;
        /*box-shadow: 0 8px 32px #00000047,inset 0 1px 1px #ffffff4d,inset 1px 0 1px #ffffff24,inset 0 -1px 1px #ffffff0f,inset -1px 0 1px #ffffff0d;*/
    }

</style>
