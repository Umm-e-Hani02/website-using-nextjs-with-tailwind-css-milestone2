'use client'

export default function Feedback() {
  const handleFeedbackSubmit = (event:any) => {
    event.preventDefault();
    alert("Thank you for your feedback!");
  };

  return (
    <section className="bg-purple-300">
      <div className="pt-16 p-4 md:p-20">
        <h1 className="text-black text-center font-bold text-3xl pb-10">Feedback</h1>
        <div className="bg-gray-200 lg:w-1/2 shadow-gray-500 shadow-lg m-auto p-7 rounded-xl">
          <h1 className="text-black text-center font-bold text-2xl">We Value Your Feedback!</h1>
          <p className="text-center text-gray-600 mb-7">
            Your feedback helps us improve. Please share your thoughts below.
          </p>
          <form
            action=""
            className="text-black m-auto"
            onSubmit={handleFeedbackSubmit}
          >
            <legend className="font-semibold">Name</legend>
            <input
              type="text"
              placeholder="John Doe"
              className="focus:outline-none focus:ring-2 focus:ring-slate-600 p-2 md:w-[33rem] rounded-lg text-gray-800 mb-5"
              required
            />

            <legend className="font-semibold">Email(Optional)</legend>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="focus:outline-none focus:ring-2 focus:ring-slate-600 p-2 md:w-[33rem] rounded-lg text-gray-800 mb-5"
            />

            <legend className="font-semibold">Rating (1-5)</legend>
            <select
              name="rating"
              id="rating"
              className="md:w-[33rem] text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-600 rounded-lg p-2 mb-5"
              required
            >
              <option value="">Select a rating</option>
              <option value="1">1. Poor</option>
              <option value="2">2. Fair</option>
              <option value="3">3. Good</option>
              <option value="4">4. Very Good</option>
              <option value="5">5. Excellent</option>
            </select>

            <legend className="font-semibold">Comments:</legend>
            <textarea
              name="comments"
              id="comments"
              placeholder="Write your feedback or suggestions here..."
              className="focus:outline-none focus:ring-2 focus:ring-slate-600 p-2 h-32 md:w-[33rem] rounded-lg text-gray-800 mb-5"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-fuchsia-900 text-white p-2 rounded-xl hover:bg-fuchsia-800 active:opacity-5 transition-all"
            >
              Send Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
