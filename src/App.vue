<template>
    <AppHeader />
    <main>
        <TitleScreen />
        <AppHeader />
        <HomeAboutSection />
    </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import TitleScreen from './components/TitleScreen.vue';
import HomeAboutSection from './components/HomeAboutSection.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        TitleScreen,
        HomeAboutSection
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    background-color: rgba(20, 20, 20, 1);
    color: #f8f8f8;
}

.container {
    width: 100%;
    padding: 0 7em;
}

main .header {
    position: sticky;
    top: 0;
}

/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
