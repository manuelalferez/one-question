import { screen, render } from '@testing-library/react'
import Home from '../pages/index'

describe('Index', () => {
  test('renders a logo in navbar', () => {
    render(<Home />)
    expect(screen.getByAltText('logo_header')).toHaveAttribute(
      'src',
      'https://ik.imagekit.io/manuelalferez/one-question/logo_98HCCkHRg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649859323346'
    )
  })

  test('renders a footer', () => {
    render(<Home />)
    expect(screen.getByText('@manuelalferez')).toBeInTheDocument()
  })
})
