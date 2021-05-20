import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const App = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => alert("cant skip")}
        onDone={() => alert("cant skip")}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={"https://source.unsplash.com/random/800x600"} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect with Healthcare',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={"https://source.unsplash.com/random/800x600"} />,
            title: 'Share Your Favorites',
            subtitle: 'Book doctors and instantly set-up appointments',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={"https://source.unsplash.com/random/800x600"} />,
            title: 'Become The Star',
            subtitle: "Request Sanitation services and have your house spot-clean!",
          },
        ]}
      />
    );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});