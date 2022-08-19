import { FormRegister, HeaderRegister } from '../components'


export const Register = () => {

    return (
        <div >

            {/* header */}
            <HeaderRegister />

            {/* espacio entre header y body */}
            <div style={{ height: '60px' }}></div>

            {/* body */}
            <div style={{  height: '1020px', display: 'flex' }}>

                {/* informacion */}
                <div style={{  width: '50%', height: '100%' }}></div>

                {/* formulario */}
                <div style={{  width: '50%', height: '100%' }}>
                    <div style={styles.formTitle}>¡Inscribete y reserva tu lugar ahora!</div>
                    <FormRegister />
                </div>
            </div>

            {/* footer */}
            <footer style={{ height: '160px' }}>
                
            </footer>
        </div>
    )
}

const styles = {
    formTitle: {
        fontFamily: 'SharpSansNo1-Semibold',
        fontSize: '20px',
        color: '#02363D',
        textAlign: 'center',
        lineHeight: '29px',
        marginBottom: '30px',
    }
}