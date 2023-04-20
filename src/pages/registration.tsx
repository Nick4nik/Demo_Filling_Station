import { useCallback, useState } from 'react';
import { Text, Image, Dimensions, StyleSheet, ScrollView, Pressable, View } from 'react-native';
import { useAndroidBackHandler } from 'react-navigation-backhandler';
import GoBack from '../assets/arrow_back.svg';
import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import Input from '../components/input';
import Flag from '../assets/ukraine.svg';
import Button from '../components/button';

export default function Registration({navigate}) {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('+38(0');
	const [date, setDate] = useState(new Date);
	const [state, setState] = useState(0);
	const {t} = useTranslation();

	useAndroidBackHandler(() => {
		if (state !== 0) {
			setState((prev) => prev--);
		};
		return true;
	});

	const onPressHandler = useCallback(() => {
		
	}, []);
	

	return (
		<ScrollView
			contentContainerStyle={styles.page}>
		
			<Image 
				source={require('../assets/background.png')}
				style={styles.image}/>

			{
				state !== 0 &&	
				<Pressable
					android_ripple={{
						color: '#020A0466',
						borderless: true
					}}
					style={{
						position: 'absolute',
						top: 26,
						left: 22
					}}
					onPress={() => setState((prev) => prev--)}>
					<GoBack
						width={22}
						height={22}/>
				</Pressable>
			}

			<View style={{ gap: 38 }}>

				<View style={{alignItems: 'center'}}>
					<Logo
						width={67}
						height={90}/>
				</View>

				<Text style={styles.text_title}>
					{t('registration')}
				</Text>

				<View>
					{
						state === 1 ?
						<Input
							icon={Flag}
							value={phone}
							setValue={setPhone}
							maxLength={18}
							isEditable
							isPhone/>
						:
						<>
							<Input
								icon={Flag}
								value={phone}
								setValue={setPhone}
								maxLength={18}
								isEditable
								isPhone
								isDisabled/>
						</>
					}
				</View>
			</View>

			<View>
				<Button
					title={t('registration_next')}
					onPress={onPressHandler}/>
			</View>
			
		</ScrollView>
	);
};

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	page: {
		flexGrow: 1,
		paddingTop: 40,
		padding: 32,
		justifyContent: 'space-between'
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		height: height,
		width: width,
		position : 'absolute',
		top : 0,
		flex: 1
	},
	text_title: {
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '400',
		// fontFamily: 'Intro',
		textAlign: 'center'
	}
});