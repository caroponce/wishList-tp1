import {  FlatList, SafeAreaView, View } from 'react-native'
import { CategoryList } from '../../components'
import CATEGORIES from '../../constants/data/categories.json'
import { styles } from './styles'
import useOrientation from "../../hooks/useOrientation";
import {useSelector} from 'react-redux'

function Categories ({ navigation, ruote}) {
    const categories = useSelector((state) => state.categories.data)
    const orientation = useOrientation();
    const onSelectCategory = ({categoryId}) => {
        navigation.navigate('Products', {categoryId})
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <FlatList
            data={categories}
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