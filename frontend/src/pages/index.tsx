import api from '../services/api';

api.all().then((data) => {
  console.log(data);
});

export default function Home() {
  return (
    <>
      <h1>Wilbur</h1>
    </>
  )
}
