<template>
    <section class="title">
        <div class="container">
            <h1>Hi, I'm Pryt Liubomyr</h1>
            <div class="buttons">
                <LinkButton href="#">Hello!</LinkButton>
                <LinkButton href="#">Hi!</LinkButton>
            </div>
        </div>
        <ShellBackground />
    </section>
</template>
<script>
import LinkButton from './LinkButton.vue';
import ShellBackground from './ShellBackground.vue';

export default {
    name: 'TitleScreen',
    components: {
        ShellBackground,
        LinkButton
    }
}
</script>
<style>
section{
    display: block;
    min-height: 100vh;
}

.title{
    position: relative;
    z-index: 2;
    height: 100vh;
}

.title .container{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 5em;
    /*padding-top: 10em;*/
}

.title h1{
    font-size: 2.8rem;
    text-align: center;
    margin: 0;
}

.buttons{
    display: flex;
    width: 100%;
    gap: 5em;
    justify-content: center;
    flex-wrap: wrap;
}
.link-button{
    flex-basis: 15em;
}
</style>
