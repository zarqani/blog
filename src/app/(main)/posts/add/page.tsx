/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import PostForm from "@/components/PostForm";

export default function AddPage() {
  return <PostForm />;
}
