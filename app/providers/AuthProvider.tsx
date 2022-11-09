import { Dispatch, FC, SetStateAction, createContext } from 'react'
import { Text, View } from 'react-native'

import type { IUser } from '@/types/user.interface'

export type TypeUserState = IUser | null

interface IContext {
	user: TypeUserState
	serUser: Dispatch<SetStateAction<TypeUserState>>
}

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC = () => {
	return (
		<View>
			<Text>AuthProvider</Text>
		</View>
	)
}

export default AuthProvider
