import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.billboard.ellipse',
  appName: 'pilot-ellipse',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
