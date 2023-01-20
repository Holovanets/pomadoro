import { MaterialIcons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Pressable, Text, View } from 'react-native'

import PlayButton from './PlayButton'
import TimerCounter from './TimerCounter'
import TimerParts from './TimerParts'
import { EnumStatus } from './timer.interface'
import { AppPrefers } from '@/prefers'

const flowDuration = 5
const sessionCount = 4
const breakDuration = 10
const isMovable = sessionCount > 7

const Timer: FC = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [status, setStatus] = useState<EnumStatus>(EnumStatus.REST)
	const [currentSession, setCurrentSession] = useState(1)
	const [key, setKey] = useState(0)

	useEffect(() => {
		if (isPlaying && status === EnumStatus.REST) {
			setKey(prev => prev + 1)
		}
	}, [isPlaying])

	return (
		<View className='justify-center flex-1'>
			<TimerCounter
				{...{
					isPlaying,
					setIsPlaying,
					flowDuration,
					status,
					setStatus,
					currentSession,
					setCurrentSession,
					sessionCount,
					key
				}}
			/>
			<TimerParts {...{ currentSession, sessionCount, isMovable }} />
			<View className='flex-row items-center mt-10 justify-center'>
				<Pressable
					onPress={() => {
						currentSession !== 1 &&
							status !== EnumStatus.COMPLETED &&
							setCurrentSession(prev => prev - 1)
					}}
					className={cn('opacity-70', {
						'opacity-30':
							status === EnumStatus.COMPLETED || currentSession === 1
					})}
				>
					<MaterialIcons name='keyboard-arrow-left' color='white' size={40} />
				</Pressable>
				<PlayButton {...{ isPlaying, setIsPlaying, status }} />
				<Pressable
					onPress={() => {
						currentSession !== sessionCount &&
							status !== EnumStatus.COMPLETED &&
							setCurrentSession(prev => prev + 1)
					}}
					className={cn('opacity-70', {
						'opacity-30':
							status === EnumStatus.COMPLETED || currentSession === sessionCount
					})}
				>
					<MaterialIcons name='keyboard-arrow-right' color='white' size={40} />
				</Pressable>
			</View>
		</View>
	)
}

export default Timer
