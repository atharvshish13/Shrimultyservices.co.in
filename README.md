# Shri Multy Services Android App

This folder wraps the existing static website in an Android WebView. The website is bundled locally at `app/src/main/assets/site`.

## Build the APK

1. Open the `android` folder in Android Studio.
2. Allow Gradle to sync and install Android SDK 35 if prompted.
3. Run **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

The debug APK will be created at:

`app/build/outputs/apk/debug/app-debug.apk`

For a release APK, use **Build > Generate Signed Bundle / APK** and create or select a signing key.
