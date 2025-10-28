export function formatDate(dateString) {
	if (!dateString) return ''

	const inputDate = new Date(dateString)
	const today = new Date()

	inputDate.setHours(0, 0, 0, 0)
	today.setHours(0, 0, 0, 0)

	const diffTime = today.getTime() - inputDate.getTime()
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

	if (diffDays === 0) return 'Today'
	if (diffDays === 1) return 'Yesterday'
	if (diffDays < 7) return `${diffDays} days ago`

	return inputDate.toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	})
}
