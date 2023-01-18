import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
	Keyboard,
	Pressable,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View
} from 'react-native'

import { IAuthFormData } from '@/types/auth.interface'

import Button from '../UI/layout/button/Button'
import Loader from '../UI/layout/loader/Loader'

import AuthField from './AuthField'
import { useAuth } from '@/hooks/useAuth'
import { AppPrefers } from '@/prefers'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { setUser } = useAuth()

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		setUser({
			_id: '',
			...data
		})
		reset()
	}

	const isLoading = false

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='items-center justify-center flex-1'>
				<View className='w-3/4'>
					<Text className='text-white text-5xl font-bold text-center mb-5 '>
						{isReg ? 'Реєстрація' : 'Вхід'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthField {...{ control }} />

							<Button onPress={handleSubmit(onSubmit)}> Увійти </Button>
							<Pressable
								onPress={() => setIsReg(!isReg)}
								className='w-25 self-end'
							>
								<Text className='text-white text-base text-opacity-60 mt-3 text-right'>
									{isReg ? 'Увійти' : 'Зареєструватись'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Auth
