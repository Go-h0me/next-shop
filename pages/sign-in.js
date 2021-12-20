import { useRouter } from "next/router";
import { useState } from "react";
// import { QueryClient, useMutation, useQueryClient } from "react-query";
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import Page from "../components/Page";
import { useSignIn } from "../hook/user";
// import { fetchJson } from "../lib/api";

export function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInError, signInLoading } = useSignIn();

  // const queryClient = useQueryClient();
  // const [status, setStatus] = useState({ loading: false, error: false });
  // const mutation = useMutation(({ email, password }) =>
  //   fetchJson("/api/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   })
  // );

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setStatus({ loading: true, error: false });
    // try {
    // console.log("SMS_URL:", process.env.CMS_URL);
    // const response = await fetchJson("/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    // setStatus({ loading: false, error: false });

    const valid = await signIn(email, password);
    if (valid) {
      // console.log("signed in:", user);
      router.push("/");
    }
    // } catch (err) {
    // setStatus({ loading: false, error: true });
    //Totdo
    // }
  };

  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field label="Password">
          <Input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Field>
        {signInError && <p className="text-red-700">Invalid credentials</p>}

        {signInLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
      </form>
    </Page>
  );
}

export default SignInPage;
