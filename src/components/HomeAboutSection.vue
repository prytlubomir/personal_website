<template>
    <AppSection class="about" id="about">
        <ContentLimiter class="container">
            <SectionHeading>About me</SectionHeading>
            <div class="centered">
                <div class="about-layout">
                    <section class="skills" ref="skills">
                        <h4>Skills</h4>
                        <ul class="skills-layout">
                            <li><BasePill class="skill">Python</BasePill></li>
                            <li><BasePill class="skill">JavaScript</BasePill></li>
                            <li><BasePill class="skill">Kivy</BasePill></li>
                            <li><BasePill class="skill">Django</BasePill></li>
                            <li><BasePill class="skill">Vue.js</BasePill></li>
                            <li><BasePill class="skill">PostgreSQL</BasePill></li>
                            <li><BasePill class="skill">SQLite3</BasePill></li>
                            <li><BasePill class="skill">Git</BasePill></li>
                            <li><BasePill class="skill">Docker</BasePill></li>
                            <li><BasePill class="skill">Github Actions</BasePill></li>
                            <li><BasePill class="skill">Unittest</BasePill></li>
                            <li><BasePill class="skill">Selenium</BasePill></li>
                            <li><BasePill class="skill">Figma</BasePill></li>
                            <li><BasePill class="skill">Inkscape</BasePill></li>
                            <li><BasePill class="skill">GIMP</BasePill></li>
                            <li><BasePill class="skill">Photoshop</BasePill></li>
                        </ul>
                    </section>
                    <section class="profile" ref="profile">
                        <h4>Profile</h4>
                        <p>I'm a Python-focused developer with 7 years of experience building desktop tools, web projects,
                        and
                        command-line utilities.</p>
                        <p>I learn quickly, work independently, and enjoy solving practical problems
                        by building reliable software.</p>
                        <p>I have experience assisting with teaching a programming
                        class, which strengthened my communication skills and ability to explain technical ideas
                        clearly.</p> 
                        <p>I am particularly interested in building useful tools and continuing to develop as part of a
                        collaborative
                        team.</p>
                    </section>
                    <section class="languages" ref="langs">
                        <h4>Languages</h4>
                        <ul class="lang-layout">
                            <li>
                                <span class="about-lang">English</span>
                                <span class="about-lang-sep"> - </span>
                                <span class="about-lang-level">fluent</span>
                            </li>
                            <li>
                                <span class="about-lang">Ukrainian</span>
                                <span class="about-lang-sep"> - </span>
                                <span class="about-lang-level">native</span>
                            </li>
                            <li>
                                <span class="about-lang">Slavic language group</span>
                                <span class="about-lang-sep"> - </span>
                                <span class="about-lang-level">rough understanging</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </ContentLimiter>
    </AppSection>
</template>

<script>
    import AppSection from './AppSection.vue';
    import ContentLimiter from './ContentLimiter.vue';
    import SectionHeading from './SectionHeading.vue';
    import BasePill from './BasePill.vue';

    export default {
        name: "HomeAboutSection",
        components: {
            ContentLimiter,
            SectionHeading,
            AppSection,
            BasePill,
        },
        mounted() {
            let profile = this.$refs.profile;
            let skills = this.$refs.skills;

            /** Make the taller element out of who occupy 2 rows to push a third element under a smaller element */
            function positionLangs() {
                if (skills.offsetHeight > profile.offsetHeight) {
                    profile.classList.remove('bigger');
                    skills.classList.add('bigger');
                } else {
                    skills.classList.remove('bigger');
                    profile.classList.add('bigger');
                }
            }

            positionLangs();
            window.onresize = positionLangs;
        },
    }
</script>
<style scoped>
    .about {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 1.2rem 0;
        color: #afafaf;
        font-size: 1.2em;
        word-spacing: .2em;
        /* I may add these back later */
        /*============================*/
        /*background-color: #161616;*/
        /*line-height: 1.7em;*/
        /*============================*/
    }

    .container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .centered {
        display: flex;
        flex-grow: 1;
        align-items: center;
    }
    
    .about-layout {
        display: grid;
        height: fit-content;
        flex-grow: 0;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        align-items: start;
        gap: 1rem;
    }

    .bigger {
        grid-row: span 2;
    }

    .about section{
        flex-basis: calc(50% - 0.5rem);
        flex-shrink: 0;
    }
    
    .skills-layout {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        flex-shrink: 0;
        gap: .5rem;
        list-style: none;
        padding: 0;
    }

    .skill {
        padding: .5em 1em;
    }

    :deep(hr) {
        margin-bottom: 1.2rem;
    }

    .lang-layout {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        padding-left: 20px;
    }

    .about-lang {
        font-weight: bold;
    }

    @media screen and (max-width: 1090px) {
        .bigger {
            grid-row: span 1;
        }
        .languages {
            grid-column: span 2;
        }
        .languages h4 {
            margin-bottom: 0;
        }
        .languages ul {
            margin-top: .5em;
        }
    }
</style>
