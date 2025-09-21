import Profile from "./Profile";
import './App.css';


function App() {
  const users = [
    {
      id: 1,
      name: "John Smith",
      role: "Frontend Developer",
      avatarUrl: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F2244af71ad0c25f2cb0a8efa167491fb.png&w=400&q=75"
    },
    {
      id: 2,
      name: "Michael Johnson",
      role: "Backend Developer",
      avatarUrl: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F9d119d757ff7d7b36b9d71b86d973fbe.png&w=400&q=75"
    },
    {
      id: 3,
      name: "David Williams",
      role: "UI/UX Designer",
      avatarUrl: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F8654c911c90383bb42a6cdddd66014c5.png&w=400&q=75"
    },
    {
      id: 4,
      name: "James Brown",
      role: "Project Manager",
      avatarUrl: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fbaa928fef9b0f2e838263dd88eefc707.png&w=400&q=75"
    },
    {
      id: 5,
      name: "Robert Miller",
      role: "QA Engineer",
      avatarUrl: "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fd36865e08723cc1b764e084873e53662.png&w=400&q=75"
    },
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      <div className="profiles-container">
        {users.map(user => (
          <Profile
            key={user.id}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
