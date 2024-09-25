interface Playlist {
    title: string;
    url: string;
}

interface Video {
    video: string;
    youtubeLink: string;
    bookPage: number;
    playlist: Playlist[];
}

export const playlists: { [key: string]: Playlist } = {
    theMysteriousGiftsOfGriefContent: {
        title: "The Mysterious Gifts of Grief Content",
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

export const videos: Array<Video> = [
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
    }
];