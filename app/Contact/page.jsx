"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <motion.div>
      <div className="container mx-auto w-full ">
        <div className="flex flex-col md:pt-24 pb-8 xl:flex-row gap-[30px]">
          <div className="lg:h-[54%] lg:w-[50%] order-2 xl:order-none">

            {/* ---------- FORM START ---------- */}
            <form
              action="https://formspree.io/f/xldawlwe"
              method="POST"
              className="flex flex-col gap-6 bg-base1 bg-opacity-90 rounded-xl p-10 shadow-lg"
            >
              <h3 className="md:text-3xl text-xl text-black font-bold">Contact Us</h3>

              <p className="text-black text-sm md:text-base font-bold">
                Ideator, the innovation club at Government Engineering College,
                Thrissur was constituted with the aim of nurturing the element
                of innovation among fellow GEC students. The college witnessed
                the most active version of Ideator since its inception.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstName" placeholder="First Name" required />
                <Input type="text" name="lastName" placeholder="Last Name" required />
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="tel" name="phone" placeholder="Phone" required />
              </div>

              <textarea
                name="message"
                placeholder="Your Message..."
                className="w-full h-32 p-3 rounded-xl border border-gray-300"
                required
              ></textarea>

              <div className="flex mx-auto font-semibold w-full">
                <button
                  type="submit"
                  className="bg-white text-black py-1.5 px-3 w-full rounded-xl font-bold shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* ---------- FORM END ---------- */}

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
