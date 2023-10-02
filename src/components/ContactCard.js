import React from'react';

const ContactCard =(props)=>{
    const {id,name,email}=props.contact;

    return (
        <div className="item">
        <div className="content">
          <div>{id}</div>  
          <div className="header">{name}</div>
          <div>{email}</div>
          <i className="trash alternate outline icon"></i>
        </div>
      </div>
    )
}

export default ContactCard;