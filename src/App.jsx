import './App.css'
import icon from './assets/icon.png'

const users = [
  {
    image: icon,
    name: "Mickey Mouse",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Minnie Mouse",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Donald Duck",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Daisy Duck",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Goofy",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Pluto",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Scrooge McDuck",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Huey Duck",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Dewey Duck",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Louie Duck",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Chip",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Dale",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Chip",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Dale",
    email: "fakeEmail@email.com",
  },

  {
    image: icon,
    name: "Chip",
    email: "fakeEmail@email.com",
  },

];

function UserCard({ image, name, email }) {
  return (
    <div>
      <img src={image} alt={name} width={80} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );

}

function App() {
  return (
    <div className='user-cards'>
      {users.map((user, index) => (
        <UserCard
          key={index}
          image={user.image}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default App;

