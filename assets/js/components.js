const header = Vue.component('aceius-header', {
    props: ['title'],
    template: /*html*/`<nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item is-active" href="index.html">
          <span>GoGetter</span>
        </a>
      </div>

      <div id="main-menu" class="navbar-menu has-text-weight-medium">
        <div class="navbar-start">

          <a class="navbar-item" href="https://github.com/GoGetterCLI/cli" title="Data">
            <span>Docs</span>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              About
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" href="/about.html">
                <p>About GoGetter</p>
              </a>

              <a class="navbar-item" href="https://github.com/GoGetterCLI">
                <p>GitHub</p>
              </a>
            </div>
          </div>

          </div>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="/download.html" title="About">
            <span>Install</span>
          </a>
        </div>
      </div>
    </div>
  </nav>`,
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

const app = new Vue({
    el: '#app',
    data: {
        version: '"Seoul" 5.2.0',
    }
});

Vue.config.productionTip = false
