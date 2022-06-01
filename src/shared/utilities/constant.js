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

const filterServiceList = [
  {
    id: 0,
    title: 'For Babysitter',
  },
  {
    id: 1,
    title: 'Housekeeper',
  },
  {
    id: 2,
    title: 'For Pets',
  },
  {
    id: 3,
    title: 'Senior Caregiver',
  },
  {
    id: 4,
    title: 'Tutor',
  },
];

export const job_list = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    body: 'Pellentesque in ipsum id orci porta dapibus.',
    expanded: false,
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    body: 'Pellentesque in ipsum id orci porta dapibus.',
    expanded: false,
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    body: 'Pellentesque in ipsum id orci porta dapibus.',
    expanded: false,
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor',
    body: 'Pellentesque in ipsum id orci porta dapibus.',
    expanded: false,
  },
];

const kids = [
  {
    id: 1,
    text: 1,
  },
  {
    id: 2,
    text: 2,
  },
  {
    id: 3,
    text: 3,
  },
  {
    id: 4,
    text: 4,
  },
  {
    id: 5,
    text: 5,
  },
  {
    id: 6,
    text: 6,
  },
  {
    id: 7,
    text: 7,
  },
  {
    id: 8,
    text: 8,
  },
];

const cities = [
  {
    id: 1,
    text: 'Lahore',
  },
  {
    id: 2,
    text: 'Karachi',
  },
  {
    id: 3,
    text: 'Peshawer',
  },
  {
    id: 4,
    text: 'Quetta',
  },
  {
    id: 5,
    text: 'Multan',
  },
];

const pets = [
  {
    id: 1,
    text: 1,
  },
  {
    id: 2,
    text: 2,
  },
  {
    id: 3,
    text: 3,
  },
  {
    id: 4,
    text: 4,
  },
  {
    id: 5,
    text: 5,
  },
  {
    id: 6,
    text: 6,
  },
  {
    id: 7,
    text: 7,
  },
  {
    id: 8,
    text: 8,
  },
];

const work_exp = [
  {
    id: 1,
    text: '1-2 years',
  },
  {
    id: 2,
    text: '2-3 years',
  },
  {
    id: 3,
    text: '3-4 years',
  },
  {
    id: 4,
    text: '4-5 years',
  },
  {
    id: 5,
    text: '5-6 years',
  },
  {
    id: 6,
    text: '6-7 years',
  },
  {
    id: 7,
    text: '8-9 years',
  },
  {
    id: 8,
    text: '9-10 years',
  },
];

const stripe_publishableKey = '';
const profile_uri =
  'https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png';
export {
  ANDROID,
  IOS,
  emailRegex,
  web_client_id,
  swipe_config,
  image_options,
  stripe_publishableKey,
  tabArray,
  serviceList,
  kids,
  pets,
  cities,
  work_exp,
  filterServiceList,
  profile_uri,
};
