<template>
    <v-card  :color="color" dark>
        <v-card-title>
            {{title}}
        </v-card-title>
        <v-card-body>
           <p> {{numbers}} </p>
        </v-card-body>
    </v-card>
</template>
<script>
export default {
    name: 'statistics',
    props : {
        title: String,
        numbers: Number,
        color: String
    }
}
</script>