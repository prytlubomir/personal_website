<template>

    <div class="project-card">
        <div class="card-content">
            <div class="card-image">
                <img :src="$attrs.src" :alt="projectName + ' illustration'" ref="img">
            </div>
            <div class="card-body">
                <h4 class="card-title">{{ projectName }}</h4>
                <p class="card-text">
                    <slot></slot>
                </p>
            </div>
            <div class="card-button">
                <a href="#"><span class="call-for-action">Find out more</span> <span class="arrow">&rarr;</span> </a>
            </div>
        </div>
        <div class="expander"></div>
    </div>

</template>
<style scoped>

    h4, p {
        margin: 0;
    }
    
    .project-card {
        --base-color: #222533;
        --lighter-color: var(--base-color);
        --darker-color: rgb(from var(--lighter-color) calc(r - 16) calc(g - 16) calc(b - 16));
        --lighter-background: var(--lighter-color);
        --darker-background: rgb(from var(--lighter-background) calc(r - 16) calc(g - 16) calc(b - 16));
        position: relative;
        height: 19rem;
        background-color: var(--lighter-background);
        font-size: 18px;
        border-radius: 1.5rem;
        flex-shrink: 0;
    }

    .card-content {
        --resize-duration: .1s;
        --resize-duration-reverse: .7s;
        --expand-value: .2rem;
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: var(--lighter-background);
        border-radius: inherit;
        transition: all var(--resize-duration-reverse);
    }
    
    .project-card .card-content > :nth-child(odd){
        background-color: var(--darker-background);
    }

    .project-card .card-content:hover {
        position: absolute;
        width: calc(100% + calc(var(--expand-value) * 2));
        height: calc(100% + calc(var(--expand-value) * 2));
        margin-left: calc(-1 * var(--expand-value));
        margin-top: calc(-1 * var(--expand-value));
        box-shadow: 0 0 5px 7px var(--darker-color);
        transition: all var(--resize-duration);
    }

    .card-content > *, .card-content:hover > * {
        transition: all var(--resize-duration);
    }

    .card-content:hover > .card-image {
        height: calc(8rem + var(--expand-value) * 2);
        transition: all var(--resize-duration);
    }
    
    .project-card:hover {
        --lighter-background: rgb(from var(--base-color) calc(r + 16) calc(g + 16) calc(b + 16));
    }

    .card-image{
        width: 100%;
        height: 8rem;
        transition: all var(--resize-duration-reverse);
    }
    
    .card-image img {
        height: 100%;
        width: 100%;
    }

    .image {
        object-fit: cover;
    }

    .icon {
        object-fit: contain;
    }

    .card-body{
        height: 8rem;
        padding: 1rem;
        padding-bottom: 0.5rem;
    }

    .card-text{
        padding-top: 0.5rem;
    }

    .card-button{
        position: relative;
        top: 0;
        height: 3rem;
        padding: 1rem;
        padding-top: .75rem;
        background: #000;
    }

    .card-button a{
        position: relative;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        color: var(--color);
        text-align: center;
        justify-content: space-between;
        text-decoration: none;
        /*text-decoration-skip-ink: none;*/
    }
    
    .card-button a::after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        margin-top: 1em;
        height: 1px;
        width: inherit;
    }

    .card-button a:hover::after{
        background-color: currentColor;
    }

</style>
<script>

    export default {
        name: 'ProjectCard',
        props: {
            projectName: {
                type: String,
                required: true
            },
            imgType: {
                type: String,
                required: false,
                default: "image"
            }
        },
        mounted() {
            let image = this.$refs.img;
            console.log(this.imgType);
            switch (this.imgType) {
                case "icon":
                    image.classList.add('icon');
                    break
                case "image":
                    image.classList.add('image');
                    break
            }
        }
    }

</script>
