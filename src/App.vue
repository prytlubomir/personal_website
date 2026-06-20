<template>
    <AppHeader />
    <div class="header-background"></div>
    <main ref="main">
        <TitleScreen />
        <HomeAboutSection />
        <ContactSecion/>
    </main>
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import TitleScreen from './components/TitleScreen.vue';
    import HomeAboutSection from './components/HomeAboutSection.vue';
    import ContactSecion from './components/ContactSecion.vue';

    export default {
        name: 'App',
        components: {
            AppHeader,
            TitleScreen,
            HomeAboutSection,
            ContactSecion
        },
        computed: {
            // this.$refs.main.
        },
        mounted() {
            console.log(this.$refs.main)
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    ::selection {
        color: white;
        background-color: #87a9ff;

        text-shadow: #888 1px 1px 10px;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: rgba(20, 20, 20, 1);
        color: #f8f8f8;
    }

    .header-background {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 3.2em;
        background-color: black;
    }
</style>
