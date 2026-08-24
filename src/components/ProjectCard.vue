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


    /*@property --animating {
        syntax: "<integer>";
        inherits: true;
        initial-value: 0;
    }*/
    
    .project-card {
        position: relative;
        --base-color: #222533;
        /*--highlight-background: #121523;*/
        --lighter-color: var(--base-color);
        --darker-color: rgb(from var(--lighter-color) calc(r - 16) calc(g - 16) calc(b - 16));
        --lighter-background: var(--lighter-color);
        --darker-background: rgb(from var(--lighter-background) calc(r - 16) calc(g - 16) calc(b - 16));
        /*--highlight-background: rgb(from var(--base-background) calc(r - 16) calc(g - 16) calc(b - 16));*/
        /*width: 16.5rem;*/
        height: 19rem;
        /*backdrop-filter: blur(140px);*/
        background-color: var(--lighter-background);
        /*overflow: hidden;*/
        font-size: 18px;
        border-radius: 1.5rem;
        flex-shrink: 0;
    }

    /*@keyframes increase {
        from {
            position: absolute;
            width: 100%;
            height: 100%;
            margin-left: 0;
            margin-top: 0;
            box-shadow: none;
        }
        to {
            position: absolute;
            width: calc(100% + calc(var(--expand-value) * 2));
            height: calc(100% + calc(var(--expand-value) * 2));
            margin-left: calc(-1 * var(--expand-value));
            margin-top: calc(-1 * var(--expand-value));
            box-shadow: 0 0 5px 7px var(--darker-color);
        }
    }*/
    
    /*@keyframes highlight {
        from {
            --animating: 1;
            position: absolute;
            width: 100%;
            height: 100%;
            margin-left: 0;
            margin-top: 0;
            box-shadow: none;
        }
        to {
            position: absolute;
            width: calc(100% + calc(var(--expand-value) * 2));
            height: calc(100% + calc(var(--expand-value) * 2));
            margin-left: calc(-1 * var(--expand-value));
            margin-top: calc(-1 * var(--expand-value));
            box-shadow: 0 0 5px 7px var(--darker-color);
            --animating: 0;
        }
    }*/

    .card-content {
        --resize-duration: .1s;
        --resize-duration-reverse: .7s;
        --expand-value: .2rem;
        position: relative;
        width: 100%;
        height: 100%;
        /*z-index: 1;*/
        /*grid-template-rows: minmax(8rem, 1fr) 8rem 3rem;*/
        overflow: hidden;
        background-color: var(--lighter-background);
        border-radius: inherit;
        transition: all var(--resize-duration-reverse);

        /*@container style(--animating: 1) {
            /*animation: increase var(--resize-duration) forwards;
            background: red;
        }*/
    }

    /*.card-content > :nth-child(even) {
        background-color: var(--lighter-background);
    }*/
    
    .project-card .card-content> :nth-child(odd){
        background-color: var(--darker-background);
    }

    .project-card .card-content:hover {
        position: absolute;
        width: calc(100% + calc(var(--expand-value) * 2));
        height: calc(100% + calc(var(--expand-value) * 2));
        margin-left: calc(-1 * var(--expand-value));
        margin-top: calc(-1 * var(--expand-value));
        /*/*box-shadow: 0 0 5px 7px rgb(from var(--lighter-background) calc(r + 16) calc(g + 16) calc(b + 16));*/
        box-shadow: 0 0 5px 7px var(--darker-color);
        transition: all var(--resize-duration);
        /*animation: increase var(--resize-duration) forwards;*/
        /*--animating: 1;*/
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
        /*--base-background: #ddd;*/
        /*box-shadow: 0 0 5px 7px rgb(from var(--darker-background) calc(r - 32) calc(g - 32) calc(b - 32));*/
    }

    /*.project-card:hover .expander {
        width: calc(100% + 2rem);
        height: calc(100% + 2rem);
        margin-left: -1rem;
        margin-top: -1rem;
    }

    .expander {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        border-radius: 2rem;
        background: inherit;
        z-index: 0;
    }*/

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
        /*height: 1fr;*/
        padding: 1rem;
        padding-bottom: 0.5rem;
        /*min-height: 33%;*/
        /*flex-grow: 2;*/
    }

    .card-text{
        padding-top: 0.5rem;
        /*margin-bottom: auto;*/
    }

    .card-button{
        position: relative;
        top: 0;
        height: 3rem;
        padding: 1rem;
        padding-top: .75rem;
        /*height: 4rem;*/
        /*flex-grow: 1;*/
        background: #000;
    }

    .card-button a{
        --color: white;
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
        /*background-color: currentColor;*/
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
