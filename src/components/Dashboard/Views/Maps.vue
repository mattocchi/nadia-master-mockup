<template>
  <div class="row">
    <div class="col-md-12">

      <div class="card card-map">
        <div class="header">
          <h4 class="title">Mappa delle Strutture</h4>
        </div>
        <div class="map">
          <div id="map"></div>
        </div>
      </div>

    </div>
    <div class="col-md-12">
        <div class="card">
          <!-- <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table> -->

          <table class="table table-striped">
            <thead>
              <!-- <th v-for="column in table1.columns">{{column}}</th> -->
              <th></th>
              <th>Nome</th>
              <th>Telefono</th>
              <th>Città</th>
              <th>Provincia</th>
            </thead>
            <tbody>
              <tr v-for="item in table1.data">
                <!-- <td v-for="column in table1.columns" v-if="hasValue(item, column)">{{itemValue(item, column)}}</td> -->
                <td><img :src="item.img"></td>
                <td>{{item.nome}}</td>
                <td>{{item.telefono}}</td>
                <td>{{item.citta}}</td>
                <td>{{item.provincia}}</td>

              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
</template>
<script>
  // import maprandom from './maprandom.js'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import tabledata from './tabledata.js'

  // const tableColumns = ['#', 'Nome', 'Telefono', 'Provincia', 'Citta']
  // const tableData = [{
  //   id: 1,
  //   nome: 'La Piazzatte',
  //   telefono: '0445371142',
  //   provincia: 'Vicenza',
  //   citta: 'Thiene'
  // },
  // {
  //   id: 2,
  //   nome: 'Casa della Salute',
  //   telefono: '0444121212',
  //   provincia: 'Vicenza',
  //   citta: 'Schio'
  // },
  // {
  //   id: 3,
  //   nome: 'NIREM',
  //   ttelefonoel: '04241945896',
  //   provincia: 'Vicenza',
  //   citta: 'Mezzaselva di Roana'
  // },
  // {
  //   id: 4,
  //   nome: 'CENTRO MEDICO BIOS',
  //   telefono: '0445814741',
  //   provincia: 'Verona',
  //   citta: 'Montorio'
  // },
  // {
  //   id: 5,
  //   nome: 'Ospedale Sacro Cuore Don Calabria',
  //   telefono: '$63,542',
  //   provincia: 'Verona',
  //   citta: 'Negrar'
  // }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Elenco Strutture',
          subTitle: 'un elenco delle strutture convenzionate',
          columns: [...tabledata.tableColumns],
          // data: [...tabledata.tableData]
          data: [...tabledata.randomData()]
        }
      }
    },
    mounted () {
      // var myLatlngVR = new window.google.maps.LatLng(45.4299000, 10.9844400)
      var myLatlng = new window.google.maps.LatLng(tabledata.latVI, tabledata.longVI)

      var mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
          'featureType': 'water',
          'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }]
        }, {
          'featureType': 'road',
          'elementType': 'geometry.fill',
          'stylers': [{ 'hue': '#ff0000' }, { 'saturation': -100 }, { 'lightness': 99 }]
        }, {
          'featureType': 'road',
          'elementType': 'geometry.stroke',
          'stylers': [{ 'color': '#808080' }, { 'lightness': 54 }]
        }, {
          'featureType': 'landscape.man_made',
          'elementType': 'geometry.fill',
          'stylers': [{ 'color': '#ece2d9' }]
        }, {
          'featureType': 'poi.park',
          'elementType': 'geometry.fill',
          'stylers': [{ 'color': '#ccdca1' }]
        }, {
          'featureType': 'road',
          'elementType': 'labels.text.fill',
          'stylers': [{ 'color': '#767676' }]
        }, {
          'featureType': 'road',
          'elementType': 'labels.text.stroke',
          'stylers': [{ 'color': '#ffffff' }]
        }, { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] }, {
          'featureType': 'landscape.natural',
          'elementType': 'geometry.fill',
          'stylers': [{ 'visibility': 'on' }, { 'color': '#b8cb93' }]
        }, { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] }, {
          'featureType': 'poi.sports_complex',
          'stylers': [{ 'visibility': 'on' }]
        }, { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] }, {
          'featureType': 'poi.business',
          'stylers': [{ 'visibility': 'simplified' }]
        }]

      }
      var map = new window.google.maps.Map(document.getElementById('map'), mapOptions)

      // var marker = new window.google.maps.Marker({
      //   position: myLatlng,
      //   title: 'Hello World!'
      // })
      //
      // // To add the marker to the map, call setMap();
      // marker.setMap(map)

      // var markers = []
      // for (var i = 0; i < 15; i++) {
      //   var random = maprandom.getRandomLocation(tabledata.latVI, tabledata.longVI, 5000)
      //   var mPos = new window.google.maps.LatLng(random.latitude, random.longitude)
      //   const randomColor = Math.floor((Math.random() * 10) + 0)
      //   var possible = 'ABC' // DEFGHIJKLMNOPQRSTUVWXYZ'
      //   const randomLetter = possible.charAt(Math.floor(Math.random() * possible.length))
      //   const colors = ['blue', 'brown', 'darkgreen', 'green', 'orange', 'paleblue', 'pink', 'purple', 'red', 'yellow']
      //
      //   const img = 'static/img/maps/' + colors[randomColor] + '_Marker' + randomLetter + '.png'
      //   // const img = 'static/img/maps/yellow_MarkerA.png'
      //   var m = new window.google.maps.Marker({
      //     position: mPos,
      //     title: 'Struttura ' + i,
      //     icon: img
      //   })
      //   m.setMap(map)
      //   markers.push(m)
      // }
      const randomData = this.$data.table1.data // tabledata.randomData()
      for (var i = 0; i < randomData.length; i++) {
        var item = randomData[i]
        var contentString = '<div id="content' + i + '">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h3 id="firstHeading" class="firstHeading">' + item.nome + '</h3>' +
            '<div id="bodyContent">' +
            // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            // 'sandstone rock formation in the southern part of the ' +
            // 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
            // 'south west of the nearest large town, Alice Springs; 450&#160;km ' +
            // '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
            // 'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
            // 'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
            // 'Aboriginal people of the area. It has many springs, waterholes, ' +
            // 'rock caves and ancient paintings. Uluru is listed as a World ' +
            // 'Heritage Site.</p>' +
            // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
            // '(last visited June 22, 2009).</p>' +
            '</div>' +
            '</div>'

        const infowindow = new window.google.maps.InfoWindow({
          content: contentString
        })

        const marker = new window.google.maps.Marker({
          position: item.pos,
          title: item.nome,
          icon: item.img,
          map
        })
        // marker.setMap(map)
        // google.maps.AddListener(marker, 'click', function (map, marker) {
        marker.addListener('click', function () {
          infowindow.open(map, marker)
        })
      }
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        return item[column.toLowerCase()]
      }
    }
  }

</script>
<style>

</style>
