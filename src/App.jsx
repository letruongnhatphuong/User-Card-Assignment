import './App.css'

const users = [
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
  },
  {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
  },
  {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
  }
];

function UserCard({ image, name, email }) {
  return (
    <div className='user-card'>
      <img src={image} alt={name} width={80} />

      <div className='user-info'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );

}

function App() {
  return (
    <div className='user-cards'>
      {users.map((user) => (
        <UserCard
          key={user.id}
          image={user.avatar}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default App;
