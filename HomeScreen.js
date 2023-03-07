import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';



export default function HomeScreen({ navigation }) {
const [input, setInput] = useState('');
const [input2, setInput2] = useState('');
const [result, setResult] = useState('');
const [data, setData] = useState([]);

const plus = () => {
let final = parseInt(input) + parseInt(input2);
setResult(final);
setData([...data, {key: input + ' + ' + input2 + ' = ' + final}]);
}

const minus = () => {
let final = parseInt(input) - parseInt(input2);
setResult(final);
setData([...data, {key: input + ' - ' + input2 + ' = ' + final}])
}




return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Result: {result}</Text>
<TextInput style={styles.textbox} keyboardType='number-pad' onChangeText={setInput}></TextInput>
<TextInput style={styles.textbox}keyboardType='number-pad' onChangeText={setInput2}></TextInput>
<View style={styles.buttons}>
<Button style={styles.button}title='+' onPress={plus}></Button>
<Button style={styles.button}title='-' onPress={minus}></Button>
</View>
<Button title='History' onPress={() => navigation.navigate('History', {data: data})}></Button>
</View>
</TouchableWithoutFeedback>
);



}

const styles = StyleSheet.create({
textbox: {
borderColor: 'black',
borderWidth: 2,
padding: 8,
width: 150,
margin: 7
},
buttons: {
flexDirection: 'row',
marginVertical: 20,
justifyContent: 'space-around',
},
button: {
    justifyContent: 'space-around',
    marginHorizontal: 20,
    borderColor: 'black',
    borderWidth: 50
}


});
