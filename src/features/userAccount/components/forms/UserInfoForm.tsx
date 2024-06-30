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
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <InputUpdate
                        register={register}
                        label="Email"
                        errors={errors}
                        field="email"
                    />
                </div>
                <div>
                    <InputUpdate
                        register={register}
                        label="Username"
                        errors={errors}
                        field="username"
                    />
                </div>
                <div>
                    <InputUpdate
                        register={register}
                        label="Gender"
                        errors={errors}
                        field="gender"
                    />
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
                    <InputUpdate
                        register={register}
                        label="Location"
                        errors={errors}
                        field="location"
                    />
                </div>
                <div>
                    <InputUpdate
                        register={register}
                        label="Phone Number"
                        errors={errors}
                        field="phoneNumber"
                    />
                </div>
                <div>
                    <Button
                        type="submit"
                        label="Update"
                        className="bg-blue-500 text-white p-2 rounded-xl"
                        isDisable={isSubmitting}
                    />
                </div>
            </form>
        </>
    );
};

export default UserInfoForm;
