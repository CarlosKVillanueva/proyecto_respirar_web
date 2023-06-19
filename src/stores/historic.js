import { defineStore } from 'pinia'
import axios from 'axios'

const useHistoric = defineStore(
    'entity',
    {
        state: () => {
            return {
                historic: [],
                last: [],
                location: [],
                address: {}
            }
        },
        actions: {
            async getHistoric( id ) {
                const { data } = await axios.get( `http://localhost:8081/entity/${ id }`)
                this.historic = data
                this.last = data.slice( -10 )
            },
            async getLocation( id ) {
                const { data } = await axios.get( `http://localhost:8081/entity/${ id }` )
                this.location = JSON.parse( data[ 0 ].location )
            },
            async getAddress( id ) {
                const { data } = await axios.get( `http://localhost:8081/entity/${ id }` )
                this.address = JSON.parse( data[ 0 ].address )
            }
        }
    }
)

export default useHistoric