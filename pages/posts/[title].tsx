import {useRouter} from "next/router";
import {Article} from "@components/Article";

export default function Post() {
  const router = useRouter();
  console.log(router.query)
  const { title } = router.query

  return (
    <Article>
      <h1>Post title: {title}</h1>
      <p>Lorem ipsum</p>
    </Article>
  )
}
