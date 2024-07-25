import React from "react";
// import {
//   faFacebookF,
//   faLinkedinIn,
//   faTwitter,
//   faBehance,
//   IconDefinition,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Image from "next/image";

const teamMembers = [
  {
    picture: "/Bhanu.png",
    fullName: "Aakash Bagale",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Nischit Bhandari",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Safal Paudel",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Aarya Hamal",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Shreeya Adhikari",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Shakti KC",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Shreya Kadayat",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Dipshan Sharma",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Shreetej Ratna Tuladhar",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Bikash Bhandari",
  },
];

const mentors = [
  {
    picture: "/Bhanu.png",
    fullName: "Binayak Jha",
    designation: "Mentor ",
  },
  {
    picture: "/Bhanu.png",
    fullName: "Manish Acharya",
    designation: "Mentor",
  },
];

const TeamMemberItem = ({
  member,
}: {
  member: {
    picture: string;
    fullName: string;
  };
}) => (
  <div className=" flex justify-center items-center flex-col ">
    <img
      src={member.picture}
      alt={member.fullName}
      className="max-w-full h-auto rounded-full mx-auto  sm:w-[100px] w-[90px] border-2 border-sky-300"
      width=""
    />
    <div className="px-4 py-4 xl:px-6">
      <h4 className="text-[1rem]  text-center font-poppins">
        {member.fullName}
      </h4>
    </div>
  </div>
);

const MentorItem = ({
  member,
}: {
  member: {
    picture: string;
    fullName: string;
    designation: string;
  };
}) => (
  <div className=" flex justify-center items-center flex-col ">
    <img
      src={member.picture}
      alt={member.fullName}
      className="max-w-full h-auto rounded-full mx-auto lg:w-[130px] sm:w-[110px] w-[100px] border-2 border-sky-300"
      width=""
    />
    <div className="px-4 py-6 xl:px-6">
      <h4 className="text-2xl text-center max-md:text-xl font-poppins mb-1 max-sm:mb-0">
        {member.fullName}
      </h4>
      <h6 className="font-medium">{member.designation}</h6>
    </div>
  </div>
);

export default function Team() {
  return (
    <section className="md:py-10 text-white " id="team">
      <div className="container px-4 mx-auto ">
        <div className="flex justify-center  mb-6 md:mb-12">
          <div className="sm:max-w-md text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-none font-bold mb-7 font-poppins">
              Meet our Team
            </h2>
          </div>
        </div>
        <div className="flex justify-center gap-20 max-sm:gap-10 text-center mt-10 max-sm:mt-5">
          {mentors.map((mentor, i) => (
            <div key={i}>
              <MentorItem member={mentor} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 max-xl:grid-cols-4 xl:gap-6 lg:gap-4 gap-2 text-center mt-20 max-sm:mt-10">
          {teamMembers.map((member, i) => (
            <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
