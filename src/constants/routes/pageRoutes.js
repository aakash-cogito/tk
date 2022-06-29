import Clients from "../../screens/clients/clients";
import Home from "../../screens/home/Home";

export const pageRoutes = (props) => [
    {
        path:"/clients",
        element:<Clients />
    },
    {
        path:"/",
        element:<Home />
    }
]