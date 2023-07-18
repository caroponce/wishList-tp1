import { Button, FlatList, SafeAreaView, View, useWindowDimensions } from 'react-native'
import PRODUCTS from '../../constants/data/products.json'
import { CategoryList } from '../../components'
import CATEGORIES from '../../constants/data/categories.json'
import { styles } from './styles'
import useOrientation from "../../hooks/useOrientation";
import {ORIENTATION} from '../../constants/data/orientation'

function Categories ({ navigation, ruote}) {
    
    const orientation = useOrientation();
    const onSelectCategory = ({categoryId}) => {
        navigation.navigate('Products', {categoryId})
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <FlatList
            data={CATEGORIES}
            style={styles.categoryContainer}
            contentContainerStyle={styles.categoryList}
            renderItem={({item}) => <CategoryList 
            {...item} 
            onSelectCategory={() => onSelectCategory({categoryId: item.id})} 
            //  style={orientation=== ORIENTATION.LANDSCAPE ? categoryItemLandscape : {}}
            />}
            />
        </View>
        </SafeAreaView>
    )
}

export default Categories;