function Tips() {
  return (
    <section id="free-tips" className="bg-black py-20 lg:py-28">
      <div className="mx-auto min-h-[600] max-w-7xl space-y-5 px-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <h1 className="text-3xl font-bold">Get Your first tip today</h1>

          <p>
            It takes 30 seconds to sign up. Download the app and create an
            account today and we’ll send you a tip guaranteed to double your
            first investment.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="flex items-center justify-center space-x-4 rounded-lg border border-gray-600  px-3 py-1">
            <img src="/play.png" className="w-5" />
            <div className="flex flex-col items-start">
              <p className="text-xs text-white">Get on</p>
              <p className="text-sm font-bold text-white">Google Play</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tips;
