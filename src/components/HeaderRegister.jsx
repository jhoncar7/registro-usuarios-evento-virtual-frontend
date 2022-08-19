

export const HeaderRegister = () => {
    return (
        <header style={{ height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <img src="../assets/Group_4.svg" alt="header" style={styles.img} />
            <div style={{ height: '156px', width: '960px', position: 'absolute' }}>
                <div style={styles.title}>El reto de humanizar el CX financiero en 2021</div>
                <div style={styles.subTitle}>La experiencia de un Unicornio de Latam</div>
                <div style={styles.date}>MIERCOLES 16 DE DICIEMBRE | 17 HSs (HORARIO DE QUITO)</div>
            </div>
        </header>
    )
}

const styles = {
    img: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
    },
    title: {
        fontSize: '40px',
        color: '#021800',
        textAlign: 'center',
        lineHeight: '52px',
        height: '52px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTitle: {
        fontFamily: 'SharpSansNo1- BoldItalic',
        fontSize: '40px',
        color: '#021800',
        textAlign: 'center',
        lineHeight: '52px',
        height: '52px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    date: {
        fontFamily: 'SharpSansNo1- BoldItalic',
        fontSize: '21px',
        color: '#00373E',
        textAlign: 'center',
        lineHeight: '40px',
        height: '52px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}