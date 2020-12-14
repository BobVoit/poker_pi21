import React from 'react';
import { TextField } from '@material-ui/core';



// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={"form-controls" + " " + (hasError ? "form-controls__error" : "")}>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             { hasError && <span>{meta.error}</span> } 
//         </div>
//     )
// }

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={"form-controls" + " " + (hasError ? "form-controls__error" : "")}>
            <div>
                <TextField {...input} {...props} variant="outlined" label={props.labelName} />
            </div>
            { hasError && <span>{meta.error}</span> } 
        </div>
    )
}