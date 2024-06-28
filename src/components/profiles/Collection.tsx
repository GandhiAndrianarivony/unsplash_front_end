function Collection() {
    return (
        <div className="flex gap-5 flex-wrap">
            <div className="flex gap-1 w-[400px]">
                <div>
                    <img
                        className="h-full object-cover"
                        src="/src/assets/images/collection-bg.jpg"
                        alt=""
                    />
                </div>
                <div className="flex-initial flex flex-col gap-1">
                    <div>
                        <img
                            className="object-cover"
                            src="/src/assets/images/collection-bg.jpg"
                            alt=""
                        />
                    </div>
                    <div>
                        <img className="object-cover"
                            src="/src/assets/images/collection-bg.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
