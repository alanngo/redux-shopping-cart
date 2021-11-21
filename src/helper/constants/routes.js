import { lazy } from "react"

const routes = [
    {
        id: 0,
        path: "/",
        page: lazy(() => import("../../pages/Products"))
    },
    {
        id: 1,
        path: "/cart",
        page: lazy(() => import("../../pages/Cart"))
    },
    {
        id: 2,
        path: "/product/:id",
        page: lazy(() => import("../../pages/SingleItem"))
    },
]
export default routes