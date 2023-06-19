import { defineStore } from 'pinia'
import axios from 'axios'


const config = {
    headers: {
        'fiware-service': 'openiot',
        'fiware-servicepath': '/'
    }
}

const useStations = defineStore(
    'stations',
    {
        state: () => {
            return {
                stations: []
            }
        },
        actions: {
            async getStations() {
                const { data } = await axios.get( 'http://localhost:1026/v2/entities', config)
                this.stations = data
            }
            }
        }
)

export default useStations