export const getFormattedHours = (hours) => {
    if (isNaN(hours)) {
        return 'Invalid input'
    }

    if (hours === 0) return '0hrs'

    return hours === 1 ? `${hours}hr` : `${hours}hrs`
}
