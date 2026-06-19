<template>
<header class="header">
    <ContentLimiter>
        <nav>
            <ul>
                <li><a href="" class="nav-title"><img src="/logov5.svg" alt="Pryt Liubomyr"></a></li>
                <li><a href="#about" class="nav-about">About</a></li>
                <li><a href="" class="nav-contacts">Contacts</a></li>
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
    }
}

</script>

<style>
.header {
    position: fixed;
    z-index: 4;
    width: 100%;
    height: 1.2em;
    padding: 1em 0;
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
    height: 1.2em;
}
</style>
