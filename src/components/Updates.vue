<template>
<v-container>
  <div class="mx-auto">
    <table class="table">
      <v-simple-table height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Country</th>
              <th scope="col">Confirmed cases</th>
              <th scope="col">Recovered</th>
              <th scope="col">Active cases</th>
              <th scope="col">Total deaths</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in getCountries" :key="index">
            <tr>
              <th scope="row">{{index+1}}</th>
              <td>{{item.countryName}}</td>
              <td>{{item.confirmedCases}}</td>
              <td>{{item.recovered}}</td>
              <td>{{item.activeCases}}</td>
              <td>{{item.totalDeaths}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </table>
  </div>
</v-container>
</template>

<script>
//import axios from 'axios'

export default {
  name: "updates",
  data() {
    return {};
  },
  props: {
    countries: {}
  },
  // mounted(){
  //'https://api.covid19api.com/summary
  //axios.get(this.baseUrl + 'covid19updates.json')
  //.then( response => {
  //  this.countries = response.data;
  //}).catch( e => {
  //  this.errors.push(e)
  //})
  //this.countries = JSON.parupdates);

  //},
  methods: {},
  computed: {
    getCountries() {
      let details = [];

      this.countries.Countries.forEach(country => {
        details.push({
          countryName: country.Country,
          confirmedCases: country.TotalConfirmed,
          recovered: country.TotalRecovered,
          totalDeaths: country.TotalDeaths,
          activeCases: parseInt(
            country.TotalConfirmed -
              (country.TotalRecovered + country.TotalDeaths)
          )
        });
      });
      return details.filter(
        x => x.confirmedCases > 0 && x.countryName.length > 0
      );
    }
  }
};
</script>