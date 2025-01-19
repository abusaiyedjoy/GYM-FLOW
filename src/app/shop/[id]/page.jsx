const ProductDetails = ({ params }) => {
    return (
        <>
            <h1>Product Details {params.id}</h1>
            <h1>Product Details {params.name}</h1>
        </>
    );
}
export default ProductDetails;