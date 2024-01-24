import { useState} from "react";

function Product(props)
{

   let [status,setStatus] = useState("It is Available")    

    // function currentStatus()
    // {
    //     setStatus("Not Available");
    // }


    return(

        <div className="product">
            <img className="img" src={props.url}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{status}</p>
  
            {/* <button onClick={currentStatus}>Click</button> */}



            {/* it is called Anonimaes Function (Function with not having name) */}
            <button onClick={ () => {
                setStatus("Not Available") 
                }}>Click</button>
        </div>
    )

}
export default Product;