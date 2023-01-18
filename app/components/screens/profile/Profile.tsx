//TODO Сделать больше наполнения
import { FC } from 'react'
import { Text, View } from 'react-native'

import Layout from '../UI/layout/Layout'
import Button from '../UI/layout/button/Button'

import { useAuth } from '@/hooks/useAuth'

const Profile: FC = () => {
	const { setUser } = useAuth()

	return (
		<Layout title='Профіль'>
			<Button onPress={() => setUser(null)}>Вийти з системи</Button>
		</Layout>
	)
}

export default Profile
