import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";
import { ListGroup, Card } from "react-bootstrap";
const EmpleadoRow = (props) => {
  let empleados = props.empleados[0];
  let empleados2 = props.empleados[1];
  let empleados3 = props.empleados[2];
  let empleados4 = props.empleados[3];
  let empleados5 = props.empleados[4];
  let empleados6 = props.empleados[5];
  let empleados7 = props.empleados[6];
  let empleados8 = props.empleados[7];
  let empleados9 = props.empleados[8];
  return (
    <ListGroup>
      <EmpleadoAvatar
        fullName={empleados.fullName}
        title={empleados.title}
        department={empleados.department}
        pic={empleados.pic}
      ></EmpleadoAvatar>
      <EmpleadoAvatar
        fullName={empleados2.fullName}
        title={empleados2.title}
        department={empleados2.department}
        pic={empleados2.pic}
      ></EmpleadoAvatar>
      <EmpleadoAvatar
        fullName={empleados3.fullName}
        title={empleados3.title}
        department={empleados3.department}
        pic={empleados3.pic}
      ></EmpleadoAvatar>
      <EmpleadoAvatar
        fullName={empleados4.fullName}
        title={empleados4.title}
        department={empleados4.department}
        pic={empleados4.pic}
      ></EmpleadoAvatar>
      <EmpleadoAvatar
        fullName={empleados5.fullName}
        title={empleados5.title}
        department={empleados5.department}
        pic={empleados5.pic}
      ></EmpleadoAvatar>
      <EmpleadoAvatar
        fullName={empleados6.fullName}
        title={empleados6.title}
        department={empleados6.department}
        pic={empleados6.pic}
      ></EmpleadoAvatar>
      <EmpleadoAvatar
        fullName={empleados7.fullName}
        title={empleados7.title}
        department={empleados7.department}
        pic={empleados7.pic}
      ></EmpleadoAvatar>
      <EmpleadoAvatar
        fullName={empleados8.fullName}
        title={empleados8.title}
        department={empleados8.department}
        pic={empleados8.pic}
      ></EmpleadoAvatar>
      <EmpleadoAvatar
        fullName={empleados9.fullName}
        title={empleados9.title}
        department={empleados9.department}
        pic={empleados9.pic}
      ></EmpleadoAvatar>
    </ListGroup>
  );
};

export default EmpleadoRow;
