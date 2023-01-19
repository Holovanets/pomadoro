import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Text, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import { IProps } from '@/types/stateProps.interface'

import { EnumStatus } from './timer.interface'
import { AppPrefers } from '@/prefers'

interface ITimer extends IProps {
	flowDuration: number
	status: EnumStatus
	setStatus: Dispatch<SetStateAction<EnumStatus>>
	currentSession: number
	setCurrentSession: Dispatch<SetStateAction<number>>
	sessionCount: number
	key: number
}

const TimerCounter: FC<ITimer> = ({
	isPlaying,
	setIsPlaying,
	flowDuration,
	status,
	setStatus,
	currentSession,
	setCurrentSession,
	sessionCount,
	key
}) => {
	return (
		<View className='self-center '>
			<View className='self-center w-[325px] h-[325px] bg-[#211e34] rounded-full justify-center'>
				<View
					className='self-center w-[250px] h-[250px] bg-[#151515] rounded-full'
					style={{
						shadowColor: AppPrefers.primary,
						shadowOffset: {
							width: 0,
							height: 0
						},
						shadowOpacity: 1,
						shadowRadius: 15,

						elevation: 40
					}}
				>
					<CountdownCircleTimer
						{...{ key, isPlaying }}
						duration={flowDuration}
						colors={['#3A3570', '#664FF3']}
						colorsTime={[flowDuration, 0]}
						trailColor='#151515'
						strokeLinecap='butt'
						onComplete={() => {
							setIsPlaying(false)
							setCurrentSession(prev => prev + 1)
							setStatus(EnumStatus.REST)
							if (currentSession === sessionCount) {
								//TODO congratulations
								setStatus(EnumStatus.COMPLETED)
							}
						}}
						size={250}
						rotation='counterclockwise'
						onUpdate={remainingTime => {
							if (!!remainingTime) setStatus(EnumStatus.WORK)
						}}
					>
						{({ remainingTime }) => {
							let minutes: string | number = Math.floor(remainingTime / 60)
							let seconds: string | number = remainingTime % 60
							// Отрисовка времени при отдыхе 00:00 => 25:00 etc
							if (status === EnumStatus.REST) {
								minutes = Math.floor(flowDuration / 60)
								seconds = flowDuration % 60
							}

							// 5 => 05 etc
							seconds =
								seconds.toString().length === 1 ? '0' + seconds : seconds
							minutes =
								minutes.toString().length === 1 ? '0' + minutes : minutes
							return (
								<View className='mt-5'>
									<Text className='text-white text-5xl font-semibold '>{`${minutes} : ${seconds}`}</Text>
									<View>
										<Text className='text-center text-white text-2xl mt-1'>
											{status}
										</Text>
									</View>
								</View>
							)
						}}
					</CountdownCircleTimer>
				</View>
			</View>
		</View>
	)
}

export default TimerCounter
