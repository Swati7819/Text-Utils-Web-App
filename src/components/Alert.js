import React from 'react'

export const Alert = (props) => {
  const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() +lower.slice(1);
  }
  return (
    props.alert && <div className = {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
  )
}

//if props.alert is true, then evaluate statement after &&
//if props.alert is null/false, then do not evalauate statement after &&
