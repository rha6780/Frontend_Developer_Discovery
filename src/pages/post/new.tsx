import type { NextPage } from "next";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import styles from '../../../styles/Post.module.css'
import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import Head from '../../components/Post/Head';
import Editor from '../../components/Post/Editor';


const Page = () => {
    return (
        <div>
            <NavBar />
            <Head title="게시글" />
            <Editor />
            <Footer />
        </div>
    );
}

export default Page;
