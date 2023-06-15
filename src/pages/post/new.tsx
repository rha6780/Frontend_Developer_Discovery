import { ToastContainer } from 'react-toastify';

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import Head from '../../components/Post/Head';
import Editor from '../../components/Post/Editor';


const Page = () => {
    return (
        <div>
            <ToastContainer />
            <NavBar />
            <Head title="게시글 작성하기" />
            <Editor />
            <Footer />
        </div>
    );
}

export default Page;
