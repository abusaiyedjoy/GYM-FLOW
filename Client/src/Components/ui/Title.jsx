const Title = ({title, description}) => {
    return (
        <div className="place-items-center my-3">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-500 text-lg mb-10">
                {description}
            </p>
        </div>
    );
}
export default Title;