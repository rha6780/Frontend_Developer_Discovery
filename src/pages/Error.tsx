import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import NotFound from '../components/Error/NotFound';


const Error = () => {
    return (
        <div>
            <NavBar />
            <div className="Main">
                <NotFound />
            </div>
            <Footer />
        </div>
    );
}

export default Error;
