import React from "react";
import {Form} from "./Form"

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
         <div className="header">
            <Form />
         </div>  
        )
    }
}