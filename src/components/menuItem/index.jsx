import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../themes";

const MenuItem = ({icon, title, route, onSelect} )=> {
    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.content} onPress={()=> onSelect({route})}>
            <Ionicons name={icon} size={24} color={COLORS.secondary}/>
            <Text style={styles.title}> {title} </Text>
        </TouchableOpacity>
        </View>
    )
}

export default MenuItem;