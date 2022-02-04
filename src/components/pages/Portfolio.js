import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListarProject } from "./ListarProject";
import { useForm } from "../../hooks/useForm";
import { setquery } from "../../action/dashboard";

export const Portfolio = () => {

  const dispatch = useDispatch();

  const { listadoPages } = useSelector((state) => state.dashboard);

  const [formLoginValues, handleContactInputChange] = useForm({
    search: "",
  });

  const {search} = formLoginValues;



  useEffect(() => {

    dispatch(setquery(search));


  }, [dispatch, search]);


  return (
    <>
      <main>
        <section>
          <form>
            <div className="contenedor-search">
              <label htmlFor="search">Buscar</label>
              <input
                className="input-search "
                type="text"
                name="search"
                id="search"
                value={search}
                placeholder="Buscar"
                onChange={handleContactInputChange}
              />
            </div>
          </form>
          <div className="container-project animate__animated animate__fadeIn">
            {listadoPages.map((page) => (
              <ListarProject key={page.id} {...page} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
