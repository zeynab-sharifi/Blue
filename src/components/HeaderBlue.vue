<template>
<header>
    <div class="header-blue">
            <nav class="navbar navbar-expand-lg">
              <div class="container">
                <a class="navbar-brand" href="#">Blue</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <router-link class="nav-link" to="/Game">Game</router-link>
                    <router-link class="nav-link" to="/About">About</router-link>
                    <router-link class="nav-link" to="/Support">Support</router-link>
                  </div>
                </div>
                <!-- login form in header -->
               <login></login>
          </div>
      </nav>
    </div>
</header>
</template>
<script>
export default {

}
</script>