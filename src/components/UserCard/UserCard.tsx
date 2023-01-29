import { UserStat } from "components/UserStat";
import styles from "./UserCard.module.scss";
import { LocalGitHubUser } from "types";

interface UserCardProps extends LocalGitHubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
