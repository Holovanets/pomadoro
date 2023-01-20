import cn from 'clsx'
import { FC, useEffect, useRef } from 'react'
import { Animated, Dimensions, Text, View } from 'react-native'

import { AppPrefers } from '@/prefers'

interface IParts {
	currentSession: number
	sessionCount: number
	isMovable: boolean
}

const TimerParts: FC<IParts> = ({
	currentSession,
	sessionCount,
	isMovable
}) => {
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
							className={cn('w-5 h-5 bg-[#2c2b3c] rounded-full ', {
								'bg-primary opacity-70': index + 1 < currentSession,
								'bg-[#2c2b3c] border-solid border-4 border-primary w-7 h-7 ':
									index + 1 == currentSession
							})}
							style={
								index + 1 === currentSession
									? {
											shadowColor: AppPrefers.primary,
											shadowOffset: {
												width: 0,
												height: 0
											},
											shadowOpacity: 0.6,
											shadowRadius: 7,

											elevation: 10
									  }
									: {}
							}
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
	)
}

export default TimerParts
