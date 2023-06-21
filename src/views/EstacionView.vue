<template>
  <div class="card text-center bg-dark text-white margin">
    <div class="card-header">
      <span><b>Air Qaulity Observer ID: </b> </span> {{ name }}
    </div>
    <div class="card-body mt">
      <h6> Coordenadas Geograficas Estacion: {{ historicStore.location.coordinates[ 0 ] }}°,
        {{ historicStore.location.coordinates[ 1 ] }}°</h6>
      <h5 class="card-title mt-3">Ultimos 10 registros historicos</h5>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <table class="table table-success table-striped table-bordered">
              <thead>
              <tr>
                <th colspan="3"></th>
                <th scope="col" colspan="3">Material Particulado</th>
                <th scope="col"></th>

              </tr>
              </thead>
              <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Temperatura</th>
                <th scope="col">1(µm)</th>
                <th scope="col">10(µm)</th>
                <th scope="col">25(µm)</th>
                <th scope="col">Reliabilty</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="historic in historicStore.last">
                <th scope="row">{{ new Date( historic.TimeInstant ).toLocaleDateString() }}</th>
                <th scope="row">{{ new Date( historic.TimeInstant ).toLocaleTimeString() }}</th>
                <td>{{ historic.temperature }}°C</td>
                <td>{{ historic.pm1 }}µm</td>
                <td>{{ historic.pm10 }}µm</td>
                <td>{{ historic.pm25 }}µm</td>
                <td>{{ historic.reliability }}</td>
              </tr>
              </tbody>
            </table>
            <button class="btn btn-success" @click="exportCsv">Exportar Historico</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-white">
      <b>Direccion de la Estacion:</b> <br> {{ historicStore.address.address.streetAddress }}
      <br> {{ historicStore.address.address.addressRegion }}
      <br> {{ historicStore.address.address.addressRegion }}
    </div>
    <a>
      <router-link :to="{name: 'map'}" class="btn btn-primary mt-3 mb-3">
        Volver al Mapa
      </router-link>
    </a>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import useHistoric from '@/stores/historicStore'
import { useRoute } from 'vue-router'
import exportFromJSON from 'export-from-json'

const route = useRoute()
const id = route.params.id
const historicStore = useHistoric()
const name = id.replace( 'urn:ngsi-ld:', '' ).replace( ':', ' ' )

onBeforeMount( async () => {
      await historicStore.getAddress( id )
      await historicStore.getLocation( id )
      await historicStore.getHistoric( id )
    }
)

const exportCsv = async () => {

  const data = historicStore.historic
  const fileName = `historico_estacion_id_${ name }`
  const exportType = exportFromJSON.types.csv
  exportFromJSON( { data, fileName, exportType } )
}

</script>

<style lang="scss" scoped>
.margin {
  margin-top: 80px;
}
</style>