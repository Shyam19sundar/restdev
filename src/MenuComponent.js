import React from "react"
import "./MenuComponent.css"
import DishDetailComponent from "./DishDetailComponent"
import {Link} from "react-router-dom"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function MenuComponent({id , name , image , setselected}) {
    return(
        <div className="MenuComponents"  >
            <div className="singlemenu" >
            <Link to={`/menu/${name}`}>
                <img className="imagetop" 
                    src={image}
                    onClick={() => {
                        setselected({name : name , image : image , id : id} )
                    }}
                />
                <p className="nametop">{name}</p>
                </Link> 
            </div>   
        </div>
    )
}

export default MenuComponent