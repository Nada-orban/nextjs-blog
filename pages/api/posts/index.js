//how to fetch my data

import { posts } from '../../../posts'

export default function handle(req, res) {
    res.status(200).json(posts)
}