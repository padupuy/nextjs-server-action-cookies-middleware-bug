import styles from "./page.module.css";
import { setNyanCatCookie } from "./action";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <form action={setNyanCatCookie}>
          <button type="submit" onClick={setNyanCatCookie}>
            go to nyancat page with the nyancat cookie
          </button>
        </form>
      </div>
    </main>
  );
}
