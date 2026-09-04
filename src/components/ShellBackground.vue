<template>
    <div class="background">
        <div class="background-texture" ref="texture">
        </div>
        <div class="background-overlay"></div>
    </div>
</template>

<script>
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
           
            let background = this.$refs.texture;


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


            function generateBackground(charCount, charList) {
                let charPool = Array.from(charList);
                let result = '';
                let char = '';

                for (let i = 0; i < charCount; i++) {
                    if (charPool.length > 0) {
                        char = selectRandom(charPool);
                        result += char + ' ';
                        let ind = charPool.indexOf(char);
                        charPool.splice(ind, 1);
                    } else {
                        charPool = Array.from(charList);
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

            setInterval(() => {
                let charCount = estimateCharacterCount(background);
                background.innerText = generateBackground(charCount, this.charList)
            }, this.refreshInterval);
        }

    }
</script>

<style scoped>
    .background {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: #080808;
    }

    .background div {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .background-texture {
        overflow: hidden;
        word-break: break-all;
        color: #1a1a1a;
        font-weight: bold;
    }

    .background-overlay {
        bottom: 100%;
        backdrop-filter: blur(1.4px);
        background-color: rgba(40, 40, 40, .3);
    }
</style>
