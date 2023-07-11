import styles from '../../../styles/Profile.module.css'

import { SyntheticEvent, useEffect, useState } from 'react';
import { FileDrop } from 'react-file-drop'
import { UserImageState, UserState } from '@/models/User';
import { userCurrent } from '@/api/v1/users/current';
import { updateImage } from '@/api/v1/users/update_image';
import { getAccessToken } from '@/api/cookies';

import { userChangeEmail } from '@/api/v1/users/change_email';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosRequestHeaders } from 'axios';



const Profile = () => {
    const [user_data, setUserData] = useState<UserState>();
    const [isEdit, setIsEdit] = useState(false);
    const showDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = 'http://developerdiscovery.com/media/prod/user_icon.png';
    };

    useEffect(() => {
        const initUserData = async () => {
            const user_current = await userCurrent();
            setUserData(user_current);
            console.log(user_current);
        };
        initUserData();
    }, []);

    const ImageUpload = (files: FileList | null, event: any) => {
        if (files != null) {
            const formdata = new FormData();
            formdata.append(
                "image",
                files[0],
            )

            const headers: AxiosRequestHeaders = {
                'Content-Type': files[0].type,
                "Authorization": `Bearer ${getAccessToken()}`,
            }

            console.log(headers);
            if (files[0].size >= 5000000) {
                alert("5MB 이상 파일은 업로드가 불가능합니다.");
            }
            else if (files[0].type == 'image/png' || files[0].type == 'image/jpeg' || files[0].type == 'image/jpg') {
                const res = updateImage(formdata, headers);
                console.log(res);
                if (res != undefined) {
                    // window.location.reload();
                }
            }
            else {
                alert("png, jpg, jpeg 파일이 아닙니다.");
            }
        }
    }

    const nameEdit = (event: any) => {
        setIsEdit(true);
    }

    const cancleEdit = (event: any) => {
        setIsEdit(false);
    }

    const changeUser = async (event: any) => {
        event.preventDefault();
        try {
            const data = {
                changed_email: '',
                changed_name: event.target.changed_name.value
            }
            await userChangeEmail(data);
            window.location.reload();
        } catch (error) {
            toast.error('서버가 불안정 합니다. 관리자에게 문의하세요.', {
                position: "top-center",
                autoClose: 2000,
            });
            console.log(error);
        }
    }


    return (
        <div className="main">
            <div className={styles.body}>
                <div>
                    <div className={styles.profile_container}>
                        <FileDrop
                            onDrop={ImageUpload}>
                            <img className={styles.profile_img} src={user_data?.image} onError={showDefaultImg} height='150px' width='150px' />
                        </FileDrop>
                    </div>
                    <div className={styles.info}>
                        {<div>{
                            <div key={user_data?.id}>
                                <div className={isEdit ? styles.disable : styles.name_container}>
                                    <div className={styles.name}>{user_data?.name}</div>
                                    <a onClick={nameEdit}><img className={styles.icon} src="/media/prod/edit_icon.png"></img></a>
                                </div>
                                <div className={isEdit ? styles.name_container : styles.disable}>
                                    <form onSubmit={changeUser}>
                                        <input type="text" name='changed_name'></input>
                                        <button type="submit">변경</button>
                                    </form>
                                    <a onClick={cancleEdit}>취소</a>
                                </div>
                                <div>✉️ {user_data?.email}</div>
                            </div>
                        }</div>}
                    </div>
                </div>
                <div>* 프로필 이미지는 드래그 드롭으로 변경가능합니다.</div>
            </div>
            <div className={styles.function}>
                <a href="/accounts/email-change" className={styles.func_btn}>이메일 변경</a>
                <a href="/accounts/password-change" className={styles.func_btn}>비밀번호 변경</a>
                <a href="/withdrawal" className={styles.func_btn}>탈퇴하기</a>
            </div>
        </div>
    );
}

export default Profile;

