import React, { useState } from "react";
import Food from "./Food";

const FoodItem = () =>{

    const [item] = useState(Food)

    return(
        <>  {/*React fragment */}

            {
                item.map((elem) =>{
                    const {id,name,status} = elem
                    return(
                        <h4>{`Id is ${id} Name is ${name} Status is ${status}`}</h4>
                    )
                })
            }

        </>
    )
}

export default FoodItem