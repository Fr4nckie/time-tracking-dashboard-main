import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import ActivityGrid from '../src/components/ActivityGrid.jsx'

describe('<ActivityGrid />', () => {
    it('should render correctly', () => {
        const { container } = render(<ActivityGrid />)
        expect(container).toMatchSnapshot()
    })
})
