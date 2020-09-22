import React , {useState} from "react"
import {DISHES} from './dishes'
import MenuComponent from './MenuComponent'
import DishDetailComponent from "./DishDetailComponent"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function MenuListComponent(){
    const [selected, setselected] = useState(null)
    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Menu</Breadcrumb.Item>
            </Breadcrumb>
            <div className="dishmenu">
                {DISHES.map(dish => (
                <MenuComponent id={dish.id} name={dish.name} image={dish.image} setselected={setselected}/> 
                ))}
            </div>  
            { selected ? 
                <DishDetailComponent selected={selected} /> : null} 
        </div>
    )
}

export default MenuListComponent