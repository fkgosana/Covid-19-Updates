<template>
<div>
    <ul v-for="(item,index) in getCountries" :key="index">
        <li>
           Country: {{item}} : Confirmed cases {{item.confirmedCases}}
        </li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'updates',
    data(){
        return {
            countries : {},
            errors : []
        }
    },
    mounted(){
        axios.get('https://api.covid19api.com/summary')
        .then( response => {
            this.countries = response.data;
        }).catch( e => {
            this.errors.push(e)
        })
    },
    methods: {
    },
    computed:{
        getCountries(){
            let details = [];

            this.countries.Countries.forEach( country => {
                details.push({
                    countryName: country.Country,
                    confirmedCases: country.TotalConfirmed
                })
            })
            return details.filter(x => x.confirmedCases > 0 && x.countryName.length >0)
            .sort(x => x.confirmedCases);
        }
    }
}
</script>