"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    Separator,
    TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;


        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'

        })


        console.log(data, error)
    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <div className="px-5 mt-10 flex justify-center items-center">
            <Card className="">
                <h1 className="text-center text-2xl font-bold">Login</h1>

                <Form className="flex   flex-col gap-4" onSubmit={onSubmit}>
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
                        <Input placeholder="Enter your Email"
                            className='py-5 bg-transparent rounded-sm'
                        />
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
                            className='py-5 bg-transparent mb-3rounded-sm'
                            placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2 w-full">
                        <Button fullWidth type="submit"
                            className='py-6 rounded-sm my-5'>
                            <Check />
                            Submit
                        </Button>
                    </div>
                    <Separator />
                </Form>
                <p className="flex justify-center">
                    Or
                </p>
                <Button
                    fullWidth
                    onClick={handleGoogleSignIn}
                    className='py-6 rounded-sm mb-4'
                    variant="outline">
                    <GrGoogle />
                    Login With Google
                </Button>
            </Card>
        </div>
    );
}