/**********************
*   IndexJS for Vue   *
*     By AceiusIO     *
*   Version  Berlin   *
**********************/

const linksio = Vue.component('linksio', {
    template: `<nav id="navigation" class="w3-bar">
            <a href="https://acei.us/" class="w3-bar-item w3-button"><img src="https://acei.us/favicon.png" alt="Cyborg Aceius" width="25"/> Home</a>
            <a class="w3-bar-item"> | </a>
            <a href="https://stuffby.acei.us" class="w3-bar-item w3-button">Stuff</a>
            <a href="https://aceius.gitbook.io/wiki/" class="w3-bar-item w3-button">Wiki</a>
            <a class="w3-bar-item"> | </a>
            <a href="https://acei.us/about.html" class="w3-bar-item w3-button">About</a>
            <a href="https://acei.us/contact.html" class="w3-bar-item w3-button">Contact</a>
            <a href="https://acei.us/donate.html" class="w3-bar-item w3-button">Donate</a>
            <a href="https://acei.us/404.html" class="w3-bar-item w3 button">Light/dark</a>
    </nav>`
});

const headerio = Vue.component('headerio', {
    props: ['title'],
    template: `<header class="w3-container io-header">
        <linksio></linksio>

        <h1 class="w3-animate-top">{{title}}</h1>
        <h3>AceiusIO</h3>
    </header>`,
});

const squaredheader = Vue.component('squaredheader', {
    props: ['title'],
    template: `<header>
        <section class="w3-container io-footer-gradiant" style="color:white;">
            <linksio></linksio>
        </section>
        <section class="w3-container w3-black">
            <h1>{{title}}</h1>
            <h3>Squared</h3>
        </section>
    </header>`,
});

const blogpost = Vue.component('blogpost', { // Post
    props: ['posttitle', 'postauthor', 'postlink'],
    template: `<article class="w3-container blogpost">
        <h3 :id="postlink">{{posttitle}}</h3>
        <p>Author: AceiusIO</p>
        <div class="w3-animate-left">
            <slot></slot>
        </div>
        <p>Share this article: <code>https://acei.us/{{postlink}}</code></p>
    </article>
    `,
});

const accordian = Vue.component('accordian', {
    props: ['title', 'num'],
    name: 'accordian',
    template: `<section>
        <button :onclick="'openAccordian(' + num + ');'" class="w3-button w3-block w3-left-align">
        {{title}}</button>
        
        <section :id="num" class="w3-container w3-hide">
            <slot></slot>
        </section>
    </section>`
});

const codeblock = Vue.component('codeblock', { // Codeblock
    props: ['lang'],
    name: 'codeblock',
    template: `<!-- Begin Codeblock -->
    <section>
        <p style="text-align: right; text-transform: uppercase; size: 75%;">{{lang}}</p>
        <section>
            <div :class="lang + 'High code'">
                <slot></slot>
            </div>
        </section>
    </section>
    `,
});

const footerio = Vue.component('footerio', { // Footer
    template: `<footer>
        <div class="ft-gradient"><br><br><br><br></div>
        <div class="io-footer">
            <div class="w3-bar w3-container">
                <a href="https://acei.us/" class="w3-bar-item w3-button">Website:</a>
                <!--<a href="/about.html" class="w3-bar-item w3-button">About</a>-->
                <a href="https://acei.us/contact.html" class="w3-bar-item w3-button">Contact</a>
                <a href="https://acei.us/other/changelog" class="w3-bar-item w3-button">Changelog</a>
                <a href="https://acei.us/other/privacy.html" class="w3-bar-item w3-button">Privacy Policy</a>
                <a href="https://acei.us/other/librejs.html" class="w3-bar-item w3-button" rel="jslicense">LibreJS</a>
            </div>

            <div class="w3-bar w3-container">
                <a href="#" class="w3-bar-item w3-button">Powered by:</a>
                <a href="https://www.w3schools.com/w3css/" class="w3-bar-item w3-button">W3 CSS</a>
                <a href="https://en.wikipedia.org/wiki/HTML" class="w3-bar-item w3-button">HTML5</a>
                <a href="https://vuejs.org" class="w3-bar-item w3-button">Vue.js</a>
            </div>

            <!--<div class="w3-bar w3-container">
                <a href="#" class="w3-bar-item w3-button">Transations:</a>
                <a href="#" class="w3-bar-item w3-button">Coming soon thanks to <a href="https://libretranslate.com/">https://libretranslate.com/</a></a>
            </div>-->

            <div class="w3-container">
                <p>This website's content is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>, unless otherwise noted. If you enjoy the content, please consider <a href="https://acei.us/donate.html">donating</a>.</p>
            </div>

            <div class="w3-container io-footer-gradiant">
                <p><a href="https://www.acei.us">www.acei.us</a> made &amp; maintained with love by AceiusIO and contributors.</p>
            </div>
        </div>
    </footer>`,
    name: 'footerIO',
});

const app = new Vue({
    el: '#app',
    data: {
        datapoint: 'Ill use this at some point',
    },
    components: {
        headerio,
        footerio,
    }
});

Vue.config.productionTip = false
