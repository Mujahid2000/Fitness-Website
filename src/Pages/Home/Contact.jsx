import { Button, Label, TextInput, Textarea } from "flowbite-react";

const ContactUS = () => {
  return (
    <div className="mb-6 px-5">
        <h2 className="text-2xl lg:text-5xl text-center font-mono font-bold mt-9 mb-4">Contact Us</h2>
        <hr />
      <div className="flex flex-col lg:flex-row justify-evenly items-center mt-6">
        <div>
          <img
            className="w-[500px]"
            src="https://i.ibb.co/nM4HPwH/contact-1.png"
            alt=""
          />
        </div>
        <div className="w-full bg-gray-100 rounded-xl py-4 px-5 lg:w-[500px]">
          <h2 className="text-2xl font-semibold mb-3 text-center">Leave us a Message</h2>
          <form className="flex w-full flex-col gap-4   py-8 px-5">
            <div className="mb-4">
              <Label htmlFor="username">Your Name</Label>
              <TextInput id="username" placeholder="Bonnie Green" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="comment">Your Message</Label>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
            <Button type="submit"  color="blue">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
