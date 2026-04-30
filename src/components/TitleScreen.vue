<template>
    <section class="title">
        <div class="container">
            <h1>Hi, I'm Pryt Liubomyr</h1>
        </div>
        <ShellBackground />
    </section>
</template>
<script>
import ShellBackground from './ShellBackground.vue';

export default {
    name: 'TitleScreen',
    components: {
        ShellBackground
    }
}
</script>
<style>
section{
    display: block;
    min-height: 100vh;
}

.title{
    height: 100vh;
}

.title .container{
    position: absolute;
    padding-top: 10em;
}

.title h1{
    text-align: center;
}
</style>
