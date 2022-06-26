import { useQuery } from "@apollo/client"
import { CircleNotch } from "phosphor-react"

import { Lesson } from "../Lesson"
import { GetLessonsQuery } from "./Sidebar.props"
import { GET_LESSONS_QUERY } from "./Sidebar.queries"

export const Sidebar = () => {
  const { data, loading } = useQuery<GetLessonsQuery>(GET_LESSONS_QUERY)

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
     {loading ? (
      <div className="flex items-center justify-center w-full mt-10">
        <CircleNotch size={64} className="animate-spin" />
      </div> 
     ) : (
      <>
        <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
          Cronograma das aulas
        </span>

        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => (
            <Lesson 
              key={lesson.id} 
              id={lesson.id} 
              title={lesson.title} 
              slug={lesson.slug} 
              availableAt={lesson.availableAt} 
              type={lesson.type} 
            />
          ))}
          
        </div>
      </>
     )}
    </aside>
  )
}