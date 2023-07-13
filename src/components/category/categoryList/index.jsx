import {  Text, TouchableHighlight, View} from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../themes";
const CategoryList = ({categoryName, onSelectCategory, id, categoryId}) => {
    return (
          
            <TouchableHighlight style={styles.container} onPress={() => onSelectCategory(categoryId)} underlayColor={COLORS.background}>
            <Text style={styles.categoryName}> {categoryName} </Text>
            </TouchableHighlight>
           
    )
}

export default CategoryList;