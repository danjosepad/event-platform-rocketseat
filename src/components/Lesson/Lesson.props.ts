import { Lesson } from "../../models";

export type LessonProps = Lesson & {
  isLessonAvailable: boolean
}