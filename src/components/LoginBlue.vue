<template>
  <div class="login-blue">
     <!-- Button trigger modal -->
            <button type="button" class="btn btn-blue" data-bs-toggle="modal" data-bs-target="#exampleModal">
              sing in
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="header-modal">
                      <h5 class="modal-title" id="exampleModalLabel">singin</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="login">
                      <input v-model="username" placeholder="username" type="password">
                      <input v-model="password" placeholder="password" type="password">
                      <input type="submit" value="log in">
                    </form>

                    <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                            Don't have an account? <a href="#" class="ml-2">Sign Up</a>
                        </div>
                        <div class="d-flex justify-content-center links">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </div>
</template>

<script>
    export default{
     
       data() {
            return {
              username: "",
              password: ""
            };
          },
            methods: {
              async login() {
                const { username, password } = this;
                const res = await fetch("",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, password })
                  }
                );
                const data = await res.json();
                console.log(data);
              }
        }
    }
</script>

<style>
 
</style>