<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HtSY-0LcZGs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="col">
        <iframe src="http://localhost:4000/" width="100%" height="530" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: {
    msg: String
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ocultarNav {
  display: none;
}

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
