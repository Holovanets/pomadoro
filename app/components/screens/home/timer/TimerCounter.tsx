import { FC } from 'react'
import { Text, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import { IProps } from '@/types/timerProps.interface'

import { AppPrefers } from '@/prefers'

const TimerCounter: FC<IProps> = ({ isPlaying, setIsPlaying }) => {
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
						isPlaying={isPlaying}
						duration={100}
						colors={['#3A3570', '#664FF3']}
						colorsTime={[7, 0]}
						trailColor='#2F2F4C'
						strokeLinecap='butt'
						onComplete={() => setIsPlaying(false)}
						size={250}
					>
						{({ remainingTime }) => {
							let minutes: string | number = Math.floor(remainingTime / 60)
							let seconds: string | number = remainingTime % 60
							// 5 => 05 etc
							seconds =
								seconds.toString().length === 1 ? '0' + seconds : seconds
							minutes =
								minutes.toString().length === 1 ? '0' + minutes : minutes
							return (
								<Text className='text-white text-5xl font-semibold pt-2'>{`${minutes} : ${seconds}`}</Text>
							)
						}}
					</CountdownCircleTimer>
				</View>
			</View>
		</View>
	)
}

export default TimerCounter
