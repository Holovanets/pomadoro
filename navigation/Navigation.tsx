import { useNavigationContainerRef } from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { useAuth } from '@/hooks/useAuth'

const Navigation: FC = () => {
	const { user } = useAuth()

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])
	return (
		<View>
			<Text>Navigation</Text>
		</View>
	)
}

export default Navigation
