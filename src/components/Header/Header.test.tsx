import { screen, render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('Header renders correctly', () => {
    render(<Header />)
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()
  })
})
