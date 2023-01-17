import { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from './MenuItem'
import { menuData } from './menu.data'
import { TypeNav } from './menu.interface'
import { AppPrefers } from '@/prefers'

interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = ({ currentRoute, nav }) => {
	const { bottom } = useSafeAreaInsets()
	return (
		<View
			className='pt-5 px-3 flex-row justify-between items-center w-full'
			style={{
				backgroundColor: AppPrefers.mainBackground,
				paddingBottom: bottom + 10
			}}
		>
			{menuData.map(item => (
				<MenuItem {...{ nav, item, currentRoute }} key={item.path} />
			))}
		</View>
	)
}

export default BottomMenu
