import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./tabs";
import AuthNavigator from "./auth";
import { useSelector } from "react-redux";

function RootNavigator () {
  const auth = useSelector((state) => state.auth.user)
    return(
        <NavigationContainer>
         {auth?.localId ? <TabsNavigator/> : <AuthNavigator/> }

        </NavigationContainer>
    )
}

export default RootNavigator;