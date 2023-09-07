const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-10"
    >
      <div className="flex flex-col  max-w-screen-lg justify-center p-4 mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-700">
            Contact Me
          </p>
          <p className="py-5 text-xl">
            Interested in working together? Let's connect via email or LinkedIn!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/2e72bae1-544b-4119-8726-4fd86efd5034"
            method="POST"
            enctype="multipart/form-data"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              className="p-2 my-4  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              rows="10"
              name="message"
              className="p-2 my-4  bg-transparent border-2 text-white rounded-md focus:outline-none"
              placeholder="Your message here!"
            ></textarea>
            <button className="text-white bg-gradient-to-l from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send message!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
