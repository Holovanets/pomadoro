import cn from 'clsx'
import { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import PlayButton from './PlayButton'
import TimerCounter from './TimerCounter'
import { EnumStatus } from './timer.interface'

const flowDuration = 5
const sessionCount = 3
const breakDuration = 10

const Timer: FC = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [status, setStatus] = useState<EnumStatus>(EnumStatus.REST)
	const [currentSession, setCurrentSession] = useState(1)
	const [key, setKey] = useState(0)
	useEffect(() => {
		if (isPlaying && status === EnumStatus.REST) setKey(prev => prev + 1)
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
			<View className='mt-10 flex-row justify-center'>
				{Array.from(Array(sessionCount)).map((_, index) => {
					return (
						<View className='flex-row items-center' key={`point ${index}`}>
							<View
								className={cn('w-5 h-5 bg-[#2c2b3c] rounded-full ', {
									'bg-primary opacity-70': index + 1 < currentSession,
									'bg-[#2c2b3c] border-solid border-4 border-primary w-7 h-7 ':
										index + 1 == currentSession
								})}
							/>
							{index + 1 !== sessionCount && (
								<View
									className={cn('w-7 h-1 bg-[#2c2b3c]', {
										'bg-primary opacity-70': index + 2 <= currentSession
									})}
								/>
							)}
						</View>
					)
				})}
			</View>

			<PlayButton {...{ isPlaying, setIsPlaying }} />
		</View>
	)
}

export default Timer
