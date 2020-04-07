<template>
  <div>
    <v-card>
      <v-toolbar color="#616161" dark dense flat>
        <v-toolbar-title class="body-2">Coronaviruses</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
      Coronarivuses are a large family of viruses which may cause illness in animals or humans. In humans, several
      Coronarivuses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East
      respiratory Syndrome (MERS) and Servere Acute Respiratory Syndrome (SARS). The most recently discovered
      coronavirus causes disease COVID-19
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <router-link to="/healthTips">Learn More</router-link>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card class="mx-auto" color="warning" max-width="500" tile>
      <v-list shaped>
        <v-subheader >RECOMMENDATIONS</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in recommendations" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
 <!--   <section class="stats">
      <v-item-group active-class="primary">
        <v-container>
          <v-row>
            <statistics :color="successColor" :title="recovered" :numbers="totalRecovered" />
            <statistics :color="alertColor" :title="confirmed" :numbers="totalConfirmedCases" />
            <statistics :color="alertColor" :title="deaths" :numbers="totalDeath" />
          </v-row>
        </v-container>
      </v-item-group>
    </section>-->
    <v-divider></v-divider>
    <v-alert dense text type="success">
      <h3 class="headline">Total Recovered</h3>
      <div>{{totalRecovered}}</div>
    </v-alert>
    <v-alert dense text type="info">
      <h3 class="headline">Total Confirmed Cases</h3>
      <div>{{totalConfirmedCases}}</div>
    </v-alert>
    <v-alert dense text type="warning">
      <h3 class="headline">Total Deaths</h3>
      <div>{{totalDeath}}</div>
    </v-alert>
    <updates :countries="update" />
  </div>
</template>
    
<script>
import updates from "./Updates";
//import statistics from "./statistics";
import covidUpdates from "../covid19updates.json";
export default {
  name: "home",
  data() {
    return {
      deaths: "Total Death",
      recovered: "Total Recovered",
      confirmed: "Total Confirmed Cases",
      update: covidUpdates,
      successColor: "#388E3C",
      alertColor: "#F44336",
      recommendations: [
        "Wash your hands often",
        "Avoid",
        "Practice good respiration hygiene",
        "Maintain social distance",
        "Seek medical care early if you show symptoms",
        "Stay informed; follow local health directives"
      ]
    };
  },
  components: {
    updates,
  //  statistics
  },
  computed: {
    totalDeath() {
      let results = 0;
      this.update.Countries.forEach(country => {
        results += country.TotalDeaths;
      });
      return results;
    },
    totalConfirmedCases() {
      let results = 0;
      this.update.Countries.forEach(country => {
        results += country.TotalConfirmed;
      });
      return results;
    },
    totalRecovered() {
      let results = 0;
      this.update.Countries.forEach(country => {
        results += country.TotalRecovered;
      });
      return results;
    }
  }
};
</script>