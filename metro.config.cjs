const { getDefaultConfig } = require("expo/metro-config");

// Try dynamic import for nativewind (experimental fix for ESM issue)
let withNativeWind;
try {
  // This may help with the ESM loading issue
  withNativeWind = require('nativewind/metro').withNativeWind;
} catch (e) {
  console.warn('nativewind/metro could not be loaded:', e.message);
  withNativeWind = (config) => config;
}

const config = getDefaultConfig(__dirname);

// Try adding nativewind with error handling
try {
  module.exports = withNativeWind(config, { input: './app/globals.css' });
} catch (e) {
  console.warn('NativeWind config failed, using default:', e.message);
  module.exports = config;
}
