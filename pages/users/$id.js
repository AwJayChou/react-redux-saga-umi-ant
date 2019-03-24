import styles from './$id.css';

export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page User</h1>
      <h1>{props.match.params.id}</h1>
    </div>
  )
}
