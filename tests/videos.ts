interface Playlist {
    title: string;
    url: string;
  }
  
  interface Video {
    video: string;
    youtubeLink: string;
    bookPage: number | null;
    playlist: Playlist[];
  }
  
  export const playlists: { [key: string]: Playlist } = {
    theMysteriousGiftsOfGriefContent: {
      title: "The Mysterious Gifts of Grief Bonus Content",
      url: "https://www.youtube.com/playlist?list=PL8kaFmEkRQSmpSvbtHogCJG25MiEXfEUB"
    },
    livingInCrisis: {
      title: "Living in Crisis",
      url: "https://www.youtube.com/playlist?list=PL8kaFmEkRQSmPBWJR-r3YxRii4Ocs7RX3"
    },
    aboutTheMysteriousGiftsOfGriefBookProject: {
      title: "About The Mysterious Gifts of Grief Book Project",
      url: "https://www.youtube.com/playlist?list=PL8kaFmEkRQSm6u9TAPvnr4k_L7ROWdRR6"
    }
  };
  
  export const videos: Video[] = [
    {
      video: "Awareness",
      youtubeLink: "https://youtu.be/FN6GkVFpPJE",
      bookPage: 4,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "The Diagram",
      youtubeLink: "https://youtu.be/SSH8JSIkIPk",
      bookPage: 5,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Recognizing a Crisis",
      youtubeLink: "https://youtu.be/_wC0SZ9ncDI",
      bookPage: 6,
      playlist: [playlists.theMysteriousGiftsOfGriefContent, playlists.livingInCrisis]
    },
    {
      video: "Our Situation",
      youtubeLink: "https://youtu.be/SN2VABO1uds",
      bookPage: 7,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "How to Live in Crisis",
      youtubeLink: "https://youtu.be/DEU2BEMJ9U0",
      bookPage: 10,
      playlist: [playlists.theMysteriousGiftsOfGriefContent, playlists.livingInCrisis]
    },
    {
      video: "Time to Receive",
      youtubeLink: "https://youtu.be/tu0nck5FNno",
      bookPage: 11,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "New Perspective",
      youtubeLink: "https://youtu.be/K0roMnnAlhI",
      bookPage: 12,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Prevent Regret",
      youtubeLink: "https://youtu.be/0WNamLuUSMk",
      bookPage: 14,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "All Your People",
      youtubeLink: "https://youtu.be/WrAnWGTz49k",
      bookPage: 17,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Wildness",
      youtubeLink: "https://youtu.be/27ACdCPRf24",
      bookPage: 18,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "What is Help",
      youtubeLink: "https://youtu.be/l2bKbSf2xIY",
      bookPage: 21,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Choose an Advocate",
      youtubeLink: "https://youtu.be/3Hy8BECibdg",
      bookPage: 25,
      playlist: [playlists.theMysteriousGiftsOfGriefContent, playlists.livingInCrisis]
    },
    {
      video: "Surrender",
      youtubeLink: "https://youtu.be/xmShv9uPZcA",
      bookPage: 28,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Tell the Truth",
      youtubeLink: "https://youtube.com/shorts/ym4y95uklck?feature=share",
      bookPage: 32,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Intimacy",
      youtubeLink: "https://youtu.be/n6yPQ6BQysQ",
      bookPage: 34,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Intimacy of Friendship",
      youtubeLink: "https://youtu.be/gn7uQaLo3Cc",
      bookPage: 36,
      playlist: [playlists.theMysteriousGiftsOfGriefContent, playlists.livingInCrisis]
    },
    {
      video: "Mystery",
      youtubeLink: "https://youtu.be/LTw2j0Q_iUk",
      bookPage: 44,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Solitude",
      youtubeLink: "https://youtu.be/qDviwBYwsTw",
      bookPage: 54,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Grace",
      youtubeLink: "https://youtu.be/ivGT9UODkFk",
      bookPage: 68,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Restoration",
      youtubeLink: "https://youtu.be/VpwfHnyuvC0",
      bookPage: 80,
      playlist: [playlists.theMysteriousGiftsOfGriefContent]
    },
    {
      video: "Comfort In Dump Out",
      youtubeLink: "https://youtu.be/bbAG6c0-RyA",
      bookPage: null,
      playlist: [playlists.livingInCrisis]
    },
    {
      video: "Capacity",
      youtubeLink: "https://youtu.be/EuJ9UtWokT8",
      bookPage: null,
      playlist: [playlists.livingInCrisis]
    },
    {
      video: "Offers Over Requests",
      youtubeLink: "https://youtu.be/YQ-cH4Qe-3Q",
      bookPage: null,
      playlist: [playlists.livingInCrisis]
    },
    {
      video: "Receive",
      youtubeLink: "https://youtu.be/7EMaQH7ZUKY",
      bookPage: null,
      playlist: [playlists.livingInCrisis]
    },
    {
      video: "Personal Values",
      youtubeLink: "https://youtu.be/U-q7NqVtaW0",
      bookPage: null,
      playlist: [playlists.livingInCrisis]
    },
    {
      video: "Your People",
      youtubeLink: "https://youtu.be/UzdgMD4NTOI",
      bookPage: null,
      playlist: [playlists.livingInCrisis]
    },
    {
      video: "The Reckoning",
      youtubeLink: "https://youtu.be/XsPFZNFTjDI",
      bookPage: null,
      playlist: [playlists.livingInCrisis]
    },
    {
      video: "About The Mysterious Gifts of Grief",
      youtubeLink: "https://youtu.be/SVZJ9ALYedo",
      bookPage: null,
      playlist: [playlists.aboutTheMysteriousGiftsOfGriefBookProject]
    },
    {
      video: "Welcoming the Magic",
      youtubeLink: "https://youtu.be/B2sbJNbRVNc",
      bookPage: null,
      playlist: [playlists.aboutTheMysteriousGiftsOfGriefBookProject]
    },
    {
      video: "My Intention",
      youtubeLink: "https://youtu.be/d7hjDhEUZ8E",
      bookPage: null,
      playlist: [playlists.aboutTheMysteriousGiftsOfGriefBookProject]
    }
  ];