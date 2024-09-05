import { creditCardImg, locationImg, percentageLogoImg, profileImg, walletImg } from "./links";

export const NotificationsData = [
    {
      day:'Today',
      status: '30% Special Discount!',
      id: 0,
      comments: 'Special promotion only valid today',
      img:percentageLogoImg,
      value:true,
      check:true,
    },
    {
      day:'Yesterday',
      status: 'Top Up E-Wallet Successful!',
      id: 1,
      comments: 'You have to top up your e-wallet',
      img:walletImg,
      value:true,
    },
    {
      status: 'New Services Available!',
      id: 2,
      comments: "Now you can track orders in real time",
      img:locationImg,
      value:false,
    },
    {
        day:'December 22, 2024',
      status: 'Credit Card Connected!',
      id: 3,
      comments: 'Credit Card has been linked',
      img:creditCardImg,
      value:true,
    },
    {
      
      status: 'Account Setup Successful!',
      id: 4,
      comments: 'Account has been setup successfully',
      img:profileImg,
      value:false,
    },
    {
        day:'December 22, 2024',
      status: 'Credit Card Connected!',
      id: 5,
      comments: 'Credit Card has been linked',
      img:creditCardImg,
      value:true,
    },
    {
      
      status: 'Account Setup Successful!',
      id: 6,
      comments: 'Account has been setup successfully',
      img:profileImg,
      value:false,
    },
  ];