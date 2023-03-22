import Link from 'next/link'
//here three way to fetch data in next (get StaticProps/getServerSideProps/)

//using getStaticProps
export default function Posts(props) {
    return (
        <div >
            {props.posts.map(post => (
                <div>
                    <Link href={`/posts/${post.id}`} key={post.id}>
                        {post.title}
                    </Link>

                </div>
            ))}
            hi posts
        </div>
    )
}
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }

}