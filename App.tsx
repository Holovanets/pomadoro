import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
	return (
		<View className='bg-[#1e1c2e] flex-1 flex items-center justify-center'>
			<Text className='color-[#fff]'>Open u`r eyes</Text>
			<StatusBar style='auto' />
		</View>
	)
}
