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
.link-button{
    display: block;
    padding: 1em 2em;
    color: white;
    background: black;
    text-decoration: none;
    text-align: center;
    border-radius: 20em;
}
.link-button:hover{
    background: white;
    color: black;
}
.link-button:active{
    background: #aaaaff;
}

</style>