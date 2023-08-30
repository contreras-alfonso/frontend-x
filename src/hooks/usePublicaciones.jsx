import { useContext } from "react";
import { PublicacionesContext } from "../context/PublicacionesProvider";

const usePublicaciones = () => {
    return useContext(PublicacionesContext);
}

export default usePublicaciones;