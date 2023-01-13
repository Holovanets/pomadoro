import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { AppPrefers } from './../../../../../prefers'
import type { IMenuItem, TypeNav } from './menu.interface'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, nav, item }) => {
	const isActive = currentRoute === item.path
	return (
		<Pressable className='w-[24%] items-center' onPress={() => nav(item.path)}>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? AppPrefers.primary : AppPrefers.secondary}
			/>
		</Pressable>
	)
}

export default MenuItem
