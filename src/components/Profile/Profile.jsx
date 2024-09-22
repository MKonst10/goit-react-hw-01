import styles from "./Profile.module.css";

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.profileMain}>
        <img
          src={image}
          alt="User avatar"
          width={120}
          height={120}
          className={styles.avatar}
        />
        <p className={styles.name}>
          <b>{name}</b>
        </p>
        <p className={styles.profileInfo}>@{tag}</p>
        <p className={styles.profileInfo}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.listItem}>
          <span>Followers</span>
          <span>
            <b>{stats.followers}</b>
          </span>
        </li>
        <li className={styles.listItem}>
          <span>Views</span>
          <span>
            <b>{stats.views}</b>
          </span>
        </li>
        <li className={styles.listItem}>
          <span>Likes</span>
          <span>
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
