<template>
    <AppSection class="about" id="about">
        <ContentLimiter>

            <SectionHeading>About me</SectionHeading>
            <p>I'm a Python-focused developer with 7 years of experience building desktop tools, web projects, and
                command-line utilities.</p>
            <p>I learn quickly, work independently, and enjoy solving practical problems
                by building reliable software.</p>
            <p>I have experience assisting with teaching a programming
                class, which strengthened my communication skills and ability to explain technical ideas clearly.</p>
            <p>I am particularly interested in building useful tools and continuing to develop as part of a
                collaborative
                team.</p>
            <h4>Languages</h4>
            <p>I'm fluent at multiple languages, and roughly understand a few more.</p>
            <ul>
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
        </ContentLimiter>
    </AppSection>
</template>

<script>
    import AppSection from './AppSection.vue';
    import ContentLimiter from './ContentLimiter.vue';
    import SectionHeading from './SectionHeading.vue';

    export default {
        name: "HomeAboutSection",
        components: {
            ContentLimiter,
            SectionHeading,
            AppSection,
        }
    }
</script>
<style scoped>
    .about {
        padding: 1.2rem 0;
        background-color: #1a1a1a;
        color: #afafaf;
        /*line-height: 1.7em;*/
        font-size: 1.2em;
        word-spacing: .2em;

        /*box-shadow: inset -10px 10px 20px #3f3f3f;*/
    }

    p {
        /*margin: 0;*/
    }

    p:last-child {
        /*margin-bottom: 0;*/
    }

    h2 {
        margin: 0;
        text-align: center;
    }

    hr {
        margin: 1.2rem auto;
        width: 75%;

    }

    ul {
        padding-left: 20px;
    }

    .about-lang {
        font-weight: bold;
    }
</style>
