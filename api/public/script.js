import axios from "C:\\xampp\htdocs\api-vue-laravel\frontend\node_modules\axios\index.js"

axios.get("http://localhost/api-vue-laravel/api/public/api/users")
  .then(response => {
    // Os dados da resposta estarão em response.data
    console.log(response.data);
  })
  .catch(error => {
    console.error("Ocorreu um erro ao buscar os dados da API: " + error);
  });
