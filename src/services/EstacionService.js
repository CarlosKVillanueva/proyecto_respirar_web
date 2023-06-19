import { ref } from 'vue'
let estaciones = ref( [] )

const fetchEstaciones = async () => {
        try {
            const url = 'http://localhost:8080/respirar/sensores/'
            const response = await fetch( url )
            estaciones = await response.json()
        } catch ( e ) {
            console.log( 'Error:' + e )
        }
    }


export {estaciones, fetchEstaciones}