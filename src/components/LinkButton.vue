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
    background: rgb(1,1,1);
    text-decoration: none;
    text-align: center;
    border-radius: 20em;
    box-shadow: 0px 0px 1000px #303030;
}
.link-button:hover{
    background: #aaaaff;
    color: black;
}
.link-button:active{
    background: #aaaaff;
    box-shadow: none;
}

</style>