import { useMutation } from "@apollo/client";
import Button from "../ui/Button";
import { CREATE_NEW_COLLECTION } from "../../lib/graphql/mutations/createNewCollection";
import { useAuth } from "../../hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { generateRandomString } from "../../utils/helpers";
import { z } from "zod";
import { CollectionInputSchema } from "../../lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const CollectionForm = () => {
    const [creationMessage, setCreationMessage] = useState("");
    const { token } = useAuth();
    const {
        handleSubmit,
        register,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof CollectionInputSchema>>({
        resolver: zodResolver(CollectionInputSchema),
        defaultValues: {
            name: "",
        },
    });

    const [createCollection, {}] = useMutation(CREATE_NEW_COLLECTION, {
        context: {
            headers: {
                authorization: `JWT ${token}`,
            },
        },
    });

    const onSubmit: SubmitHandler<
        z.infer<typeof CollectionInputSchema>
    > = async (formData: z.infer<typeof CollectionInputSchema>) => {
        try {
            const res = await createCollection({
                variables: formData,
            });
            if (res.data.createCollection.statusCode !== 201) {
                setCreationMessage(res.data.createCollection.errorMessage);
            } else {
                setCreationMessage("Successfully created!!");
                reset();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const hoverClasses =
        "opacity-80 hover:opacity-100 transition-opacity duration-200 text-white font-bold ";

    return (
        <div className="w-full">
            <div className="text-center mb-10">
                <h1 className="text-3xl block font-bold">
                    Create New Collection
                </h1>
                <p
                    className={
                        creationMessage === "Successfully created!!"
                            ? "text-green-500 pt-4"
                            : "text-red-500 pt-4"
                    }
                >
                    {creationMessage}
                </p>
            </div>
            <form className="mx-[100px] my-2" onSubmit={handleSubmit(onSubmit)}>
                <label
                    className="block text-base mb-2 mt-2 font-bold"
                    htmlFor={generateRandomString()}
                >
                    Name
                </label>
                <input
                    className="border-2 rounded-md w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    type="text"
                    aria-label="Name of the collection"
                    {...register("name")}
                    placeholder="Collection Name"
                />
                {errors.name && (
                    <p className="text-red-500">{`${errors.name.message}`}</p>
                )}
                <div className="flex justify-end items-center mt-4">
                    <Button
                        className={`bg-black rounded-lg p-2 ${hoverClasses} disabled:bg-gray-500`}
                        label="Create Collection"
                        type="submit"
                        isDisable={isSubmitting}
                    />
                </div>
            </form>
        </div>
    );
};

export default CollectionForm;
