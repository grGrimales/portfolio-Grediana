import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListarProject } from "./ListarProject";

export const Portfolio = () => {
  const { listadoPages } = useSelector((state) => state.dashboard);

  return (
    <>
      <main>
        <section>
          <div className="container-project">
            {listadoPages.map((page) => (
              <ListarProject key={page.id} {...page} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
