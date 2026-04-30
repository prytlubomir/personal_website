<template>
    <div class="background">
        <div class="background-texture">
        </div>
        <div class="background-overlay"></div>
    </div>
</template>

<script>
// import { useTemplateRef } from 'vue';

export default {
    name: 'ShellBackground',
    components: {},
    props: {
        refreshInterval: {
            type: Number,
            default: 200
        },
        charList: {
            type: Array,
            default: Array.from('!@#$%?&~*.,/\\/!@#$%?&~*.,/\\/-<>=+')
                .concat(['null', 'home', 'dev', 'bin', 'etc', 'sh', 'bin', 'ls', 'dir', 'rm', '-r', '-f', '-a', '-c', '-f'])
        }
    },
    // data() {
    //     return {}
    // },
    computed: {
        // console.log(refreshInterval);
    },
    methods: {

    },
    watch: {

    },
    mounted() {
        console.log(this.refreshInterval);
        let background = document.getElementsByClassName('background-texture')[0];
        console.log(background);



        function getStyle(element, style) {
            return window.getComputedStyle(element)[style]
        }

        function pxToCh(px) {
            const chLengthEstimation = 8; // 8px
            let chValue = px / chLengthEstimation;
            return chValue;
        }

        function pxToLineHeight(px, element) {
            const lineHeightEm = 1.2; // "normal" value in em, according to MDN
            let fontFize = parseFloat(getStyle(element, "font-size"));
            let lineHeight = fontFize * lineHeightEm;
            let emValue = px / lineHeight;
            return emValue;
        }


        function selectRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }


        function generateBackground(lenght) {
            let charList = Array.from('!@#$%?&~*.,/\\/!@#$%?&~*.,/\\/-<>=+')
                .concat(['null', 'home', 'dev', 'bin', 'etc', 'sh', 'bin', 'ls', 'dir', 'rm', '-r', '-f', '-a', '-c', '-f']);
            let p = Array.from(charList);
            let result = '';
            let char = '';

            for (let i = 0; i < lenght; i++){
                if (p.length > 0) {
                    char = selectRandom(p);
                    result += char + ' ';
                    let ind = p.indexOf(char);
                    p.splice(ind, 1);
                } else {
                    p = Array.from(charList);
                }
            }
            return result;
        }


        function estimateCharacterCount(element) {
            let bgw = parseFloat(getStyle(element, 'width'));
            let bgh = parseFloat(getStyle(element, 'height'));

            let bch = pxToCh(bgw);
            let blh = pxToLineHeight(bgh, element);

            let total = bch * blh;

            return total;
        }


        let bgTotalCharacters = estimateCharacterCount(background);
        window.onresize = () => { bgTotalCharacters = estimateCharacterCount(background) };


        setInterval(() => { background.innerText = generateBackground(bgTotalCharacters) }, 200);
    }

}

// console.log(refreshInterval);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-color: #080808;
}
.background div{
    position: relative;
    width: 100%;
    height: 100vh;
}
.background-texture{
    overflow: hidden;
    word-break: break-all;
    color: #1a1a1a;
    font-weight: bold;
}
.background-overlay{
    bottom: 100vh;
    backdrop-filter: blur(1.4px);
    background-color: rgba(40, 40, 40, .3);
}
</style>
