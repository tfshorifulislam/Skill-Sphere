'use client'

import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { GrGoogle } from 'react-icons/gr';



const RegisterPage = () => {

    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image
        })
        console.log(data, error)

        if (!error) {
            router.push('/')
        }
    }


    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="px-5 mt-10 flex justify-center items-center">
            <Card className="border mx-auto">
                <h1 className="text-center text-2xl font-bold">Register</h1>

                <Form className="flex mx-auto flex-col gap-4" onSubmit={onSubmit}>
                    <TextField isRequired
                        name="name"
                        type="text">
                        <Label>Name</Label>
                        <Input
                            className='py-5 bg-transparent rounded-sm'
                            placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="text">
                        <Label>Image URL</Label>
                        <Input
                            className='py-5 bg-transparent rounded-sm'
                            placeholder="Image URL" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input
                            className='py-5 bg-transparent rounded-sm'
                            placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input
                            className='py-5 bg-transparent rounded-sm'
                            placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex flex-col gap-2">
                        <Button
                            className='py-6 rounded-sm mb-4'
                            fullWidth
                            type="submit">

                            Submit
                        </Button>
                        <Button
                            fullWidth
                            type="reset"
                            variant="secondary"
                            className='py-6 rounded-sm mb-4'
                        >
                            Reset
                        </Button>
                    </div>
                </Form>
                <Separator className='mt-5' />
                <p className="flex justify-center">
                    Or
                </p>
                <Button
                    className='py-6 rounded-sm mb-4'
                    onClick={handleGoogleSignIn}
                    fullWidth
                    variant="outline">
                    <GrGoogle />
                    Register With Google
                </Button>
            </Card>
        </div>
    );
};

export default RegisterPage;