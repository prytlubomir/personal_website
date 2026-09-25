<template>
    <AppSection class="projects" id="projects">
        <div class="projects-layout">
            <ContentLimiter class="content-limiter">
                <SectionHeading>My projects</SectionHeading>
            </ContentLimiter>
            <ContentLimiter class="content-limiter project-cards">
                <div class="project-layout" ref="projectCards">
                    <ProjectCard v-for="project in projects" class="project-card hidden" :key="project.name"
                        :src="project.img" :projectName="project.name" :imgType="project.type" :href="project.href">
                        {{ project.text }}
                    </ProjectCard>
                </div>
            </ContentLimiter>
            <!-- <div class="content-controls">
                <ContentLimiter class="content-limiter">
                    <nav class="controls">
                        <div class="show">
                            <ShowMoreButton @click="showCardRows++" class="show-button sh-b-more" ref="showMore"> Show
                                more </ShowMoreButton>
                            <ShowMoreButton :estimate="projects.length" @click="showAll()" class="show-button sh-b-all"
                                ref="showAll"> Show all </ShowMoreButton>
                        </div>
                        <div class="hide">
                            <ShowMoreButton @click="showCardRows = defaultShowCardRows" class="show-button sh-h-extra"
                                ref="hideExtra" glyph="–" hideEstimate>Hide extra</ShowMoreButton>
                        </div>
                    </nav>
                </ContentLimiter>
                <div class="background"></div>
            </div> -->
            <DisclosureControls :totalEstimate="projects.length" @show-more="showCardRows++" @show-all="showAll()" @hide-all="showCardRows = defaultShowCardRows" ref="disclosureControls" />
        </div>
        <div style="width: 1ex; height: 1ex; background: red;">
            <!-- View in Chrome DevTools, or use "Edit as HTML", if in Firefox
                         .-.            .-.
                        /   \          /   \
                       |   _ \        / _   |
                       ;  | \ \      / / |  ;
                        \  \ \ \_.._/ / /  /
                         '. '.;'    ';,' .'
                           './ _    _ \.'
                           .'  a __ a  '.
                      '--./ _,   \/   ,_ \.--'
                     ----|   \   /\   /   |----
                      .--'\   '-'  '-'    /'--.
                          _>.__  -- _.-  `;
                        .' _     __/     _/
                       /    '.,:".-\    /:,
                       |      \.'   `""`'.\\
                        '-,.__/  _   .-.  ;|_
                        /` `|| _/ `\/_  \_|| `\
                       |    ||/ \-./` \ / ||   |
                        \   ||__/__|___|__||  /
                         \_ |_Happy Easter_| /
                    jgs .'  \ =  _= _ = _= /`\
                       /     `-;----=--;--'   \
                       \    _.-'        '.    /
                        `""`              `""`

                    Credit: Joan G. Stark (Spunk), https://www.asciiart.eu/art/784fca43f16ab5aa
                -->
        </div>
    </AppSection>
</template>

