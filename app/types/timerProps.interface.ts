import { Dispatch, SetStateAction } from 'react'

export interface IProps {
	isPlaying: boolean
	setIsPlaying: Dispatch<SetStateAction<boolean>>
}
