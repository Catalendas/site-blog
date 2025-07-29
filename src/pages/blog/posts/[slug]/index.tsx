import { useRouter } from "next/router"

export default function Posts() {

    const router = useRouter()

    return (
        <div>
            <h2>Posts</h2>
            <div>
                {router.query.slug}
            </div>
        </div>
    )
}