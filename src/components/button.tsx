import { memo } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

export default memo(function Button(props: ButtonProps) {
	return (
		<Pressable
			onPress={props.onPress}
			style={({pressed}) => [
				styles.button,
				props.isShadow && styles.shadow,
				pressed && props.isShadow && { backgroundColor: '#020A0466', elevation: 0 },
				pressed && !props.isShadow && { backgroundColor: '#00B48850', elevation: 0 },
			]}>
			{
				props.icon &&
				<props.icon
					width={33}
					height={33}/>
			}
			<Text style={[styles.text, props.isShadow && { color: '#303030'}, !props.isShadow && { marginRight: -47}]}>
				{props.title}
			</Text>
			{
				props.secondIcon &&
				<props.secondIcon
					style={{position: 'absolute', right: 10}}/>
			}
		</Pressable>
	);
});

const styles = StyleSheet.create({
	text: {
		color: '#FCFFFE',
		fontSize: 14,
		lineHeight: 19,
		fontWeight: '600',
		textAlign: 'center'
		// fontFamily: 'Mustica',
	},
	button: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 13,
		paddingRight: 60,
		backgroundColor: '#00B488',
		alignItems: 'center',
		justifyContent: 'center',
		columnGap: 12,
		borderRadius: 15
	},
	shadow: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		elevation: 10,
		justifyContent: 'flex-start',
	}
})

interface ButtonProps {
	isShadow?: boolean;
	onPress?: () => void;
	title: string;
	icon?: React.FC<SvgProps>;
	secondIcon?: React.FC<SvgProps>;
};