import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        en_name: '',
        ar_name: '',
        dial_cod: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="en_name" value="English Name" />

                    <TextInput
                        id="en_name"
                        name="en_name"
                        value={data.en_name}
                        className="mt-1 block w-full"
                        autoComplete="en_name"
                        isFocused={true}
                        onChange={(e) => setData('en_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.en_name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="ar_name" value="ArabicName" />

                    <TextInput
                        id="ar_name"
                        name="ar_name"
                        value={data.ar_name}
                        className="mt-1 block w-full"
                        autoComplete="ar_name"
                        isFocused={true}
                        onChange={(e) => setData('ar_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.ar_name} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="dial_cod" value="dial_cod" />

                    <TextInput
                        id="dial_cod"
                        name="dial_cod"
                        value={data.dial_cod}
                        className="mt-1 block w-full"
                        autoComplete="dial_cod"
                        isFocused={true}
                        onChange={(e) => setData('dial_cod', e.target.value)}
                        required
                    />

                    <InputError message={errors.dial_cod} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        isFocused={true}
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
