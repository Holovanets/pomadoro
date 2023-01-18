import { FC, useState } from 'react'
import { Text, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import PlayButton from './PlayButton'
import TimerCounter from './TimerCounter'
import { AppPrefers } from '@/prefers'

const Timer: FC = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	return (
		<View className='justify-center flex-1'>
			<TimerCounter {...{ isPlaying, setIsPlaying }} />
			<PlayButton {...{ isPlaying, setIsPlaying }} />
		</View>
	)
}

export default Timer
