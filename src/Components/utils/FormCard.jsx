import React from "react";

const FormCard = ({ datos }) => {
  console.log(datos);
  return (
    <div>
      **Gracias {datos.nombre}, te contactaremos cuanto antes vía mail**
    </div>
  );
};

export default FormCard;
