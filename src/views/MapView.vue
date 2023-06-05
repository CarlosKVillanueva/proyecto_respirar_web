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
      <ol-source-osm />
    </ol-tile-layer>

    <ol-overlay :position="[-58.46922428440172, -34.63851863589352]">
      <template v-slot="slotProps">
        <div class="overlay-content">
          <v-icon v-show="currentZoom > 13" :scale="currentZoom / 4" animation="pulse" name="bi-geo-alt-fill"/>
        </div>
      </template>
    </ol-overlay>
  </ol-map>
          <span>{{ currentZoom }}</span>
</template>

<script setup>
import { ref } from "vue";
import useAuth from '@/stores/auth'

const store = useAuth()
const activeClass = ref('active')

const center = ref([-58.43, -34.61]);
const projection = ref("EPSG:4326");
const zoom = ref(11.71);
const rotation = ref(0);

const currentZoom = ref(0);

const zoomChanged = (z) => {
  currentZoom.value = z
}
</script>

<style lang="scss" scoped>

.overlay-content {
  color: red;
}
</style>