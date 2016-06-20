<template id="">
  <div class="alert alert-danger" v-if="error">
<p>
  Could not sign you in with those details.
</p>
  </div>
<form autocomplete="off" v-on:submit="sigin">

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="you@somewhere.com" v-model="email" required>
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" v-model="password" required>
  </div>

  <button type="submit" class="btn btn-default">Sign</button>

</form>
</template>

<script>
import auth from '../auth'

  export default {
    data () {
      return {
        email: null,
        password: null,
        error: false,
      }

    },
    methods: {
      sigin (e) {
        e.preventDefault()
        auth.signin(this, this.email, this.password)
      }
    }

  }
</script>
