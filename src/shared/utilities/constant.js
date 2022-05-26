import {appIcons, appImages} from '../exporter';

const ANDROID = Platform.OS === 'android';
const IOS = Platform.OS === 'ios';
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const web_client_id = '';
export const video_url = '';
const swipe_config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};
let image_options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const tabArray = [
  {
    id: 1,
    title: 'My Bookings',
  },
  {
    id: 2,
    title: 'My Reviews',
  },
];

const serviceList = [
  {
    id: 1,
    title: 'Babysitter',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    img: appImages.dogWalking,
  },
  {
    id: 2,
    title: 'Housekeeper',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    img: appImages.housekeeper,
  },
  {
    id: 3,
    title: 'Senior Caregiver',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    img: appImages.findBaby,
  },
  {
    id: 4,
    title: 'Tutor',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    img: appImages.workingMom,
  },
];

const stripe_publishableKey = '';
const profile_uri = '';
export {
  ANDROID,
  IOS,
  emailRegex,
  web_client_id,
  swipe_config,
  image_options,
  profile_uri,
  stripe_publishableKey,
  tabArray,
  serviceList,
};
