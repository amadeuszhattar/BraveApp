import { Platform } from 'react-native';
import colours from './colours';


export default{
    colours,
    text:{
    color:colours.background,
    fontSize:20,
    fontFamily: Platform.OS ==='android' ? 'Roboto' : 'Avenir',
    },
};