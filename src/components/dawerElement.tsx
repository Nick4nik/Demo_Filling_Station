import {
	StyleSheet,
	View,
	Text,
	Pressable
} from 'react-native';
import { SvgProps } from 'react-native-svg';

export default function DrawerElement(props: DrawerProps): JSX.Element {
	if (props.logout) {
		return (
			<Pressable
				style={styles.logout}
				android_ripple={{ color: '#00B48870' }}
				onPress={props.onPress}>
					
				<Text style={styles.text}>
					{props.title}
				</Text>

				<props.icon
					height={35}
					width={35}/>

			</Pressable>
		);
	}
	else {
		return (
			<Pressable
				style={styles.item}
				android_ripple={{ color: '#00B48870' }}
				onPress={props.onPress}>
					
				<props.icon
					height={35}
					width={35}/>

				<Text style={styles.text}>
					{props.title}
				</Text>

			</Pressable>
		);
	};
};

interface DrawerProps {
	icon: React.FC<SvgProps>;
	title: string;
	onPress: () => void;
	logout?: boolean;
};

const styles = StyleSheet.create({
	item: {
		flex: 1,
		gap: 22,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	logout: {
		flex: 1,
		gap: 14,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	text: {
		color: '#FFFFFF',
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '600',
		marginBottom: 5
		// fontFamily: 'Mustica',
	}
});