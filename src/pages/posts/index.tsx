import Head from 'next/head';
import styles from './styles.module.scss';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>16 de abril de 2023</time>
                        <strong>Titulo do post</strong>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Repudiandae soluta voluptatibus enim explicabo reiciendis earum cupiditate 
                            ipsam quidem atque similique excepturi dolores, nesciunt ad quam eos blanditiis provident, 
                            fugiat dolore.
                        </p>
                    </a>
                    <a href="#">
                        <time>16 de abril de 2023</time>
                        <strong>Titulo do post</strong>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Repudiandae soluta voluptatibus enim explicabo reiciendis earum cupiditate 
                            ipsam quidem atque similique excepturi dolores, nesciunt ad quam eos blanditiis provident, 
                            fugiat dolore.
                        </p>
                    </a>
                    <a href="#">
                        <time>16 de abril de 2023</time>
                        <strong>Titulo do post</strong>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Repudiandae soluta voluptatibus enim explicabo reiciendis earum cupiditate 
                            ipsam quidem atque similique excepturi dolores, nesciunt ad quam eos blanditiis provident, 
                            fugiat dolore.
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query(
        [
            Prismic.predicates.at('document.type', 'post')
        ],
        {
           fetch: ['post.title', 'post.content'],
           pageSize: 100, 
        }
    );

    console.log(JSON.stringify(response, null, 2));

    return {
        props: {

        }
    }
} 