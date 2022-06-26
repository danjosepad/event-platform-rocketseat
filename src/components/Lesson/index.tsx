import { CheckCircle, Lock } from 'phosphor-react'

import { LessonProps } from './Lesson.props'

export const Lesson: React.FC<LessonProps> = ({ title, slug, availableAt, type }) => {
  const isLessonAvailable = false

  return (
    <a href="#">
      <span className="text-gray-300">
        {availableAt.toString()}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
            {isLessonAvailable ? (
              <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Em breve
              </span>
            )}
          </span>
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </div>

        <strong className="text-gray-200 mt-5 block">
          {title}
        </strong>
      </div>
    </a>
  )
}