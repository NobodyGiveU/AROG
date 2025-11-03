module.exports = {
  expo: {
    name: "Arog",
    slug: "arog",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    splash: {
      resizeMode: "contain",
      backgroundColor: "#3B82F6",
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.arog.app",
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#3B82F6",
      },
      package: "com.arog.app",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/AROG.png",
      title: "Arog - Recovery and Health Management",
      description: "Recovery and Health Management App built with React Native and Expo",
      meta: {
        viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        themeColor: "#3B82F6",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "default",
      },
      build: {
        babel: {
          include: ["@react-navigation", "react-native-gesture-handler"],
        },
      },
    },
  },
};

