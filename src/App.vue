<template>
    <AppHeader />
    <main ref="main">
        <TitleScreen />
        <HomeAboutSection />
        <ProjectsSection />
        <ContactSection />
    </main>
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import TitleScreen from './components/TitleScreen.vue';
    import HomeAboutSection from './components/HomeAboutSection.vue';
    import ContactSection from './components/ContactSecion.vue';
    import ProjectsSection from './components/ProjectsSection.vue';

    export default {
        name: 'App',
        components: {
            AppHeader,
            TitleScreen,
            HomeAboutSection,
            ContactSection,
            ProjectsSection
        },
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        scroll-padding-top: var(--header-occupied-space);
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

    .section:nth-child(2n+3) {
        background-color: #0a0a0a !important;
    }

</style>
