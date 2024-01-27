import Product from './Product';

function Products()
{
    let products=[
        {id:1,name:"Samsung S23",price:79990,url:"https://images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-s911-sm-s911bzgcmea-534843882?$650_519_PNG$"},
        {id:2,name:"Apple iPhone 15Pro",price:101999,url:"https://961souq.com/cdn/shop/files/Apple-iPhone-15-Pro-1_278e2161-733a-42f6-b0e1-d3d51eda2966.jpg?v=1695476110"},
        {id:3,name:"OnePlus 10Pro",price:59999,url:"https://m.media-amazon.com/images/I/61mIUCd-37L.jpg"}
    ]
    return (

        <div className='products'>

        {/* it is probe */}
        {/* <Product name="Samsung S23" price="79990" url="https://images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-s911-sm-s911bzgcmea-534843882?$650_519_PNG$"></Product>
        <Product name="Apple iPhone 15Pro" price="101999" url="https://961souq.com/cdn/shop/files/Apple-iPhone-15-Pro-1_278e2161-733a-42f6-b0e1-d3d51eda2966.jpg?v=1695476110"></Product>
        <Product name="Oneplus 10 Pro" price="59999" url="https://m.media-amazon.com/images/I/61mIUCd-37L.jpg"></Product> */}


        {
            products.map((product)=>{
                return(
                    <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
                )
            })
        }
       </div>

    )
}
export default Products;