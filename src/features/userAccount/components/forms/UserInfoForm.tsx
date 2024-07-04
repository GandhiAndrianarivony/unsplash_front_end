import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { UserInfoSchema } from "../../../../lib/validations";
import { useAuth } from "../../../../hooks/useAuth";
import { useEffect } from "react";
import InputUpdate from "./InputUpdate";
import Button from "../../../../components/ui/Button";
import { z } from "zod";
import User from "../../../../components/users/User";

const UserInfoForm = () => {
    const { checkAuthUser, userData, token } = useAuth();

    const genderOptions = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' }
    ]

    useEffect(() => {
        checkAuthUser();
    }, []);

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(UserInfoSchema),
        defaultValues: userData?.getCurrentUser,
    });

    const onSubmit: SubmitHandler<z.infer<typeof UserInfoSchema>> = (
        formData: z.infer<typeof UserInfoSchema>
    ) => {
        console.log(formData);
    };

    return (
        <div>
            <div className="text-center text-3xl font-bold my-8">Edit Profile</div>

            <div className="flex justify-center ">
                <form onSubmit={handleSubmit(onSubmit)} className=" w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <InputUpdate
                                register={register}
                                label="Username"
                                errors={errors}
                                field="username"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <InputUpdate
                                register={register}
                                label="Email"
                                errors={errors}
                                field="email"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <div className="relative">
                                <InputUpdate
                                    register={register}
                                    label="Gender"
                                    errors={errors}
                                    field="gender"
                                    type="select"
                                    options={genderOptions}
                                />
                                <div className="pointer-events-none absolute top-0 right-0 pt-[3rem] px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <InputUpdate
                                register={register}
                                label="Location"
                                errors={errors}
                                field="location"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <InputUpdate
                                register={register}
                                label="Phone Number"
                                errors={errors}
                                field="phoneNumber"
                            />
                        </div>
                    </div>
                    <div>
                        <InputUpdate
                            register={register}
                            label="Website"
                            errors={errors}
                            field="website"
                        />
                    </div>
                    <div>
                        <InputUpdate
                            register={register}
                            label="Bio"
                            errors={errors}
                            field="bio"
                            type="textarea"
                        />
                    </div>
                    <div>
                        <InputUpdate
                            register={register}
                            label="Interests"
                            errors={errors}
                            field="interests"
                            type="textarea"
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            label="Update account"
                            className="bg-blue-500 text-white p-2 rounded w-full mt-5 hover:bg-blue-600"
                            isDisable={isSubmitting}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserInfoForm;
