import {  FlatList, SafeAreaView, View, ActivityIndicator } from 'react-native'
import { CategoryList } from '../../components'
import CATEGORIES from '../../constants/data/categories.json'
import { styles } from './styles'
import useOrientation from "../../hooks/useOrientation";
import {useSelector} from 'react-redux'
import {useGetCategoriesQuery} from '../../store/categories/api'

function Categories ({ navigation, ruote}) {
    const {data, error, isLoading} = useGetCategoriesQuery();
    const orientation = useOrientation();
    const onSelectCategory = ({categoryId}) => {
        navigation.navigate('Products', {categoryId})
    }

    if (isLoading) return (
        <View style={styles.loader}>       
      <ActivityIndicator></ActivityIndicator>
        </View>
      )
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <FlatList
            data={data}
            style={styles.categoryContainer}
            contentContainerStyle={styles.categoryList}
            renderItem={({item}) => <CategoryList 
            {...item} 
            onSelectCategory={() => onSelectCategory({categoryId: item.id})} 
            //  style={orientation=== ORIENTATION.LANDSCAPE ? categoryItemLandscape : {}}
            />}
            />
        </View>
        </View>
    )
}

export default Categories;