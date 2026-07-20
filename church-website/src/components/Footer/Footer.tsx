const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] py-14 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-8 md:grid-cols-3">

        <div>

          <h2 className="mb-4 text-3xl font-bold text-yellow-400">

            Rhema Church

          </h2>

          <p>

            Raising Men and Women through the Word of God,
            Worship and Kingdom Service.

          </p>

        </div>

        <div>

          <h3 className="mb-4 text-xl font-semibold">

            Service Times

          </h3>

          <p>Sunday Worship - 8:00 AM</p>

          <p>Bible Study - Tuesday 6:00 PM</p>

          <p>Prayer Meeting - Friday 5:00 PM</p>

        </div>

        <div>

          <h3 className="mb-4 text-xl font-semibold">

            Contact

          </h3>

          <p>Email: info@rhemachurch.org</p>

          <p>Phone: +234 800 000 0000</p>

          <p>Lagos, Nigeria</p>

        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">

        © 2026 Rhema Church. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;