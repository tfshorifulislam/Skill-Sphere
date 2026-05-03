"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function UpdateUsersInfo() {

    const onSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            image,
            name,
        })

        console.log(name, image)
    }

    return (
        <Modal>
            <Button className="mt-5 w-full bg-[#5D38DE] text-white py-2.5 rounded-xl hover:bg-[#4c2fc2] transition">
                Edit Profile
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="sm:max-w-md rounded-2xl">
                        <Modal.Header className="flex flex-col items-center text-center gap-2 pb-2">
                            <Modal.Heading className="text-lg font-semibold text-slate-800">
                                Update Profile
                            </Modal.Heading>
                            <p className="text-sm text-gray-500">
                                Change your name and profile image
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6 pt-3">
                            <Surface
                                variant="default"
                                className="p-4 rounded-xl border border-gray-100 shadow-sm"
                            >
                                <form
                                    onSubmit={onSubmit}
                                    className="flex flex-col gap-4">
                                    <TextField
                                        className="w-full">
                                        <Label
                                            className="text-sm text-gray-600">
                                            Name
                                        </Label>
                                        <Input
                                            name="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            className="mt-1" />
                                    </TextField>
                                    <TextField
                                        className="w-full">
                                        <Label
                                            className="text-sm text-gray-600">
                                            Profile Image URL
                                        </Label>
                                        <Input
                                            name="image"
                                            type="url"
                                            placeholder="https://example.com/avatar.jpg"
                                            className="mt-1" />
                                    </TextField>

                                    <Modal.Footer
                                        className="px-6 pb-6">
                                        <Button
                                            slot="close"
                                            variant="secondary"
                                            className="rounded-lg">
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            slot="close"
                                            className="bg-[#5D38DE] text-white rounded-lg hover:bg-[#4c2fc2]">
                                            Update
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}