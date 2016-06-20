<template id="">

  <div class="alert alert-danger" v-if="error && !success" >
    <p>
      Could not sign you up
    </p>
  </div>

  <div class="alert alert-success" v-if="success" >
    <p>
    You're done! You can now sign in.
    </p>
  </div>

<form autocomplete="off" v-on:submit="signup" v-if="!success">
  <div class="form-group" v-bind:class="{ 'has-error': error && response.email}">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="you@somewhere.com" v-model="email" required>
    <span class="help-block" v-if="error && response.email">{{ response.email }}</span>
  </div>

  <div class="form-group" v-bind:class="{ 'has-error': error && response.username}">
    <label for="username">Username</label>
    <input type="text" class="form-control" id="username" v-model="username" required>
    <span class="help-block" v-if="error && response.username">{{ response.username }}</span>
  </div>

  <div class="form-group" v-bind:class="{ 'has-error': error && response.password}">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" v-model="password" required>
    <span class="help-block" v-if="error && response.password">{{ response.password }}</span>
  </div>

  <button type="submit" class="btn btn-default" >Sign Up</button>

</form>

</template>

<script>

import auth from '../auth'

  export default {
    data (){
      return {
        email: null,
        username: null,
        email: null,
        password: null,
        success: false,
        error: false,
        response: null,
      }
    },
    methods: {
      signup (e) {
        e.preventDefault()
        auth.signup(this, this.email, this.username, this.password)
      }
    }
  }
</script>
