import {  Text, TouchableHighlight, View} from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../themes";
import { useWindowDimensions } from "react-native";
const CategoryList = ({categoryName, onSelectCategory, id, categoryId, style}) => {
    const {width, height} = useWindowDimensions();
    const isTablet = width > 650
    return (
          
            <TouchableHighlight style={[styles.container, style]} onPress={() => onSelectCategory(categoryId)} underlayColor={COLORS.background}>
            <Text style={ height < 450? styles.categoryNameLandscape : isTablet? styles.categoryNameTablet : styles.categoryName}> {categoryName} </Text>
            </TouchableHighlight>
           
    )
}

export default CategoryList;