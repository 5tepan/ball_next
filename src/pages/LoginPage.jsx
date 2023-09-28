import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/store/reducers/authSlice'
import Input from '@/components/ui/input/Input'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/router'

import styles from '@/styles/LoginPage.module.css'

const LoginPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const loading = useSelector((state) => state.auth.loading)
    const error = useSelector((state) => state.auth.error)

    const {
        handleSubmit,
        control,
        getValues,
    } = useForm()

    const onSubmit = async () => {
        const formData = getValues()
        await dispatch(login(formData))
        router.push('/BallPage')
    }

    return (
        <div className={styles.loginCard}>
            <h1 className={styles.title}>Hello! Please log in!</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.loginForm}
            >
                <Controller
                    name='username'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <Input
                            type='text'
                            placeholder='Username'
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <Input
                            type='password'
                            placeholder='Password'
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Button
                    type='submit'
                    disabled={loading}
                    content={loading ? 'Logging in...' : 'Log In'}
                />
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    )
}

export default LoginPage
