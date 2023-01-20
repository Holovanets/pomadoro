import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Pressable } from 'react-native'

import { IProps } from '@/types/stateProps.interface'

import { EnumStatus } from './timer.interface'
import { AppShadow } from '@/prefers'

interface IPlay extends IProps {
	status: EnumStatus
}

const PlayButton: FC<IPlay> = ({ isPlaying, setIsPlaying, status }) => {
	return (
		<Pressable
			onPress={() =>
				status !== EnumStatus.COMPLETED && setIsPlaying(!isPlaying)
			}
			className={cn(
				'bg-primary w-[70px] h-[70px] items-center justify-center rounded-full mx-4 ',
				{
					'pl-1.5': !isPlaying,
					'opacity-30': status === EnumStatus.COMPLETED
				}
			)}
			style={AppShadow}
		>
			<Feather name={isPlaying ? 'pause' : 'play'} color='white' size={40} />
		</Pressable>
	)
}

export default PlayButton
