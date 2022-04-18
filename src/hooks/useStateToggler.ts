import { useState } from "react";

export const useStateToggler = (initial: boolean) => {
    const [state, setState] = useState<boolean>(initial);

    const stateToggler = () => {
        setState(!state);
    }

    return {state, setState, stateToggler}
}