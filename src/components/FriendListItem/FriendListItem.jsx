import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={styles.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p
        className={clsx(
          styles.status,
          isOnline ? styles.online : styles.offline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
