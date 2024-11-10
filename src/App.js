import './App.css';
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users';
import Songs from './components/Songs/Songs';
import { useState, useEffect } from 'react';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    // Mock de usuarios
    const mockUsers = [
      { id: 1, username: 'user1', urlavatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqXspSsnaZ_q8aj5VZnebZ9YolQkz1ekPRg&s', mail: 'user1@example.com', birthdate: '1990-01-01', password: 'password1', userstatus: 'active' },
      { id: 2, username: 'user2', urlavatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsAVeiJVswdoAl4KCrjqEXE3uLxGy6TVKAw&s', mail: 'user2@example.com', birthdate: '1992-05-21', password: 'password2', userstatus: 'inactive' },
    ];
    setUsersData(mockUsers);

    // Mock de géneros
    const mockGenres = [
      { id: 1, name: 'Rock' },
      { id: 2, name: 'Pop' },
      { id: 3, name: 'Jazz' },
    ];
    setGenresData(mockGenres);

    // Mock de canciones
    const mockSongs = [
      { id: 1, title: 'Song 1', urlSong: 'https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/0x1900-000000-80-0-0.jpg', description: 'This is a description of song 1.', genre: 1 },
      { id: 2, title: 'Song 2', urlSong: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Metallica_-_Nothing_Else_Matters_cover.jpg', description: 'This is a description of song 2.', genre: 1 },
    ];
    setSongsData(mockSongs);
  }, []);

  return (
    <>
      <NavBar />
      <Users data={usersData} />
      <Songs data={songsData} genres={genresData} />
    </>
  );
}

export default App;