<script>
    import AppSection from './AppSection.vue';
    import ContentLimiter from './ContentLimiter.vue';
    import DisclosureControls from './DisclosureControls.vue';
    import ProjectCard from './ProjectCard.vue';
    import SectionHeading from './SectionHeading.vue';
    // import ShowMoreButton from './ShowMoreButton.vue';


    const defaultShowCardRows = 2;

    const response = await fetch("/mockProjects.json");
    const result = await response.json();
    const projects = result.sort(() => Math.random() - 0.5);


    export default {
        name: "ProjectSection",
        components: {
            AppSection,
            SectionHeading,
            ContentLimiter,
            ProjectCard,
            // ShowMoreButton,
            DisclosureControls,
        },
        methods: {
            cardsPerRow() {
                let contW = parseInt(this.cardLayoutStyles.getPropertyValue('width'));
                let [w, c, g] = [contW, this.cardW, this.gapW];
                let x = (w + g) / (c + g);
                return Math.floor(x);
            },
            remToPx(rem) {
                let fz = parseInt(getComputedStyle(document.documentElement).fontSize);
                return rem * fz;
            },
            showCards(rows = this.showCardRows) {
                let cards = this.$refs.projectCards.children
                let rowLength = this.cardsPerRow();

                this.$refs.disclosureControls.updateGradual(rowLength);

                let cardsToShow = rows * rowLength;
                for (let i = 0; i < cards.length; i++) {
                    if (i < cardsToShow) {
                        cards[i].classList.remove('hidden');
                    } else {
                        cards[i].classList.add('hidden');
                    }
                }
            },
            showAll() {
                // this.$refs.showMore.updateEstimate(0);

                let cards = this.$refs.projectCards.children;
                let totalRows = cards.length / this.cardsPerRow();
                this.showCardRows = totalRows;
            }
        },
        mounted() {

            this.cardLayoutStyles = getComputedStyle(this.$refs.projectCards);

            this.gapW = parseInt(this.cardLayoutStyles.getPropertyValue('gap'));
            this.cardW = parseInt(this.cardLayoutStyles.getPropertyValue('--project-card-width'));
            this.cardW = this.remToPx(this.cardW);

            this.showCards();
            this.$refs.disclosureControls.updateGradual(this.cardsPerRow());

            window.onresize = () => {
                this.showCards();
                // this.projects.push(
                //     {
                //         "name": "Personal website",
                //         "img": "/logov5.svg",
                //         "type": "icon",
                //         "href": "",
                //         "text": "My website made with Vue.js v3. You're using it right now."
                //     },
                // );
                // console.log(projects.length)
            }

        },
        watch: {
            showCardRows() {
                this.showCards();
            },
            'projects.length'() {
                console.log('projects modified');
                this.$refs.disclosureControls.updateTotal(projects.length);
            }
        },
        data() {
            return {
                projects,
                defaultShowCardRows,
                showCardRows: defaultShowCardRows,
            };
        }
    }
</script>

<style scoped>


    .hidden {
        display: none;
    }

    .projects {
        box-sizing: border-box;
        /*height: 100vh;*/
        /*display: flex;*/
        /*flex-direction: column;*/
        /*min-height: calc(var(--project-card-height) + var(--gap));*/
        /*overflow: hidden;*/
    }

    .content-limiter {
        /*height: 100%;*/
        /*overflow: hidden;*/
    }

    .projects-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
    }

    /*@property --row-length {
        syntax: "<integer>";
        inherits: true;
        initial-value: 0;
    }*/

    .project-cards {
        --gap: 3rem;
        --row-height: calc(var(--project-card-height) + var(--gap));
        --show-rows: 2;
        --view-height: calc(var(--row-height) * var(--show-rows) + 0px);
        /*--layout-width: calc(100vw - calc(var(--content-limiter-padding) * 2));*/
        /*--row-length: round(
            down,
            calc(
                calc(var(--layout-width) + var(--gap))
                /
                calc(var(--project-card-width) + var(--gap))
            )
        );*/
        /*flex-basis: var(--view-height);*/
        min-height: var(--project-card-height);
        /*overflow: hidden;*/
        /*padding: 0 0;*/
        /*max-height: 100%;*/
    }

    /*.project-cards::before {
        counter-reset: row-length var(--row-length);
        content: counter(row-length);
    }

    .project-card:nth-child(1n+var(--row-length)){
        display: none;
    }*/

    .project-layout {
        /*box-sizing: content-box;*/
        display: grid;
        gap: var(--gap);
        /*padding: 3rem 0;*/
        height: 100%;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, var(--project-card-width));
        /*flex-basis: calc(var(--row-height) * 2);
        min-height: var(--project-card-height);*/
    }

    /*.content-controls {
        box-sizing: content-box;
        position: relative;
        margin-top: 1rem;
    }

    .content-controls .controls {
        position: relative;
        display: flex;
        z-index: 1;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .content-controls .show-button {
        margin: 1rem 0;
    }

    .content-controls .show {
        display: flex;
        flex-wrap: wrap;
        gap: 0 3rem;
    }*/

    /*.content-controls .show-button {
        position: relative;
    }

    .content-controls .show-button::after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        margin-top: 1em;
        height: 1px;
        width: inherit;
    }

    .content-controls .show-button:hover::after{
        background-color: currentColor;
    }*/

    /*.content-controls .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: calc(var(--content-limiter-padding) * -1);
        z-index: 0;
        background-color: #000;
    }*/

    @media screen and (max-width: 1600px) {
        .project-cards {
            --content-limiter-padding: 6em;
        }
    }

    @media screen and (max-width: 1050px) {
        .project-cards {
            --content-limiter-padding: 2em;
        }
    }

</style>
