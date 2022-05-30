import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount} from '../features/counter/counterSlice'
import * as ImagePicker from 'expo-image-picker';
import {unmountImage, setImage} from '../features/counter/imagerSlice'

function HomeScreen () {
    const counter = useSelector((state) => state.counter.value);
    const imager = useSelector((state) => state.imager.selectedImage)
    const dispatch = useDispatch();

    if (imager !== null) {
        console.log(imager)
        return (
            <Image 
            style={styles.thumbnail}
            source={{uri: imager.uri}}></Image>
        )
    }
    return(
        <View style={styles.container}>
            <Text>Count:{counter}</Text>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={()=>{dispatch(increment())}}>
                <Text>increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{dispatch(decrement())}}>
                <Text>decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{dispatch(incrementByAmount({number:5}))}}>
                <Text>increment by 5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{dispatch(setImage())}}>
                <Text>Select Image</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    }
  });

export default HomeScreen;