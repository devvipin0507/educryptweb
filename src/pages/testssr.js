import React from 'react';

// This will be our SSR function. It runs on every request.
export async function getServerSideProps() {
  // Simulate fetching data. You can replace this with an API call.
  const coursesData = [
    { id: 1, name: 'Course 1', description: 'Description for course 1' },
    { id: 2, name: 'Course 2', description: 'Description for course 2' },
    { id: 3, name: 'Course 3', description: 'Description for course 3' },
  ];

  // You can add additional logic like fetching from a real API, or checking request context (cookies, etc.)
  // For example, you might want to return user-specific data depending on the session or request context.

  return {
    props: {
      courses: coursesData, // Pass the fetched data as props
    },
  };
}

const Testssr = ({ courses }) => {
  return (
    <div>
      <h1>Our Courses</h1>
      <div>
        {courses.length === 0 ? (
          <p>No courses available at the moment.</p>
        ) : (
          courses.map((course) => (
            <div key={course.id} style={{ marginBottom: '20px' }}>
              <h2>{course.name}</h2>
              <p>{course.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Testssr;
