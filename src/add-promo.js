import React from 'react'

export default function AddPromo() {
  return (
    <section id='addnewpromo'>
        
    <div class="max-w-xl  mx-auto mt-16 flex w-full flex-col border rounded-[26px] m-4 bg-white p-8">
    <div class="text-center p-10">
    <h1 class="font-semibold text-4xl mb-4">Add New Promotion</h1>
    <h1 class="text-3xl"></h1>
</div>
 
 <div class="mb-4">
     <label for="email" class="text-sm leading-7 text-gray-600">Title</label>
     <input type="email" id="email" name="email" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
 </div>
 <div class="mb-4">
     <label for="message" class="text-sm leading-7 text-gray-600">Description</label>
     <textarea id="message" name="message" class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
 </div>
 <div class="w-[150px] text-gray-900 dark:text-gray-100">
	<div class="relative w-full group">
		<label class="text-xs text-gray-400">Select Category</label><button class="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold">All</button>
		<div
			class="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
			<div
				class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
				Food</div>
			<div
				class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
				Clothing
			</div>
			
			
		</div>
	
</div>
</div>
 <div class="flex items-center justify-center">

 <div class="mx-auto w-full max-w-[550px] bg-white">
     <form class="py-4 px-9">

         <div class="mb-6 pt-4">
             <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                 Upload Image
             </label>

             <div class="mb-8">
                 <input type="file" name="file" id="file" class="sr-only" />
                 <label for="file"
                     class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                     <div>
                         <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                             Drop files here
                         </span>
                         <span class="mb-2 block text-base font-medium text-[#6B7280]">
                             Or
                         </span>
                         <span
                             class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                             Browse
                         </span>
                     </div>
                 </label>
             </div>

             <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                 <div class="flex items-center justify-between">
                     <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                         banner-design.png
                     </span>
                     <button class="text-[#07074D]">
                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                 fill="currentColor" />
                             <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                 fill="currentColor" />
                         </svg>
                     </button>
                 </div>
             </div>

             <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
                 <div class="flex items-center justify-between">
                     <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                         Assignment 1.pdf
                     </span>
                     <button class="text-[#07074D]">
                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                 fill="currentColor" />
                             <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                 fill="currentColor" />
                         </svg>
                     </button>
                 </div>
                 <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                     <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"></div>
                 </div>
             </div>
         </div>

         <div>
             <button
                 class="hover:shadow-form w-full rounded-md bg-blue-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                 Add New Promotion
             </button>
         </div>
     </form>
 </div>
</div>

</div>
 
 </section>
  )
}
