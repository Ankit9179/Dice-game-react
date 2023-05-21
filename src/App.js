import { useState } from "react";

import PlayGame from "./components/PlayGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [play, setPlay] = useState(false);

  const changeTogal = () => {
    setPlay((pre) => !pre);
  };

  return <>{play ? <GamePlay /> : <PlayGame startGame={changeTogal} />}</>;
}

export default App;
