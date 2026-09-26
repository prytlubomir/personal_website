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
            <DisplayControls 
                @show-more="showMore()"
                @show-all="showAll()"
                @hide-all="hideAll()"
                ref="displayControls" 
            />
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
    import DisplayControls from './DisplayControls.vue';
    import ProjectCard from './ProjectCard.vue';
    import SectionHeading from './SectionHeading.vue';


    const defaultVisibleRows = 2;

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
            DisplayControls,
        },
        methods: {
            remToPx(rem) {
                let fz = parseInt(getComputedStyle(document.documentElement).fontSize);
                return rem * fz;
            },
            rowLength() {
                let contW = parseInt(this.cardLayoutStyles.getPropertyValue('width'));
                let [w, c, g] = [contW, this.cardW, this.gapW];
                let x = (w + g) / (c + g);
                return Math.floor(x);
            },
            hiddenCards() {
                let total = this.projects.length;
                let rowLength = this.rowLength();
                let hidden = total - rowLength * this.visibleRows;

                if (hidden <= 0) {
                    hidden = 0;
                }
                return hidden
            },
            nextRowEstimate() {
                let rowLength = this.rowLength();
                let hidden = this.hiddenCards();

                if (hidden > rowLength) {
                    return rowLength;
                }
                return hidden;
            },
            updateView(rows = this.visibleRows) {
                let cards = this.$refs.projectCards.children
                let rowLength = this.rowLength();

                this.$refs.displayControls.updateGradual(this.nextRowEstimate());
                this.$refs.displayControls.updateTotal(this.hiddenCards());
                
                let cardsToShow = rows * rowLength;
                for (let i = 0; i < cards.length; i++) {
                    if (i < cardsToShow) {
                        cards[i].classList.remove('hidden');
                    } else {
                        cards[i].classList.add('hidden');
                    }
                }
            },
            showMore() {
                this.visibleRows++;
            },
            showAll() {
                let cards = this.$refs.projectCards.children;
                let totalRows = cards.length / this.rowLength();
                this.visibleRows = totalRows;
            },
            hideAll() {
                this.visibleRows = defaultVisibleRows;
            }
        },
        data() {
            return {
                projects,
                defaultVisibleRows,
                visibleRows: defaultVisibleRows,
            };
        },
        watch: {
            visibleRows() {
                this.updateView();
            },
            'projects.length'() {
                this.updateView();
            }
        },
        mounted() {

            this.cardLayoutStyles = getComputedStyle(this.$refs.projectCards);

            this.gapW = parseInt(this.cardLayoutStyles.getPropertyValue('gap'));
            this.cardW = parseInt(this.cardLayoutStyles.getPropertyValue('--project-card-width'));
            this.cardW = this.remToPx(this.cardW);

            this.updateView();

            window.onresize = () => {
                this.updateView();
            }

        },
    }
</script>

<style scoped>


    .hidden {
        display: none;
    }

    .projects {
        box-sizing: border-box;
    }

    .projects-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
    }

    .project-cards {
        --gap: 3rem;
        --row-height: calc(var(--project-card-height) + var(--gap));
        --show-rows: 2;
        --view-height: calc(var(--row-height) * var(--show-rows) + 0px);
        min-height: var(--project-card-height);
    }

    .project-layout {
        display: grid;
        gap: var(--gap);
        height: 100%;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, var(--project-card-width));
    }

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
