<template>
    <AppSection class="projects" id="projects">
        <ContentLimiter class="content-limiter">
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

<style scoped>

.project-cards {
    --card-width: 16.5rem;
    display: grid;
    gap: 3rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 16.5rem);
}

@media screen and (max-width: 1160px) {
    .container{
        padding: 0 1em;
    }
}

</style>
