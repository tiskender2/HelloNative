import React from 'react';
import {
    Text,
    View,
    Image,
    AppRegistry,
    Linking
}
from 'react-native';
import Button from './Button';
const Detay = (props) => {
    
   
   const {containerStyle, subContainerStyle,imageStyle,viewStyle,titleStyle}=styles;
        return (
               
                <View style={containerStyle}>
                     <Text style={titleStyle}>
                     {props.data.title}
                     </Text>
                    <View style={subContainerStyle}>
                        <Image style={imageStyle} source={{uri: props.data.image}}/>
                    </View>
                    <View style={subContainerStyle}>
                       <View style={viewStyle}>
                      <Button onPress={() => Linking.openURL(props.data.url)}>GET</Button>
                      <View style={{marginLeft: 10}}>
                      <Text style={{textAlign: 'right'}} >Tolga Iskender bought it</Text>
                      <Text style={{fontWeight: 'bold'}}>Purchased by 13.3456.01 people</Text>
                     
                      </View>
                      
                      </View>
                    </View>
                    
                    
                    
                </View>
              
            
        );
    
};


const styles = 
{ 
    containerStyle :
    {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0 , height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        
    },
    subContainerStyle:
    {
        borderBottomWidth: 1, 
        padding: 5,
        backgroundColor : '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',  
        borderColor: '#ddd',
        position: 'relative'
    },
    imageStyle:
    {
        height:300,
        flex: 1,
    },
    viewStyle:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
        flexDirection: 'row',
    },
    titleStyle:
    {
        fontSize: 20,
    }
   
}
export default Detay;
