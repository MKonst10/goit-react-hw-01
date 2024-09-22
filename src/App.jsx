import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./userData.json";
import friends from "./friends.json";

function App() {
  return (
    <div className="mainContent">
      <h2>Task 1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <h2>Task 2</h2>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
