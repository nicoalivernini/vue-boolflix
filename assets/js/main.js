Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    inputUtente:'',
    filmRicerca:'',
  }, //Chiusura Data

  mounted () {

  },

  methods: {

    searchUtente: function () {
      if (this.inputUtente != '') {
        //Chiamata film
        axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=ad28c8704dd19a7fa43c2efc35202dc8&query=${this.inputUtente}`)
        .then((response) => {
          this.filmRicerca = (response.data.results);
        });
      } else {
      }

    }
  } //Chiusura Methods
}); //Chiusura Vue
