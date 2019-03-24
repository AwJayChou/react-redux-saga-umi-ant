
import styles from './index.css';
import Link from 'umi/link'
import router from 'umi/router'
export default function() {
  const users = [
                 {id:1,name:'Tom'},
                 {id:2,name:'JERRY'},
                 {id:3,name:'kity'},
                 {id:4,name:'BEN'},
                ]
  return (
    <div className={styles.normal}>
      <h1>Page userlist</h1>
      <ul>
        {/* {users.map(user => <li key={user.id}>
         <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>)} */}
         {users.map(user => <li key={user.id}  onClick={() => router.push(`/users/${user.id}`)}>{user.name}</li>)}
      </ul>
    </div>
  );
}
