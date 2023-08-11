import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { ImageSelector } from "../../components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateImageProfileMutation, useGetProfileQuery } from "../../store/settings/api";
import InputProfile, {inputProfile} from '../../components/inputProfile'
const Profile = () => {
    const localId = useSelector((state) => state.auth.user.localId);
    const [uploadImageProfile, { data, isLoading, error }] = useUpdateImageProfileMutation();
    const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });
    const onHandlerImage = async ({ uri, base64 }) => {
        await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` });
      };

      if (isLoading) return (
        <View style={styles.loader}>       
      <ActivityIndicator></ActivityIndicator>
        </View>
      )
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage}/>
            {isLoading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large"  />
          </View>
        )}
            </View>
               {/* <InputProfile/>  */}
        </View>
    )
}

export default Profile;