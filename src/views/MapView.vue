<template>
  <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 800px"
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

    <div v-for="estacion in storeStations.$state.stations"
         :key="estacion.id">
      <ol-overlay :position="[estacion.location.value.coordinates[1], estacion.location.value.coordinates[0]]">
        <template v-slot="slotProps">
          <div class="overlay-content">
            <router-link :to="{name: 'estacion', params: { id: estacion.id }}">
              <v-icon :scale="currentZoom / 4" name="bi-geo-alt-fill"/>
            </router-link>
          </div>
        </template>
      </ol-overlay>
    </div>
  </ol-map>

</template>

<script setup>
import { ref, onMounted } from "vue";
import useAuth from '@/stores/auth'
import useStations from '@/stores/stations'

const store = useAuth()
const storeStations = useStations()
const activeClass = ref( 'active' )


onMounted( async () => {
  await storeStations.getStations()
  // console.log( storeStations.$state.stations )
} )

const center = ref( [ -62.69342, -38.40858 ] );
const projection = ref( "EPSG:4326" );
const zoom = ref( 4.9 );
const rotation = ref( 0 );

const currentZoom = ref( 0 );

const zoomChanged = ( z ) => {
  currentZoom.value = z
}
</script>

<style lang="scss" scoped>

.overlay-content {
  color: red;
}
</style>