import {
  AppStoreIcon,
  FacebookIcon,
  GooglePlayStoreIcon,
  InstagramIcon,
  TikTokIcon,
  XIcon,
} from "../../assets";

const Footer = () => {
  return (
    <footer className="py-16 bg-black">
      <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-[repeat(3,max-content),_24px] justify-between items-start gap-6 w-90 max-w-custom">
        <div className="text-white max-w-[262px] w-full">
          <p className="py-4 leading-[22.4px] text-2xl">Company</p>
          <div>
            <ul className="text-base leading-8 text-[#c9c9c9] flex flex-col gap-1">
              <li>About Us</li>
              <li>Team</li>
              <li>Sales Leadership</li>
              <li>Investors</li>
              <li>Join as an agent</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Offices</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </div>
        <div className="text-white">
          <p className="py-4 leading-[22.4px] text-2xl">Explore</p>
          <div>
            <ul className="text-base leading-8 text-[#c9c9c9] flex flex-col gap-1">
              <li>Concierge</li>
              <li>Private Enterprise</li>
              <li>Compass Coming Soon</li>
              <li>Compass Luxury</li>
              <li>Find an Agent</li>
              <li>Mortgage Calculator</li>
              <li>Compass Academy</li>
              <li>Compass Cares</li>
              <li>Diversity & Inclusion</li>
              <li>Blog</li>
              <li>Neighborhood Guides</li>
              <li>New Development</li>
              <li>Commercial</li>
              <li>Sports & Entertainment</li>
              <li>Military</li>
              <li>External Suppliers Site</li>
              <li>Market Research</li>
              <li>Recently Sold Homes</li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full item-start max-w-[594p]">
          <div className="text-white max-w-[562px] w-full flex flex-col gap-6">
            <p className="py-4 leading-[22.4px] text-2xl">Mobile Apps</p>
            <div className="flex flex-col gap-1 max-w-[120px] w-full">
              <AppStoreIcon />
              <GooglePlayStoreIcon />
            </div>
            <p className="hidden lg:flex text-sm leading-[18px] text-white">
              COMPASS, the Compass logo, and other various trademarks, logos,
              designs, and slogans are the registered and unregistered
              trademarks of Compass, Inc. dba Compass in the U.S. and/or other
              countries.
              <br />
              <br />
              Corporate Responsibility, Privacy &amp; Legal Notices: Compass is
              a licensed real estate broker. Compass is licensed to do business
              as: Compass in California, Colorado, Connecticut, Florida,
              Georgia, Hawaii, Illinois, Maryland, Massachusetts, Minnesota, New
              Jersey, New York, North Carolina, Rhode Island, Texas, Virginia,
              and Washington; Compass RE in Delaware, Idaho, Pennsylvania and
              Tennessee; Compass Real Estate in Washington, DC, Maine, New
              Hampshire, Vermont, and Wyoming; Compass Realty Group in Missouri
              and Kansas; Launch Powered by Compass in Arizona; and Compass
              Carolinas, LLC in South Carolina. California License # 01991628,
              1527235, 1527365, 1356742, 1443761, 1997075, 1935359, 1961027,
              1842987, 1869607, 1866771, 1527205, 1079009, 1272467. No
              guarantee, warranty or representation of any kind is made
              regarding the completeness or accuracy of descriptions or
              measurements (including square footage measurements and property
              condition), such should be independently verified, and Compass
              expressly disclaims any liability in connection therewith. No
              financial or legal advice provided. Equal Housing Opportunity. ©
              Compass 2024.
            </p>
          </div>
          <div className="lg:flex hidden flex-col gap-6 max-w-[180px]">
            <div className="pt-4 lg:hidden flex gap-4 max-w-[180px] w-full ">
              <InstagramIcon />
              <FacebookIcon />
              <XIcon />
              <TikTokIcon />
            </div>
          </div>
        </div>
        <div className="hidden pt-4 lg:flex flex-col gap-2 max-w-[24px] w-full  justify-between">
          <InstagramIcon />
          <FacebookIcon />
          <XIcon />
          <TikTokIcon />
        </div>
        <div className="lg:hidden flex flex-col gap-6">
          <div className="pt-4 flex gap-4 max-w-[180px] w-full">
            <InstagramIcon />
            <FacebookIcon />
            <XIcon />
            <TikTokIcon />
          </div>
          <p className="text-sm leading-[18px] text-white max-w-[606px] w-full">
            COMPASS, the Compass logo, and other various trademarks, logos,
            designs, and slogans are the registered and unregistered trademarks
            of Compass, Inc. dba Compass in the U.S. and/or other countries.
            <br />
            <br />
            Corporate Responsibility, Privacy &amp; Legal Notices: Compass is a
            licensed real estate broker. Compass is licensed to do business as:
            Compass in California, Colorado, Connecticut, Florida, Georgia,
            Hawaii, Illinois, Maryland, Massachusetts, Minnesota, New Jersey,
            New York, North Carolina, Rhode Island, Texas, Virginia, and
            Washington; Compass RE in Delaware, Idaho, Pennsylvania and
            Tennessee; Compass Real Estate in Washington, DC, Maine, New
            Hampshire, Vermont, and Wyoming; Compass Realty Group in Missouri
            and Kansas; Launch Powered by Compass in Arizona; and Compass
            Carolinas, LLC in South Carolina. California License # 01991628,
            1527235, 1527365, 1356742, 1443761, 1997075, 1935359, 1961027,
            1842987, 1869607, 1866771, 1527205, 1079009, 1272467. No guarantee,
            warranty or representation of any kind is made regarding the
            completeness or accuracy of descriptions or measurements (including
            square footage measurements and property condition), such should be
            independently verified, and Compass expressly disclaims any
            liability in connection therewith. No financial or legal advice
            provided. Equal Housing Opportunity. © Compass 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
