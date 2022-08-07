import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, ThemeButton } from '../components';
import { AboutPage, HomePage, SkillsPage } from '../pages';
import { ContactPage } from '../pages/ContactPage';
import { PortfolioPage } from '../pages/PortfolioPage';

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='/about' element={ <AboutPage /> } />
                    <Route path='/skills' element={ <SkillsPage /> } />
                    <Route path='/portfolio' element={ <PortfolioPage /> } />
                    <Route path='/contact' element={ <ContactPage /> } />
                    <Route path='*' element={ <HomePage /> } />
                </Routes>
                <ThemeButton />
            </BrowserRouter>
        </>
    )
}