import React, {useEffect, useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { auth } from '../../firebase-auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function LoginSc({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, user =>{
        if (user) { navigation.navigate("Home")}
    })
    return unsubscribe
  },[])

  function handleRegister(){
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            const user = userCredential.user;
            alert('registration success');
        })
        .catch((error) => alert(error.message))
  }

  function handleLogin(){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            const user = userCredential.user;
        })
        .catch((error) => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
       <View style={styles.buttonContainer}>
        <Button 
          title="Login" 
          onPress={handleLogin} 
        />
        <Button 
          title="Register"
          color={'black'} 
          onPress={handleRegister} 
        />
       </View>
       <Button 
          title="Bypass"
          color={'grey'} 
          onPress={() => navigation.navigate('Home')} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },
});