import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

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

      <h2>Task 3</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
