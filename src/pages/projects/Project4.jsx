import { motion } from "framer-motion";
import header from "../../assets/images/header-mockup.png";
import mockup1 from "../../assets/images/mockup1.png";
import mockup2 from "../../assets/images/mockup2.png";
import mockup3 from "../../assets/images/mockup3.png";
import mockup4 from "../../assets/images/mockup4.png";
import review1 from "../../assets/images/review1.png";
import review2 from "../../assets/images/review2.png";
import review3 from "../../assets/images/review3.png";
import userflow from "../../assets/images/user-flow.png";
import userflowmobile from "../../assets/images/user-flow.png";
import card1 from "../../assets/images/Card1.png";
import card2 from "../../assets/images/Card2.png";
import arrow from "../../assets/images/arrow.svg";
import footerimage from "../../assets/images/footer-p2.png";
import screenbefore1 from "../../assets/images/sb1.png";
import screenbefore2 from "../../assets/images/sb2.png";
import screenbefore3 from "../../assets/images/sb3.png";
import screenbefore4 from "../../assets/images/sb4.png";
import screenbefore5 from "../../assets/images/sb5.png";
import screenafter1 from "../../assets/images/sa1.png";
import screenafter2 from "../../assets/images/sa2.png";
import screenafter3 from "../../assets/images/sa3.png";
import screenafter4 from "../../assets/images/sa4.png";
import screenafter5 from "../../assets/images/sa5.png";
import hdfc from "../../assets/images/hdfc-logo.png";
import polaroidArjun from "../../assets/images/polaroid-Arjun.png";
import polaroidRhea from "../../assets/images/polaroid-Rhea.png";
import Group33844 from "../../assets/images/Group 33844.png";
import Group33883 from "../../assets/images/Group 33883.png";
import Group33887 from "../../assets/images/Group 33887.png";
import Group34066 from "../../assets/images/Group 34066.png";
import Group33888 from "../../assets/images/Group 33888.png";
import BookingScreen from "../../assets/images/Booking Screen.png";
import ChatFoodGuide from "../../assets/images/Chat Food Guide.png";
import HomeScreenDefault from "../../assets/images/Home Screen Default.png";
import LaVerona from "../../assets/images/La Verona.png";
import ProfileScreen from "../../assets/images/Profile Screen.png";
import RahulBhatt from "../../assets/images/Rahul Bhatt.png";
import RatingScreen from "../../assets/images/Rating Screen.png";
import WelcomeScreen from "../../assets/images/Welcome Screen.png";
const Project4 = () => {
  return (
    <div className="bg-white font-inter">
      <nav
        className="sticky top-0 z-50 p-4 md:p-6 font-inter text-[#040404]
     md:px-14 lg:px-24 2xl:px-32 bg-[#F0F0F0] shadow-lg"
      >
        <div className="flex items-center space-x-[2rem] md:space-x-[5rem]">
          <a
            href="/"
            className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
          >
            Home
          </a>
          <a
            href="/Pragati-CreativeDesigner-Resume.pdf"
            target="_blank"
            className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
          >
            Resume
          </a>
          <a
            href="/#talk"
            className="text-[#040404] text-md md:text-lg transition-colors hover:text-[#6d6d6d]"
          >
            Let's Talk
          </a>
        </div>
      </nav>
      <section className="pb-10 2xl:pb-0 items-center justify-center pt-12 px-4 text-060709 bg-[#FBF7F1] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32">
        <div className="grid grid-cols-1 h-fit md:grid-cols-6">
          <div className="flex flex-col col-span-4 gap-6">
            <h1 className="top-mar lg:mt-5 xl:mt-10 2xl:mt-20 text-3xl lg:text-4xl xl:text-[45px] 2xl:text-[52px] font-bold xl:leading-[5rem] lg:leading-[4rem] font-hiragino">
              <span className="text-[#FF6B35] inline-block xl:leading-[5rem] lg:leading-[4rem] ">
                Crave:&nbsp;
              </span>
              <span className="inline-block  xl:leading-[5rem] lg:leading-[4rem] l">
                The Human Way&nbsp;
              </span>
              <span className="inline-block  xl:leading-[5rem] lg:leading-[4rem] l">
                to Discover Food
              </span>
            </h1>
            <h2 className="text-lg font-semibold md:text-xl xl:text-2xl font-inter">
              Real food recommendations from real people.
            </h2>
            <p className="text-md lg:text-xl font-inter 2xl:mr-28">
              Crave is a food concierge app that helps users discover places to
              eat based on how they feel and where they are. Instead of
              scrolling through ratings and reviews, users connect with real
              food enthusiasts who offer personalized, mood-based suggestions,
              and can even join you for the meal. <br />
              This case study explores how Crave was designed to turn food
              discovery into a social, human-first experience.
            </p>
          </div>
          <div className="col-span-2">
            <img className="pt-10 md:py-0" src={header} alt="" />
          </div>
        </div>
      </section>
      <div
        className="xl:mt-[-9rem] flex flex-col md:flex-row gap-2 md:gap-0 items-center space-x-[0] md:space-x-[3rem] lg:space-x-[3.5rem] 2xl:space-x-[5rem] p-4 md:px-14 lg:px-24 2xl:px-32 font-inter
      bg-[linear-gradient(to_right,rgba(231,64,235,0.15)_0%,rgba(59,25,156,0.15)_100%)] shadow-2xs"
      >
        <a
          href="#overviewp2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Overview (TL;DR)
        </a>
        <a
          href="#problemp2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Problem & Goal
        </a>
        <a
          href="#approachp2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          My Approach
        </a>
        <a
          href="#outcomep2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Outcome
        </a>
        <a
          href="#outcomep2"
          className="text-[#040404] text-md lg:text-lg transition-colors hover:text-[#6d6d6d]"
        >
          Aftermath
        </a>
      </div>
      <section
        id="overviewp2"
        className="items-center justify-center lg:pt-12 px-4 text-060709 bg-[#FFFFFF] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32"
      >
        <div className="grid grid-cols-12 h-fit">
          <div className="col-span-12 md:col-span-8">
            <p className="py-10 text-lg font-semibold md:text-xl xl:text-2xl font-inter">
              HDFC's mobile app is cluttered and hard to navigate for everyday
              users. This redesign focused on simplifying operations that are
              frequently carried out, like checking balances, sending money, and
              paying bills.
              <br />
              <br />
              The result is a cleaner, faster, and more intuitive experience for
              users of all tech levels.
            </p>
            <span className="text-lg md:text-xl xl:text-2xl font-semibold  font-inter text-[#003397]">
              Project Overview:
            </span>
            <ul className="pt-4 pl-8 list-disc">
              <li className="text-lg md:text-xl xl:text-2xl">
                <span className="font-bold">Problem:</span> Overwhelming UI and
                long user journeys
              </li>
              <li className="text-lg md:text-xl xl:text-2xl">
                <span className="font-bold ">Goal:</span> Make core tasks easier
                and faster
              </li>
              <li className="text-lg md:text-xl xl:text-2xl">
                <span className="font-bold">Outcome:</span> A streamlined,
                user-friendly app with smart shortcuts and improved
                accessibility
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 pt-20 md:gap-10 lg:gap-5 2xl:gap-0">
          <div className="flex items-center justify-center col-span-12 md:col-span-3">
            <img className="" src={mockup1} alt="" />
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-3">
            <img src={mockup2} alt="" />
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-3">
            <img src={mockup3} alt="" />
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-3">
            <img src={mockup4} alt="" />
          </div>
        </div>
      </section>
      <section
        id="problemp2"
        className=" pt-12 px-4 text-060709 bg-[#FFF9EF9E] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32 pb-10"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-[#FF6B35] text-2xl">Problem Statement</p>
            <p>
              Current food apps are built to satisfy hunger, not curiosity or
              the mood. They lack a human element, offering endless lists,
              ratings, and filters but no way to properly connect with real
              people who understand food deeply. For users seeking authentic,
              mood-based guidance or food conversations, there’s no platform to
              meet and talk to like-minded food enthusiasts.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#FF6B35] text-2xl">Goal</p>
            <p>
              To design a human-first food concierge app that helps users
              connect with real food enthusiasts, enabling meaningful
              conversations, personalized recommendations, and mood-based food
              discovery beyond ratings and algorithms.
            </p>
          </div>
        </div>
      </section>
      <section
        id="approachp2"
        className="flex flex-col gap-3 pt-12 px-4 text-060709 bg-[#ffffff] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32 pb-10"
      >
        <p className="text-[#FF6B35] text-2xl">Research</p>
        <p>
          Current food apps are built to satisfy hunger, not curiosity or the
          mood. They lack a human element, offering endless lists, ratings, and
          filters but no way to properly connect with real people who understand
          food deeply. For users seeking authentic, mood-based guidance or food
          conversations, there’s no platform to meet and talk to like-minded
          food enthusiasts.
        </p>
        <div class="overflow-x-auto">
          <table class="w-full mt-5  mx-auto border border-gray-300 border-collapse text-center text-md">
            <thead>
              <tr class="bg-[#14182E] text-white">
                <th class="border border-gray-300 px-3 py-3 font-semibold">
                  Platform
                </th>
                <th class="border border-gray-300 px-3 py-3 font-semibold">
                  Key Offerings
                </th>
                <th class="border border-gray-300 px-3 py-3 font-semibold">
                  Gaps Identified
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr>
                <td class="border border-gray-300 px-3 py-3">Zomato</td>
                <td class="border border-gray-300 px-3 py-3">
                  Ratings, menus, dine-in/delivery options
                </td>
                <td class="border border-gray-300 px-3 py-3">
                  No personalized or conversation-based discovery
                </td>
              </tr>

              <tr>
                <td class="border border-gray-300 px-3 py-3">Google Maps</td>
                <td class="border border-gray-300 px-3 py-3">
                  Crowdsourced reviews and location data
                </td>
                <td class="border border-gray-300 px-3 py-3">
                  Too broad, not curated for food experiences
                </td>
              </tr>

              <tr>
                <td class="border border-gray-300 px-3 py-3">TripAdvisor</td>
                <td class="border border-gray-300 px-3 py-3">
                  Travel-friendly food lists and tourist recs
                </td>
                <td class="border border-gray-300 px-3 py-3">
                  Generic, lacks personal context or social trust
                </td>
              </tr>

              <tr>
                <td class="border border-gray-300 px-3 py-3">
                  Airbnb Experiences
                </td>
                <td class="border border-gray-300 px-3 py-3">
                  Local hosts and food events
                </td>
                <td class="border border-gray-300 px-3 py-3">
                  Not scalable, focused on premium, pre-planned outings
                </td>
              </tr>

              <tr>
                <td class="border border-gray-300 px-3 py-3">EatWith</td>
                <td class="border border-gray-300 px-3 py-3">
                  Home dining and curated meals with locals
                </td>
                <td class="border border-gray-300 px-3 py-3">
                  Limited access, expensive, not designed for spontaneous
                  discovery
                </td>
              </tr>

              <tr>
                <td class="border border-gray-300 px-3 py-2">Swiggy Dineout</td>
                <td class="border border-gray-300 px-3 py-2">
                  Restaurant offers, table bookings, reviews
                </td>
                <td class="border border-gray-300 px-3 py-2">
                  Deal-driven, lacks emotional or conversational food matching
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex flex-col gap-3">
            <p className="text-[#FF6B35] text-2xl">Key Insights</p>
            <p>
              None of these apps allow users to talk to real food lovers based
              on mood, vibe, or social comfort. Crave introduces a
              conversation-first approach, turning food discovery into a shared
              human experience.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#FF6B35] text-2xl">Personas & User Needs</p>
            <p>
              To design with empathy and clarity, I created two personas based
              on real-world behaviors and gaps observed during research. Each
              represents a distinct use case that Crave solves
            </p>
          </div>
        </div>
      </section>
      <section
        id="outcomep2"
        className="pt-24 px-4 text-[#060709]  xl:min-h-fit md:px-14 lg:px-24 2xl:px-32 flex flex-col"
      >
        <div className="flex  gap-16">
          <div className="flex flex-col border-2 border-[#FF6B35] p-4 rounded-3xl bg-[#FCF8F2]">
            <div className="flex gap-4">
              <img
                className="-mt-[100px] -ml-[70px]"
                src={polaroidArjun}
                alt="polaroid of arjun"
              />
              <div className="text-sm text-gray-800 space-y-1">
                <p>
                  <span className="font-semibold">Age:</span> 35
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Mumbai
                  (frequent traveler)
                </p>
                <p>
                  <span className="font-semibold">Occupation:</span> Sales
                  Manager
                </p>
                <p>
                  <span className="font-semibold">Tech Comfort:</span> Moderate
                </p>
                <p>
                  <span className="font-semibold">Social Preference:</span>
                  Prefers guidance when eating <br></br>alone on work trips
                </p>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="flex items-center gap-2 text-orange-500 font-semibold  text-xl">
                <span className="text-5xl">❝</span>
                Goals
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-2 ml-5">
                <li>Quickly find great local places when in a new city</li>
                <li>
                  Talk to someone who knows the food scene so as to not depend
                  on hotel staff
                </li>
                <li>Possibly get company for dinner when traveling solo</li>
              </ul>
            </div>
            <div className="mt-2">
              <h3 className="flex items-center gap-2 text-orange-500 font-semibold  text-xl">
                <span className="text-5xl">❝</span>
                Frustrations
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-2 ml-5">
                <li>Feels overwhelmed by too many options with no contex</li>
                <li>Doesn’t trust app reviews for hidden gems</li>
                <li>
                  Solo dining feels isolating and awkward in unfamiliar places
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col border-2 border-[#FF6B35] p-4 rounded-3xl bg-[#FCF8F2]">
            <div className="flex gap-4">
              <img
                className="-mt-[100px] -ml-[70px]"
                src={polaroidRhea}
                alt="polaroid of Rhea"
              />
              <div className="text-sm text-gray-800 space-y-1">
                <p>
                  <span className="font-semibold">Age:</span> 24
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Bangalore
                </p>
                <p>
                  <span className="font-semibold">Occupation:</span> UX Designer
                </p>
                <p>
                  <span className="font-semibold">Tech Comfort:</span> High
                </p>
                <p>
                  <span className="font-semibold">Social Preference:</span>{" "}
                  Loves trying new <br></br>places but often solo
                </p>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="flex items-center gap-2 text-orange-500 font-semibold  text-xl">
                <span className="text-5xl">❝</span>
                Goals
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-2 ml-5">
                <li>Discover unique, mood-based food spots</li>
                <li>Talk to someone who gets the vibe before committing</li>
                <li>
                  Occasionally find someone to share the food experience with
                </li>
              </ul>
            </div>
            <div className="mt-2">
              <h3 className="flex items-center gap-2 text-orange-500 font-semibold  text-xl">
                <span className="text-5xl">❝</span>
                Frustrations
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-2 ml-5">
                <li>Too many generic suggestions on food apps</li>
                <li>Hates scrolling endlessly through reviews</li>
                <li>
                  Doesn’t always want to go alone, but doesn’t want to ask
                  friends either
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h3 className="text-orange-500 font-semibold text-2xl mb-4">
                Primary Goals
              </h3>

              <ul className="list-disc list-inside  text-gray-900 space-y-4 text-md">
                <li>
                  <span className="font-semibold">
                    Facilitate mood-based food discovery:
                  </span>{" "}
                  Let users find food based on how they feel instead of focusing
                  on location or ratings alone.
                </li>

                <li>
                  <span className="font-semibold">
                    Enable real human connections:
                  </span>{" "}
                  Allow users to chat, call, or meet food enthusiasts for
                  authentic, personalized suggestions.
                </li>

                <li>
                  <span className="font-semibold">
                    Build trust through credibility and conversation:
                  </span>{" "}
                  Use badges, feedback, and transparent profiles to ensure
                  quality recommendations.
                </li>

                <li>
                  <span className="font-semibold">
                    Make dining feel social, not transactional:
                  </span>{" "}
                  Support companionship options to reduce the isolation of solo
                  dining.
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4 text-2xl">
                Success Metrics
              </h3>

              <ul className="list-disc list-inside  text-gray-900 space-y-4 text-md">
                <li>
                  <span className="font-semibold">80%</span> of users find a
                  recommendation within{" "}
                  <span className="font-semibold">3 interactions</span> (chat,
                  call, or mood filter).
                </li>

                <li>
                  <span className="font-semibold">60%</span> of first-time users
                  complete mood selection and receive at least{" "}
                  <span className="font-semibold">one recommendation</span>.
                </li>

                <li>
                  Positive trust ratings{" "}
                  <span className="font-semibold">(4.5+/5)</span> for verified
                  foodies with active badges.
                </li>

                <li>
                  <span className="font-semibold">&gt;40%</span> of users save
                  or bookmark suggestions for future visits.
                </li>

                <li>
                  At least <span className="font-semibold">1 in 4 users</span>{" "}
                  explore the “hire for company” feature within first{" "}
                  <span className="font-semibold">3 sessions</span>.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mt-16 gap-8">
            <p className="text-2xl font-bold">Thus POA (Plan Of Action): </p>
            <img
              src={Group33844}
              alt="plan of action"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-16 gap-8">
            <p className="text-2xl text-[#FF6B35]">User Flow</p>
            <img src={Group33883} alt="user flow" className="w-full h-auto" />
          </div>
        </div>
      </section>
      <section
        id="aftermathp2"
        className="flex flex-col px-24 bg-[#FFFFFF] py-8"
      >
        <div className="flex flex-col gap-3">
          <p className="text-[#FF6B35] text-2xl">UI (Visual Design)</p>
          <p>
            The visual identity of Crave began with the logo: a clean, modern
            wordmark that feels as vibrant and human as the app's purpose. I
            chose orange as the primary brand color to evoke energy, warmth, and
            appetite, supported by subtle accents to keep the interface lively
            yet approachable.
          </p>
          <p>
            From typography to screen layouts, every visual decision focused on
            maintaining a playful yet polished tone. The interface was designed
            to guide users intuitively, with friendly illustrations, smooth
            navigation, and a consistent design language that reflects the app’s
            mission: connecting people through food, and satisfying cravings.
          </p>
        </div>
        <div className="flex justify-center mt-12 gap-8">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="px-5 py-2 border-2 rounded-3xl border-[#FF6B35] text-[#FF6B35] font-semibold">
              logo
            </div>
            <img src={Group33887} alt="logo" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="px-5 py-2 border-2 rounded-3xl border-[#FF6B35] text-[#FF6B35] font-semibold">
              Colour Palette
            </div>
            <img src={Group33888} alt="logo" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="px-5 py-2 border-2 rounded-3xl border-[#FF6B35] text-[#FF6B35] font-semibold">
              Typography
            </div>
            <img src={Group34066} alt="logo" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-12 ">
          <div className="px-5 py-2 border-2 rounded-3xl border-[#FF6B35] text-[#FF6B35] font-semibold mb-12">
            UI Screens
          </div>
          <div className="flex gap-12 flex-wrap justify-center items-center">
            <img
              className="shadow-md"
              src={WelcomeScreen}
              alt="Welcome Screen"
            />
            <img
              className="shadow-md"
              src={HomeScreenDefault}
              alt="Home Screen Default"
            />
            <img className="shadow-md" src={RahulBhatt} alt="Rahul Bhatt" />
            <img className="shadow-md" src={LaVerona} alt="La Verona" />
            <img
              className="shadow-md"
              src={BookingScreen}
              alt="Booking Screen"
            />
            <img
              className="shadow-md"
              src={ChatFoodGuide}
              alt="Chat Food Guide"
            />
            <img
              className="shadow-md"
              src={ProfileScreen}
              alt="Profile Screen"
            />
            <img className="shadow-md" src={RatingScreen} alt="Rating Screen" />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-12">
          <p className="text-[#FF6B35] text-2xl">User Testing</p>
          <p>
            To evaluate the usability and relevance of Crave, I conducted a
            moderated user testing round with 5 participants. Participants were
            asked to navigate the prototype and respond to a feedback form
            focusing on usability, visual appeal, and feature clarity
          </p>
          <p className="text-2xl font-bold">View Resources:</p>
          <div className="flex justify-start items-center gap-8">
            <div className="font-[Convergence] px-5 py-2 bg-black rounded-3xl text-white flex items-center gap-2 cursor-pointer text-lg">
              Prototype <span className="text-xl"> →</span>
            </div>
            <div className="font-[Convergence] px-5 py-2 bg-black rounded-3xl text-white flex items-center gap-2 cursor-pointer text-lg">
              Feedback Form <span className="text-xl"> →</span>
            </div>
            <div className="font-[Convergence] px-5 py-2 bg-black rounded-3xl text-white flex items-center gap-2 cursor-pointer text-lg">
              Form Responses <span className="text-xl"> →</span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-6 px-4 mt-2 py-8 bg-[#FFF9EF9E] xl:min-h-fit md:px-14 lg:px-24 2xl:px-32 sm:px-8">
        <p className="text-[#FF6B35] text-2xl">Results and Impact</p>
        <ul class="list-disc space-y-3 pl-5 text-gray-800">
          <li>
            <span class="font-semibold">91.7%</span> of users said the app felt
            intuitive and easy to use.
          </li>

          <li>
            The <span class="font-semibold">mood-based food discovery</span>{" "}
            feature was most appreciated — multiple users said it “felt
            personal” and “relevant.”
          </li>

          <li>
            Minor feedback on{" "}
            <span class="font-semibold">simplifying navigation</span> and
            <span class="font-semibold">improving tag clarity</span> was noted
            for future updates.
          </li>

          <li>
            Based on testing, we validated the core concept: people are
            <span class="font-semibold">excited</span> to connect with foodies
            for
            <span class="font-semibold">tailored recommendations</span>.
          </li>

          <li>
            This round of testing helped prioritize a few UX improvements for
            the next phase.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project4;
