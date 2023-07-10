import Head from 'next/head'

export const Seo = () => {

    return (
        <Head>
            <meta name="description" content="개발자들의 유용한 정보를 공유하자!" />
            <meta property="og:title" content="developerdiscovery" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://developerdiscovery.com" />
            <meta property="og:image" content="" />
            <meta property="og:article:author" content="rha6780" />
        </Head>
    );
}

export default Seo;