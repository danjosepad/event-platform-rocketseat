import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./service/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
    id
    slug
    title
    teacher {
      id
      name
      bio
      avatarURL
    }
    lessonType
    description
    }
  }
`

interface Lesson {
  id: string
  title: string
}

function App() {
  const { data, loading } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <ul className="text-2xl">
      {data?.lessons.map((lesson: Lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
