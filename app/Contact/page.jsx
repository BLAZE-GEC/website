"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div>
      <div className="container mx-auto w-full ">
        <div className="flex flex-col md:pt-24 pb-8  xl:flex-row gap-[30px]">
          <div className="lg:h-[54%] lg:w-[50%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 bg-base2 bg-opacity-10 rounded-xl p-10">
              <h3 className="md:text-3xl text-xl text-primary">Contact Us</h3>
              <p className="text-primary/60 text-sm md:text-base">
                Ideator, the innovation club at Government Engineering College,
                Thrissur was constituted with the aim of nurturing the element
                of innovation among fellow gec students. The college witnessed
                the most active version of Ideator since its inception.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <div className="flex mx-auto font-semibold ">
                <button className="bg-base1 bg-opacity-50 p-1 rounded-xl px-2">Submit</button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
info
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
