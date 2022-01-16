import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export const Portfolio = () => {


  const { listadoPages } = useSelector((state) => state.dashboard);

    return (
        <div>
            PORTFOLIO
        </div>
    )
}
