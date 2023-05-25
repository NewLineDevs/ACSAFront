import { Home } from "@mui/icons-material"
import { Routes, Route } from "react-router-dom"
import { PageDisparos } from "../../pages/PageDisparos"
import { PageProvidencias } from "../../pages/PageProvidencias"
import { PageUltimoEvento } from "../../pages/PageUltimoEvento"



export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Home />} />
            <Route path='/pagina-disparos' element={<PageDisparos />} />
            <Route path='/pagina-providencias' element={<PageProvidencias />} />
            <Route path='/pagina-ultimo-evento' element={<PageUltimoEvento />} />
            <Route path='/*' element={<PageDisparos />} />
        </Routes>
    )
}