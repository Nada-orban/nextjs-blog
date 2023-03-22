//dynamic page in posts any name for this page

// secound way of fetch data of product


export default function id(props) {
    return (
        <div >
            <p>{props.post.title}</p>
            <p>{props.post.body}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }

}