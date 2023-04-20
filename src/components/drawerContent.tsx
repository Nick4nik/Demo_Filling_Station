/* eslint-disable react/prop-types */
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import {
	View,
	BackHandler,
	Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerElement from './dawerElement';
import Cabinet from '../assets/drawer_cabinet.svg';
import Talons from '../assets/drawer_talons.svg';
import Price from '../assets/drawer_price.svg';
import Stock from '../assets/drawer_stock.svg';
import Map from '../assets/drawer_map.svg';
import Logout from '../assets/arrow_logout.svg';

export default function DrawerContent(props): JSX.Element {
	const {t, i18n} = useTranslation();

	function changeLanguage(language: string) {
		i18n.changeLanguage(language)
			.then(() => AsyncStorage.setItem('language', language));
	};

	function logout() {
		BackHandler.exitApp();
	};

	function onNavigateHandler(id: number) {
		switch (id) {
			case 0:
				props.navigation.navigate('Cabinet');
				break;
		};
	};

	return (
		<View style={{ flex: 1, backgroundColor: '#00B488' }}>
            <DrawerContentScrollView style={{ flex: 1 }}>

					<View
						style={{
							flex: 1,
							paddingLeft: 28,
							justifyContent: 'space-between'
						}}>

						<View
							style={{
								gap: 28,
								justifyContent: 'flex-start',
								alignItems: 'stretch',
								marginTop: height/5
							}}>

							<DrawerElement
								icon={Cabinet}
								onPress={() => onNavigateHandler(0)}
								title={t('dashboard_cabinet')}/>
							<DrawerElement
								icon={Talons}
								onPress={() => onNavigateHandler(0)}
								title={t('dashboard_talons')}/>
							<DrawerElement
								icon={Price}
								onPress={() => onNavigateHandler(0)}
								title={t('dashboard_price')}/>
							<DrawerElement
								icon={Stock}
								onPress={() => onNavigateHandler(0)}
								title={t('dashboard_stock')}/>
							<DrawerElement
								icon={Map}
								onPress={() => onNavigateHandler(0)}
								title={t('dashboard_map')}/>

						</View>

						<View
							style={{
								justifyContent: 'flex-start',
								alignItems: 'stretch',
								marginTop: height/3
							}}>

							<DrawerElement
								icon={Logout}
								onPress={logout}
								title={t('dashboard_logout')}
								logout/>

						</View>


					</View>

            </DrawerContentScrollView>
        </View>
	);
};

const height = Dimensions.get('screen').height;