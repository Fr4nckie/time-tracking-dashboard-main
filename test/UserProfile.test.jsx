import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import UserProfile from '../src/components/UserProfile.jsx'

describe('<UserProfile />', () => {
    it('should render correctly', () => {
        render(<UserProfile />)

        expect(screen.getByText('Jeremy Robson')).toBeInTheDocument()
        expect(screen.getByText('Report for')).toBeInTheDocument()
        expect(screen.getByAltText('profile pic')).toBeInTheDocument()
    })
})
