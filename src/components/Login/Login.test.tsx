import { screen, render } from '@testing-library/react'
import Login from './Login'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
// import * as router from 'react-router'

// const navigate = jest.fn()

// beforeEach(() => {
//   jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
// })

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Login', () => {
  const initialState = {
    accessToken: null,
    isAuth: false,
    status: {
      'user/LOGIN': 'SUCCESS',
    },
    error: {},
  }
  const mockStore = configureStore()
  let store

  test('Login button renders correctly', () => {
    store = mockStore(initialState)
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    )
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    //expect(navigate).toHaveBeenCalledWith('/')
    expect(loginButton).toBeInTheDocument()
  })
})
