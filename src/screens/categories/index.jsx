import { Button, FlatList, SafeAreaView, View } from 'react-native'
import PRODUCTS from '../../constants/data/products.json'
import { CategoryList } from '../../components'
import CATEGORIES from '../../constants/data/categories.json'
import { styles } from './styles'
function Categories ({onSelectCategory}) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <FlatList
            data={CATEGORIES}
            style={styles.categoryContainer}
            contentContainerStyle={styles.categoryList}
            renderItem={({item}) => <CategoryList {...item} onSelectCategory={() => onSelectCategory({categoryId: item.id})} />}
            />
        </View>
        </SafeAreaView>
    )
}

export default Categories;