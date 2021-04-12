Vue.config.devtools = true;

var app = new Vue ({

  el: '#root',
  data: {
    inputUtente:'',
    videoRicerca:'',
    nationFlag:'',
  }, //Chiusura Data

  mounted () {

  },

  methods: {

    searchUtente: function () {
      if (this.inputUtente != '') {
        //Chiamata film e serie tv
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=ad28c8704dd19a7fa43c2efc35202dc8&query=${this.inputUtente}`)
        .then((response) => {
          this.videoRicerca = (response.data.results);
          console.log(this.videoRicerca);
        });
      } else {
      }
    }, //Chiusura searcUtente

  } //Chiusura Methods
}); //Chiusura Vue
