import React from"react"

function Button(props){
    return(
        <div className=" text-center px-6 py-1 border-2 border-blue-700 text-white bg-blue-700 hover: transition all ">
          {props.title}
        </div>
    )
}
export default Button;