import React from 'react';

function ContactCard(props) {
  return (
    <thead>
      <tr>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
      </tr>
    </thead>
  );
}

export default ContactCard;
