import axios from "axios";
/*
var app = new Vue({
    el: '#app',
    data: {
      message: 'Olá Mundo!'
    }
  })

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Olá Vue!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})*/

axios.get("https://api.exemplo.com/posts")
  .then(response => {
    // Os dados da resposta estarão em response.data
    console.log(response.data);
  })
  .catch(error => {
    console.error("Ocorreu um erro ao buscar os dados da API: " + error);
  });
