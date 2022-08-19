import eventApi from '../api/eventApi';
import { useForm } from '../hooks/useForm'
import { TextInputForm } from './TextInputForm';

export const FormRegister = () => {

    const { name, lastName, email, country, phone, job, onInputChange } = useForm({
        name: '',
        lastName: '',
        email: '',
        country: '',
        phone: '',
        job: '',
    });

    const getCountries = async () => {
        try {
            const { data } = await eventApi.get('/country');
            console.log(data);
            setCountriesOption(data);
        } catch (error) {
            console.log(error);
        }
    }
    const getuser = async () => {
        try {
            e.preventDefault();
            console.log('getuser');
            const { data } = await eventApi.get('/user');
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    const postUser = async () => {
        try {
            const { data } = await eventApi.post('/user', { name, lastName, email, country, phone, job });
            return data;
        } catch (error) {
            console.log(error.response.data);
            alert('Error campos obligatorios');
        }
    }

    const codeVerification = async (title) => {
        try {
            const { data } = await eventApi.post('/user/generate.code', { email, name, lastName, title });
            return data.codeVerification;
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (name === '' || lastName === '' || email === '' || country === '' || phone === '' || job === '') {
            alert('Error campos obligatorios');
            return;
        }

        const code = await codeVerification('REGISTRO');
        console.log(code);
        let codigo = prompt('Ingrese el código de seguridad enviado a tu email');
        console.log(codigo);
        while (code !== parseInt(codigo)) {
            alert('Código incorrecto');
            codigo = prompt('Ingrese el código de seguridad enviado a tu email');
            console.log(codigo);
            if (codigo === null) {
                return;
            }
        }

        const user = await postUser();
        console.log(user);

        if (user) {
            await codeVerification('WELCOME');
            alert('Registro exitoso !');
            window.location.reload();
        }

    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <TextInputForm name="name" label="Nombre" value={name} onChange={onInputChange} />
                <TextInputForm name="lastName" label="Apellido" value={lastName} onChange={onInputChange} />
                <TextInputForm name="email" label="Correo electronico del trabajo" value={email} onChange={onInputChange} />
                <TextInputForm name="country" label="País" value={country} onChange={onInputChange} />
                <TextInputForm name="phone" label="Telefono" value={phone} onChange={onInputChange} type="number" />
                <TextInputForm name="job" label="Puesto de trabajo" value={job} onChange={onInputChange} />

                <button type="submit" style={styles.btn}>Inscribete</button>

            </form>
        </>
    )
}

const styles = {
    btn: {
        backgroundColor: '#02363D',
        width: '50%',
        height: '50px',
        color: '#FFFFFF',
        marginLeft: '26%',
        marginTop: '20px',
    }
}