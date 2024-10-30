import { signIn, auth } from '@/auth';

export default async function SignInButton() {
    const session = await auth();

    return session?.user ? (
        <div>{session.user.name}</div>
    ) : (
        <form
            action={async () => {
                'use server';
                await signIn();
            }}
        >
            <button
                type="submit"
                className="flex px-4 space-x-3 py-1 rounded-xl bg-zinc-600 ring-4 ring-zinc-800 hover:bg-green-700 hover:ring-green-600"
            >
                Sign In
            </button>
        </form>
    );
}
