import { memo } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native";
import { SvgProps } from "react-native-svg";
import Clear from '../assets/clear.svg';
import Edit from '../assets/edit.svg';

export default memo(function Input(props: InputProps) {
	if (props.onlyShow) {
		return (
			<View
				style={[
					styles.container,
					{overflow: 'hidden', borderRadius: 15, paddingHorizontal: 0, paddingVertical: 0}
				]}>
			<Pressable
				style={[
					styles.container,
					{ height: 56, justifyContent: 'flex-start' }
				]}
				android_ripple={{
					color: '#020A0466'
				}}
				onPress={props.onPress}>
				<Text
					style={[
						styles.text,
						{ marginLeft: 20}
					]}>
					{props.value}
				</Text>
			</Pressable>
			</View>
		)
	}
	return (
		<View
			style={[
				styles.container,
				props.isPassword && { paddingHorizontal: 0, paddingVertical: 0, height: 68.54, width: 44 },
				props.isBorderOk && { borderWidth: 1, borderColor: '#00B488' },
				props.isBorderError && { borderWidth: 1, borderColor: '#DC000080' }
			]}>
			{
				props.icon &&
				<Pressable>
					<props.icon
						width={21}
						height={25}/>
				</Pressable>
			}
			<TextInput
				value={props.value}
				editable={!props.isDisabled}
				onChangeText={(value) => {
					if (props.isPhone && props.value?.length === 5 && value.length < 5) {
						return;
					};
					if (props.isPhone && props.value?.length === 6) {
						props.setValue(value + ') ');
						return;
					}
					if (props.isPhone && props.value?.length === 10 ||
						props.value?.length === 13) {
							props.setValue(value + ' ');
							return;
					}
					else {
						props.setValue(value);
						return;
					}
				}}
				blurOnSubmit={false}
				onSubmitEditing={props.goNext}
				style={[
					styles.input,
					props.icon && { paddingLeft: 20 },
					props.isEditable && { marginRight: -20 },
					props.isPassword && { color: '#FFFFFF'}
				]}
				maxLength={props.maxLength}
				keyboardType={props.isPhone ? 'numeric' : props.isPassword ? 'numeric' : 'default'}
				caretHidden={props.isPassword}/>
			{
				props.isPassword && 
				<Text style={styles.text}>
					{props.value}
				</Text>
			}
			{
				props.isEditable &&
				(
					props.value?.trim() !== '' ?
					props.value?.length === props.maxLength ?
					<Edit
						width={20}
						height={20}/>
					:
					<Pressable
						onPress={() => props.setValue('+38(0')}
						disabled={props.isDisabled}>
						<Clear
							width={20}
							height={20}/>
					</Pressable>
					:
					null
				)
			}
		</View>
  	);
});

interface InputProps {
	value?: string;
	setValue?: (value?: string) => void;
	goNext?: () => void;
	isEditable?: boolean;
	icon?: React.FC<SvgProps>;
	maxLength?: number;
	isDate?: boolean;
	isPhone?: boolean;
	isBorderOk?: boolean;
	isBorderError?: boolean;
	isDisabled?: boolean;
	isPassword?: boolean;
	onlyShow?: boolean;
	onPress?: () => void;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FCFFFE',
		borderWidth: 1,
		borderColor: '#FCFFFE',
		elevation: 5,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 13,
		paddingHorizontal: 20,
		flex: 1,
		flexDirection: 'row'
	},
	input: {
		width: '100%',
		fontSize: 14,
		fontWeight: '600',
		lineHeight: 19,
		// fontFamily: 'Mustica',
		color: '#303030',
	},
	text: {
		fontSize: 14,
		fontWeight: '600',
		lineHeight: 19,
		// fontFamily: 'Mustica',
		color: '#303030',
		position: 'absolute'
	}
})