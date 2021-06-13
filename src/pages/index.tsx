import { GetStaticProps } from 'next';
import { FiUser } from 'react-icons/fi';
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  return (
    <>
      <main className={styles.mainContainer}>
        <Header />
        <div className={styles.postBoard}>
          <h1>Como utilizar Hooks</h1>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.postInfo}>
            <div className={styles.postData}>
              <FiUser />
              <p>15 Mar 2021</p>
            </div>
            <div className={styles.postAutor}>
              <FiUser />
              <p>Joseph Oliveira</p>
            </div>
          </div>
        </div>
        <div className={styles.postBoard}>
          <h1>Como utilizar Hooks</h1>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.postInfo}>
            <div className={styles.postData}>
              <FiUser />
              <p>15 Mar 2021</p>
            </div>
            <div className={styles.postAutor}>
              <FiUser />
              <p>Joseph Oliveira</p>
            </div>
          </div>
        </div>
        <div className={styles.postBoard}>
          <h1>Como utilizar Hooks</h1>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.postInfo}>
            <div className={styles.postData}>
              <FiUser />
              <p>15 Mar 2021</p>
            </div>
            <div className={styles.postAutor}>
              <FiUser />
              <p>Joseph Oliveira</p>
            </div>
          </div>
        </div>
        <div className={styles.postBoard}>
          <h1>Como utilizar Hooks</h1>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.postInfo}>
            <div className={styles.postData}>
              <FiUser />
              <p>15 Mar 2021</p>
            </div>
            <div className={styles.postAutor}>
              <FiUser />
              <p>Joseph Oliveira</p>
            </div>
          </div>
        </div>
        <div className={styles.postBoard}>
          <h1>Como utilizar Hooks</h1>
          <h2>Pensando em sincronização em vez de ciclos de vida.</h2>
          <div className={styles.postInfo}>
            <div className={styles.postData}>
              <FiUser />
              <p>15 Mar 2021</p>
            </div>
            <div className={styles.postAutor}>
              <FiUser />
              <p>Joseph Oliveira</p>
            </div>
          </div>
        </div>
        <button className={styles.loadPosts} type="button">
          Carregar mais posts
        </button>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
