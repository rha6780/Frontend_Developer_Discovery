import NavBar from '../components/shared/NavBar';
import NotFound from '../components/Error/NotFound';


const Error = () => {
    return (
        <div>
            <NavBar />
            <div className="Main">
                <NotFound />
            </div>
        </div>
    );
}

export default Error;
