import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import UserPanel from '../src/components/UserPanel.jsx'

describe('<UserPanel />', () => {
    it('Should render correctly', () => {
        const { container } = render(<UserPanel />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
