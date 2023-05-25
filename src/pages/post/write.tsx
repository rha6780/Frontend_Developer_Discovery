import styles from '../../../styles/Post.module.css'
import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import Head from '../../components/Post/Head';
import Editor from '../../components/Post/Editor';


const Page = () => {
    return (
        <div>
            <NavBar />
            <Head />
            <Editor />
            <Footer />
        </div>
    );
}

export default Page;
