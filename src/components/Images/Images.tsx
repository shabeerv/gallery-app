import { useEffect } from 'react'
import { getImage } from '../../selectors/imageSelector'
import './Images.css'
import { fetchImages } from '../../actions/imageAction'
import { logout } from '../../reducers/userReducer'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Image } from '../common/Image'

export const Images = () => {
  const image = useAppSelector(getImage)
  const dispatch = useAppDispatch()

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const logoutClicked = () => {
    dispatch(logout())
  }

  useEffect(() => {
    dispatch(fetchImages())
  }, [dispatch])

  return (
    <div className="container">
      <div className="image-gallery">
        {image.images?.length && (
          <div className="column">
            {image.images.map((image) => (
              <div
                key={image['id']}
                className="image-item"
                onClick={() => openInNewTab(image['urls']['full'])}
              >
                <Image photo={image} />
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="logout-button" onClick={logoutClicked}>
        Logout
      </button>
    </div>
  )
}

export default Images
