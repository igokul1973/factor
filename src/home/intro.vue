<template>
    <section v-if="section1" class="intro">
        <div class="intro-inner">
            <h3 v-if="section1Pretitle" class="pretitle text-bluegray-600">{{
                section1Pretitle }}</h3>
            <h1 v-if="section1Title" v-formatted-text="section1Title"
                class="title"/>
            <div v-if="section1Content" class="content text-bluegray-600">{{
                section1Content }}
            </div>
            
            <div v-if="section1Buttons" class="buttons">
                <template v-for="(button, index) in section1Buttons">
                    <factor-link
                        v-if="button.link"
                        :key="index"
                        v-formatted-text="button.text"
                        :path="button.link"
                        :btn="button.btn"
                        :class="button.classes"
                    />
                </template>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
    import { setting } from "@factor/api"
    import { factorLink } from "@factor/ui"
    import Vue from "vue"

    export default Vue.extend({
        components: {
            factorLink
        },
        data() {
            return {
                loading: true,
                section1: setting("home.intro"),
                section1Pretitle: setting("home.intro.pretitle"),
                section1Title: setting("home.intro.title"),
                section1Content: setting("home.intro.content"),
                section1Buttons: setting("home.intro.buttons")
            }
        },
        methods: {
            setting
        }
    })
</script>
<style lang="less">
    .intro {
        /*background-color: var(--color-bg-dark);*/
        background-image: url(../img/construction-2.jpg);
        color: #fff;
        position: relative;
        
        .intro-inner {
            display: flex;
            flex-direction: column;
            max-width: 850px;
            margin: 0 auto;
            padding: 7em 2em;
            z-index: 1;
            justify-items: center;
            align-items: center;
            @media (max-width: 900px) {
                padding: 4em 2em;
            }
            .pretitle {
                color: darkcyan;
                position: relative;
                text-transform: uppercase;
                width: fit-content;
                margin-left: -10px;
                padding-left: 10px;
                margin-right: -10px;
                padding-right: 10px;
                background-color: rgba(255, 255, 255, 0.7);
            }
            .title {
                font-weight: var(--font-weight-bold);
                font-size: 3.6em;
                letter-spacing: -0.03em;
                margin: 10px 0;
                color: #fff;
                text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                text-align: center;
                
                @media (max-width: 900px) {
                    font-size: 2em;
                }
            }
            .content {
                /*display: inline;*/
                width: fit-content;
                margin-left: -10px;
                padding-left: 10px;
                margin-right: -10px;
                padding-right: 10px;
                color: #0471FF;
                // text-shadow: -0.2px 0 black, 0 0.2px black, 0.2px 0 black, 0 -0.2px black;
                max-width: 600px;
                font-size: 1.2em;
                line-height: 1.6em;
                background-color: rgba(255, 255, 255, 0.7);
                text-align: center;
                
                @media (min-width: 900px) {
                    max-width: initial;
                    font-size: 1.4em;
                }
            }
            .buttons {
                z-index: 2;
                margin-top: 2em;
                display: flex;
                flex-direction: column;
                /*flex-wrap: nowrap;*/
                .btn + .btn {
                    margin-left: 1em;
                    color: #0471FF;
                    background-color: rgba(255, 255, 255, 0.7);
                    
                    @media (max-width: 900px) {
                        margin-top: 1.4em;
                    }
                    i {
                        padding-left: 1rem;
                    }
                }
                @media (min-width: 450px) {
                    display: block;
                }
            }
        }
    }
</style>
