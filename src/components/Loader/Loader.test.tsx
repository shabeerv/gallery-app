import { screen, render } from '@testing-library/react'
import Loader from './Loader'

describe('Loader', () => {
  test('Loader renders correctly', () => {
    render(<Loader show={true} />)
    const imageElement = screen.getByAltText('loader')
    expect(imageElement).toBeInTheDocument()
  })
})
