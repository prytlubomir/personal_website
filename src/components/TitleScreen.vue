<template>
    <section class="title">
        <ContentLimiter class="container">
            <h1><span>Hi, I'm</span> <span><span>Liubo&shy;myr</span> <span>Pryt</span></span></h1>
            <div class="intro">
                <p>I'm a programmer, passionate about developing usefull software!</p>
                <p class="calling"><span>Look at my CV</span> <span>or</span> <span>contact me!</span></p>
            </div>
            <div class="buttons">
                <LinkButton class="button" href="#">CV</LinkButton>
                <LinkButton class="button" href="#">Email</LinkButton>
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

    h1 {
        font-size: 2.8rem;
        text-align: center;
        margin: 0 0 .1em 0;
    }

    h1 span {
        display: inline-block;
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

    @media screen and (max-width: 600px) {
        .buttons {
            gap: 2em 1em;
        }
    }
    
    @media screen and (max-width: 530px) {
        .button {
            flex-basis: 90%;
        }
    }

    @media screen and (max-width: 470px) {
        h1 {
            font-size: 2rem;
        }
    }
    
    @media screen and (max-width: 300px) {
        .button {
            flex-basis: 100%;
        }
    }
    
</style>
