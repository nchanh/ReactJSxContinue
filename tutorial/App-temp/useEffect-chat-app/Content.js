import { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: 'lesson 1'
  },
  {
    id: 2,
    name: 'lesson 2'
  },
  {
    id: 3,
    name: 'lesson 3'
  }
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    }
    
    window.addEventListener(`lesson-${lessonId}`, handleComment);
  
    return () => window.removeEventListener(`lesson-${lessonId}`, handleComment);
  }, [lessonId])

  return (
    <div style={{ padding: 20 }}>
      <div>
        {lessons.map((lesson, i) => (
          <li
            key={i}
            onClick={() => setLessonId(lesson.id)}
            style={{
              color: lesson.id === lessonId ? '#f54' : '#000'
            }}
          >
            {lesson.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Content;
