Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    inputUtente:'',
    videoRicerca:'',
    lingua:'',
    apiKey:'ad28c8704dd19a7fa43c2efc35202dc8',
    uri:'https://api.themoviedb.org/3',
  }, //Chiusura Data

  created () {

  },

  mounted () {

  },

  methods: {

    searchUtente: function () {
      if (this.inputUtente != '') {
        //Chiamata film e serie tv
        axios.get(`${this.uri}/search/multi?api_key=${this.apiKey}&query=${this.inputUtente}&language=${this.lingua}`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          // console.log(this.videoRicerca);
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

    flagItaly: function () {
      this.lingua = 'it-IT'
    },//Chiusura flagItaly

    flagUk: function () {
      this.lingua = 'en-EN'
    }

  } //Chiusura Methods
}); //Chiusura Vue
