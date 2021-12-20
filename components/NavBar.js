import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
import { useSignOut, useUser } from "../hook/user";
// import { fetchJson } from "../lib/api";

function NavBar() {
  const user = useUser();
  const signOut = useSignOut();
  // const query = useQuery("user", async () => {
  //   try {
  //     return await fetchJson("/api/user");
  //   } catch (err) {
  //     return undefined;
  //   }
  // },{
  //   cacheTime:Infinity,
  //   staleTime:30_000, //ms
  // });

  // const user = query.data;

  // const [user, setUser] = useState();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const user = await fetchJson("/api/user");
  //       setUser(user);
  //     } catch (err) {
  //       // not siged in
  //     }
  //   })();
  //   fetchJson("/api/user");
  // }, []);

  // const handleSignOut = async () => {
  //   signOut();
  //   // await fetchJson("/api/logout");
  //  //FIXME  setUser(undefined);
  // };

  console.log("[NavBar] user:", user);
  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">
            <a>Next Shop</a>
          </Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>
              <Link href="/cart">
                <a>Cart</a>
              </Link>
            </li>
            <li>{user.name}</li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">
              <a>Sign In</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
