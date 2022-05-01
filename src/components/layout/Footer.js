import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Author</h2>
        <p className="mt-5">
            <a target="_blank" href="https://pavel.yarmak.me/">Pavel Yarmak</a>
</p>
      </div>
      <div className="flex-3 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a target="_blank" href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a target="_blank" href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a target="_blank" href="https://github.com/firenet-designs">FireNet Designs</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/firenet-designs">GitHub</a>
          </li>
        </ul>
      </div> */}
    </div>
  </footer>
);

export default Footer;
