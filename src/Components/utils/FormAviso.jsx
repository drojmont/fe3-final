const FormAviso = (props) => {
  console.log(props.mensaje);
  return (
    <div>
      <h2>{props.mensaje}</h2>
    </div>
  );
};

export default FormAviso;
