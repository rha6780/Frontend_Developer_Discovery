import { useRouter } from 'next/router';
import React from "react";
import { ToastContainer } from 'react-toastify';

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import NavBar from '../../../components/shared/NavBar';
import Footer from '../../../components/shared/Footer';
import Head from '../../../components/Post/Head';
import UpdateEditor from '../../../components/Post/UpdateEditor';


export async function getServerSideProps({ params: { id } }: { params: { id: string } }) {
    return {
        props: {},
    }
}

const Home = () => {
    const router = useRouter();
    const id = router.query.id || "0";

    return (
        <div>
            <ToastContainer />
            <NavBar />
            <Head title="게시글 수정하기" />
            <UpdateEditor id={id} />
            <Footer />
        </div>
    );
}

export default Home;

