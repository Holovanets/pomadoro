import { FC } from 'react'
import { Text, View } from 'react-native'

import Layout from '../UI/layout/Layout'

import Timer from './timer/Timer'

const Home: FC = () => {
	return (
		<Layout title='Таймер'>
			<Timer />
		</Layout>
	)
}

export default Home
