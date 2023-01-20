import cn from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Pressable, Text, View } from 'react-native'

import PlayButton from './PlayButton'
import TimerCounter from './TimerCounter'
import { EnumStatus } from './timer.interface'

const flowDuration = 5
const sessionCount = 9
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

	const center = Dimensions.get('window').width / 2 - 42
	const leftIndent = useRef(new Animated.Value(0)).current

	function moveLeft() {
		Animated.timing(leftIndent, {
			toValue: (currentSession - 1) * -48,
			duration: 1000,
			useNativeDriver: true
		}).start()
	}
	const didMount = useRef(false)

	useEffect(() => {
		if (didMount.current) {
			currentSession <= sessionCount && isMovable && moveLeft()
			console.log('Updated')
		} else didMount.current = true
	}, [currentSession])

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
			<View
				className={cn('mt-10 flex-row', {
					'justify-center': sessionCount <= 7
				})}
			>
				{Array.from(Array(sessionCount)).map((_, index) => {
					return (
						<Animated.View
							className='flex-row items-center '
							key={`point ${index}`}
							style={
								isMovable && [
									{
										position: 'relative',
										left: center,
										transform: [{ translateX: leftIndent }]
									}
								]
							}
						>
							<View
								className={cn(
									'w-5 h-5 bg-[#2c2b3c] rounded-full ',
									{
										'bg-primary opacity-70': index + 1 < currentSession,
										'bg-[#2c2b3c] border-solid border-4 border-primary w-7 h-7 ':
											index + 1 == currentSession
									}
									// isSmallIndicator ? 'w-3 h-3' : 'w-5 h-5'
								)}
							/>
							{index + 1 !== sessionCount && (
								<View
									className={cn('w-7 h-1 bg-[#2c2b3c]', {
										'bg-primary opacity-70': index + 2 <= currentSession
									})}
								/>
							)}
						</Animated.View>
					)
				})}
			</View>
			<PlayButton {...{ isPlaying, setIsPlaying }} />
		</View>
	)
}

export default Timer
