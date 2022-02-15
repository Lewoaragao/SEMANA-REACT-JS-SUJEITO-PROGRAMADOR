import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Links from './pages/Links'
import Error from './pages/Error'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    {/* aqui se trata da página inicial quando é usado a barra inclinada */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/links" element={<Links/>} />
                    {/* tratando da página notfound só dizer que vai pro asterisco */}
                    <Route path="*" element={<Error/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp