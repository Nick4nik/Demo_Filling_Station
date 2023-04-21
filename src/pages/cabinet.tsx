import { Text, Image, Dimensions, StyleSheet, View, Pressable } from 'react-native';
import Burger from '../assets/burger.svg';
import Back from '../assets/arrow_back.svg';
import { useTranslation } from 'react-i18next';
import Button from '../components/button';
import { useAuthentication } from '../components/useAuth';

export default function Cabinet({navigation}) {
	const {t} = useTranslation();
	const user = useAuthentication();

	return (
		<View style={styles.page}>
			<Image 
				source={require('../assets/background.png')}
				style={styles.image}/>

				<View style={styles.header}>
					<Pressable
						android_ripple={{
							color: '#020A0466',
							borderless: true
						}}
						onPress={navigation.goBack}>
						<Back
							width={22}
							height={22}/>
					</Pressable>
	
					<View style={{ alignItems: 'center' }}>
						<Text style={styles.text_logo}>
							{t('cabinet_title')}
						</Text>
					</View>
	
					<Pressable
						android_ripple={{
							color: '#020A0466',
							borderless: true
						}}
						onPress={navigation.toggleDrawer}>
						<Burger
							width={22}
							height={22}/>
					</Pressable>
	
				</View>

				<View style={styles.info}>
					<Text style={styles.text_title}>
						{t('cabinet_logIn_full')}
					</Text>

					<View style={{minHeight: 59}}>
						<Button
							title='qwe'
							onPress={() => navigation.navigate('Registration')}/>
					</View>

				</View>
		</View>
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
	image: {
		height: height,
		width: width,
		position : 'absolute',
		zIndex: 0
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20
	},
	text_logo: {
		fontSize: 18,
		fontWeight: '800',
		// fontFamily: 'Intro',
		color: '#303030',
	},
	info: {
		borderRadius: 15,
		backgroundColor: '#FFFFFF',
		marginHorizontal: -22,
		gap: 32,
		height: '100%',
		paddingHorizontal: 22,
		paddingVertical: 57,
	},
	text_title: {
		fontSize: 18,
		fontWeight: '600',
		// fontFamily: 'Mustica',
		lineHeight: 22,
		textAlign: 'center'
	}
});