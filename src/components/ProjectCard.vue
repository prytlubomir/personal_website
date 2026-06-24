<template>

    <div class="project-card">
        <div class="card-img-cont">
            <img :src="$attrs.src" :alt="projectName + ' illustration'" class="card-image">
        </div>
        <div class="card-body">
            <h3 class="card-title">{{ projectName }}</h3>
            <p class="card-text">
                <slot></slot>
            </p>
        </div>
    </div>

</template>
<style scoped>

    .project-card {
        width: 26.5rem;
        height: 40rem;
        /*backdrop-filter: blur(140px);*/
        background-color: #222533;
    }

    .card-img-cont{
        width: 100%;
        height: 35%;
        max-height: 50%;
    }
    
    .card-image {
        height: 100%;
        width: 100%;
    }

</style>
<script>

    export default {
        name: 'ProjectCard',
        props: {
            projectName: String
        }
    }

</script>
