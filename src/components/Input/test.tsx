import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import { FiLock } from 'react-icons/fi'

import Input from '.'

describe('<Input />', () => {
  it('should render with icon', () => {
    renderWithTheme(<Input error="" icon={<FiLock />} data-testid="password" />)

    expect(screen.getByTestId('password')).toBeInTheDocument()
  })
})
