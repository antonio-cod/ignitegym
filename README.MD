## START PROJET REACT NATIVE

- npx create-expo-app --template
- npx expo install expo-font @expo-google-fonts/roboto
- npm install @gluestack-ui/themed@1.1.34 @gluestack-style/react@1.0.57 @gluestack-ui/config@1.1.19 --legacy-peer-deps
- npx expo install react-native-svg
- npx gluestack-ui-scripts eject-theme
- npm install --save-dev react-native-svg-transformer --legacy-peer-deps



## CLEAN EXPO AND METRO CACHE

- npx expo start --clear

## REACT NAVIGATE

- npm install @react-navigation/native
- Add na raiz .npmrc (legacy-peer-deps=true)
- npx expo install react-native-screens
- npm install react-native-safe-area-context
- npm install @react-navigation/native-stack
- npm install @react-navigation/bottom-tabs

## REACT IMAGE

- npx expo install expo-image-picker
- ADD plugin em app.json
"expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }

## MANIPULANDO O FILE

- nnpx expo install expo-file-system


