import React, { useState, useEffect } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	KeyboardAvoidingView,
	Image, 
	TextInput,
	TouchableOpacity,
	Animated,
	Keyboard
} from 'react-native';

export default function App() {

		const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 })) 
		const [opacity] = useState(new Animated.Value(0))
		const [logo] = useState(new Animated.ValueXY({ x: 130, y: 130 }))

		useEffect(() => {
			KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
			KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

			Animated.parallel([
				Animated.spring(offset.y, {
					toValue: 0,
					speed: 4,
					bounciness: 20
				}),
				Animated.timing(opacity, {
					toValue: 1,
					duration: 400,
				})
			]).start()
		}, [])

		function keyboardDidShow() {
			Animated.parallel([
				Animated.timing(logo.x, {
					toValue: 80,
					duration: 100,
				}),
				Animated.timing(logo.y, {
					toValue: 80,
					duration: 100,
				})
			]).start()
		}

		function keyboardDidHide() {
			Animated.parallel([
				Animated.timing(logo.x, {
					toValue: 130,
					duration: 100,
				}),
				Animated.timing(logo.y, {
					toValue: 130,
					duration: 100,
				})
			]).start()
		}

  return (
    <KeyboardAvoidingView style={styles.background}>
		<View style={styles.containerLogo}>
			<Animated.Image 
				style={{ 
					width: logo.x, 
					height: logo.y,
				}}

				source={require('./src/assets/logo.png')} 
			/>
		</View>

		<Animated.View 
			style={[
				styles.container,
				{
					opacity: opacity,
					transform: [
						{ translateY: offset.y }
					]
				}
			]}
		>
			<TextInput
				style={styles.input}
				placeholder="E-mail"
				autoCorrect={false}
				onChangeText={() => {}}
			/>
			
			<TextInput
				style={styles.input}
				placeholder="Senha"
				autoCorrect={false}
				onChangeText={() => {}}
			/>
			
			<TouchableOpacity style={styles.btnSubmit}>
				<Text style={styles.submitText}>Acessar</Text> 
			</TouchableOpacity>

			<TouchableOpacity style={styles.btnRegister}>
				<Text style={styles.registerText}>Criar conta gratuita</Text> 
			</TouchableOpacity>
		</Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
	background: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
	flex: 1,
	justifyContent: 'center'
  },
  container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
		width: '90%',
		paddingBottom: 50
  },
  input: {
	   backgroundColor: '#FFF',
	   width: '90%',
	   marginBottom: 15,
	   color: '#E45126',
	   fontSize: 17,
	   borderRadius: 7,
	   padding: 10,
	},
	btnSubmit: {
		backgroundColor: '#0c73b8',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 7
	},
	submitText: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: 'bold'
	},
	btnRegister: {
		width: '60%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		borderRadius: 7
	},
	registerText: {
		color: '#FFF',
		fontSize: 16,
	}
});
