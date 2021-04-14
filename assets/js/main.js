Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    inputUtente:'',
    videoRicerca:'',
    lingua:'',
    apiKey:'ad28c8704dd19a7fa43c2efc35202dc8',
    uri:'https://api.themoviedb.org/3',
    type:'',
    titleH1:'',
  }, //Chiusura Data

  created () {

  },

  mounted () {
    //Chiamata iniziale ai più votati
    axios.get(`${this.uri}/movie/upcoming?api_key=${this.apiKey}&language=it`)
    .then((response) => {
      this.videoRicerca = (response.data.results);
      this.type = 'movie';
      this.titleH1 = "Prossime uscite:";
    });
  },

  methods: {

    searchUtente: function () {
      if (this.inputUtente != '') {
        //Chiamata film e serie tv
        axios.get(`${this.uri}/search/multi?api_key=${this.apiKey}&query=${this.inputUtente}&language=it`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          this.type = '';
          this.titleH1 = `La tua ricerca: ${this.inputUtente}`
        });
      } else {
      }
    }, //Chiusura searchUtente

    starsYellow: function (vote){
      if (vote == undefined) {
        return 0;
      }
      return Math.ceil(vote/2);
    }, //Chiusura starsYellow

    starsWhite: function (vote) {
      if (vote == undefined) {
        return 0;
      }
      let votoArrotondato = Math.ceil(vote/2);
      let stelleBianche = 5 - votoArrotondato;

      return stelleBianche;
    },//Chiusura starsWhite

    selectionFilm: function () {
      //Chiamata film
      if (this.inputUtente == '') {
        axios.get(`${this.uri}/movie/popular?api_key=${this.apiKey}&language=it`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          this.type = 'movie';
          this.titleH1 = "Film popolari:";
        });
      } else {
      axios.get(`${this.uri}/search/movie?api_key=${this.apiKey}&query=${this.inputUtente}&language=it`)
      .then((response) => {
        this.videoRicerca = (response.data.results);
        this.type = 'movie';
        this.titleH1 = `I film della ricerca: ${this.inputUtente}`;
      });
      }
    },//Chiusura selectionFilm

    selectionSeries: function () {
      //Chiamata serie
      if (this.inputUtente == '') {
        axios.get(`${this.uri}/tv/popular?api_key=${this.apiKey}&language=it`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          this.type = 'tv';
          this.titleH1 = "Serie tv popolari:";
        });
      } else {
      axios.get(`${this.uri}/search/tv?api_key=${this.apiKey}&query=${this.inputUtente}&language=it`)
      .then((response) => {
        this.videoRicerca = (response.data.results);
        this.type = 'tv';
        this.titleH1 = `Serie tv della ricerca: ${this.inputUtente}`;
      });
      }
    }, //Chiusura selectionSeries

    flag: function (nazione) {
      if (this.type != '') {
        axios.get(`${this.uri}/search/${this.type}?api_key=${this.apiKey}&query=${this.inputUtente}&language=${nazione}`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
        });
      } else {
        axios.get(`${this.uri}/search/multi?api_key=${this.apiKey}&query=${this.inputUtente}&language=${nazione}`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
        });
      }
    },//Chiusura flag

  } //Chiusura Methods
}); //Chiusura Vue
