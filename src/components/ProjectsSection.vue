<template>
    <AppSection class="projects" id="projects">
        <ContentLimiter>
            <SectionHeading>My projects</SectionHeading>
            <div class="project-cards">
                <ProjectCard src="/logov5.svg" projectName="Personal website" imgType="icon">
                    My website made with Vue.js v3.
                    You're using it right now.
                </ProjectCard>
                <ProjectCard src='/icon.svg' projectName="Crop Studio" imgType="icon" href="https://github.com">
                    A convenient batch-cropping tool for images.
                </ProjectCard>
                <ProjectCard src='/poster.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src='/gui.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src='/tui.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src="/logov5.svg" projectName="Personal website" imgType="icon">
                    My website made with Vue.js v3.
                    You're using it right now.
                </ProjectCard>
                <ProjectCard src='/icon.svg' projectName="Crop Studio" imgType="icon">
                    A convenient batch-cropping tool for images.
                </ProjectCard>
                <ProjectCard src='/poster.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src='/gui.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src='/tui.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src="/logov5.svg" projectName="Personal website" imgType="icon">
                    My website made with Vue.js v3.
                    You're using it right now.
                </ProjectCard>
                <ProjectCard src='/icon.svg' projectName="Crop Studio" imgType="icon">
                    A convenient batch-cropping tool for images.
                </ProjectCard>
                <ProjectCard src='/poster.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src='/gui.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src='/tui.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src="/logov5.svg" projectName="Personal website" imgType="icon">
                    My website made with Vue.js v3.
                    You're using it right now.
                </ProjectCard>
                <ProjectCard src='/icon.svg' projectName="Crop Studio" imgType="icon">
                    A convenient batch-cropping tool for images.
                </ProjectCard>
                <ProjectCard src='/poster.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src='/gui.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
                <ProjectCard src='/tui.png' projectName="Lorem ipsum">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ProjectCard>
            </div>
            <div style="width: 1ex; height: 1ex; background: red;"></div>
        </ContentLimiter>
    </AppSection>
</template>

<script>
    import AppSection from './AppSection.vue';
    import ContentLimiter from './ContentLimiter.vue';
    import ProjectCard from './ProjectCard.vue';
    import SectionHeading from './SectionHeading.vue';

    export default {
        name: "ProjectSection",
        components: {
            AppSection,
            SectionHeading,
            ContentLimiter,
            ProjectCard
        }
    }
</script>

<style>

.project-cards {
    --card-width: 16.5rem;
    display: grid;
    gap: 3rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 16.5rem);
    /*flex-wrap: wrap;*/
    /*flex-direction: row;*/
}

</style>
