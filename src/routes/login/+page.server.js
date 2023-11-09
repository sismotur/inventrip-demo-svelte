/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  // const user = await db.getUserFromSession(cookies.get("sessionid"));
  const sessionid = cookies.get('sessionid')
  console.log(`session: ${sessionid}`)
  const user = { name: "fsanti", id: 73 }
  return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    console.log(`email: ${email}, password: ${password}`);
    // const user = await db.getUser(email);
    const user = 73;
    // cookies.set("sessionid", await db.createSession(user));
    cookies.set("sessionid", 123);

    return { success: true };
  },
  register: async (event) => {
    // TODO register the user
  },
};
