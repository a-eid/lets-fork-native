import Constants from 'expo-constants'

const ENV = {
  development: {
    ADS: false,
    API: 'http://192.168.178.25:8003/api/v1',
    ENV: 'development',
    WS: 'ws://192.168.178.25:8003/api/v1/ws',
  },
  production: {
    ADS: false,
    API: 'https://letsfork.peterzernia.com/api/v1',
    ENV: 'production',
    WS: 'wss://letsfork.peterzernia.com/api/v1/ws',
  },
}

const getEnvVars = (releaseChannel: string | undefined): typeof ENV.development => {
  if (releaseChannel === undefined) return ENV.development
  if (releaseChannel.indexOf('production') !== -1) return ENV.production
  return ENV.development
}

export default getEnvVars(Constants.manifest.releaseChannel)
