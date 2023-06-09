import NavBar from '@/components/shared/NavBar';
import Footer from '@/components/shared/Footer';
import Head from '@/components/Post/Head';
import Form from '@/components/Post/Form';


const Page = () => {
    return (
        <div>
            <NavBar />
            <Head title="영상 게시물" />
            <Form />
            <Footer />
        </div>
    );

}

export default Page;
