import React from 'react';
import "../../pages/style.css";
function ContactCard(props) {
  return (
    <thead>
      <tr>
        <td>{props.company}</td>
        <td>{props.department}</td>
        <td>{props.position}</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.state}</td>
      </tr>
    </thead>
  );
}

export default ContactCard;
