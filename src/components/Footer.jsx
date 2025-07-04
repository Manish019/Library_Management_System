import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  
    <>
<footer class="bg-black rounded-lg shadow-sm m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center dark:text-white">© 2025. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="https://github.com/Manish019/Library_Management_System" class="hover:underline me-4 md:me-6">Git</Link>
        </li>
        <li>
            <Link to="/addbook" class="hover:underline me-4 md:me-6">Add Book</Link>
        </li>
      
        <li>
            <Link to="/" class="hover:underline">Home</Link>
        </li>
    </ul>
    </div>
</footer>

    </>
  )
}

export default Footer