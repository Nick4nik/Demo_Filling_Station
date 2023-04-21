import {
	Pressable,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Checked from '../assets/checked.svg';
import UnChecked from '../assets/unChecked.svg';

export default function Checkbox(props: CheckboxProps): JSX.Element {
	return (
		<View style={{
			flex: 1,
			overflow: 'hidden',
			borderRadius: 15,
			marginTop: 28
		}}>
			<Pressable
				style={styles.checkbox}
				onPress={props.setChecked}>
				<Text style={styles.text}>
					{props.text}
				</Text>
				{
					props.checked ?
					<Checked/>
					:
					<UnChecked/>
				}
			</Pressable>
		</View>
	);
};

interface CheckboxProps {
	checked: boolean,
	setChecked: () => void,
	text: string
}

const styles = StyleSheet.create({
	checkbox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	text: {
		fontSize: 12,
		lineHeight: 15,
		fontWeight: '600',
		color: '#303030',
		// fontFamily: 'Mustica',
		borderBottomWidth: 1,
		borderColor: '#303030'
	}
});