/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ActivityCard from '../src/components/ActivityCard'
import { usePeriod } from '../src/hooks/usePeriod.jsx'
import { TestWrapper } from './utils/TestWrapper.jsx'
import userEvent from '@testing-library/user-event'

const mockActivity = {
    title: 'Work',
    image: 'icon-work.svg',
    timeframes: {
        daily: {
            current: 5,
            previous: 7
        },
        weekly: {
            current: 32,
            previous: 36
        },
        monthly: {
            current: 103,
            previous: 128
        }
    }
}

const TestComponent = ({ period }) => {
    const { changePeriod } = usePeriod()
    return (
        <>
            <button onClick={() => changePeriod(period)}>Change period</button>
            <ActivityCard activity={mockActivity} />
        </>
    )
}

describe('<ActivityCard />', () => {
    it('should render correctly with the default period', () => {
        render(<ActivityCard activity={mockActivity} />, {
            wrapper: TestWrapper
        })

        expect(screen.getByText('Work')).toBeInTheDocument()
        expect(screen.getByText('32hrs')).toBeInTheDocument()
        expect(screen.getByText('Last week - 36hrs')).toBeInTheDocument()
    })

    it('should update period when changed to daily', async () => {
        render(<TestComponent period="daily" />, { wrapper: TestWrapper })

        await userEvent.click(
            screen.getByRole('button', { name: /Change period/i })
        )

        expect(screen.getByText('5hrs')).toBeInTheDocument()
        expect(screen.getByText('Last day - 7hrs')).toBeInTheDocument()
    })

    it('should update period when changed to monthly', async () => {
        render(<TestComponent period="monthly" />, { wrapper: TestWrapper })

        await userEvent.click(
            screen.getByRole('button', { name: /Change period/i })
        )

        expect(screen.getByText('103hrs')).toBeInTheDocument()
        expect(screen.getByText('Last month - 128hrs')).toBeInTheDocument()
    })
})
