import {defineStore} from 'pinia'
import axios from 'axios'

const config = {
    headers: {
        'fiware-service': 'openiot',
        'fiware-servicepath': '/'
    }
}

const useStationsStore = defineStore(
    'stations',
    {
        state: () => {
            return {
                stations: [],
                filteredStations: []
            }
        },
        actions: {
            async getStations() {
                const {data} = await axios.get('http://localhost:1026/v2/entities', config)
                this.stations = data
                this.filteredStations = data
            },
            filter(query) {
                if (query.isEmpty) {
                    return this.filteredStations
                }
                this.filteredStations = this.stations.filter(station => {
                    return (
                        station.id.toLowerCase().includes(query.toLowerCase()) ||
                        (station.address.value.address.addressLocality).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query.toLowerCase())
                    )
                })
            }
        }
    }
)

export default useStationsStore