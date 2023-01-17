import { FC } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import { AppPrefers } from '@/prefers'

const Loader: FC = () => {
	return <ActivityIndicator color={AppPrefers.primary} size='large' />
}

export default Loader
