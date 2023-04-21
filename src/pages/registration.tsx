import { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, Image, Dimensions, StyleSheet, ScrollView, Pressable, View } from 'react-native';
import { useAndroidBackHandler } from 'react-navigation-backhandler';
import GoBack from '../assets/arrow_back.svg';
import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import Input from '../components/input';
import Flag from '../assets/ukraine.svg';
import Button from '../components/button';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Checkbox from '../components/checkbox';

export default function Registration({navigate}) {

	const formatDate = useCallback((date: Date): string => {
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1;
		let dd = date.getDate();
		return (dd < 10 ? '0' + dd : dd) + '.' + (mm < 10 ? '0' + mm : mm) + '.' + yyyy;
	}, []);

	const dateNow = useMemo(() => {
		return formatDate(new Date);
	}, [formatDate]);
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [first, setFirst] = useState('');
	const [second, setSecond] = useState('');
	const [third, setThird] = useState('');
	const [fourth, setFourth] = useState('');
	const [phone, setPhone] = useState('+38(0');
	const [dateString, setDateString] = useState(dateNow);
	const [dateDate, setDateDate] = useState(new Date);
	const [state, setState] = useState(1);
	const value = useMemo(() => '', []);
	const {t} = useTranslation();
	const [isError, setError] = useState(false);
	const [isOk, setOk] = useState(false);
	const [checkbox, setCheckbox] = useState(false);

	useAndroidBackHandler(() => {
		if (state !== 0) {
			setState((prev) => prev - 1);
		};
		return true;
	});

	useEffect(() => {
		if (state === 2) {
			if (first + second + third + fourth !== value) {
				setError(true);
				setOk(false);
			}
			else {
				setError(false);
				setOk(true);
			}
		}
		else if (state === 3) {
			if (name.trim() !== '' && lastName.trim() !== '') {
				setError(false);
				setOk(true);
			}
			else {
				setError(true);
				setOk(false);
			}
		}
	}, [first, second, third, fourth, name, lastName]);

	const onPressHandler = useCallback((state: number) => {
		switch (state) {
			case 1: {
				setState(2);
				break;
			}
			case 2: {
				if (isOk) {
					// console.log(1);
					setState(3);
					setOk(false);
					setError(false);
				}
				break;
			}
			case 3: {
				setState(4);
				break;
			}
			case 4: {
				break;
			}
		}
	}, [isOk, setOk, setError]);

	const onDate = useCallback(() => {
		DateTimePickerAndroid.open({
			value: dateDate,
			onChange(event, date) {
				setDateString(formatDate(date));
				setDateDate(date);
			},
			mode: 'date'
		})
	}, [setDateDate, dateDate, setDateString, formatDate]);

	return (
		<ScrollView
			contentContainerStyle={styles.page}>
		
			<Image 
				source={require('../assets/background.png')}
				style={styles.image}/>

			{
				state !== 1 &&	
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
					onPress={() => setState((prev) => prev - 1)}>
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
						<>
							<Text style={styles.text_description}>
								{t('registration_phone')}
							</Text>
							<Input
								icon={Flag}
								value={phone}
								setValue={setPhone}
								maxLength={18}
								isEditable
								isPhone/>
						</>
						:
						state === 2 ?
						<>
							<Text style={styles.text_description}>
								{t('registration_phone')}
							</Text>
							<Input
								icon={Flag}
								value={phone}
								setValue={setPhone}
								maxLength={18}
								isEditable
								isPhone
								isDisabled/>

							<Text style={styles.text_description}>
								{t('registration_sms')}
							</Text>
							<View style={{flexDirection: 'row', gap: 12}}>
								<Input
									value={first}
									setValue={setFirst}
									maxLength={1}
									isPassword
									isBorderOk={isOk}
									isBorderError={isError}/>
								<Input
									value={second}
									setValue={setSecond}
									maxLength={1}
									isPassword
									isBorderOk={isOk}
									isBorderError={isError}/>
								<Input
									value={third}
									setValue={setThird}
									maxLength={1}
									isPassword
									isBorderOk={isOk}
									isBorderError={isError}/>
								<Input
									value={fourth}
									setValue={setFourth}
									maxLength={1}
									isPassword
									isBorderOk={isOk}
									isBorderError={isError}/>
							</View>

							<Text style={[styles.text_description, {textAlign: 'center'}]}>
								{t('registration_sms_again')}
							</Text>
						</>
						:
						state === 3 ?
						<>
							<Text style={styles.text_description}>
								{t('registration_name')}
							</Text>
							<Input
								value={name}
								setValue={setName}
								isBorderOk={isOk}
								isBorderError={isError}/>

							<Text style={styles.text_description}>
								{t('registration_lastName')}
							</Text>
							<Input
								value={lastName}
								setValue={setLastName}
								isBorderOk={isOk}
								isBorderError={isError}/>
						</>
						:
						state === 4 ?
						<>
							<Text style={styles.text_description}>
								{t('registration_year')}
							</Text>
							<Input
								value={dateString}
								onPress={onDate}
								onlyShow/>

							<Checkbox
								checked={checkbox}
								setChecked={() => setCheckbox((value) => !value)}
								text={t('registration_checkbox')}/>
						</>
						:
						null

					}
				</View>
			</View>

			<View style={{ marginBottom: -15}}>
				<Button
					title={t('registration_next')}
					onPress={() => onPressHandler(state)}/>
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
		textAlign: 'center',
		color: '#303030'
	},
	text_description: {
		fontSize: 12,
		lineHeight: 15,
		fontWeight: '600',
		// fontFamily: 'Mustica',
		textAlign: 'left',
		color: '#303030',
		marginTop: 24,
		marginBottom: 12
	}
});