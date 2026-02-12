const users = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    address: { country: "United States" },
    image: "https://i.pravatar.cc/150?img=1",
    messages: [
      { author: "Emily", text: "Hello there", time: "09:12" },
      { author: "me", text: "Hi Emily", time: "09:13" }
    ]
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Williams",
    address: { country: "Germany" },
    image: "https://i.pravatar.cc/150?img=2",
    messages: [
      { author: "Michael", text: "Server deployed", time: "10:01" },
      { author: "me", text: "Ok, checking", time: "10:05" }
    ]
  },
  {
    id: 3,
    firstName: "Sophia",
    lastName: "Brown",
    address: { country: "Japan" },
    image: "https://i.pravatar.cc/150?img=3",
    messages: [
      { author: "Sophia", text: "Draft ready", time: "11:22" },
      { author: "me", text: "Send it", time: "11:30" }
    ]
  },
  {
    id: 4,
    firstName: "Liam",
    lastName: "Miller",
    address: { country: "Canada" },
    image: "https://i.pravatar.cc/150?img=4",
    messages: [
      { author: "Liam", text: "Build completed", time: "12:10" },
      { author: "me", text: "Great", time: "12:11" }
    ]
  },
  {
    id: 5,
    firstName: "Olivia",
    lastName: "Davis",
    address: { country: "United Kingdom" },
    image: "https://i.pravatar.cc/150?img=5",
    messages: [
      { author: "Olivia", text: "Design uploaded", time: "13:45" },
      { author: "me", text: "Reviewing", time: "13:50" }
    ]
  },
  {
    id: 6,
    firstName: "Noah",
    lastName: "Garcia",
    address: { country: "Mexico" },
    image: "https://i.pravatar.cc/150?img=6",
    messages: [
      { author: "Noah", text: "Database seeded", time: "14:03" },
      { author: "me", text: "Thanks", time: "14:04" }
    ]
  },
  {
    id: 7,
    firstName: "Ava",
    lastName: "Martinez",
    address: { country: "Spain" },
    image: "https://i.pravatar.cc/150?img=7",
    messages: [
      { author: "Ava", text: "Testing UI", time: "15:20" },
      { author: "me", text: "Any issues?", time: "15:22" }
    ]
  },
  {
    id: 8,
    firstName: "Elijah",
    lastName: "Rodriguez",
    address: { country: "Argentina" },
    image: "https://i.pravatar.cc/150?img=8",
    messages: [
      { author: "Elijah", text: "Client contacted", time: "16:18" },
      { author: "me", text: "Waiting response", time: "16:25" }
    ]
  },
  {
    id: 9,
    firstName: "Isabella",
    lastName: "Hernandez",
    address: { country: "Chile" },
    image: "https://i.pravatar.cc/150?img=9",
    messages: [
      { author: "Isabella", text: "Report sent", time: "17:02" },
      { author: "me", text: "Received", time: "17:05" }
    ]
  },
  {
    id: 10,
    firstName: "James",
    lastName: "Lopez",
    address: { country: "Brazil" },
    image: "https://i.pravatar.cc/150?img=10",
    messages: [
      { author: "James", text: "Meeting confirmed", time: "18:40" },
      { author: "me", text: "See you then", time: "18:41" }
    ]
  }
];



export { users }