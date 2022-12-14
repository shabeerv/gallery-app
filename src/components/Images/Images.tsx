import { useEffect } from 'react'
import { getImage } from '../../selectors/imageSelector'
import './Images.css'
import { fetchImages, actionTypes as imageActions } from '../../actions/imageAction'
import { hasErrorsSelector } from '../../selectors/statusSelector'
import { logout } from '../../reducers/userReducer'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Image } from '../common/Image'

export const Images = () => {
    const image = useAppSelector(getImage)
    const dispatch = useAppDispatch()
    
    const logoutClicked = () => {
        dispatch(logout());
      };

    useEffect(() => {
        dispatch(fetchImages())
    }, [dispatch])
    
    return (
        <div className='container'>
            <div className="image-gallery">
                {image.images?.length &&
                (
                    <div className="column">
                        {image.images.map((image) => (
                            <Image photo={image} />
                        ))}
                    </div>
                )} 
            </div>
            <button className='logout-button' onClick={logoutClicked}>Logout</button>
        </div>
    )
}

export default Images