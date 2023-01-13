import { ComponentType } from 'react'

import Statistics from '../components/screens/statistics/Statistics'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Settings: undefined
	Profile: undefined
	Statistics: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
