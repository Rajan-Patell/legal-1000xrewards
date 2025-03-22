
import React from "react";

export const LegalContent: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto h-[calc(100vh-72px)] px-60 py-40 max-md:pt-[100px] max-md:px-5">
      <div className="w-full">
        <div className="flex w-full flex-col items-stretch text-[80px] font-bold tracking-[-1.6px] justify-center max-md:text-[40px]">
          <h1 className="bg-clip-text bg-[linear-gradient(90deg,var(--1000x-On-Surface,#271813)_22.05%,var(--1000x-Primary,#AA3700)_76.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Privacy Policy
          </h1>
        </div>

        <p className="text-[#5B4138] text-base font-normal leading-6 tracking-[0.5px] mt-6">
          Our policies and limits are designed to ensure a safe and fair
          experience for all users. If you have any questions or need
          clarification about our guidelines, please reach out to our support
          team. We're here to help you understand the rules and make the most of
          our services.
        </p>

        <div className="text-sm text-[#5B4138] font-normal tracking-[0.25px] leading-5 mt-8">
          At TravelStories, our team is a vibrant mix of storytellers and tech
          enthusiasts. We unite passionate travelers, skilled writers, and
          innovative developers to create a platform that brings your adventures
          to life.
        </div>

        <div className="text-[#5B4138] text-sm font-normal leading-5 tracking-[0.25px] mt-8 space-y-8">
          <p>
            Welcome to TravelStories! We are absolutely thrilled to have you
            join our vibrant and diverse community of travelers from all corners
            of the globe. By using our platform, you acknowledge and agree to
            adhere to our terms and conditions, which are crucial for ensuring a
            smooth and enjoyable experience for everyone involved. These
            essential guidelines are meticulously designed to create a safe,
            enjoyable, and enriching atmosphere for every user, whether you are
            a seasoned globetrotter or just starting your journey.
          </p>

          <p>
            We encourage you to take the time to read them thoroughly, as they
            outline your rights and responsibilities while sharing your unique
            travel experiences with fellow adventurers. Understanding these
            guidelines is not just a formality; it is a vital part of fostering
            a respectful and supportive community. Your compliance with these
            terms helps us maintain a welcoming environment for all, where
            everyone can feel comfortable sharing their stories and insights.
          </p>

          <p>
            As you embark on this exciting adventure with us, remember that your
            contributions are what make TravelStories a special place. We value
            the diversity of experiences and perspectives that each member
            brings to the table. So, dive in, explore, and connect with others
            who share your passion for travel. Together, we can create a rich
            tapestry of stories that inspire and inform. Thank you for being a
            part of our community!
          </p>
        </div>

        {/* Additional content sections */}
        <div className="text-[#5B4138] text-sm font-normal leading-5 tracking-[0.25px] mt-8 space-y-8">
          <p>
            Welcome to TravelStories! We are absolutely thrilled to have you
            join our vibrant and diverse community of travelers from all corners
            of the globe. By using our platform, you acknowledge and agree to
            adhere to our terms and conditions, which are crucial for ensuring a
            smooth and enjoyable experience for everyone involved.
          </p>
        </div>

        {/* Add more content to demonstrate scrolling */}
        <div className="text-[#5B4138] text-sm font-normal leading-5 tracking-[0.25px] mt-8 space-y-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};
