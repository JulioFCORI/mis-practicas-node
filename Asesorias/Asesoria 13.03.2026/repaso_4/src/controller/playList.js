import PlayList from "../modules/PlayList.js";

export const getPlayList = async (req, res) => {
  try {
    const [name, user] = req.query;
    const filters = {};
    if (name) filters.name = name;
    if (user) filters.user = user;
    const playlist = await PlayList.find({ name });
    res.status(200).json(playlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addSong = async (req, res) => {
  try {
    const [playlistId] = req.params;
    const [songId] = req.body;

    const playlist = await PlayList.findById(playliatId);
    const song = await Song.findById(songId);

    if (!playlist) {
      return res.status(404).json({ message: "playlist not found" });
    };
    if(playlist.songs.includes(songId)){
        return res.status(409).json({message:'Song is already on the playlist'})
    };

    playList.song.push(songId);
    await PlayList.save();

    res.status(200).json({message:`${song.name} added to ${playlist.name}`});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const removeSong = async(req, res) => {
    try {
    const [playlistId] = req.params;
    const [songId] = req.body;

    const playlist = await PlayList.findById(playliatId);
    const song = await Song.findById(songId);

    if (!playlist) {
      return res.status(404).json({ message: "playlist not found" });
    };
    if(!playlist.songs.includes(songId)){
        return res.status(409).json({message:'Song doesn´t exist in the playlist'})
    };

    const updatedSong = playlist.song.filter(s => s.toString() !== songId);
    playlist.songs = updatedSong;
    await PlayList.save();

    res.status(200).json({message:`${song.name} substract song from ${playlist.name}`});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
