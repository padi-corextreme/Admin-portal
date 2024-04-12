import React from 'react'

const Signup = () => {
  return (
   
  <body
    class="flex font-poppins items-center justify-center dark:bg-white-900 min-w-screen min-h-screen"
  >
    <div class="grid gap-8">
      <div
        id="back-div"
        class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "
      >
        <div
          class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-8 lg:p-4 md:p-8 sm:p-2 m-2"
        >
          <h1 class="pt-4 pb-6 font-bold text-3xl dark:text-gray-400 text-center cursor-default">
            Create an Account
          </h1>
          <form action="#" method="post" class="space-y-4">
            <div>
              <label for="first Name" class="mb-2 dark:text-gray-400 text-sm">First Name</label>
              <input
                id="name"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="First Name"
                placeholder="First Name"
                required
              />
            </div>

            <div>
              <label for="email" class="mb-2 dark:text-gray-400 text-sm">Surname</label>
              <input
                id="Name"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="Name"
                placeholder="Surname"
                required
              />
            </div>

            <div>
              <label for="email" class="mb-2 dark:text-gray-400 text-sm">Email</label>
              <input
                id="email"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label for="password" class="mb-2 dark:text-gray-400 text-sm">Password</label>
              <input
                id="password"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="password"
                placeholder="Password"
                required
              />
            </div>


            <div>
              <label for="password" class="mb-2 dark:text-gray-400 text-sm"> Confirm Password</label>
              <input
                id="password"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              class="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
          <div class="flex flex-col mt-4 items-center justify-center text-sm">
            <h3>
              <span class="cursor-default dark:text-gray-300">Have an account?</span>
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  class="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Sign In
                </span>
              </a>
            </h3>
          </div>

       
          <div
          id="third-party-auth"
          class="flex items-center justify-center mt-5 flex-wrap"
        >
          <button
            href="#"
            class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <img
              class="max-w-[25px]"
              src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
              alt="Google"
            />
          </button>
        
        
          <button
            href="#"
            class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <img
              class="max-w-[25px]"
              src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
              alt="Facebook"
            />
          </button>
          <button
            href="#"
            class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <img
              class="max-w-[25px] dark:gray-100"
              src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
              alt="twitter"
            />
          </button>

          <button
            href="#"
            class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <img
              class="max-w-[25px]"
              src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
              alt="apple"
            />
          </button>
        </div>
          <div
            class="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
          >
            <p class="cursor-default">
              By signing in, you agree to our
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Terms
                </span>
              </a>
              and
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>


  )
}

export default Signup
