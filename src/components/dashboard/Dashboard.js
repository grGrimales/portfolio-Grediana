import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";



import Table from "react-bootstrap/Table";
import { RowProject } from "./RowProject";



export const Dashboard = () => {


  const { listadoPages } = useSelector((state) => state.dashboard);


  useEffect(() => {

  }, [listadoPages])


  return (
    <>


    <div className="container-fluid mt-5">
          <Table responsive="sm" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Imagen</th>

                <th>Description</th>
                <th>Labels</th>
                <th>order</th>

                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>

            {listadoPages.map((page) => (
       
           <RowProject key={ page.id }
           { ...page }/>
           
            ))}
   
            </tbody>
          </Table>
        </div>
    </>
    

  );
};
