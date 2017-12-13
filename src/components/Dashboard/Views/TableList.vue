<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>

      <div class="col-md-12">
        <div class="card card-plain">
          <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data" :columns="table2.columns">

          </paper-table>
        </div>
      </div>

    </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  
  const tableColumns = ['#', 'Nome', 'Telefono', 'Provincia', 'Citta']
  const tableData = [{
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
    telefono: '$63,542',
    provincia: 'Verona',
    citta: 'Negrar'
  }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Elenco Strutture',
          subTitle: 'un elenco delle strutture convenzionate',
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          title: 'Elenco Professionisti ',
          subTitle: 'un elenco dei professionisti convenzionati',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
