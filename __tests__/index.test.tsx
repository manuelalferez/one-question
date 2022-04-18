import { screen, render } from '@testing-library/react'
import Home from '../pages/index'

describe('Index', () => {
  test('renders a header', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', {
        name: /Welcome to next\.js!/i,
      })
    ).toBeInTheDocument()
  })

  test('renders a footer', () => {
    render(<Home />)
    expect(screen.getByText('Powered by')).toBeInTheDocument()
  })
})
