import React from 'react';
import './AddImg.scss'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { OnselectedImg } from '../../../redux/slice/ImgsSlice'
const AddImg: React.FC<{ setAI: Function }> = ({ setAI }) => {
    const dispatch = useAppDispatch()
    const images = useAppSelector((state: RootState) => state.ImgsSlice.imgs)
    const setImg = (id: number) => {
        setAI(false);
        dispatch(OnselectedImg(id))
    }

    return <>
        <div className="AddImg">
            <div className="AddImgS">
                <h5>Выберите изображения</h5>
                <div className="AddImgSItems">
                    {images.map(img => (<img src={img.path} onClick={() => setImg(img.id)} key={img.id} />))}
                </div>

            </div>
        </div>
    </>
}


export default AddImg;
