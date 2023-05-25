import styles from '../../../styles/Post.module.css'
import NavBar from '../../components/shared/NavBar';
import Footer from '../../components/shared/Footer';
import Head from '../../components/Post/Head';
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css';

const EditorWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p> ⏱ Loading </p>,
})

const Page = () => {
    return (
        <div>
            <NavBar />
            <Head />
            <div className={styles.main_body}>
                <EditorWrapper style={{ height: '400px' }} />
            </div>
            <Footer />
        </div>
    );
}

export default Page;
