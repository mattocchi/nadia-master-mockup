<template>
  <div class="card card-user">
    <div class="image card-color-user">
      <!-- <img src="static/img/background.jpg" alt="..."> -->
    </div>
    <div class="content">
      <div class="author">
        <img class="avatar border-white" src="static/img/faces/user.png" alt="...">
        <h4 class="title">Sig. Stefano Rizzi
          <br>
          <a href="#">
            <small>@steriz</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Spec.'
          },
          {
            title: '10',
            subTitle: 'Utenti'
          },
          {
            title: '20',
            subTitle: 'Esercizi'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>
.card-color-user {
  background-color: 
}
</style>
