import React from 'react';
import { routerType } from '../types/router.types'
import  Home  from "../features/Pages/components/Home"

const pagesData:routerType[]=[
    {
        path:"",
        element:<Home />,   
        title:"home"    
    }
]

export default pagesData;