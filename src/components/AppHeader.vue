<template>
    <header class="header" ref="header">
        <div class="header-background" ref="headerBackground"></div>
        <ContentLimiter>
            <nav>
                <ul>
                    <li><a href="" class="nav-title"><img src="/logov5.svg" alt="Pryt Liubomyr"></a></li>
                    <li><a href="#about" class="nav-about">About</a></li>
                    <li><a href="#projects" class="nav-about">Projects</a></li>
                    <li><a href="#contacts" class="nav-contacts">Contacts</a></li>
                </ul>
                <div class="lang">EN</div>
            </nav>
        </ContentLimiter>
    </header>
</template>

<script>
    import ContentLimiter from './ContentLimiter.vue';

    export default {
        name: 'AppHeader',
        components: {
            ContentLimiter
        },
        mounted() {
            const header = this.$refs.header;
            const headerBackground = this.$refs.headerBackground;
            const headerHeight = header.offsetHeight;
            
            window.addEventListener('scroll', () => {
                let hPos = window.scrollY;


                if (hPos > headerHeight && !headerBackground.classList.contains('show')) {
                    console.log('added');
                    headerBackground.classList.add('show');
                } else if (hPos < headerHeight && headerBackground.classList.contains('show')) {
                    console.log('removed');
                    headerBackground.classList.remove('show');
                }
            });
        },
    }

</script>

<style>

:root {
    --header-height: 1.2em;
    --header-padding: 1em;
    --header-occupied-space: calc(var(--header-height) + var(--header-padding) * 2)
}

</style>

<style scoped>
    .header {
        position: fixed;
        z-index: 4;
        width: 100%;
        height: var(--header-height);
        padding: var(--header-padding) 0;
        box-sizing: content-box;
    }

    .header nav {
        display: flex;
        justify-content: space-between;
    }

    .header ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        gap: 2em;
    }

    .header a {
        text-decoration: none;
        color: #aaaaaa;
    }

    .header a:hover {
        text-decoration: underline;
        color: #f8f8f8;
    }

    .header .nav-title {
        color: #aaaaff;
        margin-right: 2em;
    }

    .header .nav-title img {
        height: var(--header-height);
    }

    .header-background {
        --hb-ani-duration: .1s;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: var(--header-occupied-space);
        top: calc(var(--header-occupied-space) * -1);
        background-color: black;
        transition: var(--hb-ani-duration) top;
    }

    .header-background.show {
        top: 0;
    }
    
</style>
