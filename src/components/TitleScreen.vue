<template>
    <section class="title">
        <div class="container">
            <h1>Hi, I'm Pryt Liubomyr</h1>
            <div class="intro">
             <p>I'm a programmer, passionate about developing usefull software!</p>
             <p class="calling"><span>Look at my projects</span> <span>or</span> <span>hire me!</span></p>
            </div>
            <div class="buttons">
                <LinkButton href="#">GitHub</LinkButton>
                <LinkButton href="#">CV</LinkButton>
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
    /*gap: 5em;*/
    /*padding-top: 10em;*/
}

.intro{
    font-size: 1.3rem;
    text-align: center;
    color: #b0b0b0;
    margin-bottom: 2.5em;
}

.intro .calling{
    /*display: flex;*/
    /*text-align: left;*/
}

.title h1{
    font-size: 2.8rem;
    text-align: center;
    margin: 0 0 .1em 0;
}

.buttons{
    display: flex;
    width: 100%;
    gap: 1em 5em;
    justify-content: center;
    flex-wrap: wrap;
}
.link-button{
    flex-basis: 15em;
}
</style>
