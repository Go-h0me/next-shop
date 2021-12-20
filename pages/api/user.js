import { fetchJson } from "../../lib/api";

const { CMS_URL } = process.env;

async function handleUser(req, res) {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }
  try{
  const user = await fetchJson(`${CMS_URL}/users/me`, {
    headers: { 'Authrization': `Bearer ${jwt}` },
  });

  res.status(200).json({
    id: user.id,
    name: user.username,
  });
}catch(err) {
    res.status(401).end();

}
  // console.log('cookiew:',req.cookie);
}
export default handleUser;
