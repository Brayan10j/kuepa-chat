<template>
  <div class="row">
    <div class="col-md-4 mx-auto">
      <div class="card">
        <div class="card-header">Registrarse</div>
        <div class="card-body">
          <form action @submit.prevent="agregarUsuario()">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Nombre"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Correo"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Contraseña"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="confirm_password"
                placeholder="Confirmar contraseña"
                v-model="confirm_password"
              />
            </div>
            <button class="btn btn-primary btn-block">Registrarse</button>
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
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      error: ""
    };
  },
  name: "Registro",
  props: {
    msg: String
  },
  methods: {
    agregarUsuario() {
      if (this.name && this.email && this.password) {
        if (this.password != this.confirm_password) {
          this.error = "las contraseñas no coinciden";
        } else {
          this.axios
            .post("/users/signup", {
              name: this.name,
              email: this.email,
              password: this.password
            })
            .then(res => {
              if (res.data == "error") {
                this.error = "Usuario ya existe";
              } else {
                this.$router.push({ name: "InicioSesion" });
              }
              console.log(res);
            })
            .catch(e => {
              console.log("error" + e);
            });
        }
      } else {
        this.error = "todos los campos son requeridos";
      }
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
