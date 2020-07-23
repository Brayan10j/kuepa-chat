<template>
  <div class="row">
    <div class="col-md-4 mx-auto">
      <div class="card mt-4 text-center">
        <div class="card-header">
          <h1 class="h4">Iniciar Sesión</h1>
        </div>
        <img class="mx-auto d-block logo m-4" src="../assets/k.png" alt="Logo" />
        <div class="card-body">
          <form action @submit.prevent="chat()">
            <div class="form-group">
              <input type="email" class="form-control" name="email" placeholder="Correo" v-model="email" autofocus />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" name="password" placeholder="Contraseña" v-model="password"/>
            </div>
            <button class="btn btn-primary btn-block">Iniciar Sesión</button>
          </form>
          <div class="alert alert-danger" role="alert" v-if="error">{{error}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  name: "InicioSesion",
  props: {
    msg: String
  },
  methods: {
    chat() {
      this.axios
        .post("/users/signin" ,{ email: this.email, password: this.password})
        .then(res => {
          if (res.data != "login") {
            this.error = "Usuario no existe o la contraseña esincorrecta";
          } else {
            this.$router.push({ name: "Chat" });
          }
        })
        .catch(e => {
          console.log("error" + e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
