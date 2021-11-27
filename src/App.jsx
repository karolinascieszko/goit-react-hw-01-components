import "./App.css";
import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";

import Statistics from "./components/statistics/Statistics";
import data from "./components/statistics/data.json";

import FriendList from "./components/friendlist/FriendList";
import friends from "./components/friendlist/friends.json"

import TransactionHistory from "./components/transactions/TransactionHistory";
import transactions from "./components/transactions/transactions.json"


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
      </header>
    </div>
  );
}

export default App;

