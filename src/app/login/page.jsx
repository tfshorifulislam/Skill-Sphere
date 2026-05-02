"use client";
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
import { Check } from "@gravity-ui/icons";
import { GrGoogle } from "react-icons/gr";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (!error) {
            router.push('/')
            toast.success('Login Successful');

        }
        else {
            toast.error('Login failed');
        }


    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-5 bg-[#f8f9ff]">

            <Card className="w-full max-w-md p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 animate__animated animate__fadeInLeft">

                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
                        Welcome Back
                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Login to continue your learning journey
                    </p>
                </div>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>


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
                            placeholder="Enter your email"
                            className="py-3 rounded-xl border-gray-200 focus:border-[#5D38DE]"
                        />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Must contain uppercase letter";
                            if (!/[0-9]/.test(value)) return "Must contain number";
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium">Password</Label>
                        <Input
                            placeholder="Enter your password"
                            className="py-3 rounded-xl border-gray-200 focus:border-[#5D38DE]"
                        />
                        <Description className="text-xs text-gray-500">
                            Must be 8+ characters with uppercase & number
                        </Description>
                        <FieldError />
                    </TextField>


                    <div className="flex flex-col gap-3 mt-2">

                        <Button
                            fullWidth
                            type="submit"
                            className="bg-[#5D38DE] text-white py-5 rounded-xl hover:bg-[#4c2fc2] transition"
                        >
                            <Check />
                            Sign In
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
}