import { videoCreate } from '@/api/v1/videos/create';
import { toast } from 'react-toastify';
import styles from '../../../styles/Post.module.css';
import dynamic from 'next/dynamic';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';


const EditorWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p> ⏱ Loading </p>,
});

export const Editor = () => {

    const PostSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const data = {
                changed_email: event.target.changed_email.value
            }
            await videoCreate();
            window.location.assign("/");
        } catch (error) {
            toast.error('서버가 불안정 합니다. 관리자에게 문의하세요.', {
                position: "top-center",
                autoClose: 2000,
            });
        }

    }

    return (
        <div>
            <div className={styles.editor_body}>
                <EditorWrapper style={{ height: '400px' }} />
            </div>
            <form method="post" onSubmit={PostSubmit}>
                <div className={styles.button_section}>
                    <button type="submit" className={styles.submit_button}> 작성 완료 </button>
                </div>
            </form>
        </div>
    );
}

export default Editor;
