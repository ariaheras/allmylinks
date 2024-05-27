import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Arià Heras</h1>
        <div className="links">
          <LinkButton text="X" url="https://x.com/ariaheras?lang=es&mx=2"/>
          <LinkButton text="Instagram" url="https://www.instagram.com/ariaheraas/"/>
          <LinkButton text="TikTok" url="https://www.tiktok.com/@ariaheras?lang=es"/>
          <LinkButton text="Telegram" url="https://t.me/ariaheras"/>
          <LinkButton text="YouTube" url="https://www.youtube.com/@ariaheras"/>
          <LinkButton text="Snapchat" url="https://www.snapchat.com/add/aaaarrheer?invite_id=dvnpQIH_&locale=es_ES&share_id=vo7QpYzKTASMYO1nMf6Gyw&sid=6a6db4fe5e0a40e5918ce4daaa23d719"/>
          <LinkButton text="El mejor contenido 🔞" url="https://onlyfans.com/sisooyyoo"/>

        </div>
        <div className="social-media">
          <a href="https://x.com/ariaheras?lang=es&mx=2">
            <img src="assets/x.jpg" alt="X" />
          </a>
          <a href="https://www.instagram.com/ariaheraas/">
            <img src="assets/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@ariaheras?lang=es">
            <img src="assets/tiktok.jpg" alt="TikTok" />
          </a>
          <a href="https://t.me/ariaheras">
            <img src="assets/telegram.jpg" alt="Telegram" />
          </a>
          <a href="https://www.youtube.com/@ariaheras">
            <img src="assets/youtube.jpg" alt="YouTube" />
          </a>
          <a href="https://www.snapchat.com/add/aaaarrheer?invite_id=dvnpQIH_&locale=es_ES&share_id=vo7QpYzKTASMYO1nMf6Gyw&sid=6a6db4fe5e0a40e5918ce4daaa23d719">
            <img src="assets/snapchat.jpg" alt="Snapchat" />
          </a>
          <a href="https://onlyfans.com/sisooyyoo">
            <img src="assets/only.png" alt="Only" />
          </a>
        </div>
      </div>
    </div>
  );
}

function LinkButton({ text, url }) {
  return (
    <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default App;