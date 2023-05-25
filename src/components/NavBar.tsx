import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export function NavBar() {
  const user = useUser();





  return (
    
      <><nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
              <a href="h/" className="flex items-center">
                  {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PARK TA</span>
              </a>
              <div className="flex items-center">
                  <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                  <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                  <UserButton/>
              </div>
          </div>
      </nav><nav className="bg-gray-50 dark:bg-gray-700">
              <div className="max-w-screen-xl px-4 py-3 mx-auto">
                  <div className="flex items-center">
                      <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            {user.isSignedIn && (
              <>
                <li>
                  <Link
                    href="/"
                    className=" py-2 pl-1 pr-1 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                    aria-current="page"
                   
                  >
                    Parking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="py-2 pl-1 pr-1 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                    aria-current="page"
                   
                  >
                    About
                  </Link>
                </li>
              </>
            )}
            {!user.isSignedIn && (
              <li>
                <SignInButton>
                  <span className="cursor-pointer text-white hover:text-blue-500">
                    Sign In
                  </span>
                </SignInButton>
              </li>
            )}
                          <li>
                              <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav></>

    
  );
}
