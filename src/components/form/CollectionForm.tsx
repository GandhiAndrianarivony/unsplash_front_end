import Button from "../ui/Button";
import Input from "../ui/Input";

type PropsType = {
    setIsClickedCB: React.Dispatch<React.SetStateAction<boolean>>;
};

const CollectionForm = ({ setIsClickedCB }: PropsType) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const hoverClasses = "opacity-80 hover:opacity-100 transition-opacity duration-200 text-white font-bold "

    return (
        <div className="w-full">
            <div className="text-center mb-10">
                <h1 className="text-3xl block font-bold">Create New Collection</h1>
            </div>
            <form className="mx-[100px] my-2" onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    type="text"
                    arial_label="Name of the collection"
                />
                <div className="flex justify-between items-center mt-4">
                    <Button
                        className={`bg-red-600 ${hoverClasses} rounded-lg p-2`}
                        label="Cancel"
                        type="button"
                        onClick={() => setIsClickedCB(false)}
                    />
                    <Button
                        className={`bg-black rounded-lg p-2 ${hoverClasses}`}
                        label="Create Collection"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default CollectionForm;
