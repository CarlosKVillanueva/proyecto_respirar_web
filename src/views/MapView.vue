<template>
  <div class="container">
    <ol-map
        :loadTilesWhileAnimating="true"
        :loadTilesWhileInteracting="true"
        style="height: 1000px"
    >
      <ol-view
          ref="view"
          :center="center"
          :rotation="rotation"
          :zoom="zoom"
          :projection="projection"
          @zoomChanged="zoomChanged"
      />

      <ol-tile-layer>
        <ol-source-osm/>
      </ol-tile-layer>

      <div v-for="( station ) in storeStations.filteredStations"
           :key="station.id"
      >
        <ol-overlay :position="[station.location.value.coordinates[1], station.location.value.coordinates[0]]"
                    :offset="[-10,-10]">
          <template v-slot="slotProps">
            <div class="overlay-content"
                 @mouseover="chageMouseOver(station.id)"
                 @mouseenter="hovered = true"
                 @mouseleave="hovered=false"
            >
              <router-link :to="{name: 'station', params: { id: station.id }}">
                <v-icon class="v-icon" :scale="currentZoom / 4" name="bi-geo-alt-fill"/>
              </router-link>

            </div>
            <div class="overlay-content">
              <div :class="{'station-hover': hovered }"
                   v-show="hovered && station.id === mouseOver"
              >
                <span class="title_hover">Ultimos Registros </span> <br>
                {{ station.address.value.address.streetAddress }}<br>
                Temperatura: {{ station.temperature.value }} °C <br>
                PM1: {{ station.pm1.value }}µm <br>
                PM10: {{ station.pm10.value }}µm <br>
                PM25: {{ station.pm25.value }}µm <br>
              </div>
            </div>
          </template>
        </ol-overlay>

      </div>
    </ol-map>
    <div>
      <div class="wrapper">
        <div class="col-md-5 mx-auto">
          <div class="input-group">
            <input class="bcg-color form-control border-end-0 border text-white bg-dark rounded-pill" type="text" v-model="query"
                   @keyup="search()"
                   placeholder="Buscar Estaciones (ID o Ciudad)">
            <span class="input-group-append">
            <button class="bcg-color btn btn-outline-secondary bg-dark border-bottom-0 border rounded-pill ms-n5"
                    type="button"
                    @click="search()"><v-icon class="magnifier" name="fa-search-location"/></button>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {{query}}
</template>

<script setup>
import {ref, onMounted} from "vue";
import useStationsStore from '@/stores/stationsStore'

const storeStations = useStationsStore()
const hovered = ref(false)
let mouseOver = ref('')
let query = ref('')

const search = () => {
  storeStations.filter(query.value)
}

onMounted(async () => {
  await storeStations.getStations()
  console.log(storeStations.filteredStations)
})

const center = ref([-62.69342, -38.40858]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
const rotation = ref(0);

const currentZoom = ref(0);

const zoomChanged = (z) => {
  currentZoom.value = z
}

const chageMouseOver = (id) => {
  mouseOver = id
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 56px;
}

.overlay-content {
  color: red;
}

input::placeholder {
  color: whitesmoke;
  opacity: 0.5;
}

.form-control {
  padding-left: 30px;
}

.bcg-color {
  background-color: rgb(43,48,53) !important;
}

.station-hover {
  font-size: 12px;
  width: 250px;
  height: 130px;
  color: #fff;
  position: relative;
  bottom: 155px;
  right: -10px;
  background-color: rgba(71, 74, 86, 0.91);
  border: 1px solid #212228;
  border-radius: 10px;
  padding: 2px 10px;
  z-index: 1000;
}

.title_hover {
  width: 100%;
  text-align: center;
  font-weight: bold;
}

.ms-n5 {
  margin-left: -40px;
}

.wrapper {
  position: absolute;
  width: 100%;
  top: 17px;
  left:-50px;
}
</style>