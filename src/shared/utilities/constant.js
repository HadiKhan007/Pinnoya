import {appIcons, appImages, colors} from '../exporter';

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
    route: 'MyBooking',
  },
  {
    id: 2,
    title: 'My Vouchers',
    route: 'MyVouchers',
  },
  {
    id: 2,
    title: 'My Reviews',
    route: 'MyReviews',
  },
];
const tabArray2 = [
  {
    id: 1,
    title: 'Dashboard',
    route: 'MyJobs',
  },
  {
    id: 2,
    title: 'Wallet',
    route: 'Wallet',
  },
  {
    id: 2,
    title: 'My Reviews',
    route: 'MyReviews',
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

const edit_list = [
  {
    id: 1,
    title: 'Edit Profile',
    img: appIcons.user2,
    route: 'EditProfile',
  },
  {
    id: 2,
    title: 'Payment Information',
    img: appIcons.paymentcard,
    route: 'PaymentInfo',
  },
  {
    id: 3,
    title: 'App Credit',
    img: appIcons.simpleCard,
    route: 'Wallet',
  },
  {
    id: 4,
    title: 'My Family',
    img: appIcons.family,
    route: 'MyDocument',
  },
  {
    id: 5,
    title: 'My Addresses',
    img: appIcons.cardHome,
    route: 'MyAddresses',
  },
  {
    id: 6,
    title: 'Help Center',
    img: appIcons.book,
    route: 'HelpCenter',
  },
  {
    id: 7,
    title: 'About Us',
    img: appIcons.oval,
    route: 'AboutUs',
  },
  {
    id: 8,
    title: 'Terms and Condition',
    img: appIcons.terms,
    route: 'Terms',
  },
  {
    id: 9,
    title: 'Privacy Policy',
    img: appIcons.privacy,
    route: 'PrivacyPolicy',
  },
  {
    id: 10,
    title: 'Version',
    route: '',
    text: '00.00.00',
  },
  {
    id: 11,
    title: 'Log out',
    route: 'Auth',
    color: colors.p1,
  },
];
const location_list = [
  {
    id: 1,
    title: 'Home',
    selected: false,
  },
  {
    id: 2,
    title: 'Work',
    selected: false,
  },
  {
    id: 3,
    title: 'Friends',
    selected: false,
  },
  {
    id: 4,
    title: 'Railway Station',
    selected: false,
  },
];
const Service_List = [
  {
    id: 1,
    title: 'For Babysitters',
  },
  {
    id: 2,
    title: 'HouseKeepers',
  },
  {
    id: 3,
    title: 'For pets',
  },
  {
    id: 4,
    title: 'Senior Caregiver',
  },
  {
    id: 5,
    title: 'Tutor',
  },
];

const Schedule_List = [
  {
    id: 1,
    title: 'Baby 1',
    subtitle: 'Lorem ipsum dolor sit amet,consectetur adipiscing',
    expanded: false,
  },
  {
    id: 2,
    title: 'Baby 2',
    subtitle: 'Lorem ipsum dolor sit amet,consectetur adipiscing',
    expanded: false,
  },
  {
    id: 3,
    title: 'Baby 3',
    subtitle: 'Lorem ipsum dolor sit amet,consectetur adipiscing',
    expanded: false,
  },
  {
    id: 4,
    title: 'German Shepherd',
    subtitle: 'Lorem ipsum dolor sit amet,consectetur adipiscing',
    expanded: false,
  },
];
const Add_kid = [];
const Payment_List = [
  {
    id: 1,
    title: 'Credit Card',
  },
  {
    id: 2,
    title: 'Bank Transfer',
  },
  {
    id: 3,
    title: 'Debit Card',
  },
];
const Addresses_list = [
  {
    id: 1,
    title: 'Home',
    subtitle:
      'B-374 Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: 2,
    title: 'Office',
    subtitle:
      'B-374 Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: 3,
    title: 'Other',
    subtitle:
      'B-374 Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: 4,
    title: 'Work',
    subtitle:
      'B-374 Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
];
const EditProfile_List = [
  {
    id: 1,
    title: 'Name',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 2,
    title: 'My information',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 3,
    title: 'Email',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 4,
    title: 'Password',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 5,
    title: 'Phone',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
];
const EditProfile_List2 = [
  {
    id: 1,
    title: 'Specify rate ',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 2,
    title: 'Experience',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 3,
    title: 'Job Skills ',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 4,
    title: 'Password',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 5,
    title: 'Phone',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
];
const VerifyProfile_List = [
  {
    id: 1,
    title: 'Experience',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 2,
    title: 'Preference',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
  {
    id: 3,
    title: 'Description',
    subtitle: 'Pellentesque in ipsum id orci porta dapibus.',
    editable: false,
  },
];
const Help_List = [
  {
    id: 1,
    title: 'FAQ',
  },
  {
    id: 2,
    title: 'Orders',
  },
  {
    id: 3,
    title: 'Support requests',
  },
];
const SpecialNeed_list = [
  {
    id: 1,
    text: 'Yes',
  },
  {
    id: 2,
    text: 'No',
  },
];
const History_List = [
  {
    id: 1,
    text: 'Complete',
  },
  {
    id: 2,
    text: 'In-Progress',
  },
];

const Wallet_List = [
  {
    id: 1,
    title: '₱25.00',
    selected: true,
  },
  {
    id: 2,
    title: 'Verify your account ',
  },
  {
    id: 3,
    title: 'Transfer',
  },
  {
    id: 4,
    title: 'Transactions history',
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
  tabArray2,
  serviceList,
  kids,
  pets,
  cities,
  work_exp,
  filterServiceList,
  profile_uri,
  edit_list,
  location_list,
  Service_List,
  Schedule_List,
  Add_kid,
  Payment_List,
  Addresses_list,
  EditProfile_List,
  EditProfile_List2,
  Help_List,
  VerifyProfile_List,
  SpecialNeed_list,
  History_List,
  Wallet_List,
};
