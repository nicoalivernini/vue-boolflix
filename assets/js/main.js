Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    inputUtente:'',
    videoRicerca:'',
    vote:'',
  }, //Chiusura Data

  created () {

  },

  mounted () {

  },

  methods: {

    searchUtente: function () {
      if (this.inputUtente != '') {
        //Chiamata film e serie tv
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=ad28c8704dd19a7fa43c2efc35202dc8&query=${this.inputUtente}`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          // console.log(this.videoRicerca);
        });
      } else {
      }
    }, //Chiusura searchUtente

    getStars: function (vote) {
      let votoArrotondato = Math.ceil(vote/2);

      return votoArrotondato
    }, //Chiusura getStars



  } //Chiusura Methods
}); //Chiusura Vue
