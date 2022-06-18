import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignInForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await axios.post('http://localhost:3001/signIn', data).then(res => console.log('response:', res.data.response));
    }

    return (
        <div>
            <h2>サインインする</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>email:</label>
                <input {...register('email')} />
                <label>password:</label>
                <input {...register('password')} />
                <input type='submit' />
            </form>
        </div>
    )
};

export default SignInForm;