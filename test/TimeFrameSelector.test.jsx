import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TimeFrameSelector from '../src/components/TimeFrameSelector'
import { TestWrapper } from './utils/TestWrapper'
import userEvent from '@testing-library/user-event'

describe('<TimeFrameSelector />', () => {
    it('should render correctly', () => {
        render(<TimeFrameSelector />, {
            wrapper: TestWrapper
        })

        expect(screen.getByText('daily')).toBeInTheDocument()
        expect(screen.getByText('weekly')).toBeInTheDocument()
        expect(screen.getByText('monthly')).toBeInTheDocument()
        expect(screen.getByText('weekly')).toHaveClass('active')
    })

    it('should change period to daily', async () => {
        render(<TimeFrameSelector />, { wrapper: TestWrapper })

        expect(screen.getByText('weekly')).toHaveClass('active')

        await userEvent.click(screen.getByText('daily'))

        expect(screen.getByText('daily')).toHaveClass('active')
        expect(screen.getByText('weekly')).not.toHaveClass('active')
    })

    it('should change period to monthly', async () => {
        render(<TimeFrameSelector />, {
            wrapper: TestWrapper
        })

        expect(screen.getByText('weekly')).toHaveClass('active')

        await userEvent.click(screen.getByText('monthly'))

        expect(screen.getByText('monthly')).toHaveClass('active')
        expect(screen.getByText('weekly')).not.toHaveClass('active')
    })
})
