type PropsType = {
    onChange?: (e: any) => void;
    isImageLoaded: boolean;
};


function InputImage({ onChange, isImageLoaded }: PropsType) {
    return (
        <>
            <input
                type="file"
                className="hidden"
                onChange={({
                    target: { validity, files: file },
                }: React.ChangeEvent<HTMLInputElement>) => {
                    if (onChange && validity.valid && file && file.length) {
                        onChange(file[0]);
                    }
                }}
                disabled={isImageLoaded}
            />
        </>
    );
}

export default InputImage;
