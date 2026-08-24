<template>
    <section class="title">
        <ContentLimiter class="container">
            <h1>Hi, I'm Pryt Liubomyr</h1>
            <div class="intro">
                <p>I'm a programmer, passionate about developing usefull software!</p>
                <p class="calling"><span>Look at my projects</span> <span>or</span> <span>hire me!</span></p>
            </div>
            <div class="buttons">
                <LinkButton class="button" href="#">GitHub</LinkButton>
                <LinkButton class="button" href="#">CV</LinkButton>
            </div>
        </ContentLimiter>
        <ShellBackground />
    </section>
</template>
<script>
    import ContentLimiter from './ContentLimiter.vue';
    import LinkButton from './LinkButton.vue';
    import ShellBackground from './ShellBackground.vue';

    export default {
        name: 'TitleScreen',
        components: {
            ShellBackground,
            LinkButton,
            ContentLimiter
        }
    }
</script>
<style scoped>

    .title {
        display: block;
        position: relative;
        z-index: 2;
        min-height: 100vh;
        height: 100vh;
        overflow: hidden;
    }

    .container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .intro {
        font-size: 1.3rem;
        text-align: center;
        color: #b0b0b0;
        margin-bottom: 2.5em;
    }

    .title h1 {
        font-size: 2.8rem;
        text-align: center;
        margin: 0 0 .1em 0;
    }

    .buttons {
        display: flex;
        width: 100%;
        gap: 1em 5em;
        justify-content: center;
        flex-wrap: wrap;
    }

    .button {
        flex-basis: 15em;
    }

    .button::before {
        content: "";
        position: absolute;
        pointer-events: none;
        inset: -500px;
        background: radial-gradient(
            ellipse 400px 300px at center,
            #aaaaaa -4000%,
            transparent 100%
        );
    }
</style>
