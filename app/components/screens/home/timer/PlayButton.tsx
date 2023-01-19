import { Feather } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Pressable } from 'react-native'

import { IProps } from '@/types/stateProps.interface'

import { AppShadow } from '@/prefers'

const PlayButton: FC<IProps> = ({ isPlaying, setIsPlaying }) => {
	return (
		<Pressable
			onPress={() => setIsPlaying(!isPlaying)}
			className={cn(
				'bg-primary w-[70px] h-[70px] items-center justify-center rounded-full self-center mt-10',
				{
					'pl-1.5': !isPlaying
				}
			)}
			style={AppShadow}
		>
			<Feather name={isPlaying ? 'pause' : 'play'} color='white' size={40} />
		</Pressable>
	)
}

export default PlayButton
