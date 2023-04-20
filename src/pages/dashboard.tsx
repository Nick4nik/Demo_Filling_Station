import { Text, Image, Dimensions, StyleSheet, Pressable, View, ScrollView } from 'react-native';
import DashboardIcon from '../assets/dashboard_icon.svg';
import Notification from '../assets/notifications.svg';
import Burger from '../assets/burger.svg';
import Logo from '../assets/logo.svg';
import Discount from '../assets/stock.svg'
import BuyGas from '../assets/talons.svg';
import Price from '../assets/price.svg';
import Barcode from '../assets/barcode.svg';
import Card from '../assets/card.svg';
import { useTranslation } from 'react-i18next';
import Button from '../components/button';

export default function Dashboard({navigation}) {
	const {t} = useTranslation();

	return (
		<ScrollView
			contentContainerStyle={styles.page}>

			<Image
				source={require('../assets/background.png')}
				style={styles.image}/>

			<View style={styles.header}>
				<Pressable
					android_ripple={{
						color: '#020A0466',
						borderless: true
					}}>
					<Notification
						width={22}
						height={22}/>
				</Pressable>

				<View style={{ alignItems: 'center' }}>
					<Logo
						width={34}
						height={46}/>
					<Text style={styles.text_logo}>
						CAH
					</Text>
				</View>

				<Pressable
					android_ripple={{
						color: '#020A0466',
						borderless: true
					}}
					onPress={() => navigation.toggleDrawer()}>
					<Burger
						width={22}
						height={22}/>
				</Pressable>

			</View>

			<View style={{ alignItems: 'center', marginHorizontal: -22 }}>
				<DashboardIcon/>
			</View>

			<Text style={styles.text_title}>
				{t('dashboard_watch_discounts')}
			</Text>

			<View>
				<Button
					title={t('dashboard_get_discount')}
					icon={Discount}
					isShadow/>
			</View>


			<View style={{ flexDirection: 'row', gap: 7 }}>
					
				<Button
					title={t('dashboard_buy_gas')}
					icon={BuyGas}
					isShadow/>

				<Button
					title={t('dashboard_get_discount')}
					icon={Price}
					isShadow/>
			</View>

			<Text style={styles.text_title}>
				{t('dashboard_card')}
			</Text>
			
			<View>
				<Button
					title={t('dashboard price')}
					icon={Card}
					secondIcon={Barcode}
					isShadow/>
			</View>

			<Text style={styles.text_title}>
				{t('dashboard_map')}
			</Text>

			<View style={styles.map}>
				<Image
					source={require('../assets/kyiv.png')}
					resizeMode='stretch'/>
			</View>

		</ScrollView>
	);
};

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	page: {
		flexGrow: 1,
		padding: 22,
		gap: 22
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		height: height,
		width: width,
		position : 'absolute',
		zIndex: 0
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	text_title: {
		fontSize: 14,
		lineHeight: 19,
		fontWeight: '600',
		// fontFamily: 'Mustica',
		color: '#303030'
	},
	text_logo: {
		fontSize: 18,
		fontWeight: '800',
		// fontFamily: 'Intro',
		color: '#303030',
	},
	map: {
		borderRadius: 15,
		borderColor: '#FFFFFF',
		borderWidth: 2,
		overflow: 'hidden',
		margin: -4
	}
});