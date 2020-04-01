<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p>{{numbers}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'statistics',
    props : {
        title: String,
        numbers: Number
    }
}
</script>