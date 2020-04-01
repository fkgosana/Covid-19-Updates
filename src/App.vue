<template>
  <div id="app">
    <section name="info" id="info">
      <h1>Dintlafatso tsa Corona virus</h1>
      <p>
        Dikokwanatlhoko tsa Corona ke lefapha la dikokwanatlhoko tse di ka tlholang golwala mo diphoofolong
        gammogo le go batho. Mo bathong, di tsebega ka go tlhola Respiratory Infection tseo e kabang go tonya
        le go thotomela gammogo le malwetsi a go swana le Middle East Respiratory Syndrome (SARS). Dikokwanatlhoko
        tsa Corona tseo di utullotswego ga bjale ke kokwanatlhoko ya bolwetsi eo e bitswago gore ke COVID-19
      </p>
      <section class="stats">
        <statistics :title="confirmed" :numbers="totalConfirmedCases"/>
        <statistics :title="recovered" :numbers="totalRecovered"/>
        <statistics :title="deaths" :numbers="totalDeath"/>
      </section>
    </section>
    <section class="updates">
      <Updates :countries="update"/>
    </section>
  </div>
</template>

<script>
import Updates from './components/Updates.vue';
import statistics from './components/statistics';
import covidUpdates from './covid19updates.json';

export default {
  name: 'App',
  data(){
    return {
      deaths : "Total Death",
      recovered : "Total Recovered",
      confirmed : "Total Confirmed Cases",
      update : covidUpdates,
    }
  },
  components: {
    Updates,
    statistics
  },
  computed:{
    totalDeath(){
      let results = 0;
      this.update.Countries.forEach( country => {
        results += country.TotalDeaths
      })
      return results;
    },
    totalConfirmedCases(){
      let results = 0;
      this.update.Countries.forEach( country => {
        results += country.TotalConfirmed;
      })
      return results;
    },
    totalRecovered(){
      let results = 0;
      this.update.Countries.forEach( country => {
        results += country.TotalRecovered;
      })
      return results;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: greenyellow
}
.updates {
  text-align : center;
}
.stats {
  display: inline-block;
}
</style>
