import React from "react";
import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={s.Loader}>
            <TailSpin color="#00BFFF" height={120} width={120} />
        </div>
        
    )
};

export default Loader;