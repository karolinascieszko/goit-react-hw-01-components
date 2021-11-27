import styles from "./FriendList.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      {isOnline === true ? (
        <span className={styles.status}>{isOnline}</span>
      ) : (
        <span className={styles.statusOffline}>{isOnline} </span>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;