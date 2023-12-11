export default function MessageCard() {
  return (
    <>
      <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
        <p className="font-bold text-black text-md dark:text-white">Messages</p>
        <ul>
          <li className="flex items-center my-6 space-x-2">
            <a href="#" className="relative block">
              <img alt="profil" src="/user.png" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </a>
            <div className="flex flex-col">
              <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Charlie Rabiller</span>
              <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                Hey John ! Do you read the NextJS doc ?
              </span>
            </div>
          </li>
          <li className="flex items-center my-6 space-x-2">
            <a href="#" className="relative block">
              <img alt="profil" src="/user.png" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </a>
            <div className="flex flex-col">
              <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Marie Lou</span>
              <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">No I think the dog is better...</span>
            </div>
          </li>
          <li className="flex items-center my-6 space-x-2">
            <a href="#" className="relative block">
              <img alt="profil" src="/user.png" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </a>
            <div className="flex flex-col">
              <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Ivan Buck</span>
              <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                Seriously ? haha Bob is not a child !
              </span>
            </div>
          </li>
          <li className="flex items-center my-6 space-x-2">
            <a href="#" className="relative block">
              <img alt="profil" src="/user.png" className="mx-auto object-cover rounded-full h-10 w-10 " />
            </a>
            <div className="flex flex-col">
              <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Marina Farga</span>
              <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">Do you need that design ?</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
