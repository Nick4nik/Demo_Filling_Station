import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

const auth = getAuth();

export function useAuthentication() {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
		} else {
			setUser(undefined);
		}
		});

		return unsubscribeFromAuthStatuChanged;
	}, []);

	return {
		user
	};
}