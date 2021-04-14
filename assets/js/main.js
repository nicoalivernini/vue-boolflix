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
  }, //Chiusura Data

  created () {

  },

  mounted () {
    // //Chiamata iniziale film più popolari
    // axios.get(`${this.uri}/movie/popular?api_key=${this.apiKey}&language=${this.lingua}`)
    // .then((response) => {
    //   this.videoRicerca = (response.data.results);
    //   // console.log(this.videoRicerca);
    //
    // this.inputUtente='';
    // });
  },//ChiusuraMounted

  methods: {

    searchUtente: function () {
      if (this.inputUtente != '') {
        //Chiamata film e serie tv
        axios.get(`${this.uri}/search/multi?api_key=${this.apiKey}&query=${this.inputUtente}&language=${this.lingua}`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          this.type = '';
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
        axios.get(`${this.uri}/movie/popular?api_key=${this.apiKey}&language=${this.lingua}`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          this.type = 'movie';
        });
      } else {
      axios.get(`${this.uri}/search/movie?api_key=${this.apiKey}&query=${this.inputUtente}&language=${this.lingua}`)
      .then((response) => {
        this.videoRicerca = (response.data.results);
        this.type = 'movie';
      });
      }
    },//Chiusura selectionFilm

    selectionSeries: function () {
      //Chiamata serie
      if (this.inputUtente == '') {
        axios.get(`${this.uri}/tv/popular?api_key=${this.apiKey}&language=${this.lingua}`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          this.type = 'tv';
        });
      } else {
      axios.get(`${this.uri}/search/tv?api_key=${this.apiKey}&query=${this.inputUtente}&language=${this.lingua}`)
      .then((response) => {
        this.videoRicerca = (response.data.results);
        this.type = 'tv';
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
