
import { posts } from '../../../posts'

export default function handle(req, res) {
    let id = req.query.id;


    let post = posts.find(p => p.id == id)
    if (post) {

        res.status(200).json(posts)
    } else {
        res.status(200).json({ err: 'ther is no post' })

    }

}