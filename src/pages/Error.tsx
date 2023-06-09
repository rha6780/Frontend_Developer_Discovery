import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import NotFound from '../components/Error/NotFound';


const Error = (props: any) => {
    var error_name = props.name.trim() == 0 ? "not_found" : props.name

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
