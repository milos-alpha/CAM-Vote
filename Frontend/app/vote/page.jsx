import Header from "@/components/Header"
import Authentication from "@/components/VoteModal"

export default function LoginPage() {
  return (
    <><Header /><div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <p className="text-4xl text-center m-8 text-gray-700">
        Inorder to place a vote, you must be <br/> <span className="font-bold text-primary">Authenticated</span> first!
      </p>
      <div className="max-w-md w-full space-y-8 border border-primary p-4 rounded-2xl">
        <div className="">
          <h2 className="mt-6 text-center text-3xl text-primary font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Authentication />
      </div>
    </div></>
  )
}