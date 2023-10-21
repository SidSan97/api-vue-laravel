import axios from "http://localhost/api-vue-laravel/frontend/js/script.js"

axios.get("https://api.exemplo.com/posts")
  .then(response => {
    // Os dados da resposta estarão em response.data
    console.log(response.data);
  })
  .catch(error => {
    console.error("Ocorreu um erro ao buscar os dados da API: " + error);
  });
