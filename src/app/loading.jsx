const Loading = () => {
    return (
        <div className="text-center w-full h-screen flex justify-center items-center">
            {/* Loader Spinner */}
            <div
                className="w-14 h-14 border-4 border-dashed rounded-full animate-spin border-red-500"
            ></div>
        </div>
    );
}

export default Loading;
