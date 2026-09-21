<template>
    <footer class="footer" id="contacts">
        <ContentLimiter>
            <!--
                - Email
                - LinkedIn
            -->
            <div class="footer-layout">
                <section>
                    <h4>Contacts</h4>
                    <ul>
                        <li><MinLink class="link" href="mailto:prytlubomyr@gmail.com">prytlubomyr@gmail.com</MinLink></li>
                        <li>+441234567890</li>
                    </ul>
                </section>
                <section class="socials">
                    <div class="wrapper">
                        <h4>Socials</h4>
                        <ul>
                            <li><MinLink class="link" href="">GitHub</MinLink></li>
                            <li><MinLink class="link" href="">LinkedIn</MinLink></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h4>Archive</h4>
                    <ul>
                        <li><MinLink class="link" href="">Summer 2026</MinLink></li>
                    </ul>
                </section>
            </div>
        </ContentLimiter>
    </footer>
</template>

<script>
    import ContentLimiter from './ContentLimiter.vue';
    import MinLink from './MinLink.vue';

    export default {
        name: "ContactSection",
        components: {
            ContentLimiter,
            MinLink,
        }
    }
</script>

<style scoped>
    .footer {
        background: #161616 !important;
        padding: 1.2rem 0;
        color: #afafaf;
        font-size: 1.2em;
        word-spacing: .2em;
    }

    .footer-layout {
        /*display: grid;
        grid-template-columns: repeat(3, 1fr);*/
        display: flex;
        justify-content: space-between;
    }

    .link {
        text-decoration: underline;
    }

    .socials .wrapper {
        margin-left: -50%;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0.5em 0;
    }

    @media screen and (max-width: 530px) {
        .footer-layout {
            flex-direction: column;
        }

        .socials .wrapper {
            margin-left: 0;
        }

        h4 {
            /*margin: 0;*/
        }
        
        ul {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            margin: 0;
            /*justify-content: space-between;*/
        }

        li::after {
            content: "|";
            overflow: hidden;
            display: inline-block;
            width: 2px;
            height: 0.5em;
            background-color: #afafaf;
            margin-left: 1rem;
        }

        ul li:last-child::after {
            /*content: ".";*/
            display: none;
            /*background-color: #fff;*/
        }

        /*.footer-layout section {
            margin-left: 0;
        }*/
    }
    
</style>
