import React from "react";
import {Dialog, DialogTitle, DialogContent} from '@mui/material';


const LifePath = (props) => {

    const {children, openLife, setopenLife} = props;
    

    return(
        <>
        <Dialog open = {openLife}>
            <DialogTitle>
                {/* <p>Life Path Calculator</p> */}
                <button className="cross" onClick={() => setopenLife(false)}>x</button>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
        </>
    )
}

export default LifePath;