import MapRandom from './maprandom.js'

export default {
  latVI: 45.5582,
  longVI: 11.5419,
  tableColumns: ['Img', 'Nome', 'Telefono', 'Provincia', 'Citta', 'Pos'],
  tableData: [{
    id: 1,
    nome: 'La Piazzatte',
    telefono: '0445371142',
    provincia: 'Vicenza',
    citta: 'Thiene'
  },
  {
    id: 2,
    nome: 'Casa della Salute',
    telefono: '0444121212',
    provincia: 'Vicenza',
    citta: 'Schio'
  },
  {
    id: 3,
    nome: 'NIREM',
    ttelefonoel: '04241945896',
    provincia: 'Vicenza',
    citta: 'Mezzaselva di Roana'
  },
  {
    id: 4,
    nome: 'CENTRO MEDICO BIOS',
    telefono: '0445814741',
    provincia: 'Verona',
    citta: 'Montorio'
  },
  {
    id: 5,
    nome: 'Ospedale Sacro Cuore Don Calabria',
    telefono: '04445586321',
    provincia: 'Verona',
    citta: 'Negrar'
  }],
  randomData () {
    var markers = []
    for (var i = 0; i < 15; i++) {
      var random = MapRandom.getRandomLocation(this.latVI, this.longVI, 5000)
      var mPos = new window.google.maps.LatLng(random.latitude, random.longitude)
      const randomColor = Math.floor((Math.random() * 10) + 0)
      var possible = 'ABC' // DEFGHIJKLMNOPQRSTUVWXYZ'
      const randomLetter = possible.charAt(Math.floor(Math.random() * possible.length))
      const colors = ['blue', 'brown', 'darkgreen', 'green', 'orange', 'paleblue', 'pink', 'purple', 'red', 'yellow']

      const img = 'static/img/maps/' + colors[randomColor] + '_Marker' + randomLetter + '.png'
      // const img = 'static/img/maps/yellow_MarkerA.png'
      // var m = new window.google.maps.Marker({
      //   position: mPos,
      //   title: 'Struttura ' + i,
      //   icon: img
      // })
      // m.setMap(map)
      const random1to5 = Math.floor((Math.random() * 5) + 0)
      const data = this.tableData[random1to5]
      var item = Object.assign({}, { pos: mPos, img }, data)

      markers.push(item)
    }
    return markers
  }
}
