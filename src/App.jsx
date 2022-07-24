import { Footer } from "./components/Footer";
import { List } from "./components/List";
import styles from "./App.module.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className={styles.div}>
      <Header className={styles.header} />
      <List />
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
