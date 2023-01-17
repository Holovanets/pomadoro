import cn from 'clsx'
import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IAuthFormData } from '@/types/auth.interface'

import { validEmail } from './email.rgx'

const AuthField: FC<{ control: Control<IAuthFormData> }> = ({ control }) => {
	return (
		<>
			<Controller
				{...{ control }}
				name='email'
				rules={{
					required: "Обов'язково введіть email",
					pattern: {
						value: validEmail,
						message: 'Email неправильний '
					}
				}}
				render={({
					field: { value, onBlur, onChange },
					fieldState: { error }
				}) => (
					<>
						{/*TODO
        Вставить глобальную переменную на фон placeholdera
      */}
						<View
							className={cn(
								`rounded-xl bg-[#3a3658] border pt-3.5 pb-4 px-8 my-4`,
								!!error ? 'border-red-500' : 'border-transparent'
							)}
						>
							<TextInput
								placeholder='Введіть email'
								{...{ value, onBlur }}
								onChangeText={onChange}
								autoCapitalize='none'
								className='text-white text-lg'
								placeholderTextColor='#aaa'
							/>
						</View>
						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>
			<Controller
				{...{ control }}
				name='password'
				rules={{
					required: "Обов'язково введіть пароль",
					minLength: {
						value: 6,
						message: 'Пароль повинен включати більше 6 символів'
					}
				}}
				render={({
					field: { value, onBlur, onChange },
					fieldState: { error }
				}) => (
					<>
						{/*TODO
        Вставить глобальную переменную на фон placeholdera
      */}
						<View
							className={cn(
								`rounded-xl bg-[#3a3658] border pt-3.5 pb-4 px-8 my-4`,
								!!error ? 'border-red-500' : 'border-transparent'
							)}
						>
							<TextInput
								placeholder='Введіть пароль'
								{...{ value, onBlur }}
								onChangeText={onChange}
								autoCapitalize='none'
								className='text-white text-lg'
								placeholderTextColor='#aaa'
								secureTextEntry
							/>
						</View>
						{error && <Text className='text-red-500'>{error.message}</Text>}
					</>
				)}
			/>
		</>
	)
}

export default AuthField
