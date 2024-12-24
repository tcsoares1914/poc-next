export default function Menu() {
  return (
    <>
      <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden">
        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <hr />
          <li className="items-center">
            <a
              className="text-gray-700 hover:text-green-600 active:text-pink-600 text-xs uppercase py-3 font-bold block"
              href="/dashboard/site/about"
            >
              <i className="fa fa-font opacity-75 mr-2 text-sm"></i>
              about
            </a>
          </li>
          <li className="items-center">
            <a
              className="text-gray-700 hover:text-green-600 active:text-pink-600 text-xs uppercase py-3 font-bold block"
              href="/dashboard/site/certifications"
            >
              <i className="fa fa-certificate opacity-75 mr-2 text-sm"></i>
              certifications
            </a>
          </li>
          <li className="items-center">
            <a
              className="text-gray-700 hover:text-green-600 active:text-pink-600 text-xs uppercase py-3 font-bold block"
              href="/dashboard/site/services"
            >
              <i className="fa fa-code opacity-75 mr-2 text-sm"></i>
              services
            </a>
          </li>
          <li className="items-center">
            <a
              className="text-gray-700 hover:text-green-600 active:text-pink-600 text-xs uppercase py-3 font-bold block"
              href="/dashboard/site/contact"
            >
              <i className="fa fa-globe opacity-75 mr-2 text-sm"></i>
              contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
