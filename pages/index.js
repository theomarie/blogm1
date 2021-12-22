import Head from 'next/head'
import Image from '../components/Image/Image';
import styles from '../styles/Home.module.css'
import { getAllPosts  } from '../lib/post';

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className={styles.container}>
      <head>
        <title>Blog M1 dev</title>
        </head>
      <div>
        <h1>Hello Next.js</h1>
      </div>
      <div>

      </div>
      <div>
      {posts.map((p) => (
        <BlogPostPreview key={p.id} data={p} />
      ))}
      </div> 
    </div>
  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
      <div style={{maxwidth: "400px"}}>
     <h2>{data.title}</h2>
    <Image src={data.coverImage} alt={data.title} />
    <div>{data.publishDate}</div>
    <p>{data.excerpt}</p>
    <div style={{fontWeight: "bold"}}>{data.author}</div>
  </div>
  )
};