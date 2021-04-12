Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    inputUtente:'',
    filmRicerca:'',
    nationFlag:'',
  }, //Chiusura Data

  mounted () {

  },

  methods: {

    searchUtente: function () {
      if (this.inputUtente != '') {
        //Chiamata film
        axios.get(`https://api.themoviedb.org/3/search/multi/?api_key=ad28c8704dd19a7fa43c2efc35202dc8&query=${this.inputUtente}`)
        .then((response) => {
          this.filmRicerca = (response.data.results);
          console.log(this.filmRicerca);
        });
      } else {
      }
    }, //Chiusura searcUtente

    provanation: function () {
      for (var i = 0; i < this.filmRicerca.length; i++) {
        console.log(this.filmRicerca[i].original_language);
      }

    }
  } //Chiusura Methods
}); //Chiusura Vue
