<template>
    <AppHeader />
    <div class="header-background"></div>
    <main>
        <TitleScreen />
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
            HomeAboutSection,
        }
    }
</script>

<style>
* {
    box-sizing: border-box;
}

::selection{
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

.container {
    width: 100%;
    padding: 0 7em;
}

.header-background {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 3.2em;
    background-color: black;
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
