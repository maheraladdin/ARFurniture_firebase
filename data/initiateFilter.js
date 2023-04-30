import AllActive from "../myComponents/filter/active/all";
import AllUnActiveLightMode from "../myComponents/filter/light_mode/all";
import ChairActive from "../myComponents/filter/active/chair";
import ChairUnActiveLightMode from "../myComponents/filter/light_mode/chair";
import CupboardActive from "../myComponents/filter/active/cupboard";
import CupboardUnActiveLightMode from "../myComponents/filter/light_mode/cupboard";
import LampActive from "../myComponents/filter/active/lamp";
import LampUnActiveLightMode from "../myComponents/filter/light_mode/lamp";

const initiateFilter = (filters,queryProductsBasedOnCategory) => {
    return [
        {
            id: "1",
            element: filters === "all" ? <AllActive/> : <AllUnActiveLightMode/>,
            active: () => queryProductsBasedOnCategory("all"),
        },
        {
            id: "2",
            element: filters === "chair" ? <ChairActive/> : <ChairUnActiveLightMode/>,
            active: () => queryProductsBasedOnCategory("chair"),
        },
        {
            id: "3",
            element: filters === "cupboard" ? <CupboardActive/> : <CupboardUnActiveLightMode/>,
            active: () => queryProductsBasedOnCategory("cupboard"),
        },
        {
            id: "4",
            element: filters === "lampshade" ? <LampActive/> : <LampUnActiveLightMode/>,
            active: () => queryProductsBasedOnCategory("lampshade"),
        }
    ]
}

export default initiateFilter;