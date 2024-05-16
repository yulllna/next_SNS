import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from 'next/navigation';
import Signin from "@/components/Signin"

type Props = {
  searchParams: {
    callbackUrl: string
  }
}
  
export default async function SignIn({searchParams: { callbackUrl }}: Props) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/")
  }

  const providers = (await getProviders()) ?? {};

  return (
    <>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </>
  )
}