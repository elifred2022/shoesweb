import React from "react";




export const ProductoItem = ({ img, id, nombre, descripcion, price, category, cantidad, sku }) => {

return (
    <>
    <div className="producto">
      <div className="producto__footer">
        <div className="producto_img">
        <img className="picture" height={350} src={img}  />
        </div>
      </div>
        <div className="producto__detail">
            <div>
               <h3>Modelo: </h3> <p>{nombre}</p>
               <h3>Categoria: </h3> <p> {category} </p>
               <h3>Cantidad existente: </h3><p> {cantidad} </p>
                <h3>Precio $: </h3><p > {price}</p> 
                <h3>SKU: </h3><p> {sku} </p>
            </div>
        </div>
        <div>
            <h3>Descripcion: </h3> <p>{descripcion}</p>
        </div>     
    </div>
   
    </>
    
  );
};

