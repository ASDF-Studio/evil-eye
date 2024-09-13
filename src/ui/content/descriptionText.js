import { Typography } from "@/components/typography";
import { useRef } from "react";

const DescriptionText = () => {
  const scrollRef = useRef(null);
  return (
    <div className="px-[0px] sm:px-[60px] ">
      <div>
        <div className="pt-[40px]" id="what-is-evil-eye" ref={scrollRef}>
          {/* <Typography variant="h11" classname=" text-color-brand-yellow2">
            What is evil eye
          </Typography> */}
          <h2 className="text-color-brand-yellow2 font-roman text-[22px] font-normal tracking-[-2.2px] uppercase drop-shadow-3xl">
            What is evil eye
          </h2>
        </div>

        <div className="pt-[20px]">
          <Typography
            variant="h13"
            classname=" text-color-brand-yellow2 text-opacity-80"
          >
            The Greek traditional belief of the evil eye dates back to at least
            the 6th century BC, the Classical Antiquity, or the time period that
            encompassed the Classical Era in Ancient Greece, when it commonly
            appeared on drinking vessels. During this time, the Greek
            civilization was at its intellectual peak. A common theme in
            literature at the time was that the eyes were a source of deadly
            rays that could bring harm to others. Plutarch, the Ancient Greek
            writer, is one of those who wrote about this concept. The belief in
            the evil eye tended to spread as Alexander the Great brought the
            Greek culture to the East.
          </Typography>
        </div>
        <div className="pt-[10px]">
          <Typography
            variant="h13"
            classname=" text-color-brand-yellow2 text-opacity-80"
          >
            The evil eye curse is a powerful malicious glance cast by a human on
            another human being, pet or thing out of anger, envy, greed, or any
            other negative emotion. The glare is so powerful that it can cause
            harm, injury, misfortune, physical, and mental illness to the
            afflicted person. There is no particular reason for getting an evil
            eye curse. A person can intentionally or unintentionally cast it on
            someone/something they praise or envy.
          </Typography>
        </div>
      </div>
      <div>
        <div className="pt-[50px] sm:pt-[80px]" id="symptoms" ref={scrollRef}>
          {/* <Typography variant="h11" classname=" text-color-brand-yellow2">
            Symptoms
          </Typography> */}
          <h2 className="text-color-brand-yellow2 font-roman text-[22px] font-normal tracking-[-2.2px] uppercase drop-shadow-3xl">
            Symptoms
          </h2>
        </div>

        <div className="pt-[10px]">
          <Typography
            variant="h13"
            classname=" text-color-brand-yellow2 text-opacity-80"
          >
            Whenever a person gets affected with an evil eye curse, it affects
            them physically, mentally, emotionally, and financially. Here are
            some common signs and symptoms you can find in an afflicted person:
          </Typography>
        </div>

        <div className="pt-[10px]">
          <Typography
            variant="h13"
            classname=" text-color-brand-yellow2 text-opacity-80 text-start"
          >
            <ul className="list-disc pl-6">
              <li>Fever, Headache, Nausea</li>
              <li>Heavy Eyelids and Yawning</li>
              <li>Mood Swings</li>
              <li>Anger & Frustration</li>
              <li>Financial Loss</li>
              <li>Physical Illness</li>
              <li>Arguments with loved ones</li>
              <li>Feeling discomfort in social gatherings</li>
            </ul>
          </Typography>
        </div>
        <div className="pt-[10px]">
          <Typography
            variant="h13"
            classname=" text-color-brand-yellow2 text-opacity-80"
          >
            Pregnant ladies, newborn babies, kids, young and successful people
            are more vulnerable to the evil eye curse as they consciously or
            unconsciously drive more attention and praise from other people.
          </Typography>
        </div>
      </div>
      <div>
        <div id="cure" className="pt-[50px] sm:pt-[80px]">
          {/* <Typography variant="h11" classname=" text-color-brand-yellow2">
            Cure
          </Typography> */}
          <h2 className="text-color-brand-yellow2 font-roman text-[22px] font-normal tracking-[-2.2px] uppercase drop-shadow-3xl">
            Cure
          </h2>
        </div>

        <div className="pt-[10px]">
          <Typography
            variant="h13"
            classname=" text-color-brand-yellow2 text-opacity-80"
          >
            Evil Eye Remedy is the original and authentic cure of its kind.
            Relief from your symptoms is close at hand. The ancient and special
            Evil Eye prayer will be said for you, your loved one, your pet, or
            household item. The act of curing the Evil Eye or ‘mati’ is called
            ‘xematiasma’ in Greece, roughly translating to “an undoing of the
            eye”. It is believed that there are several ways to perform a
            ‘xematiasma’, with the most powerful being with ‘vaskania’ or
            ancient ‘xematiasma’ prayers.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DescriptionText;
