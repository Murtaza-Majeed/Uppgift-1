import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "cyan", flex: 1 }}>
      
      <View style={{ backgroundColor: "red", height: 120, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style= {{ fontSize: 28, fontWeight: "bold" }}>Röd</Text>
      </View>

      <View style={{ backgroundColor: "white", height: 120, flexDirection: "row" }}>
        <View style={{ backgroundColor: "green", flex: 1 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Grön</Text>
        </View>
        <View style={{ backgroundColor: "orange", flex: 1 }}></View>
        </View> 
      
      <View style={{ backgroundColor: "red", height: 60, flexDirection: "column" }}>
        <View style={{ backgroundColor: "black", height: 60, width: 100, alignSelf: "flex-end" }}>
          </View> 
      </View>
      <View style={{ flex: 1 }}></View>

      <View style={{ backgroundColor: "orange", height: 40, justifyContent: "center", alignItems: "flex-end" }}>
        <Text style={{ fontFamily: "calibiri", fontSize: 24 }}>IT IS ORANGE!</Text>
      </View>

           
     </View>


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
