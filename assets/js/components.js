/***********************\
*    IndexJS for Vue    *
*      By AceiusIO      *
*    Version Airship    *
\***********************/

const header = Vue.component('aceius-header', {
    props: ['title'],
    template: `<nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://acei.us">
                <img src="https://acei.us/favicon.png" width="28" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navigation" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  Home
                </a>
          
                <a class="navbar-item" href="https://aceius.gitbook.io">
                  Documentation
                </a>

                <a class="navbar-item" href="/blog">
                  Blog
                </a>
          
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Projects
                  </a>
          
                  <div class="navbar-dropdown">
                    <a class="navbar-item" href="/pages/cascade.html">
                      Cascade
                    </a>
                    <a class="navbar-item">
                      BedrockJS
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="https://gitlab.com/acei.us">
                      Gitlab
                    </a>
                  </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item" href="/about.html">
                        About
                      </a>
                      <a class="navbar-item" href="/contact.html">
                        Contact
                      </a>
                      <hr class="navbar-divider">
                      <a class="navbar-item" href="/donate.html">
                        Donate
                      </a>
                    </div>
                  </div>
              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-link" href="https://stuffby.acei.us">
                      <strong>Services</strong>
                    </a>
                    <a class="button" href="/contact.html">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
    </div>`,
});

const cookies = Vue.component('cookies', { // Cookie
    name: 'cookies',
    template: `<div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cookies</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>`,
});

const footer = Vue.component('aceius-footer', { // Footer
    template: `<footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Acei.us</strong> is maintained by Aceius E., and their team of Pandas with swag. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The current stardate is {{stardate}}
      </p>
      <a href="https://bulma.io">
            <img
                src="https://bulma.io/images/made-with-bulma.png"
                alt="Made with Bulma"
                width="128"
                height="24">
        </a>
    </div>
  </footer>`,
    computed: {
        stardate: function () {
            const date = new Date();
            let staryear = (date.getFullYear() * 2)
            let starmonth = (date.getMonth() * 2)
            let timeindex = date.getDate()

            let final_stardate = staryear + '' + starmonth + '.' + timeindex
            return(final_stardate);
        }
    },
    name: 'aceius-footer'
});

/*<footer>
        <div class="ft-gradient"><br><br><br><br></div>
        <div class="io-footer">
            <div class="w3-bar w3-container">
                <a href="/" class="w3-bar-item w3-button">Website:</a>
                <a href="/about.html" class="w3-bar-item w3-button">About</a>
                <a href="/contact.html" class="w3-bar-item w3-button">Contact</a>
                <a href="/history.html" class="w3-bar-item w3-button">Changelog</a>
                <a href="/pages/privacy.html" class="w3-bar-item w3-button">Privacy Policy</a>
                <a class="w3-bar-item"> | </a>
                <a href="http://staging.acei.us" class="w3-bar-item w3-button">Staging Website</a>
                <!--<a href="https://acei.us/other/librejs.html" class="w3-bar-item w3-button" rel="jslicense">LibreJS</a>-->
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
                <p>This website's content is licensed under a <a rel="license" href="https://gitlab.com/AceiusIO/acei.us/-/blob/main/LICENSE">MIT License</a>, unless otherwise noted. If you enjoy the content, please consider <a href="https://acei.us/donate.html">donating</a>. The current stardate is {{stardate}}</p>
            </div>

            <div class="w3-container io-footer-gradiant">
                <p><a href="https://www.acei.us">www.acei.us</a> made &amp; maintained with love by <a href="/about.html">The Acei.us Team</a>.</p>
            </div>
        </div>
    </footer>*/

const app = new Vue({
    el: '#app',
    data: {
        version: '"Seoul" 5.2.0',
    }
});

Vue.config.productionTip = false
