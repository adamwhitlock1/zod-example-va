import "./App.css";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  isAdmin: z.boolean(),
});

type User = z.infer<typeof UserSchema>;

const adam: User = {
  name: "Adam",
  age: 37,
  isAdmin: true,
};

function App() {
  const userParsed = UserSchema.safeParse(adam);

  const userInvalid = UserSchema.safeParse({ ...adam, ...{ age: "fifty" } });

  return (
    <div className="App">
      <h1>Zod Demo</h1>
      <div className="card">
        <h3>User Result</h3>
        <pre>{JSON.stringify(userParsed, null, 2)}</pre>

        <h3>User Invalid Result</h3>
        <pre>{JSON.stringify(userInvalid, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
