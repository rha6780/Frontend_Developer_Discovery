import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import Head from '../../components/Post/Head';
import Editor from '../../components/Post/Editor';


const Page = () => {
    return (
        <div>
            <NavBar />
            <Head title="영상 게시물" />
            <Editor />
            <Footer />
        </div>
    );
}

export default Page;