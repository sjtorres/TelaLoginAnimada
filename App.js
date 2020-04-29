import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	KeyboardAvoidingView,
	Image, 
	TextInput,
	TouchableOpacity
} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
		<View style={styles.containerLogo}>
			<Image source={require('./src/assets/logo.png')} />
		</View>

		<View style={styles.container}>
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
		</View>
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
