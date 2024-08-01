const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

  const volumeData = {};


for (const user of users) {
  for (const sound in user.favoritesSounds) {
    const volume = user.favoritesSounds[sound].volume;

  
    if (!volumeData[sound]) {
      volumeData[sound] = { totalVolume: 0, count: 0 };
    }

    
    volumeData[sound].totalVolume += volume;
    volumeData[sound].count += 1;
  }
}


const averageVolumes = {};


for (const sound in volumeData) {
  averageVolumes[sound] = volumeData[sound].totalVolume / volumeData[sound].count;
}


console.log(averageVolumes);