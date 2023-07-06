import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const ItemList = ({ onPressItem, item }) => {
  return (
    <TouchableOpacity onPress={() => onPressItem(item)} style={styles.containerItem}>
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}> Borrar </Text>
    </TouchableOpacity>
  );
};

export default ItemList;