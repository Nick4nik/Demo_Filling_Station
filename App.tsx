import { StatusBar } from 'expo-status-bar';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import DrawerContent from './src/components/drawerContent';
import Dashboard from './src/pages/dashboard';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/i18n/en.json';
import ua from './src/i18n/ua.json';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cabinet from './src/pages/cabinet';
import Registration from './src/pages/registration';
import { KeyboardAvoidingView } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const languages = {
	en: en,
	ua: ua
};
  
i18n.use(initReactI18next)
	.init({
	compatibilityJSON: 'v3',
	lng: 'ua',
	fallbackLng: 'ua',
	resources: languages
});

export default function App() {

	function MainStack(): JSX.Element {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}>
				<Drawer.Screen
					name='Dashboard'
					component={Dashboard}
					options={{
						headerShown: false,
						unmountOnBlur: true
					}}/>

				<Drawer.Screen
					name='Cabinet'
					component={Cabinet}
					options={{
						headerShown: false,
						unmountOnBlur: true
					}}/>

				<Drawer.Screen
					name='Registration'
					component={Registration}
					options={{
						headerShown: false,
						unmountOnBlur: true,
						swipeEnabled: false
					}}/>
			
				{/* <Stack.Screen	name='MainPage'
								component={MainPage}
								options={({ navigation }) => ({
									header: () => (
										<Header	image={Burger}
												onPress={navigation.toggleDrawer}
												text={t('main_title')}/>
									)
								})}/> */}
			</Stack.Navigator>
		);
	};

	return (
		<>
			<StatusBar
				backgroundColor='#00000000'
				style='dark'
				translucent={false}/>
			<SafeAreaView style={{flex: 1}}>
				<Provider store={store}>
					<NavigationContainer>
						<Drawer.Navigator
							screenOptions={{
								headerShown: false,
								drawerPosition: 'right'
							}}
							drawerContent={(props) => DrawerContent(props)}>
				
							<Drawer.Screen	name='MainStack'
											component={MainStack}/>

						</Drawer.Navigator>
					</NavigationContainer>
				</Provider>
			</SafeAreaView>
		</>
	);
};