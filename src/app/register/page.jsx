'use client'

import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { GrGoogle } from 'react-icons/gr';
import { Check } from '@gravity-ui/icons';



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
        <div className="px-5 mt-10 flex justify-center items-center animate__animated animate__fadeInLeft">
            <Card className="max-w-5xl mx-auto rounded-md">
                <h1 className="text-center text-2xl font-bold">Register</h1>

                <Form className="flex  flex-col gap-4" onSubmit={onSubmit}>
                    <TextField isRequired
                        name="name"
                        type="text">
                        <Label className="text-sm font-medium">Name</Label>
                        <Input
                            className="py-3 rounded-xl border-gray-200 focus:border-[#5D38DE]"
                            placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="text">
                        <Label className="text-sm font-medium">Image URL</Label>
                        <Input
                          className="py-3 rounded-xl border-gray-200 focus:border-[#5D38DE]"
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
                        <Label className="text-sm font-medium">Email</Label>
                        <Input
                            className="py-3 rounded-xl border-gray-200 focus:border-[#5D38DE]"
                            placeholder="Enter your Email" />
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
                        <Label className="text-sm font-medium">Password</Label>
                        <Input
                            className="py-3 rounded-xl border-gray-200 focus:border-[#5D38DE]"
                            placeholder="Enter your password" />
                        <Description className="text-xs text-gray-500">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex flex-col gap-2">
                        <Button
                            fullWidth
                            type="submit"
                            className="bg-[#5D38DE] text-white py-5 rounded-xl hover:bg-[#4c2fc2] transition"
                        >
                            <Check />
                            Submit
                        </Button>
                        <Button
                            fullWidth
                            type="reset"
                            variant="bordered"
                            className="py-5 rounded-xl"
                        >
                            Reset
                        </Button>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <div className="h-px bg-gray-200 w-full"></div>
                        <span className="text-xs text-gray-400">OR</span>
                        <div className="h-px bg-gray-200 w-full"></div>
                    </div>
                </Form>

                <Button
                    fullWidth
                    onClick={handleGoogleSignIn}
                    variant="bordered"
                    className="py-5 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition"
                >
                    <GrGoogle className="text-[#5D38DE]" />
                    Continue with Google
                </Button>
            </Card>
        </div>
    );
};

export default RegisterPage;