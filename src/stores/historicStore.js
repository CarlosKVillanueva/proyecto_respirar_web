import { defineStore } from 'pinia'
import axios from 'axios'
import contains from "@popperjs/core/lib/dom-utils/contains";

const useHistoricStore = defineStore(
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
                console.log(data)
                this.historic = data
                this.last = data.slice( -10 )
            },
            async getLocation( id ) {
                const { data } = await axios.get( `http://localhost:8081/entity/${ id }` )
                this.location = JSON.parse( data[ 0 ].location )
            },
            async getAddress( id ) {
                const { data } = await axios.get( `http://localhost:8081/entity/${ id }` )
                console.log(data[ 0 ].address)
                this.address = JSON.parse( data[ 0 ].address )
            }
        }
    }
)

export default useHistoricStore