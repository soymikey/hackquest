export function getAllCourse() {
  const courseList = [
    {
      id: 1,
      type: "syntax",
      title: "Introduction to programming",
      tags: [{ value: "Beginner", id: 1 }],
      description:
        "This course covers the most basic concepts in programming using Solidity as an example.",
      hours: 36,
      courses: 5,
      complete: "45",
    },
    {
      id: 2,
      type: "hackathon",
      title: "Moonshot 2023 Summer Hackathon",
      tags: [
        { value: "All Tracks", id: 1 },
        { value: "Solidity", id: 2 },
        { value: "ZK", id: 3 },
      ],
      activities: [
        { title: "Signup", details: "4/15 - 6/15", id: 1 },
        { title: "Event", details: "6/15 - 7/15", id: 2 },
        { title: "Grant size", details: "200K", id: 3 },
      ],
    },
    {
      id: 3,
      type: "conceptTracks",
      title: "Web 3.0 Programming Basics",
      tags: [{ value: "Beginner", id: 1 }],
      description:
        "Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.",
      hours: 36,
      courses: 5,
    },
    {
      id: 4,
      type: "conceptLearning",
      title: "What is Bitcoin",
      hours: 36,
    },
  ];
  return courseList;
}
