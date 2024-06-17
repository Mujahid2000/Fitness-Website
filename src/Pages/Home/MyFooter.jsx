

const MyFooter = () => {
    return (
       
<footer className="bg-black text-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>
  <div className="mx-auto max-w-full px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="space-y-8">
        <img className="h-10" src="https://i.ibb.co/pPQVxSw/Screenshot-2024-06-16-214828-removebg-preview.png" alt="Company name"/>
        <p className="text-sm leading-6 text-white">Highlight benefits of each exercise, both physical and mental</p>
        <div className="flex space-x-6">
        <a href="https://www.facebook.com" className="hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com" className="hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://www.twitter.com" className="hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="https://www.github.com" className="hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com" className="hover:text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" alt="YouTube" className="h-6 w-6" />
            </a>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Marketing</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Analytics</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Commerce</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Insights</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Pricing</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Documentation</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Guides</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">API Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">About</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Blog</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Jobs</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Press</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Partners</a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Claim</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Privacy</a>
              </li>
              <li>
                <a  className="text-sm cursor-pointer leading-6 text-white hover:text-white">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 border-t border-white pt-8 sm:mt-20 lg:mt-24">
      <p className="text-sm leading-5 text-white">&copy; 2024 Gym Center, Inc. All rights reserved.</p>
    </div>
  </div>
</footer>
    );
};

export default MyFooter;