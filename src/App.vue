<template>
    <AppHeader />
    <main ref="main">
        <TitleScreen />
        <HomeAboutSection fullScreen/>
        <ProjectsSection fullScreen/>
        <AppSection fullScreen>
            <LangTextCont>
                <LangText lang="en">This text is in English</LangText>
                <LangText lang="ua">Цей текст написано Українською</LangText>
            </LangTextCont>
        </AppSection>
    </main>
    <AppFooter />
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import TitleScreen from './components/TitleScreen.vue';
    import HomeAboutSection from './components/HomeAboutSection.vue';
    import ProjectsSection from './components/ProjectsSection.vue';
    import AppFooter from './components/AppFooter.vue';
    import LangText from './components/LangText.vue';
    import LangTextCont from './components/LangTextCont.vue';
    import AppSection from './components/AppSection.vue';

    export default {
        name: 'App',
        components: {
            AppHeader,
            TitleScreen,
            HomeAboutSection,
            ProjectsSection,
            AppFooter,
            LangText,
            LangTextCont,
            AppSection
        },
    }
</script>

<style>
    * {
        box-sizing: border-box;
        font-family: "Times New Roman"
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
