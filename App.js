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
    <KeyboardAvoidingView style={styles.container}>
    <View>
      <Image source={require('./src/assets/logo.png')} />
    </View>

    <View>
      <TextInput
        placeholder="E-mail"
        autoCorrect={false}
        onChangeText={() => {}}
	  />
	  
      <TextInput
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() => {}}
	  />
	  
	  <TouchableOpacity>
	 	<Text>Acessar</Text> 
	  </TouchableOpacity>

	  <TouchableOpacity>
	 	<Text>Criar conta gratuita</Text> 
	  </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
