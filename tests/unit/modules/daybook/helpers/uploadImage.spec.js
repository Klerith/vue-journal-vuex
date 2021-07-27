import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from '@/modules/daybook/helpers/uploadImage'

cloudinary.config({
    cloud_name: 'dx0pryfzn',
    api_key: '422916932349318',
    api_secret: 'gM_vs-URpSAyA3xV-PsoTg8xF3M'
})


describe('Pruebas en el uploadImage ', () => {
    
    test('debe de cargar un archivo y retornar el url', async( done ) => {
        
        const { data } = await axios.get('https://res.cloudinary.com/dx0pryfzn/image/upload/v1627077252/ip3vwn8sjvnncphqka4y.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')


        // Tomar el ID
        const segments = url.split('/')
        const imageId = segments[ segments.length - 1 ].replace('.jpg','')
        cloudinary.v2.api.delete_resources( imageId, {}, () => {
            done()
        })

        
    })
    

})



