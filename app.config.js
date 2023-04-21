import '.src/config/firebase';

export default {
	"expo": {
		"name": "Demo_Filling_Station",
		"slug": "Demo_Filling_Station",
		"version": "1.0.0",
		"orientation": "portrait",
		"icon": "./src/assets/icon.png",
		"userInterfaceStyle": "light",
		"splash": {
			"image": "./src/assets/background.png",
			"resizeMode": "contain",
			"backgroundColor": "#ffffff"
		},
		"assetBundlePatterns": [
			"**/*"
		],
		"ios": {
			"supportsTablet": true
		},
		"android": {
			"adaptiveIcon": {
				"foregroundImage": "./src/assets/logo.png",
				"backgroundColor": "#ffffff"
			}
		},
		"web": {
			"favicon": "./src/assets/favicon.png"
		},
		"extra": {
			firebaseApiKey: process.env.FIREBASE_API_KEY,
			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
			firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			firebaseAppId: process.env.FIREBASE_APP_ID
		  }
	}
}
